import * as THREE from 'three'
import { WORLD_W, WORLD_D } from '../constants.js'
import { MOB_DB } from './MobRegistry.js'
import { MobBase } from './MobBase.js'

const PASSIVE_TYPES = ['cow', 'pig', 'sheep', 'chicken']
const MAX_PASSIVE = 12
const WANDER_INTERVAL = 4   // seconds between direction changes

// Simple wandering AI — no aggro, just roams. Pigs are the exception: they
// always walk toward the player instead of wandering (ported from an
// earlier "companion pig" build — see NOTES.md in the kids-game-hub repo).
class PassiveAI {
  constructor(mob, worldData, player = null) {
    this.mob = mob
    this.worldData = worldData
    this.player = player
    this._wanderTimer = Math.random() * WANDER_INTERVAL
    this._angle = Math.random() * Math.PI * 2
    this._moving = false
  }

  update(dt) {
    if (this.mob.dead) return

    if (this.mob.mobType.id === 'pig' && this.player) {
      this._followPlayer(dt)
      return
    }

    this._wanderTimer -= dt
    if (this._wanderTimer <= 0) {
      this._wanderTimer = WANDER_INTERVAL * (0.5 + Math.random())
      // 60% chance to walk, 40% to stand still
      this._moving = Math.random() < 0.6
      if (this._moving) this._angle += (Math.random() - 0.5) * Math.PI * 1.2
    }

    if (this._moving) {
      const speed = this.mob.mobType.speed
      const pos = this.mob.position
      const nx = Math.cos(this._angle)
      const nz = Math.sin(this._angle)

      const nx2 = pos.x + nx * speed * dt
      const nz2 = pos.z + nz * speed * dt

      // Stay in world bounds
      if (nx2 < 1 || nx2 >= WORLD_W - 1 || nz2 < 1 || nz2 >= WORLD_D - 1) {
        this._angle += Math.PI  // turn around
      } else {
        // Basic obstacle check — stop if wall ahead
        const cx = Math.floor(nx2)
        const cy = Math.floor(pos.y)
        const cz = Math.floor(nz2)
        if (!this.worldData.isSolid(cx, cy, cz)) {
          pos.x = nx2
          pos.z = nz2
          this.mob.mesh.rotation.y = Math.atan2(nx, nz)
        } else {
          this._angle += Math.PI * (0.5 + Math.random() * 0.5)
        }
      }
    }

    // Gravity
    this.mob.applyGravity(dt, this.worldData)
  }

  _followPlayer(dt) {
    const playerPos = this.player.camera.position
    const pos = this.mob.position
    const dx = playerPos.x - pos.x
    const dz = playerPos.z - pos.z
    const dist = Math.sqrt(dx * dx + dz * dz)

    if (dist > 1.2) {
      const speed = this.mob.mobType.speed * 1.6
      const nx2 = pos.x + (dx / dist) * speed * dt
      const nz2 = pos.z + (dz / dist) * speed * dt
      if (!(nx2 < 1 || nx2 >= WORLD_W - 1 || nz2 < 1 || nz2 >= WORLD_D - 1)) {
        const cx = Math.floor(nx2), cy = Math.floor(pos.y), cz = Math.floor(nz2)
        if (!this.worldData.isSolid(cx, cy, cz)) {
          pos.x = nx2
          pos.z = nz2
        }
      }
    }
    this.mob.mesh.rotation.y = Math.atan2(dx, dz)
    this.mob.applyGravity(dt, this.worldData)
  }
}

export class PassiveSpawner {
  constructor(scene, worldData, inventory, itemRegistry, player = null) {
    this.scene = scene
    this.worldData = worldData
    this.inventory = inventory
    this.itemRegistry = itemRegistry
    this.player = player
    this.mobs = []
    this._spawnTimer = 0
    this._initialised = false
    this._companionSpawned = false
  }

  // Call once when day begins (or game starts)
  init() {
    if (this._initialised) return
    this._initialised = true
    // Spawn starting animals spread around the island
    for (let i = 0; i < 8; i++) this._trySpawn()
  }

  setNight(isNight) {
    // Passive mobs persist through night — they just stop spawning more
    this._isNight = isNight
  }

  update(dt) {
    // Update existing passive mobs
    for (let i = this.mobs.length - 1; i >= 0; i--) {
      const { mob, ai } = this.mobs[i]
      if (mob.dead) {
        this.mobs.splice(i, 1)
        continue
      }
      ai.update(dt)
    }

    // Only spawn more during the day
    if (!this._isNight) {
      if (this.mobs.length < MAX_PASSIVE) {
        this._spawnTimer += dt
        if (this._spawnTimer >= 8) {  // one every 8s at day
          this._spawnTimer = 0
          this._trySpawn()
        }
      }
    }

    // A one-time companion pig, spawned right next to the player as soon as
    // a position is available — it and every other pig then follow the
    // player around (see PassiveAI._followPlayer).
    if (!this._companionSpawned && this.player) {
      const playerPos = this.player.camera.position
      const spawnPos = new THREE.Vector3(playerPos.x + 2, playerPos.y, playerPos.z + 2)
      const sy = this.worldData.surfaceY(Math.floor(spawnPos.x), Math.floor(spawnPos.z))
      if (sy >= 0) {
        spawnPos.y = sy + 1
        const mob = new MobBase(MOB_DB.pig, spawnPos, this.scene)
        mob.onDeath = (deadMob) => {
          for (const drop of deadMob.mobType.dropItems) {
            if (Math.random() < drop.chance) {
              this.inventory.add(drop.itemId, drop.count, this.itemRegistry)
            }
          }
        }
        const ai = new PassiveAI(mob, this.worldData, this.player)
        this.mobs.push({ mob, ai })
        this._companionSpawned = true
      }
    }
  }

  _trySpawn() {
    // Pick a random location on grass (not water, not swamp)
    const attempts = 10
    for (let a = 0; a < attempts; a++) {
      const sx = 4 + Math.random() * (WORLD_W - 8)
      const sz = 4 + Math.random() * (WORLD_D - 8)
      const bx = Math.floor(sx)
      const bz = Math.floor(sz)
      const sy = this.worldData.surfaceY(bx, bz)
      if (sy < 5) continue  // skip ocean floor / void

      // Only spawn on grass (block id 1) or dirt (block id 2)
      const surfBlock = this.worldData.get(bx, sy, bz)
      if (surfBlock !== 1 && surfBlock !== 2) continue

      const typeId = PASSIVE_TYPES[Math.floor(Math.random() * PASSIVE_TYPES.length)]
      const mobType = MOB_DB[typeId]
      const spawnPos = new THREE.Vector3(sx, sy + 1, sz)
      const mob = new MobBase(mobType, spawnPos, this.scene)

      mob.onDeath = (deadMob) => {
        for (const drop of deadMob.mobType.dropItems) {
          if (Math.random() < drop.chance) {
            this.inventory.add(drop.itemId, drop.count, this.itemRegistry)
          }
        }
      }

      const ai = new PassiveAI(mob, this.worldData, this.player)
      this.mobs.push({ mob, ai })
      return
    }
  }

  getMobs() {
    return this.mobs.map(m => m.mob)
  }
}
