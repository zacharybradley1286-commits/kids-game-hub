import * as THREE from 'three'
import { MAX_MOBS, MOB_SPAWN_RADIUS, WORLD_W, WORLD_D } from '../constants.js'
import { MOB_DB } from './MobRegistry.js'
import { MobBase } from './MobBase.js'
import { MobAI } from './MobAI.js'

const MOB_TYPES = ['zombie', 'skeleton', 'spider']

export class MobSpawner {
  constructor(scene, worldData, playerController, inventory, itemRegistry) {
    this.scene = scene
    this.worldData = worldData
    this.player = playerController
    this.inventory = inventory
    this.itemRegistry = itemRegistry
    this.mobs = []        // { mob: MobBase, ai: MobAI }
    this._spawnTimer = 0
    this.active = false   // only spawns at night
    this.onMobDeath = null
  }

  setNight(isNight) {
    this.active = isNight
    if (!isNight) this._despawnAll()
  }

  _despawnAll() {
    for (const { mob } of this.mobs) mob.dispose()
    this.mobs = []
  }

  update(dt) {
    // Update existing mobs
    for (let i = this.mobs.length - 1; i >= 0; i--) {
      const { mob, ai } = this.mobs[i]
      if (mob.dead) {
        this.mobs.splice(i, 1)
        continue
      }
      ai.update(dt)
    }

    // Spawn new mobs at night
    if (!this.active) return
    if (this.mobs.length >= MAX_MOBS) return
    this._spawnTimer += dt
    if (this._spawnTimer < 3) return  // spawn one every 3s at night
    this._spawnTimer = 0
    this._trySpawn()
  }

  _trySpawn() {
    const ppos = this.player.camera.position
    const angle = Math.random() * Math.PI * 2
    const dist = 15 + Math.random() * (MOB_SPAWN_RADIUS - 15)
    const sx = ppos.x + Math.cos(angle) * dist
    const sz = ppos.z + Math.sin(angle) * dist
    const bx = Math.floor(sx)
    const bz = Math.floor(sz)
    if (bx < 1 || bx >= WORLD_W - 1 || bz < 1 || bz >= WORLD_D - 1) return
    const sy = this.worldData.surfaceY(bx, bz)
    if (sy < 0) return

    const typeId = MOB_TYPES[Math.floor(Math.random() * MOB_TYPES.length)]
    const mobType = MOB_DB[typeId]
    const spawnPos = new THREE.Vector3(sx, sy + 1, sz)
    const mob = new MobBase(mobType, spawnPos, this.scene)

    mob.onDeath = (deadMob) => {
      // Drop loot
      for (const drop of deadMob.mobType.dropItems) {
        if (Math.random() < drop.chance) {
          this.inventory.add(drop.itemId, drop.count, this.itemRegistry)
        }
      }
      this.onMobDeath?.(deadMob)
    }

    const ai = new MobAI(mob, this.player, this.worldData)
    this.mobs.push({ mob, ai })
  }

  getMobs() {
    return this.mobs.map(m => m.mob)
  }
}
