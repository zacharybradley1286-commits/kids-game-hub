import * as THREE from 'three'
import { GRAVITY } from '../constants.js'
import { sounds } from '../systems/SoundSystem.js'

export function mkBox(w, h, d, color, emissiveHex, emissiveIntensity) {
  const mat = new THREE.MeshLambertMaterial({ color })
  if (emissiveHex) {
    mat.emissive = new THREE.Color(emissiveHex)
    mat.emissiveIntensity = emissiveIntensity ?? 0.5
  }
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
}

export class BossBase {
  constructor(bossConfig, position, scene, playerController, inventory, itemRegistry) {
    this.config = bossConfig
    this.scene = scene
    this.player = playerController
    this.inventory = inventory
    this.itemRegistry = itemRegistry
    this.health = bossConfig.health
    this.maxHealth = bossConfig.health
    this.dead = false
    this.currentPhase = 0
    this._attackTimer = 0
    this._vy = 0
    this.onDeath = null
    this.onPhaseChange = null
    this._homePos = position.clone()
    this._aggroed = false
    this._parts = []

    this.mesh = new THREE.Group()
    this.mesh.position.set(position.x, position.y + bossConfig.scale[1] / 2, position.z)
    scene.add(this.mesh)

    this._buildMesh()
    this._initBossBar()
  }

  _addPart(mesh, x, y, z) {
    mesh.position.set(x, y, z)
    mesh.castShadow = true
    mesh._origColor = '#' + mesh.material.color.getHexString()
    this.mesh.add(mesh)
    this._parts.push(mesh)
    return mesh
  }

  // Override in subclasses to build distinctive appearance
  _buildMesh() {
    const [sw, sh, sd] = this.config.scale
    const m = mkBox(sw, sh, sd, this.config.color)
    m._origColor = this.config.color
    m.castShadow = true
    this.mesh.add(m)
    this._parts.push(m)
  }

  _initBossBar() {
    this._barFill = document.getElementById('boss-bar-fill')
  }

  showBar() {
    const wrap = document.getElementById('boss-bar-wrap')
    const nameEl = document.getElementById('boss-name')
    if (wrap) { wrap.style.display = 'block'; nameEl.textContent = this.config.name }
    this._updateBar()
  }

  _updateBar() {
    if (this._barFill) this._barFill.style.width = `${(this.health / this.maxHealth) * 100}%`
  }

  get position() { return this.mesh.position }

  takeDamage(amount) {
    if (this.dead) return
    sounds.playHit()
    this.health = Math.max(0, this.health - amount)
    this._updateBar()
    this._parts.forEach(m => m.material.color.set(0xffffff))
    setTimeout(() => {
      if (!this.dead) this._parts.forEach(m => m.material.color.set(m._origColor))
    }, 150)

    const phases = this.config.phases || []
    for (let i = 0; i < phases.length; i++) {
      if (this.currentPhase === i && this.health / this.maxHealth < phases[i]) {
        this.currentPhase = i + 1
        this.onPhaseChange?.(this.currentPhase)
        this._onPhaseChange(this.currentPhase)
        break
      }
    }
    if (this.health <= 0) this._die()
  }

  _onPhaseChange(phase) {}

  _die() {
    if (this.dead) return
    this.dead = true
    const bar = document.getElementById('boss-bar-wrap')
    if (bar) bar.style.display = 'none'
    for (const drop of this.config.drops || []) {
      this.inventory.add(drop.itemId, drop.count, this.itemRegistry)
    }
    this.scene.remove(this.mesh)
    this._parts.forEach(m => { m.geometry.dispose(); m.material.dispose() })
    this.onDeath?.(this)
  }

  applyGravity(dt, worldData) {
    this._vy -= GRAVITY * dt
    const pos = this.mesh.position
    const newY = pos.y + this._vy * dt
    const bx = Math.floor(pos.x)
    const by = Math.floor(pos.y - this.config.scale[1] / 2 - 0.1)
    const bz = Math.floor(pos.z)
    if (worldData.isSolid(bx, by, bz)) {
      this._vy = 0
      const sy = worldData.surfaceY(bx, bz)
      if (sy >= 0) pos.y = sy + 1 + this.config.scale[1] / 2
    } else {
      pos.y = newY
    }
  }

  _moveToward(dt, target, speed) {
    const dx = target.x - this.position.x
    const dz = target.z - this.position.z
    const dist = Math.sqrt(dx * dx + dz * dz)
    if (dist < 0.5) return
    this.position.x += (dx / dist) * speed * dt
    this.position.z += (dz / dist) * speed * dt
    // Clamp to world bounds so bosses can't walk off the edge
    this.position.x = Math.max(2, Math.min(190, this.position.x))
    this.position.z = Math.max(2, Math.min(190, this.position.z))
    this.mesh.rotation.y = Math.atan2(dx, dz)
  }

  update(dt, worldData) {
    if (this.dead) return
    this.applyGravity(dt, worldData)

    // Zone-based aggro: check horizontal (XZ) distance from home position.
    // Boss only activates when the player enters its territory.
    if (!this._aggroed) {
      const aggroZone = this.config.aggroZoneRadius ?? this.config.chaseRange ?? 22
      const hx = this.player.camera.position.x - this._homePos.x
      const hz = this.player.camera.position.z - this._homePos.z
      const zoneDist = Math.sqrt(hx * hx + hz * hz)
      if (zoneDist < aggroZone) this._aggroed = true
    }

    if (this._aggroed) {
      this._behaviorUpdate(dt)
    } else {
      const homeDist = this.position.distanceTo(this._homePos)
      if (homeDist > 2) this._moveToward(dt, this._homePos, 1)
    }
  }

  _behaviorUpdate(dt) {}

  dispose() {
    if (this.mesh.parent) this.scene.remove(this.mesh)
    this._parts.forEach(m => { m.geometry.dispose(); m.material.dispose() })
    const bar = document.getElementById('boss-bar-wrap')
    if (bar) bar.style.display = 'none'
    this.dead = true
  }
}
