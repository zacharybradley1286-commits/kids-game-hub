import { BossBase, mkBox } from './BossBase.js'

const CONFIG = {
  id: 'stone_golem',
  name: '🪨 Stone Golem',
  color: '#888888',
  health: 300,
  damage: 6,
  speed: 1.5,
  attackRange: 2.5,
  attackCooldown: 3.0,
  scale: [2.5, 4, 2.5],
  phases: [0.5],
  minTier: 3,   // requires iron tools to damage effectively
  drops: [{ itemId: 'golem_core', count: 1 }],
  chaseRange: 18,
  aggroZoneRadius: 14,  // only aggros when player climbs the mountain
}

export class BossMountain extends BossBase {
  constructor(position, scene, playerController, inventory, itemRegistry) {
    super(CONFIG, position, scene, playerController, inventory, itemRegistry)
    this._currentSpeed = CONFIG.speed
    this._stomp = 0
  }

  _buildMesh() {
    // ── Stone Golem — ancient animated rock construct ─────────────────────
    // scale [2.5,4,2.5], half=2. y=0 is mid-body.
    const STONE  = '#8a9082'  // main stone
    const DARK   = '#4a5040'  // deep crevices / shadow
    const GRAVEL = '#6a7060'  // rough surface plates
    const CRACK  = '#2e3428'  // crack lines

    // ── Head — angular slab-like ──
    this._addPart(mkBox(1.2, 0.92, 0.95, STONE),   0,    1.55,  0)
    // Heavy brow slab
    this._addPart(mkBox(1.35, 0.22, 0.38, DARK),   0,    1.9,   0.2)
    // Glowing blue eyes — deep inset
    const eyeL = mkBox(0.24, 0.2, 0.16, '#44aaff', '#2266cc', 2.0)
    this._addPart(eyeL,  -0.32, 1.65, 0.44)
    const eyeR = mkBox(0.24, 0.2, 0.16, '#44aaff', '#2266cc', 2.0)
    this._addPart(eyeR,   0.32, 1.65, 0.44)
    this._eyeMats = [eyeL.material, eyeR.material]
    // Eye socket rims (dark stone)
    this._addPart(mkBox(0.35, 0.3, 0.1, DARK),  -0.32, 1.65, 0.5)
    this._addPart(mkBox(0.35, 0.3, 0.1, DARK),   0.32, 1.65, 0.5)
    // Jagged stone "mouth" gash
    this._addPart(mkBox(0.7,  0.1, 0.1, CRACK),    0,   1.38,  0.48)
    this._addPart(mkBox(0.18, 0.16, 0.08, CRACK), -0.22, 1.34, 0.48)
    this._addPart(mkBox(0.18, 0.16, 0.08, CRACK),  0.22, 1.34, 0.48)
    // Rock shards jutting from head top
    this._addPart(mkBox(0.2, 0.35, 0.2, DARK),  -0.3, 2.06, -0.1)
    this._addPart(mkBox(0.18,0.28, 0.18, DARK),  0.25, 2.1,   0.05)
    this._addPart(mkBox(0.14,0.22, 0.14, DARK),  0.0,  2.02, -0.25)

    // ── Torso — layered stone slabs ──
    this._addPart(mkBox(2.0, 1.7, 1.15, STONE),   0,   0.22,  0)
    // Front chest plates (overlapping slabs)
    this._addPart(mkBox(0.85, 0.75, 0.28, GRAVEL), -0.45, 0.65,  0.5)
    this._addPart(mkBox(0.85, 0.75, 0.28, GRAVEL),  0.45, 0.65,  0.5)
    this._addPart(mkBox(1.5,  0.4,  0.22, DARK),    0,   0.12,  0.56)
    // Crystal core (glowing, exposed in chest center)
    const crystal = mkBox(0.55, 0.55, 0.28, '#44ccff', '#2288ff', 2.2)
    this._crystalMat = crystal.material
    this._addPart(crystal,  0,   0.3,   0.56)
    // Crystal veins radiating from core
    this._addPart(mkBox(0.8, 0.07, 0.08, '#2266cc', '#2266cc', 0.8),  0,   0.58, 0.55)
    this._addPart(mkBox(0.06, 0.6, 0.06, '#2266cc', '#2266cc', 0.8),  0,   0.1,  0.55)
    // Back — rough rubble
    this._addPart(mkBox(0.4, 0.5, 0.28, DARK),  -0.6, 0.7,  -0.55)
    this._addPart(mkBox(0.35, 0.42, 0.25, DARK),  0.5, 0.4,  -0.55)
    this._addPart(mkBox(0.28, 0.35, 0.22, GRAVEL), 0.0, 0.95, -0.55)
    // Crack lines on torso front
    this._addPart(mkBox(0.06, 0.8, 0.05, CRACK),  -0.2, 0.25, 0.58)
    this._addPart(mkBox(0.06, 0.6, 0.05, CRACK),   0.3, 0.15, 0.58)

    // ── Shoulders — massive angular slabs ──
    this._addPart(mkBox(1.3, 0.65, 1.0, DARK),   -1.65, 0.95, 0)
    this._addPart(mkBox(1.3, 0.65, 1.0, DARK),    1.65, 0.95, 0)
    // Rock spikes on shoulders
    this._addPart(mkBox(0.22, 0.55, 0.22, STONE), -2.12, 1.22, 0)
    this._addPart(mkBox(0.18, 0.44, 0.18, STONE), -1.85, 1.3,  0.22)
    this._addPart(mkBox(0.22, 0.55, 0.22, STONE),  2.12, 1.22, 0)
    this._addPart(mkBox(0.18, 0.44, 0.18, STONE),  1.85, 1.3,  0.22)

    // ── Arms — thick stone columns ──
    const armL = mkBox(0.75, 1.9, 0.75, GRAVEL)
    armL.rotation.z = -0.12
    this._addPart(armL, -1.5, -0.35, 0)
    // Left elbow slab
    this._addPart(mkBox(0.6, 0.42, 0.5, DARK),  -1.58, -0.55, 0)
    // Left boulder fist
    this._addPart(mkBox(1.0, 0.85, 0.95, STONE), -1.62, -1.55, 0)
    this._addPart(mkBox(0.35, 0.28, 0.3, DARK),  -1.35, -1.82, 0.35)
    this._addPart(mkBox(0.3,  0.25, 0.28, DARK), -1.72, -1.82, 0.35)
    this._addPart(mkBox(0.28, 0.22, 0.25, DARK), -2.00, -1.78, 0.2)

    const armR = mkBox(0.75, 1.9, 0.75, GRAVEL)
    armR.rotation.z = 0.12
    this._addPart(armR, 1.5, -0.35, 0)
    // Right elbow slab
    this._addPart(mkBox(0.6, 0.42, 0.5, DARK),   1.58, -0.55, 0)
    // Right boulder fist
    this._addPart(mkBox(1.0, 0.85, 0.95, STONE),  1.62, -1.55, 0)
    this._addPart(mkBox(0.35, 0.28, 0.3, DARK),   1.35, -1.82, 0.35)
    this._addPart(mkBox(0.3,  0.25, 0.28, DARK),  1.72, -1.82, 0.35)
    this._addPart(mkBox(0.28, 0.22, 0.25, DARK),  2.00, -1.78, 0.2)

    // ── Legs — wide stone pillars ──
    this._addPart(mkBox(0.92, 1.1, 0.92, GRAVEL),  -0.58, -1.52, 0)
    this._addPart(mkBox(0.92, 1.1, 0.92, GRAVEL),   0.58, -1.52, 0)
    // Kneecap boulders
    this._addPart(mkBox(0.52, 0.42, 0.38, DARK),  -0.58, -1.18, 0.44)
    this._addPart(mkBox(0.52, 0.42, 0.38, DARK),   0.58, -1.18, 0.44)
    // Feet — wide flat slabs
    this._addPart(mkBox(1.1, 0.28, 1.2, STONE),  -0.58, -2.22, 0.12)
    this._addPart(mkBox(1.1, 0.28, 1.2, STONE),   0.58, -2.22, 0.12)
    // Rock rubble around feet
    this._addPart(mkBox(0.28, 0.2, 0.28, DARK),  -1.0,  -2.22, 0.3)
    this._addPart(mkBox(0.22, 0.18, 0.22, DARK),  0.95,  -2.22, 0.28)
    this._addPart(mkBox(0.2,  0.16, 0.2,  DARK),  0.0,   -2.22, 0.7)
  }

  _onPhaseChange(phase) {
    if (phase === 1) {
      // Sheds stone armor — faster, cracks glow, eyes flare
      this._currentSpeed = CONFIG.speed * 2.2
      this._parts.forEach(m => { m.material.color.set('#c0c8b8'); m._origColor = '#c0c8b8' })
      if (this._crystalMat) {
        this._crystalMat.color.set('#88ffff')
        this._crystalMat.emissiveIntensity = 4.0
      }
      if (this._eyeMats) {
        this._eyeMats.forEach(m => { m.emissiveIntensity = 4.0 })
      }
    }
  }

  _behaviorUpdate(dt) {
    const playerPos = this.player.camera.position
    const dx = playerPos.x - this.position.x
    const dz = playerPos.z - this.position.z
    const dist = Math.sqrt(dx * dx + dz * dz)

    if (dist > CONFIG.attackRange) {
      this._moveToward(dt, playerPos, this._currentSpeed)
    }

    this._attackTimer -= dt
    if (dist <= CONFIG.attackRange && this._attackTimer <= 0) {
      this.player.stats.takeDamage(CONFIG.damage)
      this._attackTimer = CONFIG.attackCooldown
    }

    // Stomp shockwave when in phase 2
    if (this.currentPhase >= 1) {
      this._stomp -= dt
      if (this._stomp <= 0) {
        this._stomp = 5
        if (dist <= 5) this.player.stats.takeDamage(4)
      }
    }
  }

  takeDamage(amount) {
    // Reduce damage if player tier < 3 (iron)
    const playerTier = this.player.stats.tier
    if (playerTier < CONFIG.minTier) amount *= 0.15
    super.takeDamage(amount)
  }
}
