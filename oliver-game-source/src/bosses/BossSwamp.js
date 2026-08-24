import * as THREE from 'three'
import { BossBase, mkBox } from './BossBase.js'

const CONFIG = {
  id: 'swamp_witch',
  name: '🔮 Swamp Witch',
  color: '#6a1a8a',
  health: 150,
  damage: 3,
  speed: 2.0,
  attackRange: 12,     // ranged
  attackCooldown: 2.5,
  scale: [1, 2, 1],
  phases: [0.4],
  drops: [{ itemId: 'witch_eye', count: 1 }],
  chaseRange: 18,
  aggroZoneRadius: 16,  // only aggros when player enters the swamp area
}

class Projectile {
  constructor(origin, target, scene) {
    const geo = new THREE.SphereGeometry(0.3, 6, 6)
    const mat = new THREE.MeshBasicMaterial({ color: '#aa44ff' })
    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.position.copy(origin)
    const dir = new THREE.Vector3().subVectors(target, origin).normalize()
    this.velocity = dir.multiplyScalar(12)
    scene.add(this.mesh)
    this.scene = scene
    this.alive = true
    this._life = 4
  }

  update(dt, playerPos, onHit) {
    if (!this.alive) return
    this.mesh.position.addScaledVector(this.velocity, dt)
    this._life -= dt
    if (this._life <= 0) { this._destroy(); return }
    if (this.mesh.position.distanceTo(playerPos) < 1.5) {
      onHit()
      this._destroy()
    }
  }

  _destroy() {
    this.alive = false
    this.scene.remove(this.mesh)
    this.mesh.geometry.dispose()
  }
}

export class BossSwamp extends BossBase {
  constructor(position, scene, playerController, inventory, itemRegistry) {
    super(CONFIG, position, scene, playerController, inventory, itemRegistry)
    this._projectiles = []
    this._currentSpeed = CONFIG.speed
  }

  _buildMesh() {
    // ── Swamp Witch — gaunt robed spellcaster ────────────────────────────
    // scale [1,2,1], half=1. y=0 is mid-body.
    const SKIN  = '#4a3820'  // weathered greenish skin
    const ROBE1 = '#5a1a6a'  // purple robe upper
    const ROBE2 = '#3a0a50'  // darker robe lower
    const HAT   = '#18080e'  // near-black hat
    const HAIR  = '#1a1008'  // dark grey-brown hair
    const GOLD  = '#aa8800'  // belt buckle, trim

    // ── Hat ──
    // Brim (wide, slightly tilted)
    this._addPart(mkBox(1.05, 0.08, 1.0, HAT),    0,    1.22,  0)
    // Hat cone (tapers: wide base → narrow tip via stacked boxes)
    this._addPart(mkBox(0.68, 0.28, 0.65, HAT),   0,    1.38,  0)
    this._addPart(mkBox(0.50, 0.28, 0.48, HAT),   0,    1.62,  0)
    this._addPart(mkBox(0.34, 0.28, 0.34, HAT),   0,    1.86,  0)
    this._addPart(mkBox(0.18, 0.28, 0.18, HAT),   0,    2.08, -0.04)
    this._addPart(mkBox(0.08, 0.2,  0.08, HAT),   0,    2.28, -0.08)
    // Hat band / gold trim
    this._addPart(mkBox(0.72, 0.07, 0.68, GOLD),  0,    1.26,  0)
    // Belt buckle on hat
    this._addPart(mkBox(0.14, 0.1, 0.05, GOLD),   0,    1.27,  0.34)

    // ── Head ──
    this._addPart(mkBox(0.46, 0.48, 0.44, SKIN),  0,    0.80,  0)
    // Sunken cheekbones
    this._addPart(mkBox(0.1, 0.14, 0.08, '#3a2810'), -0.22, 0.80, 0.2)
    this._addPart(mkBox(0.1, 0.14, 0.08, '#3a2810'),  0.22, 0.80, 0.2)
    // Glowing green eyes
    this._addPart(mkBox(0.1, 0.1, 0.06, '#44ff44', '#00aa00', 1.2), -0.13, 0.85, 0.23)
    this._addPart(mkBox(0.1, 0.1, 0.06, '#44ff44', '#00aa00', 1.2),  0.13, 0.85, 0.23)
    // Hooked nose
    this._addPart(mkBox(0.08, 0.13, 0.18, '#3a2810'),  0,   0.79,  0.24)
    this._addPart(mkBox(0.1,  0.07, 0.1,  '#3a2810'),  0,   0.74,  0.31) // nose tip
    // Thin lipped mouth
    this._addPart(mkBox(0.22, 0.04, 0.05, '#2a1808'),  0,   0.68,  0.22)
    // Chin wart
    this._addPart(mkBox(0.06, 0.06, 0.06, '#3a2808'),  0.06, 0.62, 0.22)
    // Grey hair strands draped to shoulder (each side)
    this._addPart(mkBox(0.12, 0.48, 0.08, HAIR),  -0.24, 0.65, -0.1)
    this._addPart(mkBox(0.1,  0.55, 0.06, HAIR),  -0.30, 0.60, -0.05)
    this._addPart(mkBox(0.12, 0.48, 0.08, HAIR),   0.24, 0.65, -0.1)
    this._addPart(mkBox(0.1,  0.55, 0.06, HAIR),   0.30, 0.60, -0.05)

    // ── Neck ──
    this._addPart(mkBox(0.22, 0.2, 0.2, SKIN),  0, 0.52,  0)

    // ── Torso / robes ──
    this._addPart(mkBox(0.60, 0.58, 0.36, ROBE1),  0,  0.22,  0)
    // Collar
    this._addPart(mkBox(0.48, 0.12, 0.14, '#6a2a7a'),  0,  0.52,  0.12)
    // Gold belt
    this._addPart(mkBox(0.64, 0.1, 0.38, GOLD),   0, -0.08,  0)
    // Belt pouches
    this._addPart(mkBox(0.14, 0.14, 0.1, '#4a3010'), -0.22, -0.08, 0.18)
    this._addPart(mkBox(0.12, 0.16, 0.1, '#4a3010'),  0.22, -0.09, 0.18)
    // Robe skirt — flares out, layered
    this._addPart(mkBox(0.72, 0.40, 0.44, ROBE2),  0, -0.35,  0)
    this._addPart(mkBox(0.82, 0.40, 0.52, ROBE2),  0, -0.65,  0)
    this._addPart(mkBox(0.78, 0.36, 0.50, '#2a0840'),  0, -0.94,  0)
    // Robe hem tatters
    this._addPart(mkBox(0.2, 0.15, 0.08, ROBE2),  -0.28, -1.12, 0.18)
    this._addPart(mkBox(0.16, 0.18, 0.07, ROBE2),  0.22, -1.13, 0.2)
    this._addPart(mkBox(0.12, 0.12, 0.07, ROBE2),  0.0,  -1.14, 0.22)

    // ── Left arm (raised, casting) ──
    const armL = mkBox(0.18, 0.58, 0.18, SKIN)
    armL.rotation.z = -0.6
    armL.rotation.x = -0.2
    this._addPart(armL, -0.40, 0.22, 0)
    // Bony hand left — clawed fingers
    this._addPart(mkBox(0.2, 0.18, 0.18, SKIN),  -0.64, -0.04,  0)
    this._addPart(mkBox(0.06, 0.16, 0.05, SKIN), -0.55, -0.20,  0.06)
    this._addPart(mkBox(0.06, 0.16, 0.05, SKIN), -0.64, -0.22,  0.04)
    this._addPart(mkBox(0.06, 0.16, 0.05, SKIN), -0.73, -0.20,  0.04)
    // Glowing orb in left hand
    this._addPart(mkBox(0.22, 0.22, 0.22, '#aa44ff', '#6600cc', 1.2), -0.64, -0.38, 0)

    // ── Right arm (holds staff) ──
    const armR = mkBox(0.18, 0.58, 0.18, SKIN)
    armR.rotation.z = 0.25
    this._addPart(armR, 0.38, 0.18, 0)
    // Bony hand right
    this._addPart(mkBox(0.2, 0.18, 0.18, SKIN),   0.54, -0.14,  0)
    // Staff shaft
    this._addPart(mkBox(0.07, 1.6, 0.07, '#3a2010'),  0.56, -0.95, 0)
    // Staff crook / top knob
    this._addPart(mkBox(0.2,  0.1, 0.1,  '#4a3010'),  0.56, -1.78, 0)
    this._addPart(mkBox(0.1,  0.1, 0.2,  '#4a3010'),  0.56, -1.78, 0)
    // Crystal on staff tip
    this._addPart(mkBox(0.16, 0.22, 0.16, '#44ffaa', '#00cc66', 1.5),  0.56, -1.95, 0)
  }

  _onPhaseChange(phase) {
    if (phase === 1) {
      // Enrage: speed doubles, robes darken
      this._currentSpeed = CONFIG.speed * 2
      this._parts.forEach(m => { m.material.color.set('#330044'); m._origColor = '#330044' })
    }
  }

  _behaviorUpdate(dt) {
    const playerPos = this.player.camera.position
    const dist = this.position.distanceTo(playerPos)

    // Keep distance — circles player
    if (dist < 8) {
      this._moveToward(dt, playerPos, -this._currentSpeed)  // back away
    } else if (dist > 14) {
      this._moveToward(dt, playerPos, this._currentSpeed)
    }

    // Shoot projectile
    this._attackTimer -= dt
    if (this._attackTimer <= 0 && dist <= CONFIG.attackRange) {
      this._attackTimer = CONFIG.attackCooldown
      const proj = new Projectile(
        new THREE.Vector3(this.position.x, this.position.y + 1, this.position.z),
        new THREE.Vector3(playerPos.x, playerPos.y, playerPos.z),
        this.scene
      )
      this._projectiles.push(proj)
    }

    // Update projectiles
    for (let i = this._projectiles.length - 1; i >= 0; i--) {
      const p = this._projectiles[i]
      p.update(dt, this.player.camera.position, () => {
        this.player.stats.takeDamage(CONFIG.damage)
      })
      if (!p.alive) this._projectiles.splice(i, 1)
    }
  }
}
