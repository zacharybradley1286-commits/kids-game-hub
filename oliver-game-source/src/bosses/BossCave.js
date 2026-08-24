import { BossBase, mkBox } from './BossBase.js'

const CONFIG = {
  id: 'cave_troll',
  name: '⚡ Cave Troll',
  color: '#3d6e3d',
  health: 200,
  damage: 4,
  speed: 2.5,
  attackRange: 2.5,
  attackCooldown: 2.0,
  scale: [2, 3, 2],
  phases: [0.6, 0.3],
  drops: [{ itemId: 'troll_fang', count: 1 }],
  chaseRange: 18,
  aggroZoneRadius: 20,  // only aggros when player enters the cave area
}

export class BossCave extends BossBase {
  constructor(position, scene, playerController, inventory, itemRegistry, mobSpawner) {
    super(CONFIG, position, scene, playerController, inventory, itemRegistry)
    this.mobSpawner = mobSpawner
    this._slamTimer = 0
  }

  _buildMesh() {
    // ── Cave Troll — massive hunched rock-brute ──────────────────────────
    // scale [2,3,2], half=1.5. y=0 is mid-body.
    const SKIN  = '#4a5040'  // mossy stone grey-green
    const DARK  = '#2e3828'  // darker crevices
    const ROCK  = '#3a4030'  // rock chunks
    const MOSS  = '#3a5a2a'  // mossy patches

    // ── Head ──
    this._addPart(mkBox(1.35, 1.05, 1.1, SKIN),   0,     1.52,  0)
    // Heavy protruding brow ridge
    this._addPart(mkBox(1.5,  0.28, 0.45, DARK),   0,     1.88,  0.25)
    // Sunken eye sockets
    this._addPart(mkBox(0.32, 0.22, 0.12, DARK),  -0.3,  1.75,  0.5)
    this._addPart(mkBox(0.32, 0.22, 0.12, DARK),   0.3,  1.75,  0.5)
    // Tiny yellow eyes
    this._addPart(mkBox(0.16, 0.14, 0.08, '#cc9900'),  -0.3, 1.76, 0.56)
    this._addPart(mkBox(0.16, 0.14, 0.08, '#cc9900'),   0.3, 1.76, 0.56)
    // Wide flat nose
    this._addPart(mkBox(0.38, 0.2, 0.22, ROCK),   0,     1.58,  0.52)
    // Wide jaw
    this._addPart(mkBox(1.1,  0.32, 0.55, ROCK),   0,     1.14,  0.35)
    // Two upward tusks
    this._addPart(mkBox(0.12, 0.38, 0.1, '#d4c88a'), -0.28, 1.05, 0.52)
    this._addPart(mkBox(0.12, 0.38, 0.1, '#d4c88a'),  0.28, 1.05, 0.52)
    // Ear flaps
    this._addPart(mkBox(0.18, 0.4, 0.12, DARK),  -0.75, 1.6,  0)
    this._addPart(mkBox(0.18, 0.4, 0.12, DARK),   0.75, 1.6,  0)

    // ── Neck ──
    this._addPart(mkBox(0.75, 0.3, 0.7, ROCK),    0,     1.0,   0)

    // ── Torso ──
    this._addPart(mkBox(2.1,  1.7, 1.05, SKIN),   0,     0.2,   0)
    // Barrel belly
    this._addPart(mkBox(1.8,  1.05, 0.45, SKIN),  0,    -0.25,  0.44)
    // Chest muscle plates
    this._addPart(mkBox(0.7,  0.55, 0.18, DARK),  -0.45, 0.55,  0.5)
    this._addPart(mkBox(0.7,  0.55, 0.18, DARK),   0.45, 0.55,  0.5)
    // Mossy patches on body
    this._addPart(mkBox(0.55, 0.35, 0.12, MOSS),  -0.6,  0.1,   0.5)
    this._addPart(mkBox(0.4,  0.28, 0.12, MOSS),   0.7,  0.4,   0.48)
    this._addPart(mkBox(0.45, 0.3,  0.12, MOSS),   0.2, -0.3,   0.5)
    // Rock growths on back
    this._addPart(mkBox(0.35, 0.5, 0.3, ROCK),    -0.6,  0.6,  -0.5)
    this._addPart(mkBox(0.28, 0.4, 0.28, ROCK),    0.5,  0.3,  -0.5)
    this._addPart(mkBox(0.22, 0.35, 0.22, ROCK),   0.0,  0.8,  -0.5)

    // ── Left shoulder & arm (longer, dragging knuckles) ──
    this._addPart(mkBox(0.85, 0.7, 0.8, DARK),   -1.25,  0.85,  0)
    const armL = mkBox(0.72, 2.15, 0.72, SKIN)
    armL.rotation.z = -0.28
    this._addPart(armL, -1.45, -0.35, 0)
    // Elbow bump
    this._addPart(mkBox(0.4, 0.35, 0.35, ROCK),  -1.55, -0.5,  0)
    // Fist with knuckle rocks
    this._addPart(mkBox(0.85, 0.7, 0.8, ROCK),   -1.65, -1.6,  0)
    this._addPart(mkBox(0.2,  0.2, 0.2, DARK),   -1.45, -1.82, 0.3)
    this._addPart(mkBox(0.2,  0.2, 0.2, DARK),   -1.72, -1.82, 0.15)
    this._addPart(mkBox(0.18, 0.18,0.18,DARK),   -1.88, -1.82, -0.1)

    // ── Right shoulder & arm (holds crude rock club) ──
    this._addPart(mkBox(0.85, 0.7, 0.8, DARK),    1.25,  0.85,  0)
    const armR = mkBox(0.72, 2.15, 0.72, SKIN)
    armR.rotation.z = 0.28
    this._addPart(armR, 1.45, -0.35, 0)
    // Elbow bump
    this._addPart(mkBox(0.4, 0.35, 0.35, ROCK),   1.55, -0.5,  0)
    // Fist
    this._addPart(mkBox(0.8, 0.65, 0.75, ROCK),   1.62, -1.58,  0)
    // Stone club handle
    this._addPart(mkBox(0.18, 1.0, 0.18, DARK),   1.62, -2.3,  0)
    // Club head (heavy rock)
    this._addPart(mkBox(0.55, 0.55, 0.55, ROCK),  1.62, -2.95,  0)
    this._addPart(mkBox(0.2,  0.5,  0.2,  DARK),  1.62, -3.1,  -0.1)

    // ── Legs (short, thick, bow-legged) ──
    this._addPart(mkBox(0.95, 1.15, 0.95, DARK),  -0.58, -1.55,  0)
    this._addPart(mkBox(0.95, 1.15, 0.95, DARK),   0.58, -1.55,  0)
    // Kneecap rocks
    this._addPart(mkBox(0.45, 0.35, 0.3, ROCK),  -0.58, -1.2,  0.42)
    this._addPart(mkBox(0.45, 0.35, 0.3, ROCK),   0.58, -1.2,  0.42)
    // Big flat feet with toe bumps
    this._addPart(mkBox(1.05, 0.22, 1.15, ROCK),  -0.58, -2.2,  0.12)
    this._addPart(mkBox(1.05, 0.22, 1.15, ROCK),   0.58, -2.2,  0.12)
    // Toe nubs
    for (const [tx, tz] of [[-0.72, 0.55],[-0.45, 0.58],[-0.18, 0.57]]) {
      this._addPart(mkBox(0.2, 0.15, 0.15, DARK), tx, -2.2, tz)
    }
    for (const [tx, tz] of [[0.18, 0.55],[0.45, 0.58],[0.72, 0.57]]) {
      this._addPart(mkBox(0.2, 0.15, 0.15, DARK), tx, -2.2, tz)
    }
  }

  _onPhaseChange(phase) {
    if (phase === 1) {
      // Phase 2: enrage — turn stone grey, summon zombies
      this._parts.forEach(m => { m.material.color.set('#bbbbbb'); m._origColor = '#bbbbbb' })
      for (let i = 0; i < 3; i++) {
        this.mobSpawner._trySpawn?.()
      }
    }
    if (phase === 2) {
      // Phase 3: ground slam
      this._slamTimer = 0
    }
  }

  _behaviorUpdate(dt) {
    const dx = this.player.camera.position.x - this.position.x
    const dz = this.player.camera.position.z - this.position.z
    const dist = Math.sqrt(dx * dx + dz * dz)

    // Move toward player
    if (dist > CONFIG.attackRange) {
      this._moveToward(dt, this.player.camera.position, CONFIG.speed)
    }

    // Melee attack
    this._attackTimer -= dt
    if (dist <= CONFIG.attackRange && this._attackTimer <= 0) {
      this.player.stats.takeDamage(CONFIG.damage)
      this._attackTimer = CONFIG.attackCooldown
    }

    // Phase 3: ground slam AoE
    if (this.currentPhase >= 2) {
      this._slamTimer -= dt
      if (this._slamTimer <= 0) {
        this._slamTimer = 4
        if (dist <= 4) {
          this.player.stats.takeDamage(6)
        }
        // Visual shake effect (just a log for now)
      }
    }
  }
}
