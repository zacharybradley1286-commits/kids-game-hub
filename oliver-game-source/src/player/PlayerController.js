import * as THREE from 'three'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import { GRAVITY, JUMP_SPEED, MOVE_SPEED, PLAYER_REACH, CHUNK_W, WORLD_W, WORLD_D, WORLD_H } from '../constants.js'
import { BLOCK } from '../world/BlockRegistry.js'
import { sounds } from '../systems/SoundSystem.js'

export class PlayerController {
  constructor(camera, renderer, worldData, worldRenderer, stats, inventory,
              miningSystem, farmingSystem, hotbar, hud, itemRegistry) {
    this.camera    = camera
    this.worldData = worldData
    this.worldRenderer = worldRenderer
    this.stats     = stats
    this.inventory = inventory
    this.mining    = miningSystem
    this.farming   = farmingSystem
    this.hotbar    = hotbar
    this.hud       = hud
    this.itemRegistry = itemRegistry

    this.controls = new PointerLockControls(camera, renderer.domElement)
    this._keys = {}
    this._vy = 0
    this._onGround = false
    this._raycaster = new THREE.Raycaster()
    this._raycaster.far = PLAYER_REACH
    this._mouseDown = false
    this._rightMouseDown = false
    this._currentStation = 'hand'
    this.onStationChange = null
    // Minecraft-like feel
    this.targetBlock = null    // highlighted block for outline
    this._bobTimer  = 0
    this._prevBob   = 0
    this._stepTimer = 0
    this._sprinting = false

    this._setupInputListeners(renderer)

    // Start at island center surface
    const sx = WORLD_W / 2
    const sz = WORLD_D / 2
    const sy = worldData.surfaceY(sx, sz)
    camera.position.set(sx + 0.5, (sy >= 0 ? sy : 12) + 1.8, sz + 0.5)
  }

  lock() {
    this.controls.lock()
  }

  get isLocked() {
    return this.controls.isLocked
  }

  _setupInputListeners(renderer) {
    window.addEventListener('keydown', e => {
      this._keys[e.code] = true
      // Number keys for hotbar
      const n = parseInt(e.key)
      if (n >= 1 && n <= 9) this.hotbar.select(n - 1)
      // Jump (also used for swimming — handled in update)
      if (e.code === 'Space' && this._onGround) {
        this._vy = JUMP_SPEED
        this._onGround = false
      }
      if (e.code === 'KeyQ') this._dropHeldItem()
    })
    window.addEventListener('keyup', e => {
      this._keys[e.code] = false
    })
    // Block context menu so right-click always goes to the game
    window.addEventListener('contextmenu', e => e.preventDefault())

    window.addEventListener('mousedown', e => {
      if (!this.controls.isLocked) return
      if (e.button === 0 && e.shiftKey) {
        // Shift+click = right-click alternative (trackpad friendly)
        this._handleRightClick()
        return
      }
      if (e.button === 0) {
        this._mouseDown = true
      }
      if (e.button === 2) {
        e.preventDefault()
        this._handleRightClick()
      }
    })
    window.addEventListener('mouseup', e => {
      if (e.button === 0) {
        this._mouseDown = false
        this.mining.cancelBreak()
      }
    })
    window.addEventListener('wheel', e => {
      if (!this.controls.isLocked) return
      this.hotbar.scroll(e.deltaY > 0 ? 1 : -1)
    })
  }

  update(dt) {
    if (!this.controls.isLocked) return

    // Sprint — hold Shift (the standard sprint key) or Ctrl
    this._sprinting = this._keys['ShiftLeft'] || this._keys['ShiftRight'] ||
                       this._keys['ControlLeft'] || this._keys['ControlRight']
    const speed = MOVE_SPEED * (this._sprinting ? 1.65 : 1.0)

    // Movement
    const dir = new THREE.Vector3()
    if (this._keys['KeyW']) dir.z -= 1
    if (this._keys['KeyS']) dir.z += 1
    if (this._keys['KeyA']) dir.x -= 1
    if (this._keys['KeyD']) dir.x += 1
    dir.normalize()

    const oldX = this.camera.position.x
    const oldZ = this.camera.position.z

    if (dir.length() > 0) {
      this.controls.moveRight(dir.x * speed * dt)
      this.controls.moveForward(-dir.z * speed * dt)
    }

    // Horizontal collision — push back if body overlaps a solid block
    const bodyY  = Math.floor(this.camera.position.y - 0.6)  // chest level
    const feetYh = Math.floor(this.camera.position.y - 1.6)  // near feet
    const newFx = Math.floor(this.camera.position.x)
    const newFz = Math.floor(this.camera.position.z)
    const oldFx = Math.floor(oldX)
    const oldFz = Math.floor(oldZ)
    if (this.worldData.isSolid(newFx, bodyY, oldFz) ||
        this.worldData.isSolid(newFx, feetYh, oldFz)) {
      this.camera.position.x = oldX
    }
    if (this.worldData.isSolid(Math.floor(this.camera.position.x), bodyY, newFz) ||
        this.worldData.isSolid(Math.floor(this.camera.position.x), feetYh, newFz)) {
      this.camera.position.z = oldZ
    }

    // Water check — slow fall and allow swimming with Space
    const fx = Math.floor(this.camera.position.x)
    const fz = Math.floor(this.camera.position.z)
    const headY = Math.floor(this.camera.position.y - 0.5)
    const feetWY = Math.floor(this.camera.position.y - 1.6)
    const inWater = this.worldData.getBlock?.(fx, feetWY, fz) === 14 ||
                    this.worldData.getBlock?.(fx, headY,  fz) === 14 ||
                    this.worldData.get(fx, feetWY, fz) === 14 ||
                    this.worldData.get(fx, headY,  fz) === 14

    // Lava check — Nether hazard, damages the player continuously on contact
    const inLava = this.worldData.get(fx, feetWY, fz) === BLOCK.LAVA ||
                   this.worldData.get(fx, headY,  fz) === BLOCK.LAVA
    if (inLava) this.stats.takeDamage(dt * 8)

    // Gravity + vertical movement
    if (inLava) {
      // Lava is thick and punishing, but not an automatic death sentence —
      // a weaker rise than water so panicking and mashing Space can still
      // get you out before the damage-over-time finishes you off.
      this._vy = Math.max(this._vy - GRAVITY * dt * 0.3, -1.2)
      if (this._keys['Space']) this._vy = 2
    } else if (inWater) {
      // Buoyancy — slow everything down in water
      this._vy = Math.max(this._vy - GRAVITY * dt * 0.3, -3)
      if (this._keys['Space']) this._vy = 4   // swim up with Space
    } else {
      this._vy -= GRAVITY * dt
    }
    const newY = this.camera.position.y + this._vy * dt

    // Collision — sweep through all Y blocks between old and new position
    // so fast falls never tunnel through thin floors
    const oldFeetY = Math.floor(this.camera.position.y - 1.8)
    const newFeetY = Math.floor(newY - 1.8)

    const landedAt = (() => {
      if (this._vy <= 0) {
        const minY = Math.min(oldFeetY, newFeetY)
        const maxY = Math.max(oldFeetY, newFeetY)
        for (let y = maxY; y >= minY; y--) {
          if (this.worldData.isSolid(fx, y, fz)) return y
        }
      }
      return -1
    })()

    if (landedAt >= 0) {
      this._vy = 0
      this._onGround = true
      this.camera.position.y = landedAt + 1 + 1.8
    } else {
      this._onGround = inWater  // can "jump" off water surface
      this.camera.position.y = Math.max(1.8, newY)
    }

    // Clamp to world bounds
    this.camera.position.x = Math.max(0.5, Math.min(WORLD_W - 0.5, this.camera.position.x))
    this.camera.position.z = Math.max(0.5, Math.min(WORLD_D - 0.5, this.camera.position.z))

    // Void / fall-through respawn — triggers if player escapes below the world
    if (this.camera.position.y < 2) {
      const sx = WORLD_W / 2
      const sz = WORLD_D / 2
      const sy = this.worldData.surfaceY(sx, sz)
      this.camera.position.set(sx + 0.5, (sy >= 0 ? sy : 12) + 1.8, sz + 0.5)
      this._vy = 0
      this.stats.takeDamage(5)
      this.hud.showPickup('You fell through the world! (-5 hp)')
    }

    // Mining update — continuously feed target block while mouse is held
    const heldItem = this._getHeldItem()
    if (this._mouseDown) {
      const hit = this._raycastBlock()
      if (hit) {
        this.mining.beginBreak(hit.blockPos)
      } else {
        this.mining.cancelBreak()
      }
    }
    const broke = this.mining.update(dt, heldItem)
    if (broke) {
      this.hud.setBreakProgress(0)
    }
    if (this._mouseDown && this.mining._breakingPos) {
      this.hud.setBreakProgress(
        Math.min(1, this.mining._breakProgress / this.mining._breakDuration)
      )
    } else if (!this._mouseDown) {
      this.hud.setBreakProgress(0)
    }

    // ── Head bob (Minecraft-style camera oscillation when walking) ──────
    const moving = dir.length() > 0 && this._onGround
    if (moving) {
      this._bobTimer += dt * (this._sprinting ? 14 : 9)
    } else {
      this._bobTimer = 0
    }
    const newBob = moving ? Math.sin(this._bobTimer) * 0.032 : 0
    this.camera.position.y += newBob - this._prevBob
    this._prevBob = newBob

    // ── Footstep sounds ─────────────────────────────────────────────────
    if (moving) {
      this._stepTimer -= dt
      if (this._stepTimer <= 0) {
        this._stepTimer = this._sprinting ? 0.28 : 0.42
        // Detect surface below feet
        const sfx = Math.floor(this.camera.position.x)
        const sfz = Math.floor(this.camera.position.z)
        const sfy = Math.floor(this.camera.position.y - 1.9)
        const surfBlock = this.worldData.get(sfx, sfy, sfz)
        const surfName = { 3:'stone',4:'cobble',7:'sand',15:'gravel',5:'wood',16:'wood',9:'stone' }[surfBlock] || 'grass'
        sounds.playStep(surfName)
      }
    }

    // ── Update targeted block for outline renderer ───────────────────────
    const hit = this._raycastBlock()
    this.targetBlock = hit ? hit.blockPos : null

    // Detect nearby station
    this._updateStation()
  }

  _raycastBlock() {
    this._raycaster.setFromCamera({ x: 0, y: 0 }, this.camera)
    const meshes = this.worldRenderer.allMeshes
    const hits = this._raycaster.intersectObjects(meshes)
    if (hits.length === 0) return null

    const hit = hits[0]
    const point = hit.point
    const normal = hit.face.normal.clone()
    const dir = this._raycaster.ray.direction

    // Step INTO the hit block (tiny step so we don't overshoot into the next block)
    const blockPos = [
      Math.floor(point.x + dir.x * 0.01),
      Math.floor(point.y + dir.y * 0.01),
      Math.floor(point.z + dir.z * 0.01),
    ]

    // Find which face was hit. Use ray direction as a bias so that when
    // looking down at the top of a block we reliably place above it, not to the side.
    const bx = blockPos[0], by = blockPos[1], bz = blockPos[2]
    const lx = point.x - bx   // local hit position within block (0–1)
    const ly = point.y - by
    const lz = point.z - bz
    // Each distance is weighted: faces the ray is coming FROM get half weight
    // so they win ties against neighbouring side faces.
    const dists = [
      lx        * (dir.x > 0 ? 0.5 : 1),
      (1 - lx)  * (dir.x < 0 ? 0.5 : 1),
      ly        * (dir.y > 0 ? 0.5 : 1),
      (1 - ly)  * (dir.y < 0 ? 0.5 : 1),
      lz        * (dir.z > 0 ? 0.5 : 1),
      (1 - lz)  * (dir.z < 0 ? 0.5 : 1),
    ]
    const offsets = [[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]]
    const faceIdx = dists.indexOf(Math.min(...dists))
    const [ox, oy, oz] = offsets[faceIdx]
    const adjacentPos = [bx + ox, by + oy, bz + oz]

    return { blockPos, adjacentPos, normal }
  }

  _handleRightClick() {
    const heldItem = this._getHeldItem()

    // Eat food — works even when not pointing at a block
    if (heldItem?.category === 'food' && this.stats.hunger < this.stats.maxHunger - 1) {
      this.stats.eat(heldItem.foodValue)
      this.inventory.removeSlot(this.inventory.hotbarIndex)
      this.hud.showPickup(`Ate ${heldItem.name}`)
      return
    }

    const hit = this._raycastBlock()
    if (!hit) return

    // Summoning stone: use at altar
    if (heldItem?.id === 'summoning_stone') {
      const [bx, by, bz] = hit.blockPos
      if (this.worldData.get(bx, by, bz) === BLOCK.ALTAR) {
        this.onUseAltarWithStone?.()
        this.inventory.remove('summoning_stone', 1)
        return
      }
      this.hud.showPickup('Right-click the Altar in the swamp to use this!')
      return
    }

    // Hoe: till farmland
    if (heldItem?.isHoe) {
      const tilled = this.mining.tillBlock(hit.blockPos)
      if (tilled) {
        const idx = this.inventory.hotbarIndex
        this.inventory.damageTool(idx, 1, this.itemRegistry)
        return
      }
    }

    // Seed: plant on farmland
    if (heldItem?.category === 'seed') {
      const planted = this.farming.plant(heldItem.id, hit.blockPos, this.inventory, this.itemRegistry)
      if (planted) return
      // Try the adjacent block (clicked top of farmland)
      this.farming.plant(heldItem.id, hit.adjacentPos, this.inventory, this.itemRegistry)
      return
    }

    // Harvest crop (right-click on farmland)
    const harvest = this.farming.tryHarvest(hit.blockPos)
    if (harvest) {
      this.inventory.add(harvest.itemId, harvest.count, this.itemRegistry)
      this.hud.showPickup(this.itemRegistry.getItem(harvest.itemId)?.name ?? harvest.itemId)
      return
    }

    // Open chest
    {
      const [bx, by, bz] = hit.blockPos
      if (this.worldData.get(bx, by, bz) === BLOCK.CHEST) {
        this._openChest(bx, by, bz)
        return
      }
    }

    // Sleep in bed
    {
      const [bx, by, bz] = hit.blockPos
      if (this.worldData.get(bx, by, bz) === BLOCK.BED) {
        this.onSleepInBed?.()
        return
      }
    }

    // Step through a Nether portal
    {
      const [bx, by, bz] = hit.blockPos
      if (this.worldData.get(bx, by, bz) === BLOCK.PORTAL) {
        this.onUsePortal?.()
        return
      }
    }

    // Place block
    if (heldItem?.blockId >= 0) {
      const placed = this.mining.placeBlock(hit.adjacentPos, heldItem.blockId)
      if (placed) {
        this.inventory.removeSlot(this.inventory.hotbarIndex)
      }
    }

  }

  _openChest(bx, by, bz) {
    // Loot table: [itemId, minCount, maxCount, weight]
    const LOOT_COMMON = [
      ['bread',         2, 5,  30],
      ['cooked_meat',   1, 4,  25],
      ['iron_ore',      2, 6,  25],
      ['stick',         4, 12, 20],
      ['string',        2, 6,  18],
      ['bone',          2, 5,  18],
      ['cobblestone',   6, 16, 15],
      ['planks',        4, 10, 15],
      ['wheat_seed',    3, 8,  12],
      ['carrot',        2, 6,  12],
      ['carrot_seed',   2, 5,  10],
      ['potato_seed',   2, 5,  10],
      ['gravel',        4, 10, 10],
    ]
    const LOOT_UNCOMMON = [
      ['iron_ingot',    2, 5,  40],
      ['crystal_shard', 1, 2,  15],
      ['stone_sword',   1, 1,  20],
      ['stone_pickaxe', 1, 1,  18],
      ['stone_axe',     1, 1,  18],
      ['iron_pickaxe',  1, 1,   8],
      ['iron_sword',    1, 1,   6],
      ['glass',         2, 6,  12],
    ]
    const LOOT_RARE = [
      ['crystal_shard', 2, 4,  40],
      ['iron_ingot',    4, 8,  30],
      ['iron_sword',    1, 1,  20],
      ['iron_pickaxe',  1, 1,  18],
      ['crystal_sword', 1, 1,   5],
      ['bread',         3, 8,  20],
    ]

    // Pick tier based on rough distance from spawn (island centre)
    const spawnCx = WORLD_W / 2, spawnCz = WORLD_D / 2
    const dist = Math.sqrt((bx-spawnCx)**2 + (bz-spawnCz)**2)
    const table = dist > 120*4 ? LOOT_RARE : dist > 60*4 ? LOOT_UNCOMMON : LOOT_COMMON

    // Roll 3–5 loot entries using weighted random
    const rolls = 3 + Math.floor(Math.random() * 3)
    const totalWeight = table.reduce((s, e) => s + e[3], 0)
    const picked = []
    const usedIds = new Set()

    for (let roll = 0; roll < rolls; roll++) {
      let r = Math.random() * totalWeight
      for (const entry of table) {
        r -= entry[3]
        if (r <= 0 && !usedIds.has(entry[0])) {
          picked.push(entry)
          usedIds.add(entry[0])
          break
        }
      }
    }

    // Give items and report them
    const names = []
    for (const [id, min, max] of picked) {
      const count = min + Math.floor(Math.random() * (max - min + 1))
      const added = this.inventory.add(id, count, this.itemRegistry)
      if (added !== false) {
        const item = this.itemRegistry.getItem(id)
        names.push(`${count}x ${item?.name ?? id}`)
      }
    }

    // Remove chest from world
    this.worldData.set(bx, by, bz, BLOCK.AIR)
    const cx = Math.floor(bx / 16)
    const cz2 = Math.floor(bz / 16)
    this.worldRenderer.rebuildChunk(cx, cz2)

    // Play sound and show message
    sounds.playBlockBreak()
    this.hud.showPickup(names.length ? `📦 Chest: ${names.join(', ')}` : '📦 Chest was empty')
  }

  _getHeldItem() {
    const slot = this.inventory.selectedSlot
    if (!slot.itemId) return null
    return this.itemRegistry.getItem(slot.itemId)
  }

  // Q — drops one of the currently selected item out into the world as a
  // pickup (see onDropItem / DroppedItemManager), rather than just deleting
  // it, so an accidental press never permanently costs the player anything.
  _dropHeldItem() {
    if (!this.controls.isLocked) return
    const slot = this.inventory.selectedSlot
    if (!slot.itemId) return

    const dir = new THREE.Vector3()
    this.camera.getWorldDirection(dir)
    const dropPos = this.camera.position.clone().add(dir.multiplyScalar(1.5))
    dropPos.y -= 1.0

    this.onDropItem?.(slot.itemId, 1, dropPos)
    this.inventory.removeSlot(this.inventory.hotbarIndex)
  }

  _updateStation() {
    const px = Math.floor(this.camera.position.x)
    const py = Math.floor(this.camera.position.y - 1.8)
    const pz = Math.floor(this.camera.position.z)
    let station = 'hand'

    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        for (let dy = -1; dy <= 1; dy++) {
          const b = this.worldData.get(px + dx, py + dy, pz + dz)
          if (b === BLOCK.CAMPFIRE  && station === 'hand') station = 'campfire'
          if (b === BLOCK.CRAFTING_TABLE && (station === 'hand' || station === 'campfire')) station = 'crafting_table'
          if (b === BLOCK.FORGE) station = 'forge'
        }
      }
    }

    if (station !== this._currentStation) {
      this._currentStation = station
      this.onStationChange?.(station)
    }
  }

  get currentStation() { return this._currentStation }

  attackMob(mob, damage) {
    mob.takeDamage(damage)
  }

  setupAttackListener(getMobsAndBosses) {
    window.addEventListener('mousedown', (e) => {
      if (!this.controls.isLocked || e.button !== 0) return
      const heldItem = this._getHeldItem()
      if (!heldItem?.isSword && !heldItem?.isAxe) return
      const allMobs = getMobsAndBosses()
      const camPos = this.camera.position
      for (const mob of allMobs) {
        if (!mob.dead) {
          const dist = mob.position.distanceTo(camPos)
          if (dist < 4) {
            mob.takeDamage(heldItem.damage)
            // Update player tier
            this.stats.updateTier(heldItem)
            break
          }
        }
      }
    })
  }
}
