import { BLOCK_DB } from '../world/BlockRegistry.js'

const SIZE = 150        // visible canvas size, in CSS pixels
const RADIUS = 48       // world blocks shown from center to edge
const TERRAIN_INTERVAL = 0.35   // seconds between terrain resamples

const MOB_COLOR = {
  zombie: '#ff3b3b', skeleton: '#ff3b3b', spider: '#ff3b3b',
  cow: '#ffffff', pig: '#ffffff', sheep: '#ffffff', chicken: '#ffffff',
  fish: '#3bbfff', shark: '#ff9900',
}

// A north-up radar-style minimap: a coarse top-down terrain snapshot
// (resampled a few times a second, not every frame — a 96x96 block scan
// every frame would be wasteful for something this small) with a smooth
// player-facing arrow and mob blips redrawn on top every frame.
export class Minimap {
  constructor(worldData) {
    this.worldData = worldData
    this.canvas = document.getElementById('minimap')
    this.ctx = this.canvas?.getContext('2d')

    // Offscreen buffer holds just the terrain — composited each frame so
    // the player arrow/mob blips can update smoothly without rescanning
    // the world every frame.
    this._terrainCanvas = document.createElement('canvas')
    this._terrainCanvas.width = SIZE
    this._terrainCanvas.height = SIZE
    this._terrainCtx = this._terrainCanvas.getContext('2d')

    this._timer = TERRAIN_INTERVAL  // draw immediately on first update
  }

  setWorldData(worldData) {
    this.worldData = worldData
    this._timer = TERRAIN_INTERVAL  // force an immediate resample (new dimension)
  }

  update(dt, playerPos, playerYaw, mobs = []) {
    if (!this.ctx) return

    this._timer += dt
    if (this._timer >= TERRAIN_INTERVAL) {
      this._timer = 0
      this._drawTerrain(playerPos)
    }

    const ctx = this.ctx
    ctx.clearRect(0, 0, SIZE, SIZE)
    ctx.drawImage(this._terrainCanvas, 0, 0)

    const px = Math.floor(playerPos.x), pz = Math.floor(playerPos.z)
    const scale = SIZE / (RADIUS * 2)
    for (const m of mobs) {
      if (!m || m.dead) continue
      const mdx = m.position.x - px, mdz = m.position.z - pz
      if (Math.abs(mdx) > RADIUS || Math.abs(mdz) > RADIUS) continue
      ctx.fillStyle = MOB_COLOR[m.mobType?.id] ?? '#dddddd'
      ctx.beginPath()
      ctx.arc((mdx + RADIUS) * scale, (mdz + RADIUS) * scale, 2.5, 0, Math.PI * 2)
      ctx.fill()
    }

    // Player arrow — always centered, rotates to face the camera's yaw.
    ctx.save()
    ctx.translate(SIZE / 2, SIZE / 2)
    ctx.rotate(playerYaw)
    ctx.fillStyle = '#ffee66'
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, -7)
    ctx.lineTo(5, 6)
    ctx.lineTo(0, 3)
    ctx.lineTo(-5, 6)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.restore()

    // Circular vignette border
    ctx.strokeStyle = 'rgba(255,255,255,0.4)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(SIZE / 2, SIZE / 2, SIZE / 2 - 1, 0, Math.PI * 2)
    ctx.stroke()
  }

  _drawTerrain(playerPos) {
    const ctx = this._terrainCtx
    const wd = this.worldData
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, SIZE, SIZE)
    if (!wd) return

    const px = Math.floor(playerPos.x), pz = Math.floor(playerPos.z)
    const scale = SIZE / (RADIUS * 2)
    const step = Math.max(1, Math.round(1 / scale))  // sample every N blocks so it stays cheap
    const px2 = Math.ceil(scale * step)

    for (let dx = -RADIUS; dx < RADIUS; dx += step) {
      for (let dz = -RADIUS; dz < RADIUS; dz += step) {
        const wx = px + dx, wz = pz + dz
        const sy = wd.surfaceY(wx, wz)
        if (sy < 0) continue
        const block = BLOCK_DB[wd.get(wx, sy, wz)]
        if (!block) continue
        ctx.fillStyle = block.color
        ctx.fillRect((dx + RADIUS) * scale, (dz + RADIUS) * scale, px2, px2)
      }
    }
  }
}
