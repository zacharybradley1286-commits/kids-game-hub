import * as THREE from 'three'
import { WORLD_W, WORLD_D, SEA_LEVEL } from '../constants.js'
import { BLOCK } from '../world/BlockRegistry.js'
import { MOB_DB } from './MobRegistry.js'
import { MobBase } from './MobBase.js'

const MAX_SEA_LIFE = 16
const FISH_CHANCE = 0.8   // vs. shark, when spawning
const WANDER_INTERVAL = 3

function isWater(worldData, x, y, z) {
  return worldData.get(Math.floor(x), Math.floor(y), Math.floor(z)) === BLOCK.WATER
}

// Free-swimming AI — no gravity, wanders in 3D within water, sharks chase
// the player when they're close (in or near the water).
class SeaAI {
  constructor(mob, worldData, player) {
    this.mob = mob
    this.worldData = worldData
    this.player = player
    this._wanderTimer = Math.random() * WANDER_INTERVAL
    this._dir = new THREE.Vector3(Math.random() - 0.5, (Math.random() - 0.5) * 0.3, Math.random() - 0.5).normalize()
    this._attackTimer = 0
  }

  update(dt) {
    if (this.mob.dead) return
    const mobType = this.mob.mobType
    const pos = this.mob.position

    if (mobType.id === 'shark' && this.player) {
      const ppos = this.player.camera.position
      const dx = ppos.x - pos.x, dy = ppos.y - pos.y, dz = ppos.z - pos.z
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
      const playerInWater = this.worldData.get(Math.floor(ppos.x), Math.floor(ppos.y - 1), Math.floor(ppos.z)) === BLOCK.WATER
      if (playerInWater && dist < mobType.detectionRange) {
        if (dist <= mobType.attackRange) {
          this._attackTimer -= dt
          if (this._attackTimer <= 0) {
            this.player.stats.takeDamage(mobType.damage)
            this._attackTimer = mobType.attackCooldown
          }
        } else {
          const nx = dx / dist, ny = dy / dist, nz = dz / dist
          this._tryMove(pos, nx, ny, nz, mobType.speed, dt)
        }
        this.mob.mesh.rotation.y = Math.atan2(dx, dz)
        return
      }
    }

    this._wanderTimer -= dt
    if (this._wanderTimer <= 0) {
      this._wanderTimer = WANDER_INTERVAL * (0.6 + Math.random())
      this._dir.set(Math.random() - 0.5, (Math.random() - 0.5) * 0.3, Math.random() - 0.5).normalize()
    }
    this._tryMove(pos, this._dir.x, this._dir.y, this._dir.z, mobType.speed * 0.5, dt)
    this.mob.mesh.rotation.y = Math.atan2(this._dir.x, this._dir.z)
  }

  _tryMove(pos, nx, ny, nz, speed, dt) {
    const nextX = pos.x + nx * speed * dt
    const nextY = Math.min(SEA_LEVEL - 0.5, pos.y + ny * speed * dt)
    const nextZ = pos.z + nz * speed * dt
    if (isWater(this.worldData, nextX, nextY, nextZ)) {
      pos.x = nextX; pos.y = nextY; pos.z = nextZ
    } else {
      // Blocked — pick a new direction next tick
      this._wanderTimer = 0
    }
  }
}

export class SeaLifeSpawner {
  constructor(scene, worldData, inventory, itemRegistry, player) {
    this.scene = scene
    this.worldData = worldData
    this.inventory = inventory
    this.itemRegistry = itemRegistry
    this.player = player
    this.mobs = []
    this._spawnTimer = 0
    this._initialised = false
  }

  init() {
    if (this._initialised) return
    this._initialised = true
    for (let i = 0; i < 10; i++) this._trySpawn()
  }

  update(dt) {
    const ppos = this.player?.camera?.position
    for (let i = this.mobs.length - 1; i >= 0; i--) {
      const { mob, ai } = this.mobs[i]
      if (mob.dead) { this.mobs.splice(i, 1); continue }
      // Despawn distant sea life so the population slot cap doesn't stay
      // stuck full of mobs the player will never actually swim near.
      if (ppos) {
        const dx = mob.position.x - ppos.x, dz = mob.position.z - ppos.z
        if (dx * dx + dz * dz > 130 * 130) { mob.dispose(); this.mobs.splice(i, 1); continue }
      }
      ai.update(dt)
    }
    if (this.mobs.length < MAX_SEA_LIFE) {
      this._spawnTimer += dt
      if (this._spawnTimer >= 6) {
        this._spawnTimer = 0
        this._trySpawn()
      }
    }
  }

  _trySpawn() {
    // Prefer spawning in water near the player, like hostile/passive mobs
    // do on land — a fully random pick across the whole huge ocean almost
    // never lands anywhere the player can actually see.
    const ppos = this.player?.camera?.position
    const attempts = 16
    for (let a = 0; a < attempts; a++) {
      let sx, sz
      if (ppos && a < attempts - 4) {
        const angle = Math.random() * Math.PI * 2
        const dist = 10 + Math.random() * 45
        sx = ppos.x + Math.cos(angle) * dist
        sz = ppos.z + Math.sin(angle) * dist
      } else {
        sx = 2 + Math.random() * (WORLD_W - 4)
        sz = 2 + Math.random() * (WORLD_D - 4)
      }
      const bx = Math.floor(sx), bz = Math.floor(sz)
      if (bx < 1 || bx >= WORLD_W - 1 || bz < 1 || bz >= WORLD_D - 1) continue
      const sy = this.worldData.surfaceY(bx, bz)
      if (sy < 0 || this.worldData.get(bx, sy, bz) !== BLOCK.WATER) continue

      const typeId = Math.random() < FISH_CHANCE ? 'fish' : 'shark'
      const mobType = MOB_DB[typeId]
      const spawnPos = new THREE.Vector3(sx, sy - 1, sz)
      const mob = new MobBase(mobType, spawnPos, this.scene)

      mob.onDeath = (deadMob) => {
        for (const drop of deadMob.mobType.dropItems) {
          if (Math.random() < drop.chance) {
            this.inventory.add(drop.itemId, drop.count, this.itemRegistry)
          }
        }
      }

      const ai = new SeaAI(mob, this.worldData, this.player)
      this.mobs.push({ mob, ai })
      return
    }
  }

  getMobs() {
    return this.mobs.map(m => m.mob)
  }

  clear() {
    for (const { mob } of this.mobs) mob.dispose()
    this.mobs = []
  }
}
