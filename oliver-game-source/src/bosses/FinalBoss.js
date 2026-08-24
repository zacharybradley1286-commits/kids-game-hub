import * as THREE from 'three'
import { BossBase, mkBox } from './BossBase.js'
import { MobBase } from '../mobs/MobBase.js'
import { MOB_DB } from '../mobs/MobRegistry.js'

const CONFIG = {
  id: 'the_conqueror',
  name: '💀 THE CONQUEROR',
  color: '#1a0a1a',
  health: 600,
  damage: 8,
  speed: 3.0,
  attackRange: 3.0,
  attackCooldown: 1.5,
  scale: [3, 5, 3],
  phases: [0.6, 0.25],
  drops: [],  // winning ends the game
  chaseRange: 30,
}

export class FinalBoss extends BossBase {
  constructor(position, scene, playerController, inventory, itemRegistry, worldData) {
    super(CONFIG, position, scene, playerController, inventory, itemRegistry)
    this.worldData = worldData
    this._currentSpeed = CONFIG.speed
    this._summonTimer = 0
    this._shockwaveTimer = 0
    this._minions = []
    this.onWin = null
  }

  _buildMesh() {
    // ── The Conqueror — massive dark armored demon warlord ────────────────
    // scale [3,5,3], half=2.5. y=0 is mid-body.
    const ARMOR  = '#1a0a12'  // near-black dark steel
    const DARK   = '#0a0508'  // deepest shadow
    const RED    = '#3a0808'  // blood-red plates
    const GOLD   = '#6a3000'  // dark tarnished gold trim
    const BONE   = '#2a1808'  // spiked bits

    // ── Helmet ──
    // Main helmet block
    this._addPart(mkBox(1.1, 0.95, 0.98, ARMOR),   0,   2.18,  0)
    // Face visor (angled slit)
    this._addPart(mkBox(1.12, 0.28, 0.18, DARK),   0,   2.12,  0.5)
    // Visor slit glow strips
    this._addPart(mkBox(0.35, 0.07, 0.06, '#ff0000', '#cc0000', 1.5), -0.22, 2.1, 0.56)
    this._addPart(mkBox(0.35, 0.07, 0.06, '#ff0000', '#cc0000', 1.5),  0.22, 2.1, 0.56)
    // Glowing eyes behind visor
    const eyeL = mkBox(0.16, 0.13, 0.05, '#ff1100', '#cc0000', 2.5)
    this._addPart(eyeL, -0.22, 2.12, 0.52)
    const eyeR = mkBox(0.16, 0.13, 0.05, '#ff1100', '#cc0000', 2.5)
    this._addPart(eyeR,  0.22, 2.12, 0.52)
    this._eyeMats = [eyeL.material, eyeR.material]
    // Cheek guards
    this._addPart(mkBox(0.22, 0.5, 0.35, DARK),  -0.57, 2.1,  0.22)
    this._addPart(mkBox(0.22, 0.5, 0.35, DARK),   0.57, 2.1,  0.22)
    // Back of helmet flared
    this._addPart(mkBox(1.0, 0.6, 0.25, DARK),    0,   2.1,  -0.55)
    // Gold helmet trim
    this._addPart(mkBox(1.18, 0.06, 0.06, GOLD),  0,   2.55,  0)
    // Forehead rune glow
    this._addPart(mkBox(0.2, 0.12, 0.05, '#880000', '#cc0000', 1.0),  0, 2.38, 0.5)
    // Twin curved horns (wider, more impressive)
    const hornL = mkBox(0.2, 0.85, 0.18, BONE)
    hornL.rotation.z = -0.55
    hornL.rotation.x = -0.1
    this._addPart(hornL, -0.48, 2.85, -0.05)
    const hornR = mkBox(0.2, 0.85, 0.18, BONE)
    hornR.rotation.z = 0.55
    hornR.rotation.x = -0.1
    this._addPart(hornR,  0.48, 2.85, -0.05)
    // Horn tips
    this._addPart(mkBox(0.12, 0.3, 0.12, '#4a2010'), -0.78, 3.28, -0.08)
    this._addPart(mkBox(0.12, 0.3, 0.12, '#4a2010'),  0.78, 3.28, -0.08)

    // ── Neck / gorget ──
    this._addPart(mkBox(0.65, 0.3, 0.6, DARK),    0,   1.68,  0)
    // Gorget collar plates
    this._addPart(mkBox(0.85, 0.18, 0.65, ARMOR), 0,   1.55,  0)

    // ── Torso — armored body ──
    this._addPart(mkBox(2.1, 1.9, 1.18, ARMOR),   0,   0.55,  0)
    // Layered chest armor (overlapping plates)
    this._addPart(mkBox(1.85, 1.5, 0.3, RED),     0,   0.62,  0.56)
    this._addPart(mkBox(0.9,  0.8, 0.16, ARMOR),  -0.45, 0.95, 0.7)
    this._addPart(mkBox(0.9,  0.8, 0.16, ARMOR),   0.45, 0.95, 0.7)
    // Center dark soul gem / glow
    const glow = mkBox(0.55, 0.55, 0.12, '#880000', '#ff0000', 1.8)
    this._glowMat = glow.material
    this._addPart(glow, 0, 0.65, 0.72)
    // Gold trim lines on chest
    this._addPart(mkBox(1.85, 0.06, 0.08, GOLD),  0, 1.20, 0.65)
    this._addPart(mkBox(1.85, 0.06, 0.08, GOLD),  0, 0.10, 0.65)
    // Belly plate
    this._addPart(mkBox(1.6, 0.5, 0.25, DARK),    0, 0.02, 0.62)
    // Spine / back plates
    this._addPart(mkBox(0.5, 1.6, 0.2, DARK),     0, 0.6, -0.62)
    this._addPart(mkBox(0.22, 0.35, 0.22, BONE),   0, 1.5, -0.65)
    this._addPart(mkBox(0.18, 0.3,  0.18, BONE),   0, 1.1, -0.65)
    this._addPart(mkBox(0.18, 0.28, 0.18, BONE),   0, 0.7, -0.65)
    // Cape — layered dark cloth behind
    this._addPart(mkBox(1.55, 0.6,  0.12, '#0a0508'), 0,  1.0, -0.72)
    this._addPart(mkBox(1.7,  0.8,  0.12, DARK),      0,  0.3, -0.72)
    this._addPart(mkBox(1.6,  0.8,  0.12, '#100610'), 0, -0.45, -0.72)
    this._addPart(mkBox(1.4,  0.7,  0.1,  '#0a0408'), 0, -1.1, -0.70)
    // Cape tattered ends
    this._addPart(mkBox(0.3, 0.3, 0.08, DARK),   -0.55, -1.6, -0.68)
    this._addPart(mkBox(0.25, 0.35, 0.08, DARK),   0.3, -1.65, -0.68)
    this._addPart(mkBox(0.2, 0.25, 0.08, DARK),   -0.1, -1.7,  -0.68)

    // ── Pauldrons (huge spiked shoulder armor) ──
    this._addPart(mkBox(1.4, 0.6, 1.1, DARK),  -1.65, 1.32, 0)
    this._addPart(mkBox(1.4, 0.6, 1.1, DARK),   1.65, 1.32, 0)
    // Shoulder spikes
    this._addPart(mkBox(0.22, 0.6, 0.22, BONE), -2.15, 1.6,   0)
    this._addPart(mkBox(0.18, 0.5, 0.18, BONE), -1.85, 1.7,   0.22)
    this._addPart(mkBox(0.18, 0.5, 0.18, BONE), -1.85, 1.7,  -0.22)
    this._addPart(mkBox(0.22, 0.6, 0.22, BONE),  2.15, 1.6,   0)
    this._addPart(mkBox(0.18, 0.5, 0.18, BONE),  1.85, 1.7,   0.22)
    this._addPart(mkBox(0.18, 0.5, 0.18, BONE),  1.85, 1.7,  -0.22)
    // Gold pauldron trim
    this._addPart(mkBox(1.42, 0.06, 0.06, GOLD), -1.65, 1.62, 0)
    this._addPart(mkBox(1.42, 0.06, 0.06, GOLD),  1.65, 1.62, 0)

    // ── Left arm (shield arm) ──
    this._addPart(mkBox(0.72, 2.1, 0.72, ARMOR),  -1.62, -0.28, 0)
    // Elbow spike
    this._addPart(mkBox(0.22, 0.4, 0.22, BONE),   -1.62, -0.6, -0.38)
    // Gauntlet
    this._addPart(mkBox(0.85, 0.6, 0.8, DARK),    -1.62, -1.48, 0)
    // Knuckle spikes
    this._addPart(mkBox(0.15, 0.25, 0.14, BONE),  -1.4,  -1.7,  0.35)
    this._addPart(mkBox(0.15, 0.22, 0.14, BONE),  -1.65, -1.72, 0.38)
    this._addPart(mkBox(0.15, 0.2,  0.14, BONE),  -1.88, -1.68, 0.32)
    // Shield strapped to arm
    this._addPart(mkBox(0.08, 1.1, 0.95, RED),     -2.1, -0.22, 0)
    this._addPart(mkBox(0.06, 1.0, 0.85, DARK),    -2.18, -0.22, 0)
    this._addPart(mkBox(0.05, 0.2, 0.2, GOLD),     -2.22, -0.22, 0)  // boss emblem

    // ── Right arm (sword arm) ──
    this._addPart(mkBox(0.72, 2.1, 0.72, ARMOR),   1.62, -0.28, 0)
    // Elbow spike
    this._addPart(mkBox(0.22, 0.4, 0.22, BONE),    1.62, -0.6, -0.38)
    // Gauntlet
    this._addPart(mkBox(0.85, 0.6, 0.8, DARK),     1.62, -1.48, 0)
    this._addPart(mkBox(0.15, 0.22, 0.14, BONE),   1.4,  -1.7,  0.35)
    this._addPart(mkBox(0.15, 0.2,  0.14, BONE),   1.65, -1.72, 0.38)
    this._addPart(mkBox(0.15, 0.18, 0.14, BONE),   1.88, -1.68, 0.32)
    // Giant dark sword (blade + crossguard + grip)
    this._addPart(mkBox(0.22, 2.8, 0.08, DARK),    1.62, -3.3,  0)  // blade
    this._addPart(mkBox(0.08, 2.6, 0.05, '#440000', '#440000', 0.5), 1.62, -3.3, 0) // blood groove
    this._addPart(mkBox(0.9,  0.12, 0.15, DARK),   1.62, -1.98, 0)  // crossguard
    this._addPart(mkBox(0.18, 0.5,  0.14, BONE),   1.62, -2.15, 0)  // grip
    this._addPart(mkBox(0.25, 0.18, 0.18, DARK),   1.62, -2.44, 0)  // pommel

    // ── Legs — heavy armored greaves ──
    this._addPart(mkBox(0.95, 1.5, 0.95, ARMOR),  -0.6, -1.62, 0)
    this._addPart(mkBox(0.95, 1.5, 0.95, ARMOR),   0.6, -1.62, 0)
    // Knee guards
    this._addPart(mkBox(0.68, 0.38, 0.5, RED),    -0.6, -1.12, 0.38)
    this._addPart(mkBox(0.68, 0.38, 0.5, RED),     0.6, -1.12, 0.38)
    // Greave shin plates
    this._addPart(mkBox(0.72, 0.8, 0.2, DARK),    -0.6, -1.65, 0.45)
    this._addPart(mkBox(0.72, 0.8, 0.2, DARK),     0.6, -1.65, 0.45)
    // Sabatons (armored feet)
    this._addPart(mkBox(1.05, 0.22, 1.2, ARMOR),  -0.6, -2.5, 0.1)
    this._addPart(mkBox(1.05, 0.22, 1.2, ARMOR),   0.6, -2.5, 0.1)
    // Toe spike
    this._addPart(mkBox(0.14, 0.14, 0.3, BONE),   -0.6, -2.44, 0.68)
    this._addPart(mkBox(0.14, 0.14, 0.3, BONE),    0.6, -2.44, 0.68)
  }

  _onPhaseChange(phase) {
    if (phase === 1) {
      // Phase 2: enrage — eyes and glow intensify
      this._currentSpeed = CONFIG.speed * 1.5
      if (this._eyeMats) {
        this._eyeMats.forEach(m => { m.emissiveIntensity = 4.0 })
      }
      if (this._glowMat) this._glowMat.emissiveIntensity = 3.0
    }
    if (phase === 2) {
      // Phase 3: all-out — armor goes deep red, max emissive
      this._currentSpeed = CONFIG.speed * 2
      this._parts.forEach(m => { m.material.color.set('#3a0000'); m._origColor = '#3a0000' })
      if (this._eyeMats) {
        this._eyeMats.forEach(m => { m.color.set('#ff4400'); m.emissiveIntensity = 6.0 })
      }
      if (this._glowMat) {
        this._glowMat.color.set('#ff0000')
        this._glowMat.emissiveIntensity = 5.0
      }
    }
  }

  _behaviorUpdate(dt) {
    const playerPos = this.player.camera.position
    const dist = this.position.distanceTo(playerPos)

    // Move toward player
    if (dist > CONFIG.attackRange) {
      this._moveToward(dt, playerPos, this._currentSpeed)
    }

    // Melee
    this._attackTimer -= dt
    if (dist <= CONFIG.attackRange && this._attackTimer <= 0) {
      this.player.stats.takeDamage(CONFIG.damage)
      this._attackTimer = CONFIG.attackCooldown
    }

    // Phase 2+: shockwave
    if (this.currentPhase >= 1) {
      this._shockwaveTimer -= dt
      if (this._shockwaveTimer <= 0) {
        this._shockwaveTimer = 6
        if (dist <= 6) this.player.stats.takeDamage(5)
      }
    }

    // Phase 3: summon minions every 20s
    if (this.currentPhase >= 2) {
      this._summonTimer -= dt
      if (this._summonTimer <= 0) {
        this._summonTimer = 20
        this._summonMinions()
      }
    }

    // Update minions
    for (let i = this._minions.length - 1; i >= 0; i--) {
      const m = this._minions[i]
      if (m.dead) { this._minions.splice(i, 1); continue }
      // Simple chase
      const mx = playerPos.x - m.position.x
      const mz = playerPos.z - m.position.z
      const md = Math.sqrt(mx * mx + mz * mz)
      if (md > 1.5) {
        m.position.x += (mx / md) * 3 * dt
        m.position.z += (mz / md) * 3 * dt
      } else {
        m.takeDamage && this.player.stats.takeDamage(2 * dt)
      }
      m.applyGravity(dt, this.worldData)
    }
  }

  _summonMinions() {
    const types = ['zombie', 'skeleton', 'spider']
    for (const typeId of types) {
      const mobType = MOB_DB[typeId]
      const angle = Math.random() * Math.PI * 2
      const r = 5 + Math.random() * 3
      const spawnPos = new THREE.Vector3(
        this.position.x + Math.cos(angle) * r,
        this.position.y,
        this.position.z + Math.sin(angle) * r
      )
      const mob = new MobBase(mobType, spawnPos, this.scene)
      mob.onDeath = () => {}
      this._minions.push(mob)
    }
  }

  _die() {
    // Despawn all minions
    for (const m of this._minions) m.dispose?.()
    this._minions = []
    const onWin = this.onWin
    super._die()
    onWin?.()
  }
}
