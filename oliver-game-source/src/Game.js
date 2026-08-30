import * as THREE from 'three'
import { BLOCK_DB } from './world/BlockRegistry.js'
import { WorldData } from './world/WorldData.js'
import { WorldRenderer } from './world/WorldRenderer.js'
import { buildIsland } from './world/WorldBuilder.js'
import { ensurePortalAt, ensureNetherChunk } from './world/NetherWorldBuilder.js'
import { WORLD_W, WORLD_D, CHUNK_W } from './constants.js'
import { PlayerStats } from './player/PlayerStats.js'
import { Inventory } from './player/Inventory.js'
import { PlayerController } from './player/PlayerController.js'
import { ItemRegistry } from './crafting/ItemRegistry.js'
import { RecipeRegistry } from './crafting/RecipeRegistry.js'
import { MiningSystem } from './mining/MiningSystem.js'
import { FarmingSystem } from './farming/FarmingSystem.js'
import { DayNightCycle } from './systems/DayNightCycle.js'
import { MobSpawner } from './mobs/MobSpawner.js'
import { PassiveSpawner } from './mobs/PassiveSpawner.js'
import { BossCave } from './bosses/BossCave.js'
import { sounds } from './systems/SoundSystem.js'
import { BossSwamp } from './bosses/BossSwamp.js'
import { BossMountain } from './bosses/BossMountain.js'
import { FinalBoss } from './bosses/FinalBoss.js'
import { HUD } from './ui/HUD.js'
import { Hotbar } from './ui/Hotbar.js'
import { InventoryUI } from './ui/InventoryUI.js'
import { Minimap } from './ui/Minimap.js'
import { CraftingUI } from './crafting/CraftingUI.js'
import { DroppedItemManager } from './items/DroppedItemManager.js'
import { SeaLifeSpawner } from './mobs/SeaLifeSpawner.js'
import { SaveSystem } from './save/SaveSystem.js'
import { ChestSystem } from './world/ChestSystem.js'
import { QuestSystem } from './ui/QuestSystem.js'

const STATE = { MENU: 'menu', PLAYING: 'playing', PAUSED: 'paused', DEAD: 'dead', WIN: 'win' }

export class Game {
  constructor(renderer) {
    this.renderer = renderer
    this.state = STATE.MENU
    this.killedBosses = new Set()
    this.activeBoss = null

    // Scene
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0.5, 0.7, 1.0)
    this.scene.fog = new THREE.FogExp2(0x99bbff, 0.007)

    // Camera
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 220)

    // Lighting
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    this.scene.add(this.ambientLight)
    this.dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
    this.dirLight.position.set(30, 30, 15)
    this.dirLight.castShadow = true
    // The shadow camera's frustum defaults to a tiny +/-5 box anchored at
    // the origin — across a 768x768 world that means real shadows only
    // ever rendered in one corner of the map, nowhere near the player.
    // Size it to a sensible radius and re-center it on the player every
    // frame instead (see _updateSunFollow).
    this.dirLight.shadow.mapSize.set(2048, 2048)
    this.dirLight.shadow.camera.near = 1
    this.dirLight.shadow.camera.far = 110
    this.dirLight.shadow.camera.left = -45
    this.dirLight.shadow.camera.right = 45
    this.dirLight.shadow.camera.top = 45
    this.dirLight.shadow.camera.bottom = -45
    this.dirLight.shadow.bias = -0.0015
    this.dirLight.target = new THREE.Object3D()
    this.scene.add(this.dirLight.target)
    this.scene.add(this.dirLight)

    // Core registries
    this.itemRegistry = new ItemRegistry()
    this.recipeRegistry = new RecipeRegistry()

    // World
    this.worldData = new WorldData()
    buildIsland(this.worldData)

    // Atlas texture — generate procedurally from block colors
    const atlasTex = this._generateAtlas()
    this._atlasTex = atlasTex   // kept around to build the Nether's renderer lazily

    this.worldRenderer = new WorldRenderer(this.scene, this.worldData, atlasTex)
    this.worldRenderer.streamAround(WORLD_W / 2, WORLD_D / 2, 200)

    // Dimensions — the Nether shares the overworld's exact size and a 1:1
    // coordinate mapping with it (see NetherWorldBuilder.js), and is only
    // generated the first time a portal is used.
    this.currentDimension = 'overworld'
    this.overworldData = this.worldData
    this.overworldRenderer = this.worldRenderer
    this.netherData = null
    this.netherRenderer = null

    // Player systems
    this.stats = new PlayerStats()
    this.inventory = new Inventory()
    this.stats.linkArmorSource(this.inventory, this.itemRegistry)

    // UI
    this.hud = new HUD()
    this.minimap = new Minimap(this.worldData)
    this.hotbar = new Hotbar(this.inventory, this.itemRegistry)

    // Farming
    this.farmingSystem = new FarmingSystem(this.worldData, this.scene)

    // Mining
    this.miningSystem = new MiningSystem(
      this.worldData, this.worldRenderer, this.inventory, this.stats, this.itemRegistry
    )
    this.miningSystem.onPickup = (name) => this.hud.showPickup(name)
    this.miningSystem.onOverflow = (id, n) => this._dropNearPlayer(id, n)
    this.miningSystem.onBroke = (block, dropId) => this.quests.noteMine(dropId, block.dropCount ?? 1)
    this.miningSystem.removeCropAt = (pos) => this.farmingSystem.removeCropAt(pos)
    this.miningSystem.isOccupied = (x, y, z) => this.player.occupies(x, y, z)
    this.farmingSystem.onPlant = (id) => this.quests.notePlant(id)

    this.chests = new ChestSystem()
    this.quests = new QuestSystem()
    this.spawnPoint = null
    this._playReady = false
    this._oinkTimer = 0

    // Player controller
    this.player = new PlayerController(
      this.camera, renderer, this.worldData, this.worldRenderer,
      this.stats, this.inventory, this.miningSystem, this.farmingSystem,
      this.hotbar, this.hud, this.itemRegistry
    )
    this.player.scene = this.scene
    this.player.getDimension = () => this.currentDimension
    this.player.onOverflow = (id, n) => this._dropNearPlayer(id, n)
    this.player.onOpenChest = (x, y, z) => this._openChest(x, y, z)
    this.player.onSetSpawn = (pos) => {
      this.spawnPoint = { ...pos, dim: this.currentDimension }
      this._showMsg('Home set. You will wake up here.')
    }

    // Inventory + crafting UI
    this.inventoryUI = new InventoryUI(this.inventory, this.itemRegistry)
    this.craftingUI = new CraftingUI(
      this.inventory, this.itemRegistry, this.recipeRegistry,
      () => this.player.currentStation,
      () => this.stats.tier,
      this.killedBosses
    )
    this.craftingUI.onCraft = (recipe) => {
      const item = this.itemRegistry.getItem(recipe.resultItem)
      if (item) this.stats.updateTier(item)
      if (recipe.resultItem === 'summoning_stone') {
        this._showMsg('Summoning Stone crafted! Use it at the Altar in the swamp.')
      }
    }

    // Day/night
    this.dayNight = new DayNightCycle(this.scene, this.ambientLight, this.dirLight)
    this.dayNight.onNightBegin = () => {
      this.mobSpawner.setNight(true)
      this.passiveSpawner.setNight(true)
      this._showMsg('Night falls... they are coming.')
    }
    this.dayNight.onDayBegin = (day) => {
      this.mobSpawner.setNight(false)
      this.passiveSpawner.setNight(false)
      this.hud.updateDay(day)
    }

    // Mob spawner (hostile, night only)
    this.mobSpawner = new MobSpawner(
      this.scene, this.worldData, this.player, this.inventory, this.itemRegistry
    )
    this.mobSpawner.onMobDeath = (mob) => {
      this.hud.showPickup(`${mob.mobType.name} slain!`)
    }

    // Passive spawner (daytime animals) — a companion pig spawns near the
    // player and every pig follows them around (see PassiveSpawner.js)
    this.passiveSpawner = new PassiveSpawner(
      this.scene, this.worldData, this.inventory, this.itemRegistry, this.player
    )
    this.passiveSpawner.onCompanionDeath = () => {
      for (const drop of this.inventory.drainPigSlots()) {
        this._dropNearPlayer(drop.itemId, drop.count)
      }
      this._showMsg('Hammy... you will be missed.')
    }

    // Sea life — fish and sharks confined to the ocean biome (see WorldBuilder's
    // _addOceanBiome and SeaLifeSpawner.js)
    this.seaLife = new SeaLifeSpawner(
      this.scene, this.worldData, this.inventory, this.itemRegistry, this.player
    )

    // Dropped items — Q drops the held item as a walk-over pickup
    this.droppedItems = new DroppedItemManager(this.scene, this.inventory, this.itemRegistry)
    this.player.onDropItem = (itemId, count, pos) => this.droppedItems.spawn(itemId, count, pos)

    // Attack listener — includes all active bosses and passive mobs
    this.player.setupAttackListener(() => [
      ...this.mobSpawner.getMobs(),
      ...this.passiveSpawner.getMobs(),
      ...this.seaLife.getMobs(),
      ...(this._activeBossList ?? []).filter(b => !b.dead)
    ])

    // Player death
    this.stats.onDeath = () => this._onPlayerDeath()
    this.stats.onChange = () => {
      this.hud.updateHealth(this.stats.health, this.stats.maxHealth)
      this.hud.updateHunger(this.stats.hunger, this.stats.maxHunger)
    }

    // Altar interaction
    this.player.onUseAltarWithStone = () => {
      if ([...this.killedBosses].filter(b =>
        ['cave_troll','swamp_witch','stone_golem'].includes(b)).length < 3) {
        this._showMsg('You must defeat all three guardians first!')
        return
      }
      this._spawnFinalBoss()
    }

    // Bed interaction — sleep through the night on demand
    this.player.onSleepInBed = () => {
      if (!this.dayNight.isNight) {
        this._showMsg("You can only sleep at night.")
        return
      }
      // Jump straight to dawn. The normal dayNight.update() loop picks up
      // the night->day transition on its next tick and fires onDayBegin,
      // which already handles despawning night mobs and updating the HUD —
      // reusing that instead of duplicating it here.
      this.dayNight.timeOfDay = 0.05
      this._showMsg('You sleep through the night...')
      this.saveSystem.save()
    }

    // Nether portal interaction
    this.player.onUsePortal = () => this._usePortal()

    this.quests.onComplete = (q) => {
      for (const [id, n] of Object.entries(q.reward ?? {})) this._giveOrDrop(id, n)
      this._showMsg(`Quest complete: ${q.name}!`)
      this.hud.refreshQuests(this.quests)
    }

    // Save system
    this.saveSystem = new SaveSystem({
      worldData: this.overworldData,
      inventory: this.inventory,
      playerStats: this.stats,
      dayNight: this.dayNight,
      killedBosses: this.killedBosses,
      getPlayerPos: () => this.camera.position,
      getState: () => ({
        spawnPoint: this.spawnPoint,
        chests: this.chests.serialize(),
        crops: this.farmingSystem.serialize(),
        quests: this.quests.serialize(),
        currentDimension: this.currentDimension,
      }),
    })

    // Key bindings for UI overlays
    this._setupUIKeys()
    this._setupMenuButtons()

    // Auto-save every 60 seconds
    this._saveTimer = 0
  }

  _setupMenuButtons() {
    // Difficulty buttons — each starts a new game at the chosen level
    for (const diff of ['easy', 'normal', 'hard']) {
      const btn = document.getElementById(`btn-${diff}`)
      if (btn) btn.addEventListener('click', () => {
        this.saveSystem.clear()
        this._startNewGame(diff)
      })
    }
    const contBtn = document.getElementById('btn-continue')
    if (this.saveSystem.hasSave()) {
      contBtn.style.display = 'block'
      contBtn.addEventListener('click', () => this._loadGame())
    }
    document.getElementById('btn-restart').addEventListener('click', () => {
      this.saveSystem.clear()
      location.reload()
    })
    document.getElementById('btn-resume')?.addEventListener('click', () => this._resume())
    document.getElementById('btn-save-quit')?.addEventListener('click', () => {
      this.saveSystem.save()
      location.reload()
    })
    document.getElementById('vol-slider')?.addEventListener('input', (e) => {
      sounds.setVolume(Number(e.target.value) / 100)
    })
    document.getElementById('vol-toggle')?.addEventListener('click', () => {
      const on = sounds.toggleMute()
      document.getElementById('vol-toggle').textContent = on ? '🔊' : '🔇'
    })
  }

  _startNewGame(difficulty = 'normal') {
    this.killedBosses.clear()
    this.stats.setDifficulty(difficulty)
    document.getElementById('menu-screen').style.display = 'none'
    this.state = STATE.PLAYING
    this._enterPlayMode()
  }

  _loadGame() {
    const data = this.saveSystem.load()
    if (!data) { this._startNewGame(); return }
    this.worldRenderer.disposeAll()
    const applied = this.saveSystem.apply(data, this.player)
    this.chests.deserialize(applied?.chests ?? data.chests)
    this.farmingSystem.deserialize(applied?.crops ?? data.crops)
    this.quests.deserialize(applied?.quests ?? data.quests)
    this.spawnPoint = data.spawnPoint ?? null
    this.worldRenderer.streamAround(this.camera.position.x, this.camera.position.z, 200)
    document.getElementById('menu-screen').style.display = 'none'
    this.state = STATE.PLAYING
    this._enterPlayMode({ isLoad: true })
  }

  _enterPlayMode({ isLoad = false } = {}) {
    sounds.startMusic()
    this.hud.show()
    this.hotbar.show()
    this.hud.updateDay(this.dayNight.dayNumber)
    this.hud.updateHealth(this.stats.health, this.stats.maxHealth)
    this.hud.updateHunger(this.stats.hunger, this.stats.maxHunger)
    this.hotbar.refresh()
    this.hud.refreshQuests(this.quests)

    if (!isLoad && this.inventory.countOf('wood_log') === 0) {
      this.inventory.add('wood_log', 8, this.itemRegistry)
      this.inventory.add('planks', 8, this.itemRegistry)
      this.inventory.add('stick', 4, this.itemRegistry)
      this.inventory.add('wooden_axe', 1, this.itemRegistry)
      this.inventory.add('wooden_pickaxe', 1, this.itemRegistry)
      this.inventory.add('wheat_seed', 6, this.itemRegistry)
      this.inventory.add('carrot_seed', 4, this.itemRegistry)
      this.inventory.add('potato_seed', 4, this.itemRegistry)
      this.inventory.add('bread', 3, this.itemRegistry)
    }

    if (!this._playReady) {
      this.renderer.domElement.addEventListener('click', () => {
        if (this.state === STATE.PLAYING &&
            !this.inventoryUI.visible && !this.craftingUI.visible) {
          this.player.lock()
        }
      })
      this._setupSky()
      this._setupBlockOutline()
      this._setupMiniBosses()
      this._playReady = true
    }

    if (!this.spawnPoint) {
      this.spawnPoint = {
        x: this.camera.position.x,
        y: this.camera.position.y,
        z: this.camera.position.z,
        dim: 'overworld',
      }
    }
    this.passiveSpawner.init()
    this.seaLife.init()
    this._showMsg(isLoad
      ? 'Welcome back. The island is waiting.'
      : 'Stranded! Gather wood, build tools, survive the night.')
  }

  _setupMiniBosses() {
    // World is 1536x1536, scaled 8x from the original 192x192 — every boss position
    // below is scaled by the same factor as WorldBuilder's terrain features
    // (see SCALE in WorldBuilder.js) so they land in the right biome. The
    // Stone Golem was also moved off the main (NW) mountain onto the second
    // (NE) mountain — previously it shared the same corner of the map as the
    // Cave Troll, which worked against "spread out" even before the resize.
    const BOSS_SCALE = 8

    // Cave Troll — underground near NW mountain
    const trollPos = new THREE.Vector3(30*BOSS_SCALE, 4, 30*BOSS_SCALE)
    const caveTroll = new BossCave(trollPos, this.scene, this.player, this.inventory, this.itemRegistry, this.mobSpawner)
    caveTroll.onDeath = () => this._onMiniBossKilled('cave_troll', 'Cave Troll', 'Swamp Witch')
    this._bossList = []
    const keep = (id, boss) => {
      if (this.killedBosses.has(id)) {
        boss.dead = true
        this.scene.remove(boss.mesh)
        return
      }
      this._bossList.push(boss)
    }
    keep('cave_troll', caveTroll)

    // Swamp Witch — deep in swamp SE
    const witchPos = new THREE.Vector3(138*BOSS_SCALE, 13, 138*BOSS_SCALE)
    const swampWitch = new BossSwamp(witchPos, this.scene, this.player, this.inventory, this.itemRegistry)
    swampWitch.onDeath = () => this._onMiniBossKilled('swamp_witch', 'Swamp Witch', 'Stone Golem')
    keep('swamp_witch', swampWitch)

    // Stone Golem — on the second (NE) mountain peak, away from the Cave Troll
    const golemPos = new THREE.Vector3(150*BOSS_SCALE, 20, 44*BOSS_SCALE)
    const stoneGolem = new BossMountain(golemPos, this.scene, this.player, this.inventory, this.itemRegistry)
    stoneGolem.onDeath = () => this._onMiniBossKilled('stone_golem', 'Stone Golem', null)
    keep('stone_golem', stoneGolem)

    this.activeBoss = this._bossList[0] ?? null
    this._activeBossList = this._bossList
  }

  _onMiniBossKilled(bossId, bossName, nextHint) {
    this.killedBosses.add(bossId)
    document.getElementById('boss-bar-wrap').style.display = 'none'
    this._showMsg(`${bossName} defeated! ${nextHint ? `Seek the ${nextHint}.` : 'Craft the Summoning Stone at the Forge!'}`)
    this.saveSystem.save()
    this.activeBoss = null

    if (this.killedBosses.size >= 3) {
      this._showMsg('All guardians slain! Craft the Summoning Stone at the Forge.')
    }
  }

  _spawnFinalBoss() {
    const bossPos = new THREE.Vector3(138*8, 15, 138*8)  // same altar spot as the swamp, scaled with the map
    const finalBoss = new FinalBoss(bossPos, this.scene, this.player, this.inventory, this.itemRegistry, this.worldData)
    finalBoss.onWin = () => this._onWin()
    finalBoss.onDeath = () => {}
    this.activeBoss = finalBoss
    this._activeBossList = [finalBoss]
    this._showMsg('THE CONQUEROR AWAKENS! Fight for your life!')
  }

  _onWin() {
    this.state = STATE.WIN
    this.saveSystem.clear()
    this.player.controls.unlock()
    document.getElementById('end-screen').style.display = 'flex'
    document.getElementById('end-title').textContent = '🏆 YOU WIN!'
    document.getElementById('end-title').style.color = '#f1c40f'
    document.getElementById('end-msg').textContent =
      'The Conqueror is defeated. The island is safe.'
  }

  // ── Nether dimension ───────────────────────────────────────────────────
  _usePortal() {
    const pos = this.camera.position
    const x = Math.floor(pos.x)
    const z = Math.floor(pos.z)
    const target = this.currentDimension === 'nether' ? 'overworld' : 'nether'

    // First-ever trip to the Nether has to generate and mesh a full-size
    // world on the spot — comparable in cost to the initial overworld load
    // (tens of seconds), which otherwise looks like the game has frozen.
    // Showing a message and yielding one tick lets the browser actually
    // paint it before the long synchronous build blocks the main thread.
    const firstNetherVisit = target === 'nether' && !this.netherData
    if (firstNetherVisit) {
      this._showMsg('The portal roars to life... the Nether is forming (this takes a moment)')
      this.player.controls.unlock()
      setTimeout(() => this._switchDimension(target, x, z), 50)
    } else {
      this._switchDimension(target, x, z)
    }
  }

  _switchDimension(target, x, z) {
    // Entities belong to the dimension being left — both dimensions share
    // one THREE.Scene and the same 1:1 coordinates, so anything left
    // running would otherwise appear floating in whichever world you just
    // stepped into.
    this.mobSpawner._despawnAll()
    this.passiveSpawner.despawnAllExceptCompanion()
    this.seaLife.clear()
    this.droppedItems.clear()
    this.farmingSystem.setVisible(target === 'overworld')
    for (const boss of this._activeBossList ?? []) boss.mesh.visible = (target === 'overworld')
    if (this._sun) this._sun.visible = (target === 'overworld')
    if (this._moon) this._moon.visible = (target === 'overworld')
    for (const cloud of this._clouds ?? []) cloud.visible = (target === 'overworld')

    const nether = target === 'nether'
    this.currentDimension = target

    if (nether) {
      if (!this.netherData) {
        this.netherData = new WorldData()
        this.netherRenderer = new WorldRenderer(this.scene, this.netherData, this._atlasTex, {
          ensureChunkData: (cx, cz) => ensureNetherChunk(this.netherData, cx, cz),
        })
      }
      this.worldData = this.netherData
      this.worldRenderer = this.netherRenderer
      this.overworldRenderer.group.visible = false
      this.netherRenderer.group.visible = true
      this.scene.fog = new THREE.FogExp2(new THREE.Color(0.35, 0.08, 0.03), 0.022)
      this.scene.background = new THREE.Color(0.2, 0.04, 0.02)
      this.ambientLight.intensity = 0.55
      this.ambientLight.color.set(0xff6633)
      this.dirLight.intensity = 0
      document.getElementById('boss-bar-wrap').style.display = 'none'
    } else {
      this.worldData = this.overworldData
      this.worldRenderer = this.overworldRenderer
      this.overworldRenderer.group.visible = true
      if (this.netherRenderer) this.netherRenderer.group.visible = false
      this.ambientLight.color.set(0xffffff)
    }

    // Repoint every system holding a direct worldData/worldRenderer reference —
    // they read `this.worldData` dynamically, so reassigning here is enough,
    // no need to reconstruct any of them.
    this.player.worldData = this.worldData
    this.player.worldRenderer = this.worldRenderer
    this.miningSystem.worldData = this.worldData
    this.miningSystem.worldRenderer = this.worldRenderer
    this.farmingSystem.worldData = this.worldData
    this.mobSpawner.worldData = this.worldData
    this.seaLife.worldData = this.worldData
    this.passiveSpawner.setWorldData(this.worldData)
    this.passiveSpawner.allowSpawn = !nether
    this.minimap.setWorldData(this.worldData)

    // Land one cell off from the portal's own coordinates, not on top of
    // it — the portal block itself is solid (see BlockRegistry), so
    // spawning exactly on its cell would spawn the player inside it.
    if (nether) {
      const cx = Math.floor(x / CHUNK_W), cz = Math.floor(z / CHUNK_W)
      ensureNetherChunk(this.worldData, cx, cz)
      ensureNetherChunk(this.worldData, cx, cz + 1)
    }
    const landY = nether
      ? ensurePortalAt(this.worldData, x, z)
      : Math.max(0, this.worldData.solidSurfaceY?.(x, z) ?? this.worldData.surfaceY(x, z))
    this.worldRenderer.streamAround(x, z, 200)
    this.worldRenderer.rebuildChunk(Math.floor(x / CHUNK_W), Math.floor(z / CHUNK_W))
    const landZ = nether ? z + 1 : z
    this.player.camera.position.set(x + 0.5, landY + 1.8, landZ + 0.5)
    this.player._vy = 0
    this.passiveSpawner.bringCompanionTo(x + 0.5, landY + 1, landZ + 0.5)

    // No day/night in the Nether — force hostile spawns on for the visit.
    // The overworld clock is paused for the duration (see update()), so on
    // return this just restores whatever it was when you left.
    this.mobSpawner.setNight(nether ? true : this.dayNight.isNight)

    this._showMsg(nether
      ? 'You step through into a hostile, burning world. Find the chest by the portal.'
      : 'You stumble back into daylight.')
  }

  _onPlayerDeath() {
    this.player.controls.unlock()
    this.stats.dead = false
    this.stats.health = Math.max(6, Math.floor(this.stats.maxHealth * 0.5))
    this.stats.hunger = Math.max(8, this.stats.hunger)
    this.stats.onChange?.()
    const spawn = this.spawnPoint && this.spawnPoint.dim === this.currentDimension
      ? this.spawnPoint
      : {
          x: WORLD_W / 2 + 0.5,
          y: (this.worldData.solidSurfaceY?.(WORLD_W / 2, WORLD_D / 2) ?? 14) + 1.8,
          z: WORLD_D / 2 + 0.5,
        }
    this.camera.position.set(spawn.x, spawn.y, spawn.z)
    this.player._vy = 0
    this.state = STATE.PLAYING
    this.saveSystem.save()
    this._showMsg('You wake up at home, a little worse for wear.')
  }

  _setupUIKeys() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyE' && this.state === STATE.PLAYING) {
        const open = this.inventoryUI.toggle()
        if (open) {
          this.craftingUI.hide()
          this.player.controls.unlock()
        } else {
          this.player.lock()
        }
      }
      if (e.code === 'KeyC' && this.state === STATE.PLAYING) {
        const open = this.craftingUI.toggle()
        if (open) {
          this.inventoryUI.hide()
          this.player.controls.unlock()
        } else {
          this.player.lock()
        }
      }
      if (e.code === 'KeyJ' && this.state === STATE.PLAYING) {
        this.hud.toggleQuests()
      }
      if (e.code === 'Escape') {
        if (this.inventoryUI.visible || this.craftingUI.visible) {
          this.inventoryUI.hide()
          this.craftingUI.hide()
          if (this.state === STATE.PLAYING) this.player.lock()
          return
        }
        if (this.state === STATE.PLAYING) this._pause()
        else if (this.state === STATE.PAUSED) this._resume()
      }
    })
  }

  _pause() {
    this.state = STATE.PAUSED
    this.player.controls.unlock()
    sounds.stopMusic()
    const el = document.getElementById('pause-screen')
    if (el) el.style.display = 'flex'
  }

  _resume() {
    const el = document.getElementById('pause-screen')
    if (el) el.style.display = 'none'
    this.state = STATE.PLAYING
    sounds.startMusic()
    this.player.lock()
  }

  _dropNearPlayer(itemId, count) {
    const dir = new THREE.Vector3()
    this.camera.getWorldDirection(dir)
    const pos = this.camera.position.clone().add(dir.multiplyScalar(1.2))
    pos.y -= 1
    this.droppedItems.spawn(itemId, count, pos)
  }

  _giveOrDrop(itemId, count) {
    const leftover = this.inventory.add(itemId, count, this.itemRegistry)
    if (leftover > 0) this._dropNearPlayer(itemId, leftover)
  }

  _openChest(x, y, z) {
    const items = this.chests.takeAll(this.currentDimension, x, y, z)
    if (!items.length) {
      this._showMsg('The chest is empty.')
      return
    }
    const names = []
    for (const it of items) {
      this._giveOrDrop(it.itemId, it.count)
      const item = this.itemRegistry.getItem(it.itemId)
      names.push(`${it.count}x ${item?.name ?? it.itemId}`)
    }
    this.hud.showPickup(`Chest: ${names.join(', ')}`)
    this.player.controls.unlock()
    this.inventoryUI.show()
  }

  update(dt) {
    if (this.state !== STATE.PLAYING) return

    this.worldRenderer.streamAround(this.camera.position.x, this.camera.position.z)

    this.stats.update(dt)
    // Paused while in the Nether — no day/night there, and freezing the
    // overworld's clock avoids the world advancing several in-game hours
    // during a trip and dumping a wave of night mobs on you the moment
    // you step back through the portal.
    if (this.currentDimension !== 'nether') this.dayNight.update(dt)
    this._updateSunFollow()
    this.mobSpawner.update(dt)
    this.passiveSpawner.update(dt)
    if (this.currentDimension !== 'nether') {
      this.seaLife.update(dt)
      this.farmingSystem.update(dt)
    }
    this._updateMinimap(dt)
    this.droppedItems.update(dt, this.camera.position)

    const witch = (this._bossList ?? []).find(b => b.config?.id === 'swamp_witch' || b.config?.name?.includes('Witch'))
    if (witch && this.camera.position.distanceTo(witch.position) < 40) {
      this.quests.noteVisit('swamp_witch')
    }
    this._oinkTimer -= dt
    if (this._oinkTimer <= 0) {
      const hostiles = [
        ...this.mobSpawner.getMobs(),
        ...(this.currentDimension === 'nether' ? [] : (this._activeBossList ?? [])),
      ]
      if (this.passiveSpawner.warnIfDanger(hostiles, this.camera.position)) {
        sounds.playOink?.()
        this._oinkTimer = 6
      } else {
        this._oinkTimer = 1
      }
    }

    if (!this.inventoryUI.visible && !this.craftingUI.visible) {
      this.player.update(dt)
    }
    this._updateBlockOutline()
    this._updateSky(dt)

    // Update active boss — show bar for the closest living boss within 40 blocks.
    // Bosses only exist in the overworld; skip the proximity check in the
    // Nether since both dimensions share the same coordinates and a boss's
    // (invisible, overworld) position could otherwise coincidentally read
    // as "nearby" and pop up a health bar for nothing visibly there.
    if (this._activeBossList && this.currentDimension !== 'nether') {
      let closestBoss = null
      let closestDist = Infinity
      for (const boss of this._activeBossList) {
        if (boss.dead) continue
        boss.update(dt, this.worldData)
        const dist = boss.position.distanceTo(this.camera.position)
        if (dist < 25 && dist < closestDist) { closestDist = dist; closestBoss = boss }
      }
      if (closestBoss) {
        closestBoss.showBar()
      } else {
        document.getElementById('boss-bar-wrap').style.display = 'none'
      }
    }

    // Auto-save
    this._saveTimer += dt
    if (this._saveTimer >= 60) {
      this._saveTimer = 0
      // Only the overworld is ever saved (see SaveSystem) — its position
      // reference is the live camera position, so saving while standing in
      // the Nether would record nonsense overworld coordinates.
      if (this.state === STATE.PLAYING && this.currentDimension !== 'nether') this.saveSystem.save()
    }
  }

  _showMsg(text) {
    const el = document.getElementById('pickup-flash')
    el.textContent = text
    el.style.opacity = '1'
    el.style.bottom = '140px'
    el.style.fontSize = '13px'
    clearTimeout(this._msgTimeout)
    this._msgTimeout = setTimeout(() => { el.style.opacity = '0' }, 4000)
  }

  // ── Block selection outline ──────────────────────────────────────────────
  _setupBlockOutline() {
    const geo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.002, 1.002, 1.002))
    const mat = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 1.5, depthTest: true })
    this._blockOutline = new THREE.LineSegments(geo, mat)
    this._blockOutline.visible = false
    this.scene.add(this._blockOutline)
  }

  // Re-centers the sun's shadow-casting frustum on the player each frame,
  // preserving whatever direction DayNightCycle just set (it reassigns
  // dirLight.position fresh every call, so that vector doubles as "the
  // direction the sun is in" relative to the origin).
  _updateSunFollow() {
    if (this.dirLight.intensity <= 0) return
    const sunDir = this.dirLight.position.clone().normalize()
    this.dirLight.position.copy(this.camera.position).addScaledVector(sunDir, 40)
    this.dirLight.target.position.copy(this.camera.position)
  }

  _updateMinimap(dt) {
    const dir = new THREE.Vector3()
    this.camera.getWorldDirection(dir)
    const yaw = Math.atan2(dir.x, dir.z)
    const mobs = [
      ...this.mobSpawner.getMobs(),
      ...this.passiveSpawner.getMobs(),
      ...(this.currentDimension === 'nether' ? [] : this.seaLife.getMobs()),
    ]
    const markers = []
    if (this.spawnPoint) markers.push({ x: this.spawnPoint.x, z: this.spawnPoint.z, color: '#66ccff' })
    for (const boss of this._bossList ?? []) {
      if (boss.dead) continue
      const home = boss._homePos ?? boss.position
      markers.push({ x: home.x, z: home.z, color: '#ff4444' })
    }
    this.minimap.update(dt, this.camera.position, yaw, mobs, markers)
  }

  _updateBlockOutline() {
    const hit = this.player.targetBlock
    if (hit) {
      this._blockOutline.position.set(hit[0] + 0.5, hit[1] + 0.5, hit[2] + 0.5)
      this._blockOutline.visible = true
    } else {
      this._blockOutline.visible = false
    }
  }

  // ── Clouds + Sun + Moon ──────────────────────────────────────────────────
  _setupSky() {
    // Sun
    const sunGeo = new THREE.PlaneGeometry(18, 18)
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffee88, side: THREE.DoubleSide, depthWrite: false })
    this._sun = new THREE.Mesh(sunGeo, sunMat)
    this.scene.add(this._sun)

    // Moon
    const moonGeo = new THREE.PlaneGeometry(12, 12)
    const moonMat = new THREE.MeshBasicMaterial({ color: 0xddeeff, side: THREE.DoubleSide, depthWrite: false })
    this._moon = new THREE.Mesh(moonGeo, moonMat)
    this.scene.add(this._moon)

    // Clouds — clusters of flat white boxes
    this._clouds = []
    const cloudShapes = [
      [[0,0,0,8,2,6],[8,1,0,6,2,5],[-4,1,1,5,2,4]],
      [[0,0,0,10,2,5],[5,1,0,7,2,4],[-5,0,0,4,2,4]],
      [[0,0,0,7,2,7],[5,0,1,5,2,5],[0,1,-4,6,2,4]],
      [[0,0,0,9,2,6],[6,0,0,6,2,5],[-3,1,2,5,2,4],[4,1,-4,4,2,4]],
    ]
    const cloudPositions = [
      [60,45,40],[140,48,-20],[30,50,100],[110,46,-60],
      [-40,44,70],[170,47,150],[90,50,-100],[50,45,-150],
      [200,46,60],[80,49,200],[-30,48,180],[160,50,120],
    ]
    // Cloud positions below are offsets from the map centre, not absolute
    // coordinates — keeps them centred over spawn regardless of world size.
    const worldCx = WORLD_W / 2, worldCz = WORLD_D / 2
    for (let ci = 0; ci < cloudPositions.length; ci++) {
      const group = new THREE.Group()
      const shape = cloudShapes[ci % cloudShapes.length]
      for (const [ox, oy, oz, w, h, d] of shape) {
        const cg = new THREE.BoxGeometry(w, h, d)
        const cm = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.82, depthWrite: false })
        const cm2 = new THREE.Mesh(cg, cm)
        cm2.position.set(ox, oy, oz)
        group.add(cm2)
      }
      const [cx, cy, cz] = cloudPositions[ci]
      group.position.set(worldCx + cx, cy, worldCz + cz)
      this.scene.add(group)
      this._clouds.push(group)
    }
  }

  _updateSky(dt) {
    // Orbit sun and moon around the world centre
    const t = this.dayNight ? this.dayNight.timeOfDay ?? 0 : 0
    const angle = t * Math.PI * 2
    const orbitR = 160
    const cx = WORLD_W / 2, cz = WORLD_D / 2   // world centre
    if (this._sun) {
      this._sun.position.set(cx + Math.cos(angle) * orbitR, Math.sin(angle) * orbitR + 20, cz - 30)
      this._sun.lookAt(this.camera.position)
    }
    if (this._moon) {
      this._moon.position.set(cx + Math.cos(angle + Math.PI) * orbitR, Math.sin(angle + Math.PI) * orbitR + 20, cz - 30)
      this._moon.lookAt(this.camera.position)
    }
    // Drift clouds slowly
    if (this._clouds) {
      for (let i = 0; i < this._clouds.length; i++) {
        this._clouds[i].position.x += 2 * dt
        if (this._clouds[i].position.x > cx + 250) this._clouds[i].position.x = cx - 250
      }
    }
  }

  // ── Pixel-art atlas texture ──────────────────────────────────────────────
  _generateAtlas() {
    const SIZE = 256
    const T = 16   // 16 pixels per tile, 16×16 = 256
    const canvas = document.createElement('canvas')
    canvas.width = SIZE; canvas.height = SIZE
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = false

    // Seeded RNG — always the same texture every load
    const mk = seed => { let s = seed; return () => { s = (s*1664525+1013904223)>>>0; return s/0xffffffff } }

    // Fill entire tile
    const fill = (c, r, hex) => { ctx.fillStyle = hex; ctx.fillRect(c*T, r*T, T, T) }
    // Draw one pixel in tile
    const dp = (c, r, x, y, hex) => { ctx.fillStyle = hex; ctx.fillRect(c*T+x, r*T+y, 1, 1) }
    // Fill rect in tile
    const tr = (c, r, x, y, w, h, hex) => { ctx.fillStyle = hex; ctx.fillRect(c*T+x, r*T+y, w, h) }
    // Noisy tile — each pixel varies ±variance around base hex
    const nt = (c, r, hex, variance, seed) => {
      const rn = mk(seed)
      const n = parseInt(hex.slice(1), 16)
      const br = (n>>16)&255, bg2 = (n>>8)&255, bb = n&255
      for (let py = 0; py < T; py++)
        for (let px2 = 0; px2 < T; px2++) {
          const d = Math.round((rn()-0.5)*variance*2)
          const cr2 = Math.max(0,Math.min(255,br+d)), cg2 = Math.max(0,Math.min(255,bg2+d)), cb2 = Math.max(0,Math.min(255,bb+d))
          ctx.fillStyle = `rgb(${cr2},${cg2},${cb2})`
          ctx.fillRect(c*T+px2, r*T+py, 1, 1)
        }
    }

    // ── GRASS TOP (0,0) ──────────────────────────────────────────────────
    nt(0, 0, '#5d9e2f', 22, 101)
    const gR = mk(102)
    for (let i = 0; i < 14; i++) dp(0,0,Math.floor(gR()*16),Math.floor(gR()*16), gR()>0.5?'#3a7010':'#7ac840')

    // ── STONE (1,0) ───────────────────────────────────────────────────────
    nt(1, 0, '#828282', 10, 201)
    // Classic Minecraft stone: lighter irregular shapes with dark seams
    ctx.fillStyle = '#9a9a9a'
    ctx.fillRect(1*T+1,0*T+1, 5,4); ctx.fillRect(1*T+8,0*T+1, 6,3)
    ctx.fillRect(1*T+1,0*T+7, 4,5); ctx.fillRect(1*T+7,0*T+8, 7,4)
    ctx.fillRect(1*T+1,0*T+13,6,2); ctx.fillRect(1*T+10,0*T+12,5,3)
    ctx.fillStyle = '#4d4d4d'  // seam lines
    ctx.fillRect(1*T+0,0*T+5,T,1); ctx.fillRect(1*T+0,0*T+12,T,1)
    ctx.fillRect(1*T+6,0*T+0,1,5); ctx.fillRect(1*T+3,0*T+6,1,6)
    ctx.fillRect(1*T+10,0*T+5,1,7); ctx.fillRect(1*T+13,0*T+0,1,12)

    // ── DIRT (2,0) ────────────────────────────────────────────────────────
    nt(2, 0, '#8b5a2b', 20, 301)
    const dR = mk(302)
    for (let i = 0; i < 20; i++) dp(2,0,Math.floor(dR()*16),Math.floor(dR()*16), dR()>0.5?'#5a3010':'#aa7a40')

    // ── GRASS SIDE (3,0): green strip top 4px, then dirt ─────────────────
    nt(3, 0, '#8b5a2b', 18, 401)
    // Green top strip
    { const rn = mk(402)
      for (let py = 0; py < 4; py++)
        for (let px2 = 0; px2 < T; px2++) {
          const d = Math.round((rn()-0.5)*24)
          const base = [74+d, 158+d, 40+d]
          ctx.fillStyle = `rgb(${Math.max(0,Math.min(255,base[0]))},${Math.max(0,Math.min(255,base[1]))},${Math.max(0,Math.min(255,base[2]))})`
          ctx.fillRect(3*T+px2, 0*T+py, 1, 1)
        }
      // Transition fringe at row 4
      const rn2 = mk(403)
      for (let px2 = 0; px2 < T; px2++)
        if (rn2() > 0.45) dp(3,0,px2,4,'#5a8a22')
    }

    // ── PLANKS (4,0) ─────────────────────────────────────────────────────
    nt(4, 0, '#c49a40', 12, 501)
    tr(4,0, 0,0, T,1, '#7a5010')  // top seam
    tr(4,0, 0,7, T,1, '#7a5010')  // middle seam
    tr(4,0, 0,8, T,1, '#6a4010')  // middle seam pair
    tr(4,0, 0,T-1, T,1, '#7a5010') // bottom seam
    tr(4,0, 7,1, 1,6, '#8a6020')  // vertical seam upper plank
    tr(4,0, 3,9, 1,6, '#8a6020')  // vertical seam lower plank
    for (let py = 2; py < 7; py += 2) tr(4,0, 0,py, T,1, 'rgba(0,0,0,0.05)')
    for (let py = 10; py < T-1; py += 2) tr(4,0, 0,py, T,1, 'rgba(0,0,0,0.05)')

    // ── DIRT (for grass bottom tile 5,0) ─────────────────────────────────
    nt(5, 0, '#8b5a2b', 18, 601)

    // ── FARMLAND (6,0) ───────────────────────────────────────────────────
    nt(6, 0, '#4d2e12', 14, 701)
    for (let py = 2; py < T; py += 4) tr(6,0, 0,py, T,1, 'rgba(0,0,0,0.28)')
    tr(6,0, 6,0, 4,T, 'rgba(20,60,20,0.22)')  // moist channel

    // ── COBBLESTONE (0,1) ────────────────────────────────────────────────
    fill(0, 1, '#6e6e6e')
    ctx.fillStyle = '#3d3d3d'  // dark seams
    // Horizontal seams
    for (const sy of [0,6,10,15]) tr(0,1, 0,sy, T,1, '#404040')
    // Vertical seams (staggered)
    tr(0,1, 4,1,1,5,'#404040'); tr(0,1,11,1,1,5,'#404040')
    tr(0,1, 7,6,1,4,'#404040'); tr(0,1,13,6,1,4,'#404040')
    tr(0,1, 3,10,1,5,'#404040'); tr(0,1, 9,10,1,5,'#404040'); tr(0,1,14,10,1,5,'#404040')
    // Stone highlights on each cobble
    ctx.fillStyle = '#8e8e8e'
    ctx.fillRect(0*T+1,1*T+1,3,2); ctx.fillRect(0*T+5,1*T+2,5,2)
    ctx.fillRect(0*T+12,1*T+2,3,2); ctx.fillRect(0*T+1,1*T+7,5,2)
    ctx.fillRect(0*T+8,1*T+7,4,2); ctx.fillRect(0*T+1,1*T+11,7,3)
    ctx.fillRect(0*T+10,1*T+11,4,3)

    // ── SAND (2,1) ───────────────────────────────────────────────────────
    nt(2, 1, '#d4c27a', 14, 901)
    { const sR = mk(902)
      for (let i = 0; i < 22; i++) dp(2,1,Math.floor(sR()*16),Math.floor(sR()*16), sR()>0.5?'#c4b060':'#e4d090') }

    // ── GRAVEL (3,1) ─────────────────────────────────────────────────────
    fill(3, 1, '#888877')
    { const gvR = mk(1001)
      for (let py = 0; py < T; py += 4)
        for (let px2 = 0; px2 < T; px2 += 4) {
          const shade = 110+Math.floor(gvR()*55)
          ctx.fillStyle = `rgb(${shade},${shade},${shade-8})`
          ctx.fillRect(3*T+px2, 1*T+py, 3, 3)
          ctx.fillStyle = `rgb(${shade-35},${shade-35},${shade-42})`
          ctx.fillRect(3*T+px2+3, 1*T+py, 1, 4)
          ctx.fillRect(3*T+px2, 1*T+py+3, 4, 1)
        }
    }

    // ── WOOD LOG SIDE (4,1) ───────────────────────────────────────────────
    nt(4, 1, '#7a5428', 12, 1101)
    for (const bx of [2,7,12]) tr(4,1, bx,0, 1,T, '#4a2c0a')
    for (const bx of [4,9,14]) tr(4,1, bx,0, 1,T, '#9a6838')
    tr(4,1, 8,6, 3,3, '#3a1c08')   // knot

    // ── WOOD LOG TOP (5,1) ────────────────────────────────────────────────
    nt(5, 1, '#9a6a30', 8, 1201)
    ctx.strokeStyle = '#7a4a18'; ctx.lineWidth = 1
    for (const rad of [6,4,2]) {
      ctx.beginPath(); ctx.arc(5*T+8, 1*T+8, rad, 0, Math.PI*2); ctx.stroke()
    }
    tr(5,1, 7,7, 2,2, '#3a1a08')  // center
    tr(5,1, 0,0, T,2, '#5a3818'); tr(5,1, 0,T-2,T,2,'#5a3818')
    tr(5,1, 0,2, 2,T-4,'#5a3818'); tr(5,1,T-2,2,2,T-4,'#5a3818')

    // ── CHEST (9,1) ───────────────────────────────────────────────────────
    nt(9, 1, '#b48c38', 10, 1301)
    tr(9,1, 0,0, T,2,'#5a3010'); tr(9,1, 0,T-2,T,2,'#5a3010')
    tr(9,1, 0,0, 2,T,'#5a3010'); tr(9,1,T-2,0,2,T,'#5a3010')
    tr(9,1, 2,8, T-4,1,'#5a3010')   // lid line
    // Gold latch
    tr(9,1, 6,5, 4,5,'#c8a020'); tr(9,1, 7,6, 2,3,'#7a5010')
    for (const py of [3,5,10,12]) tr(9,1, 2,py, T-4,1, 'rgba(0,0,0,0.1)')

    // ── BED FRAME/SIDE (6,1) ────────────────────────────────────────────
    nt(6, 1, '#7a4a20', 10, 1901)  // wood frame
    tr(6,1, 0,0, T,3, '#c8c0a8')   // sheet strip along the top edge
    tr(6,1, 0,3, T,1, '#8a8270')   // sheet shadow line

    // ── BED BLANKET TOP (7,1) ────────────────────────────────────────────
    nt(7, 1, '#a02020', 10, 2001)  // red blanket
    tr(7,1, 0,0, T,4, '#e8e0d0')   // pillow
    tr(7,1, 0,4, T,1, '#b0a890')   // pillow shadow

    // ── IRON ORE (1,2) ────────────────────────────────────────────────────
    nt(1, 2, '#828282', 8, 1401)
    ctx.fillStyle = '#4d4d4d'
    ctx.fillRect(1*T+0,2*T+6,T,1); ctx.fillRect(1*T+7,2*T+0,1,6)
    { const ioR = mk(1402)
      for (let i = 0; i < 9; i++) {
        const bx=1+Math.floor(ioR()*12),by=1+Math.floor(ioR()*12), w=2+Math.floor(ioR()*2)
        tr(1,2, bx,by, w,2, ioR()>0.5?'#cc8855':'#dd9966')
      }
      for (let i=0;i<4;i++) dp(1,2,1+Math.floor(ioR()*12),1+Math.floor(ioR()*12),'#ffcc99')
    }

    // ── CRYSTAL ORE (2,2) ─────────────────────────────────────────────────
    nt(2, 2, '#6a6a7a', 8, 1501)
    ctx.fillStyle = '#45455a'
    ctx.fillRect(2*T+0,2*T+6,T,1); ctx.fillRect(2*T+7,2*T+0,1,6)
    { const crR = mk(1502)
      for (let i=0;i<8;i++) tr(2,2,1+Math.floor(crR()*12),1+Math.floor(crR()*12),2,2, crR()>0.5?'#9944ee':'#44aacc')
      for (let i=0;i<4;i++) dp(2,2,1+Math.floor(crR()*13),1+Math.floor(crR()*13),'#ccffee')
    }

    // ── CRAFTING TABLE SIDE (11,2) ────────────────────────────────────────
    nt(11, 2, '#c49a40', 10, 1601)
    tr(11,2, 0,0, T,2,'#5a3010'); tr(11,2, 0,0,2,T,'#5a3010'); tr(11,2,T-2,0,2,T,'#5a3010')
    tr(11,2, 7,1, 1,14,'#8a6020')  // plank seam
    // Tool silhouette
    ctx.fillStyle = '#2a1a08'
    tr(11,2,4,9,1,6,'#333'); tr(11,2,5,8,1,1,'#333'); tr(11,2,6,7,1,1,'#333')
    tr(11,2,7,5,4,2,'#333'); tr(11,2,7,4,2,1,'#333'); tr(11,2,9,7,2,1,'#333')
    tr(11,2,3,6,5,1,'#888'); for(let i=0;i<4;i++) dp(11,2,3+i,5+(i%2),'#888')

    // ── FORGE (13,2) ──────────────────────────────────────────────────────
    nt(13, 2, '#3a3a3a', 8, 1701)
    tr(13,2, 0,0,T,1,'#222'); tr(13,2, 0,T-1,T,1,'#222')
    tr(13,2, 0,0,1,T,'#222'); tr(13,2,T-1,0,1,T,'#222')
    tr(13,2, 4,2, 8,5,'#1a1a1a')  // chimney
    tr(13,2, 2,9, 5,6,'#ff8800'); tr(13,2, 9,9, 5,6,'#ff8800')
    tr(13,2, 3,10,3,4,'#ffcc00'); tr(13,2,10,10,3,4,'#ffcc00')
    tr(13,2, 4,11,1,2,'#ffffff'); tr(13,2,11,11,1,2,'#ffffff')
    tr(13,2, 1,8, 7,1,'#555'); tr(13,2, 8,8, 7,1,'#555')

    // ── ALTAR (14,2) ──────────────────────────────────────────────────────
    nt(14, 2, '#1a0a2a', 8, 1801)
    { const alR = mk(1802)
      for (let i=0;i<18;i++) { ctx.fillStyle='rgba(160,50,255,0.3)'; ctx.fillRect(14*T+Math.floor(alR()*14)+1, 2*T+Math.floor(alR()*14)+1, 2,1) }
    }
    ctx.fillStyle = '#cc44ff'
    tr(14,2, 4,4,8,1,'#cc44ff'); tr(14,2, 4,8,8,1,'#cc44ff'); tr(14,2, 8,4,1,5,'#cc44ff')
    tr(14,2, 4,12,8,1,'#cc44ff'); tr(14,2, 6,12,1,3,'#cc44ff')
    ctx.fillStyle = 'rgba(200,100,255,0.18)'; ctx.fillRect(14*T+3,2*T+3,10,10)

    // ── GLASS (1,3) ───────────────────────────────────────────────────────
    ctx.clearRect(1*T, 3*T, T, T)
    ctx.fillStyle='rgba(145,215,255,0.38)'; ctx.fillRect(1*T,3*T,T,T)
    ctx.fillStyle='#7ab0cc'
    ctx.fillRect(1*T,3*T,T,1); ctx.fillRect(1*T,3*T+T-1,T,1)
    ctx.fillRect(1*T,3*T,1,T); ctx.fillRect(1*T+T-1,3*T,1,T)
    ctx.fillStyle='rgba(255,255,255,0.7)'; ctx.fillRect(1*T+2,3*T+2,3,1); ctx.fillRect(1*T+2,3*T+3,1,2)
    ctx.fillStyle='rgba(255,255,255,0.4)'; ctx.fillRect(1*T+11,3*T+11,3,1); ctx.fillRect(1*T+13,3*T+11,1,2)

    // ── LEAVES (4,3) ──────────────────────────────────────────────────────
    ctx.clearRect(4*T, 3*T, T, T)
    { const lfR = mk(1901)
      for (let py=0;py<T;py++) for(let px2=0;px2<T;px2++) {
        const v=lfR()
        if(v<0.1) {} // transparent
        else if(v<0.35) { ctx.fillStyle='#1a5510'; ctx.fillRect(4*T+px2,3*T+py,1,1) }
        else if(v<0.72) { ctx.fillStyle='#2a7020'; ctx.fillRect(4*T+px2,3*T+py,1,1) }
        else { ctx.fillStyle='#3a9028'; ctx.fillRect(4*T+px2,3*T+py,1,1) }
      }
    }

    // ── TORCH (0,5) ───────────────────────────────────────────────────────
    ctx.clearRect(0*T, 5*T, T, T)
    tr(0,5, 7,7, 2,9,'#8b5a2b')  // stick
    tr(0,5, 6,3, 4,5,'#ff8800'); tr(0,5, 7,1, 2,4,'#ffdd00'); dp(0,5, 7,1,'#ffffff')

    // ── CAMPFIRE (7,5) ────────────────────────────────────────────────────
    fill(7, 5, '#2e1808')
    tr(7,5, 0,11,T,4,'#5a3618'); tr(7,5, 2,9,T-4,3,'#4a2810')
    tr(7,5, 3,6, 10,5,'#cc5500'); tr(7,5, 4,3, 8,5,'#ff8800')
    tr(7,5, 5,1, 6,4,'#ffcc00'); tr(7,5, 6,0, 4,2,'#ffff88')

    // ── WATER (15,12) ─────────────────────────────────────────────────────
    ctx.clearRect(15*T, 12*T, T, T)
    ctx.fillStyle='rgba(20,80,200,0.75)'; ctx.fillRect(15*T,12*T,T,T)
    ctx.fillStyle='rgba(80,160,255,0.5)'
    for(let px2=0;px2<T;px2+=3) { ctx.fillRect(15*T+px2,12*T+4,2,1); ctx.fillRect(15*T+(px2+2)%T,12*T+10,2,1) }

    // ── NETHERRACK (3,2) ─────────────────────────────────────────────────
    nt(3, 2, '#5a2a20', 12, 2101)
    { const nrR = mk(2102)
      for (let i = 0; i < 12; i++) dp(3,2,Math.floor(nrR()*16),Math.floor(nrR()*16), nrR()>0.5?'#3a1810':'#7a4030') }

    // ── LAVA (4,2) ───────────────────────────────────────────────────────
    ctx.clearRect(4*T, 2*T, T, T)
    ctx.fillStyle='rgba(200,50,10,0.9)'; ctx.fillRect(4*T,2*T,T,T)
    ctx.fillStyle='rgba(255,180,40,0.8)'
    for(let px2=0;px2<T;px2+=3) { ctx.fillRect(4*T+px2,2*T+4,2,1); ctx.fillRect(4*T+(px2+2)%T,2*T+10,2,1) }
    ctx.fillStyle='rgba(255,255,150,0.6)'; ctx.fillRect(4*T+6,2*T+7,3,2)

    // ── GLOWSTONE (5,2) ──────────────────────────────────────────────────
    nt(5, 2, '#f0d878', 16, 2301)
    { const gsR = mk(2302)
      for (let i = 0; i < 10; i++) dp(5,2,Math.floor(gsR()*16),Math.floor(gsR()*16), gsR()>0.5?'#fff0a0':'#c8a850') }

    // ── OBSIDIAN (6,2) ───────────────────────────────────────────────────
    nt(6, 2, '#1a0e28', 8, 2401)
    { const obR = mk(2402)
      for (let i = 0; i < 8; i++) dp(6,2,Math.floor(obR()*16),Math.floor(obR()*16), '#4a2870') }

    // ── PORTAL (7,2) ─────────────────────────────────────────────────────
    ctx.clearRect(7*T, 2*T, T, T)
    ctx.fillStyle='rgba(120,20,200,0.75)'; ctx.fillRect(7*T,2*T,T,T)
    ctx.fillStyle='rgba(200,100,255,0.6)'
    for(let px2=0;px2<T;px2+=2) { ctx.fillRect(7*T+px2,2*T+(px2*3)%T,2,2) }
    ctx.fillStyle='rgba(230,180,255,0.5)'; ctx.fillRect(7*T+6,2*T+6,4,4)

    // ── CORAL (8,3) ──────────────────────────────────────────────────────
    ctx.clearRect(8*T, 3*T, T, T)
    { const coR = mk(2601)
      const branches = ['#ff6a8a', '#ff9a4a', '#ffcc55']
      for (let py=0;py<T;py++) for(let px2=0;px2<T;px2++) {
        const v = coR()
        if (v < 0.55) {} // transparent gaps
        else { ctx.fillStyle = branches[Math.floor(coR()*branches.length)]; ctx.fillRect(8*T+px2,3*T+py,1,1) }
      }
    }

    // ── KELP (9,3) ───────────────────────────────────────────────────────
    ctx.clearRect(9*T, 3*T, T, T)
    { const kpR = mk(2701)
      for (let py=0;py<T;py++) for(let px2=0;px2<T;px2++) {
        const v = kpR()
        if (v < 0.35) {} // transparent gaps
        else if (v < 0.65) { ctx.fillStyle = '#1a5a30'; ctx.fillRect(9*T+px2,3*T+py,1,1) }
        else { ctx.fillStyle = '#2a8a4a'; ctx.fillRect(9*T+px2,3*T+py,1,1) }
      }
    }

    // ── TALL GRASS (10,3) ────────────────────────────────────────────────
    ctx.clearRect(10*T, 3*T, T, T)
    { const tgR = mk(2801)
      const blades = ['#3a7020', '#4a8f3f', '#5da84e']
      // A handful of tapered blade strokes rather than solid fill, so it
      // reads as individual grass rather than a green rectangle.
      for (let b = 0; b < 7; b++) {
        const bx = 1 + Math.floor(tgR() * 14)
        const lean = Math.floor(tgR() * 3) - 1
        const height = 8 + Math.floor(tgR() * 7)
        const color = blades[Math.floor(tgR() * blades.length)]
        for (let y = 0; y < height; y++) {
          const x = bx + Math.round((lean * y) / height)
          ctx.fillStyle = color
          ctx.fillRect(10*T + x, 3*T + (15 - y), 1, 1)
        }
      }
    }

    // ── FLOWER (11,3) ────────────────────────────────────────────────────
    ctx.clearRect(11*T, 3*T, T, T)
    tr(11,3, 7,10, 2,6, '#3a7020')  // stem
    { const petals = [[7,3,'#ff5577'],[5,5,'#ffdd33'],[9,5,'#ffffff'],[7,7,'#ff8844']]
      for (const [px3, py3, color] of petals) tr(11,3, px3,py3, 2,2, color)
      dp(11,3, 7,5, '#ffee88')  // center
    }

    const tex = new THREE.CanvasTexture(canvas)
    tex.magFilter = THREE.NearestFilter
    tex.minFilter = THREE.NearestFilter
    return tex
  }
}
