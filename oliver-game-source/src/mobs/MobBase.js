import * as THREE from 'three'
import { GRAVITY } from '../constants.js'
import { sounds } from '../systems/SoundSystem.js'

function mkBox(w, h, d, color) {
  return new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshLambertMaterial({ color })
  )
}

export class MobBase {
  constructor(mobType, position, scene) {
    this.mobType = mobType
    this.scene = scene
    this.health = mobType.health
    this.maxHealth = mobType.health
    this.dead = false
    this._vy = 0
    this.onDeath = null
    this._parts = []

    this.mesh = new THREE.Group()
    this.mesh.position.set(position.x, position.y + mobType.scale[1] / 2, position.z)

    this._buildAppearance()
    this._buildHealthBar()
    scene.add(this.mesh)
  }

  _addPart(mesh, x, y, z) {
    mesh.position.set(x, y, z)
    mesh.castShadow = true
    mesh._origColor = '#' + mesh.material.color.getHexString()
    this.mesh.add(mesh)
    this._parts.push(mesh)
    return mesh
  }

  _buildAppearance() {
    const id = this.mobType.id
    if (id === 'spider') this._buildSpider()
    else if (id === 'cow' || id === 'pig' || id === 'sheep' || id === 'chicken') this._buildAnimal()
    else this._buildHumanoid()
  }

  _buildHumanoid() {
    const id = this.mobType.id
    const h = this.mobType.scale[1]
    const half = h / 2
    const isZombie = id === 'zombie'

    const skin  = isZombie ? '#3d7a35' : '#d8cca0'
    const cloth = isZombie ? '#4a3010' : '#c0b080'
    const leg   = isZombie ? '#3a2810' : '#b8a870'

    // Head
    const headH = h * 0.27
    const headW = 0.5
    this._addPart(mkBox(headW, headH, headW, skin), 0, half - headH / 2, 0)

    // Eyes
    const eyeCol = isZombie ? '#cc0000' : '#333300'
    for (const xe of [-0.12, 0.12]) {
      const eye = mkBox(0.1, 0.08, 0.02, eyeCol)
      eye.position.set(xe, half - headH / 2 + 0.04, headW / 2)
      this.mesh.add(eye)
    }

    // Body
    const bodyH = h * 0.33
    const bodyW = 0.65
    const bodyY = half - headH - bodyH / 2
    this._addPart(mkBox(bodyW, bodyH, 0.32, cloth), 0, bodyY, 0)

    // Arms (zombie arms reach forward)
    const armH = h * 0.38
    const armW = 0.22
    const armOffX = (bodyW + armW) / 2 + 0.01
    for (const [side] of [[-1], [1]]) {
      const arm = mkBox(armW, armH, armW, skin)
      if (isZombie) arm.rotation.x = -0.7
      this._addPart(arm, side * armOffX, bodyY, isZombie ? 0.18 : 0)
    }

    // Legs
    const legH = h * 0.4
    const legW = 0.28
    const legY = -half + legH / 2
    this._addPart(mkBox(legW, legH, legW, leg), -0.18, legY, 0)
    this._addPart(mkBox(legW, legH, legW, leg),  0.18, legY, 0)

    // Skeleton ribs
    if (!isZombie) {
      for (let i = 0; i < 3; i++) {
        const rib = mkBox(bodyW * 0.8, 0.06, 0.01, i % 2 ? '#ccc090' : '#c8bc8a')
        rib.position.set(0, bodyY + bodyH / 2 - 0.12 - i * 0.12, 0.17)
        this.mesh.add(rib)
      }
    }
  }

  _buildAnimal() {
    const id = this.mobType.id
    const s = this.mobType.scale  // [w, h, d]
    const bodyColor = this.mobType.color

    // Determine secondary colors per animal
    let legColor = bodyColor
    let headColor = bodyColor
    let accentColor = null

    if (id === 'cow') {
      legColor = '#5C3317'
      headColor = '#8B4513'
      accentColor = '#F5F5F5'  // white patches
    } else if (id === 'pig') {
      legColor = '#FF9090'
      headColor = '#FFB6C1'
    } else if (id === 'sheep') {
      legColor = '#999999'
      headColor = '#CCCCCC'
    } else if (id === 'chicken') {
      legColor = '#FF6600'
      headColor = '#FFFFFF'
      accentColor = '#FF4400'  // red wattle/comb
    }

    const bw = s[0] * 0.7   // body width
    const bh = s[1] * 0.4   // body height
    const bd = s[2] * 0.9   // body depth
    const bodyY = 0          // center of group

    // Body
    this._addPart(mkBox(bw, bh, bd, bodyColor), 0, bodyY, 0)

    // Wool / patches for cow
    if (id === 'sheep') {
      this._addPart(mkBox(bw + 0.12, bh + 0.1, bd + 0.1, '#E8E8E8'), 0, bodyY + 0.05, 0)
    }
    if (id === 'cow' && accentColor) {
      // White belly patch
      this._addPart(mkBox(bw * 0.5, bh * 0.6, bd * 0.5, accentColor), 0, bodyY - 0.05, 0)
    }

    // Head
    const headW = s[0] * (id === 'chicken' ? 0.35 : 0.45)
    const headH = s[1] * (id === 'chicken' ? 0.3  : 0.35)
    const headD = s[2] * (id === 'pig'     ? 0.4  : 0.35)
    const headZ = -(bd / 2 + headD / 2)
    this._addPart(mkBox(headW, headH, headD, headColor), 0, bodyY + bh * 0.15, headZ)

    // Snout for pig
    if (id === 'pig') {
      this._addPart(mkBox(headW * 0.6, headH * 0.4, 0.08, '#FF8080'),
        0, bodyY, headZ - headD / 2)
    }

    // Chicken comb / wattle
    if (id === 'chicken' && accentColor) {
      this._addPart(mkBox(0.08, 0.12, 0.06, accentColor), 0, bodyY + bh * 0.15 + headH * 0.5, headZ)
      this._addPart(mkBox(0.1, 0.08, 0.04, accentColor), 0, bodyY + bh * 0.1, headZ - headD / 2 - 0.02)
    }

    // Eyes (two small dark cubes)
    for (const xe of [-headW * 0.28, headW * 0.28]) {
      const eye = mkBox(0.06, 0.06, 0.03, '#1a1a1a')
      eye.position.set(xe, bodyY + bh * 0.15 + headH * 0.1, headZ - headD / 2)
      this.mesh.add(eye)
    }

    // Legs — chickens get 2 thin legs, other animals get 4
    const legH = s[1] * 0.38
    const legY = bodyY - bh / 2 - legH / 2
    if (id === 'chicken') {
      const legW = s[0] * 0.06
      const legD = s[2] * 0.06
      const lox = bw * 0.18
      this._addPart(mkBox(legW, legH, legD, legColor), -lox, legY, 0)
      this._addPart(mkBox(legW, legH, legD, legColor),  lox, legY, 0)
    } else {
      const legW = s[0] * 0.14
      const legD = s[2] * 0.14
      const lox = bw * 0.28
      const loz = bd * 0.28
      for (const [lx, lz] of [[-lox, -loz], [lox, -loz], [-lox, loz], [lox, loz]]) {
        this._addPart(mkBox(legW, legH, legD, legColor), lx, legY, lz)
      }
    }

    // Tail stub
    if (id !== 'chicken') {
      this._addPart(mkBox(0.1, 0.1, 0.12, legColor), 0, bodyY + bh * 0.3, bd / 2 + 0.06)
    }
    // Chicken tail feathers
    if (id === 'chicken') {
      this._addPart(mkBox(0.15, 0.2, 0.08, '#DDDDDD'), 0, bodyY + bh * 0.4, bd / 2 + 0.04)
    }
  }

  _buildSpider() {
    // Thorax
    this._addPart(mkBox(0.85, 0.4, 0.6, '#2a1010'), 0, 0.05, -0.2)
    // Abdomen
    this._addPart(mkBox(0.7, 0.55, 0.65, '#150808'), 0, 0.08, 0.52)
    // Head
    this._addPart(mkBox(0.42, 0.3, 0.3, '#1a0808'), 0, 0.08, -0.62)
    // Red eyes
    for (const xe of [-0.1, 0.1]) {
      const eye = mkBox(0.07, 0.07, 0.03, '#ff1100')
      eye.position.set(xe, 0.2, -0.77)
      this.mesh.add(eye)
    }
    // 8 legs (4 per side)
    const legAngles = [-0.5, -0.2, 0.15, 0.45]
    for (const side of [-1, 1]) {
      for (let i = 0; i < 4; i++) {
        const leg = mkBox(0.65, 0.07, 0.07, '#0f0606')
        leg.rotation.y = side * legAngles[i]
        leg.rotation.z = side * 0.4
        leg.position.set(side * 0.56, -0.05, -0.15 + i * 0.2)
        this.mesh.add(leg)
        this._parts.push(leg)
        leg._origColor = '#' + leg.material.color.getHexString()
        leg.castShadow = true
      }
    }
  }

  _buildHealthBar() {
    const canvas = document.createElement('canvas')
    canvas.width = 64; canvas.height = 8
    this._hbCtx = canvas.getContext('2d')
    this._hbTex = new THREE.CanvasTexture(canvas)
    const mat = new THREE.SpriteMaterial({ map: this._hbTex, depthTest: false })
    this._hbSprite = new THREE.Sprite(mat)
    this._hbSprite.scale.set(1.2, 0.15, 1)
    this._hbSprite.position.set(0, this.mobType.scale[1] / 2 + 0.4, 0)
    this.mesh.add(this._hbSprite)
    this._updateHealthBar()
  }

  _updateHealthBar() {
    const ctx = this._hbCtx
    ctx.clearRect(0, 0, 64, 8)
    ctx.fillStyle = '#400000'; ctx.fillRect(0, 0, 64, 8)
    ctx.fillStyle = '#e74c3c'
    ctx.fillRect(0, 0, Math.floor(64 * this.health / this.maxHealth), 8)
    this._hbTex.needsUpdate = true
  }

  get position() { return this.mesh.position }

  takeDamage(amount) {
    if (this.dead) return
    sounds.playHit()
    this.health = Math.max(0, this.health - amount)
    this._updateHealthBar()
    this._parts.forEach(m => m.material.color.set(0xffffff))
    setTimeout(() => {
      if (!this.dead) this._parts.forEach(m => m.material.color.set(m._origColor))
    }, 150)
    if (this.health <= 0) this._die()
  }

  _die() {
    if (this.dead) return
    this.dead = true
    this._dropLoot()
    this.scene.remove(this.mesh)
    this._parts.forEach(m => { m.geometry.dispose(); m.material.dispose() })
    this.onDeath?.(this)
  }

  _dropLoot() {}

  applyGravity(dt, worldData) {
    this._vy -= GRAVITY * dt
    const pos = this.mesh.position
    const newY = pos.y + this._vy * dt
    const bx = Math.floor(pos.x)
    const by = Math.floor(pos.y - this.mobType.scale[1] / 2 - 0.1)
    const bz = Math.floor(pos.z)
    if (worldData.isSolid(bx, by, bz)) {
      this._vy = 0
      const surfY = worldData.surfaceY(bx, bz)
      if (surfY >= 0) pos.y = surfY + 1 + this.mobType.scale[1] / 2
    } else {
      pos.y = newY
    }
  }

  dispose() {
    if (this.mesh.parent) this.scene.remove(this.mesh)
    this._parts.forEach(m => { m.geometry.dispose(); m.material.dispose() })
    this.dead = true
  }
}
