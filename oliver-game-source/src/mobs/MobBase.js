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
    else if (id === 'fish' || id === 'shark') this._buildFish()
    else this._buildHumanoid()
  }

  _buildFish() {
    const isShark = this.mobType.id === 'shark'
    const s = this.mobType.scale
    const topColor = this.mobType.color
    const bellyColor = isShark ? '#f5f7f8' : '#ffe6a8'
    const finColor = isShark ? '#3a4850' : '#e0600a'
    const halfLen = s[2] * 0.7 / 2

    // Torpedo-tapered body: three segments, widest at the front-mid, narrow
    // at the head and tail, so the silhouette actually reads as a fish
    // instead of a floating brick.
    const headW = s[0] * 0.45, headH = s[1] * 0.55
    const midW  = s[0] * 0.7,  midH  = s[1] * 0.85
    const tailW = s[0] * 0.32, tailH = s[1] * 0.45
    const segLen = s[2] * 0.7 / 3

    this._addPart(mkBox(headW, headH, segLen * 1.1, topColor),  0, headH * 0.05, halfLen - segLen * 0.55)
    this._addPart(mkBox(midW,  midH,  segLen * 1.2, topColor),  0, 0,            halfLen - segLen * 1.6)
    this._addPart(mkBox(tailW, tailH, segLen,       topColor),  0, -midH * 0.05, halfLen - segLen * 2.7)

    // Countershading — lighter belly strip along the underside, like real
    // fish and sharks (dark top hides them from above, light belly from below).
    this._addPart(mkBox(midW * 0.7, midH * 0.28, segLen * 2.6, bellyColor), 0, -midH * 0.42, halfLen - segLen * 1.5)

    // Forked tail fin — two angled blades meeting at a point behind the body.
    const tailBase = -halfLen - 0.02
    for (const side of [-1, 1]) {
      const fin = mkBox(0.05, tailH * 0.85, segLen * 1.3, finColor)
      fin.rotation.x = side * 0.5
      this._addPart(fin, 0, side * tailH * 0.35, tailBase - segLen * 0.4)
    }

    // Dorsal fin — angled back, taller and more shark-like on the shark.
    const dorsalH = midH * (isShark ? 0.95 : 0.6)
    const dorsal = mkBox(0.05, dorsalH, segLen * (isShark ? 1.1 : 0.8), finColor)
    dorsal.rotation.x = -0.35
    this._addPart(dorsal, 0, midH / 2 + dorsalH * 0.35, halfLen - segLen * 1.4)

    // Belly/anal fin underneath, smaller mirror of the dorsal.
    const ventral = mkBox(0.04, dorsalH * 0.45, segLen * 0.7, finColor)
    ventral.rotation.x = 0.35
    this._addPart(ventral, 0, -midH / 2 - dorsalH * 0.15, halfLen - segLen * 2.0)

    // Pectoral fins — angled down and out from just behind the head.
    for (const side of [-1, 1]) {
      const pec = mkBox(midW * 0.35, 0.05, segLen * 0.9, finColor)
      pec.rotation.z = side * 0.55
      this._addPart(pec, side * (midW / 2 + 0.05), -midH * 0.1, halfLen - segLen * 0.9)
    }

    // Gill slits — a few dark marks just behind the head, sharks especially.
    for (let i = 0; i < 3; i++) {
      const gill = mkBox(0.02, headH * 0.5, 0.04, isShark ? '#20282c' : '#a03000')
      gill.position.set(headW / 2 + 0.01, headH * 0.05, halfLen - segLen * (1.0 + i * 0.18))
      this.mesh.add(gill)
    }

    // Eyes
    const eyeSize = isShark ? 0.06 : 0.08
    for (const xe of [-headW * 0.4, headW * 0.4]) {
      const eye = mkBox(eyeSize, eyeSize, 0.03, isShark ? '#111111' : '#1a1a1a')
      eye.position.set(xe, headH * 0.2, halfLen - segLen * 0.2)
      this.mesh.add(eye)
      if (!isShark) {
        // Little white eye-shine, gives fish a friendlier look.
        const shine = mkBox(0.025, 0.025, 0.01, '#ffffff')
        shine.position.set(xe + 0.02, headH * 0.25, halfLen - segLen * 0.18)
        this.mesh.add(shine)
      }
    }

    if (isShark) {
      // Row of teeth along the underside of the snout.
      const teeth = mkBox(headW * 0.7, 0.03, 0.04, '#f5f5f0')
      teeth.position.set(0, -headH * 0.22, halfLen - segLen * 0.15)
      this.mesh.add(teeth)
    } else {
      // A couple of bright stripes across the body, clownfish-style.
      for (const zOff of [-0.05, 0.15]) {
        const stripe = mkBox(midW * 0.75, midH * 0.9, 0.04, '#ffffff')
        stripe.position.set(0, 0, halfLen - segLen * (1.2 + zOff))
        this.mesh.add(stripe)
      }
    }
  }

  _buildHumanoid() {
    const id = this.mobType.id
    const h = this.mobType.scale[1]
    const half = h / 2
    const isZombie = id === 'zombie'

    const skin    = isZombie ? '#3d7a35' : '#d8cca0'
    const skinDk  = isZombie ? '#2a5a24' : '#c0b8a0'
    const cloth   = isZombie ? '#4a3010' : '#c0b080'
    const clothDk = isZombie ? '#3a2408' : '#a89868'
    const leg     = isZombie ? '#3a2810' : '#b8a870'

    // Head — two-tone (darker jaw) so it reads as more than a flat box.
    const headH = h * 0.27
    const headW = 0.5
    this._addPart(mkBox(headW, headH, headW, skin), 0, half - headH / 2, 0)
    this._addPart(mkBox(headW * 1.01, headH * 0.3, headW * 1.01, skinDk), 0, half - headH * 0.85, 0)

    // Eyes + brow shadow
    const eyeCol = isZombie ? '#cc0000' : '#333300'
    for (const xe of [-0.12, 0.12]) {
      const eye = mkBox(0.1, 0.08, 0.02, eyeCol)
      eye.position.set(xe, half - headH / 2 + 0.04, headW / 2)
      this.mesh.add(eye)
      const brow = mkBox(0.12, 0.03, 0.02, isZombie ? '#1a3010' : '#8a8060')
      brow.position.set(xe, half - headH / 2 + 0.1, headW / 2)
      this.mesh.add(brow)
    }
    // Mouth line
    const mouth = mkBox(isZombie ? 0.16 : 0.2, 0.03, 0.02, isZombie ? '#1a0808' : '#3a3020')
    mouth.position.set(0, half - headH * 0.78, headW / 2)
    this.mesh.add(mouth)

    // Torso — chest + a slightly narrower waist for a bit of shape.
    const bodyH = h * 0.33
    const bodyW = 0.65
    const bodyY = half - headH - bodyH / 2
    this._addPart(mkBox(bodyW, bodyH * 0.62, 0.32, cloth), 0, bodyY + bodyH * 0.18, 0)
    this._addPart(mkBox(bodyW * 0.82, bodyH * 0.4, 0.3, clothDk), 0, bodyY - bodyH * 0.28, 0)
    // Tattered hem for the zombie's shirt
    if (isZombie) {
      for (const xe of [-bodyW * 0.3, 0, bodyW * 0.3]) {
        const tatter = mkBox(0.12, 0.1, 0.28, clothDk)
        tatter.position.set(xe, bodyY - bodyH * 0.52, 0)
        this.mesh.add(tatter)
      }
    }

    // Arms + hands (zombie arms reach forward, hands a shade darker)
    const armH = h * 0.34
    const armW = 0.2
    const armOffX = (bodyW + armW) / 2 + 0.01
    for (const side of [-1, 1]) {
      const arm = mkBox(armW, armH, armW, skin)
      if (isZombie) arm.rotation.x = -0.7
      this._addPart(arm, side * armOffX, bodyY, isZombie ? 0.18 : 0)
      const hand = mkBox(armW * 1.05, armH * 0.22, armW * 1.05, skinDk)
      if (isZombie) {
        hand.position.set(side * armOffX, bodyY - armH * 0.15, 0.18 + armH * 0.62)
      } else {
        hand.position.set(side * armOffX, bodyY - armH * 0.42, 0)
      }
      this.mesh.add(hand)
    }

    // Legs — a knee-shade band and separate boots for a bit of articulation.
    const legH = h * 0.4
    const legW = 0.26
    const legY = -half + legH / 2
    for (const side of [-1, 1]) {
      this._addPart(mkBox(legW, legH * 0.75, legW, leg), side * 0.18, legY + legH * 0.12, 0)
      this._addPart(mkBox(legW * 1.05, legH * 0.3, legW * 1.1, isZombie ? '#1a1008' : '#5a5040'),
        side * 0.18, legY - legH * 0.35, 0.02)
    }

    // Skeleton ribcage + pelvis
    if (!isZombie) {
      for (let i = 0; i < 3; i++) {
        const rib = mkBox(bodyW * 0.8, 0.06, 0.01, i % 2 ? '#ccc090' : '#c8bc8a')
        rib.position.set(0, bodyY + bodyH / 2 - 0.12 - i * 0.12, 0.17)
        this.mesh.add(rib)
      }
      const pelvis = mkBox(bodyW * 0.55, 0.1, 0.24, '#c8bc8a')
      pelvis.position.set(0, bodyY - bodyH * 0.5, 0)
      this.mesh.add(pelvis)
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
      // Lumpy fleece bumps along the back so it doesn't read as a flat box
      for (const zOff of [-bd * 0.25, 0, bd * 0.25]) {
        this._addPart(mkBox(bw * 0.55, 0.1, bd * 0.2, '#f0f0f0'), 0, bodyY + bh * 0.6, zOff)
      }
    }
    if (id === 'cow' && accentColor) {
      // A few irregular belly/side patches instead of one centered blob
      this._addPart(mkBox(bw * 0.5, bh * 0.6, bd * 0.5, accentColor), 0, bodyY - 0.05, 0)
      this._addPart(mkBox(bw * 1.01, bh * 0.35, bd * 0.28, accentColor), 0, bodyY + bh * 0.15, -bd * 0.22)
      this._addPart(mkBox(bw * 0.4, bh * 0.3, bd * 0.22, accentColor), bw * 0.36, bodyY - bh * 0.05, bd * 0.15)
    }

    // Head
    const headW = s[0] * (id === 'chicken' ? 0.35 : 0.45)
    const headH = s[1] * (id === 'chicken' ? 0.3  : 0.35)
    const headD = s[2] * (id === 'pig'     ? 0.4  : 0.35)
    const headZ = -(bd / 2 + headD / 2)
    this._addPart(mkBox(headW, headH, headD, headColor), 0, bodyY + bh * 0.15, headZ)

    // Ears — every animal but the chicken (which has a comb/wattle instead)
    if (id !== 'chicken') {
      const earColor = id === 'cow' ? '#5C3317' : id === 'pig' ? '#FF9090' : id === 'sheep' ? '#CCCCCC' : legColor
      const earY = bodyY + bh * 0.15 + headH * 0.55
      for (const side of [-1, 1]) {
        const ear = mkBox(headW * 0.25, headH * 0.35, headD * 0.2, earColor)
        ear.rotation.z = side * 0.3
        ear.position.set(side * headW * 0.55, earY, headZ + headD * 0.15)
        this.mesh.add(ear)
      }
    }

    // Horns for the cow
    if (id === 'cow') {
      for (const side of [-1, 1]) {
        const horn = mkBox(0.05, 0.16, 0.05, '#e8e0c8')
        horn.rotation.z = side * 0.2
        horn.position.set(side * headW * 0.42, bodyY + bh * 0.15 + headH * 0.62, headZ + headD * 0.2)
        this.mesh.add(horn)
      }
    }

    // Snout for pig, with nostril dots
    if (id === 'pig') {
      this._addPart(mkBox(headW * 0.6, headH * 0.4, 0.08, '#FF8080'),
        0, bodyY, headZ - headD / 2)
      for (const xe of [-0.04, 0.04]) {
        const nostril = mkBox(0.02, 0.02, 0.02, '#a04040')
        nostril.position.set(xe, bodyY, headZ - headD / 2 - 0.03)
        this.mesh.add(nostril)
      }
    }
    // Sheep/cow pink or dark muzzle patch
    if (id === 'sheep' || id === 'cow') {
      const muzzle = mkBox(headW * 0.55, headH * 0.35, 0.06, id === 'sheep' ? '#e0a0a0' : '#3a281a')
      muzzle.position.set(0, bodyY, headZ - headD / 2 + 0.02)
      this.mesh.add(muzzle)
    }

    // Chicken beak + comb / wattle
    if (id === 'chicken') {
      const beak = mkBox(0.1, 0.08, 0.12, '#FFAA00')
      beak.position.set(0, bodyY + bh * 0.1, headZ - headD / 2 - 0.04)
      this.mesh.add(beak)
    }
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

    // Legs — chickens get 2 thin legs (with feet), other animals get 4
    const legH = s[1] * 0.38
    const legY = bodyY - bh / 2 - legH / 2
    if (id === 'chicken') {
      const legW = s[0] * 0.06
      const legD = s[2] * 0.06
      const lox = bw * 0.18
      for (const lx of [-lox, lox]) {
        this._addPart(mkBox(legW, legH, legD, legColor), lx, legY, 0)
        const foot = mkBox(legW * 2.2, legW * 0.5, legD * 2.2, legColor)
        foot.position.set(lx, legY - legH / 2, legD * 0.8)
        this.mesh.add(foot)
      }
    } else {
      const legW = s[0] * 0.14
      const legD = s[2] * 0.14
      const lox = bw * 0.28
      const loz = bd * 0.28
      // Two-tone legs — a darker "hoof" band at the bottom of each leg
      for (const [lx, lz] of [[-lox, -loz], [lox, -loz], [-lox, loz], [lox, loz]]) {
        this._addPart(mkBox(legW, legH * 0.7, legD, legColor), lx, legY + legH * 0.15, lz)
        this._addPart(mkBox(legW * 1.05, legH * 0.3, legD * 1.05, id === 'pig' ? '#cc6060' : '#3a2818'),
          lx, legY - legH * 0.35, lz)
      }
    }

    // Tail stub
    if (id !== 'chicken') {
      this._addPart(mkBox(0.1, 0.1, 0.12, legColor), 0, bodyY + bh * 0.3, bd / 2 + 0.06)
      // Curly tail tuft for the pig
      if (id === 'pig') {
        this._addPart(mkBox(0.06, 0.06, 0.06, legColor), 0.04, bodyY + bh * 0.4, bd / 2 + 0.1)
      }
    }
    // Chicken tail feathers — layered fan instead of a single flat plate
    if (id === 'chicken') {
      for (const [yOff, zOff, sc] of [[0, 0, 1], [0.06, 0.02, 0.75], [-0.06, 0.02, 0.75]]) {
        this._addPart(mkBox(0.15 * sc, 0.2 * sc, 0.08, '#DDDDDD'), 0, bodyY + bh * 0.4 + yOff, bd / 2 + 0.04 + zOff)
      }
    }
  }

  _buildSpider() {
    // Thorax
    this._addPart(mkBox(0.85, 0.4, 0.6, '#2a1010'), 0, 0.05, -0.2)
    // Abdomen, with a lighter underside and a faint stripe pattern
    this._addPart(mkBox(0.7, 0.55, 0.65, '#150808'), 0, 0.08, 0.52)
    this._addPart(mkBox(0.5, 0.15, 0.66, '#3a1818'), 0, -0.1, 0.52)
    for (const zOff of [0.28, 0.5, 0.72]) {
      const stripe = mkBox(0.71, 0.06, 0.05, '#450e0e')
      stripe.position.set(0, 0.28, zOff)
      this.mesh.add(stripe)
    }
    // Head
    this._addPart(mkBox(0.42, 0.3, 0.3, '#1a0808'), 0, 0.08, -0.62)
    // Fangs/mandibles hanging below the head
    for (const side of [-1, 1]) {
      const fang = mkBox(0.06, 0.14, 0.06, '#0a0404')
      fang.rotation.x = 0.3
      fang.position.set(side * 0.1, -0.08, -0.78)
      this.mesh.add(fang)
    }
    // Red eyes — a small cluster instead of just two dots
    for (const [xe, ye] of [[-0.1, 0.2], [0.1, 0.2], [-0.15, 0.14], [0.15, 0.14]]) {
      const eye = mkBox(0.06, 0.06, 0.03, '#ff1100')
      eye.position.set(xe, ye, -0.77)
      this.mesh.add(eye)
    }
    // 8 legs (4 per side), each with a bent knee joint instead of one
    // straight bar, so the silhouette actually reads as jointed limbs.
    const legAngles = [-0.5, -0.2, 0.15, 0.45]
    for (const side of [-1, 1]) {
      for (let i = 0; i < 4; i++) {
        const yAngle = side * legAngles[i]
        const zBase = -0.15 + i * 0.2

        const upper = mkBox(0.4, 0.07, 0.08, '#0f0606')
        upper.rotation.y = yAngle
        upper.rotation.z = side * 0.25
        upper.position.set(side * 0.32, 0.05, zBase)
        this.mesh.add(upper)
        this._parts.push(upper)
        upper._origColor = '#' + upper.material.color.getHexString()
        upper.castShadow = true

        const lower = mkBox(0.34, 0.06, 0.06, '#150808')
        lower.rotation.y = yAngle
        lower.rotation.z = side * 0.7
        lower.position.set(side * 0.62, -0.1, zBase)
        this.mesh.add(lower)
        this._parts.push(lower)
        lower._origColor = '#' + lower.material.color.getHexString()
        lower.castShadow = true
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
