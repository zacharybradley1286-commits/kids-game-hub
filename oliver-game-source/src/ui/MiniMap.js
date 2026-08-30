import { WORLD_W, WORLD_D } from '../constants.js'
import { BLOCK } from '../world/BlockRegistry.js'

// Terrain color per block, used for the top-down minimap only — separate
// from BlockRegistry's `color` (that's a fallback for generating the 3D
// atlas texture, tuned to look right lit and textured up close; the map
// wants flatter, more saturated colors that read at a glance from above).
const MAP_COLORS = {
  [BLOCK.GRASS]:      '#4a8f3f',
  [BLOCK.DIRT]:        '#8b6914',
  [BLOCK.STONE]:       '#8a8a8a',
  [BLOCK.SAND]:        '#dccb84',
  [BLOCK.WATER]:       '#2f6fd8',
  [BLOCK.FARMLAND]:    '#5a3a10',
  [BLOCK.GRAVEL]:      '#8f8f80',
  [BLOCK.NETHERRACK]:  '#5a2a20',
  [BLOCK.LAVA]:        '#e8480a',
  [BLOCK.OBSIDIAN]:    '#1a0e28',
}
const DEFAULT_COLOR = '#3a3a3a'  // built structures, ore, etc.

// Points of interest shown on the map. Positions mirror the fixed spawn
// points in Game.js (_setupMiniBosses, world-centre spawn/portal) — there's
// no runtime registry of "interesting locations" to read from, so these are
// duplicated constants rather than a shared source of truth.
const BOSS_SCALE = 4
const POIS = [
  { key: 'cave_troll',  label: 'Cave Troll',   x: 30 * BOSS_SCALE,  z: 30 * BOSS_SCALE,  color: '#c0392b' },
  { key: 'swamp_witch', label: 'Swamp Witch',  x: 138 * BOSS_SCALE, z: 138 * BOSS_SCALE, color: '#8e44ad' },
  { key: 'stone_golem', label: 'Stone Golem',  x: 150 * BOSS_SCALE, z: 44 * BOSS_SCALE,  color: '#95a5a6' },
  { key: 'portal',      label: 'Spawn Portal', x: WORLD_W / 2,      z: WORLD_D / 2,       color: '#9020e0' },
]

// Order matches Game.js's _bossList (cave_troll, swamp_witch, stone_golem),
// so a POI's alive/dead state can be read off the boss instance directly.
// Game.killedBosses is NOT usable for this — it gets all three boss keys
// added on every new game/load (see _enterPlayMode) so a "summoning stone"
// recipe stays available regardless of whether the bosses are actually
// alive, which makes it unreliable as an is-this-boss-dead signal.
const BOSS_POI_KEYS = ['cave_troll', 'swamp_witch', 'stone_golem']

export class MiniMap {
  constructor(worldData, getBossList) {
    this.worldData = worldData
    this.getBossList = getBossList   // () => Game._bossList, read live each frame

    this.wrap = document.getElementById('minimap-wrap')
    this.canvas = document.getElementById('minimap-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.bigWrap = document.getElementById('minimap-big-wrap')
    this.bigCanvas = document.getElementById('minimap-big-canvas')
    this.bigCtx = this.bigCanvas.getContext('2d')

    this.expanded = false

    // Terrain is sampled into an offscreen low-res buffer once at startup
    // (768x768 blocks -> 192x192 samples) and redrawn from that buffer
    // every frame — scanning the live voxel grid at full resolution every
    // frame would be far too slow. It's refreshed periodically (not on
    // every mine/place) since a handful of edited blocks are invisible at
    // this scale anyway.
    this.sampleRes = 192
    this._terrainBuffer = document.createElement('canvas')
    this._terrainBuffer.width = this.sampleRes
    this._terrainBuffer.height = this.sampleRes
    this._terrainCtx = this._terrainBuffer.getContext('2d')
    this._resampleTerrain()
    this._resampleTimer = 0

    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyM' && this.wrap.style.display !== 'none') {
        this.toggleExpanded()
      }
    })
  }

  show() {
    this.wrap.style.display = 'block'
  }

  hide() {
    this.wrap.style.display = 'none'
    this.bigWrap.style.display = 'none'
    this.expanded = false
  }

  toggleExpanded() {
    this.expanded = !this.expanded
    this.bigWrap.style.display = this.expanded ? 'flex' : 'none'
  }

  _resampleTerrain() {
    const res = this.sampleRes
    const step = WORLD_W / res
    const img = this._terrainCtx.createImageData(res, res)
    for (let sz = 0; sz < res; sz++) {
      const wz = Math.min(WORLD_D - 1, Math.floor(sz * step))
      for (let sx = 0; sx < res; sx++) {
        const wx = Math.min(WORLD_W - 1, Math.floor(sx * step))
        const topY = this.worldData.surfaceY(wx, wz)
        const blockId = topY >= 0 ? this.worldData.get(wx, topY, wz) : BLOCK.AIR
        const hex = MAP_COLORS[blockId] || DEFAULT_COLOR
        const idx = (sz * res + sx) * 4
        img.data[idx]     = parseInt(hex.slice(1, 3), 16)
        img.data[idx + 1] = parseInt(hex.slice(3, 5), 16)
        img.data[idx + 2] = parseInt(hex.slice(5, 7), 16)
        img.data[idx + 3] = 255
      }
    }
    this._terrainCtx.putImageData(img, 0, 0)
  }

  // dt: frame delta, used only to throttle the terrain resample. camera:
  // THREE.PerspectiveCamera (position + Y rotation = facing).
  update(dt, camera) {
    if (this.wrap.style.display === 'none') return

    this._resampleTimer += dt
    if (this._resampleTimer > 20) {
      this._resampleTimer = 0
      this._resampleTerrain()
    }

    this._drawSmall(camera)
    if (this.expanded) this._drawBig(camera)
  }

  _drawSmall(camera) {
    const ctx = this.ctx
    const size = this.canvas.width
    ctx.clearRect(0, 0, size, size)

    // Player-centred view: crop a window of the world around the player and
    // scale it to fill the small map, so the map scrolls with the player
    // instead of the player dot drifting to the edge.
    const viewBlocks = 160  // world-space width/height of the visible crop
    const px = camera.position.x, pz = camera.position.z
    const srcSize = (viewBlocks / WORLD_W) * this.sampleRes
    const srcX = (px / WORLD_W) * this.sampleRes - srcSize / 2
    const srcZ = (pz / WORLD_D) * this.sampleRes - srcSize / 2

    ctx.save()
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
    ctx.clip()
    ctx.drawImage(this._terrainBuffer, srcX, srcZ, srcSize, srcSize, 0, 0, size, size)
    this._drawPOIs(ctx, size, px, pz, viewBlocks)
    ctx.restore()

    this._drawPlayerArrow(ctx, size / 2, size / 2, camera.rotation.y)
  }

  _drawBig(camera) {
    const ctx = this.bigCtx
    const size = this.bigCanvas.width
    ctx.clearRect(0, 0, size, size)
    ctx.drawImage(this._terrainBuffer, 0, 0, size, size)

    const px = camera.position.x, pz = camera.position.z
    this._drawPOIs(ctx, size, WORLD_W / 2, WORLD_D / 2, WORLD_W)

    const dotX = (px / WORLD_W) * size
    const dotZ = (pz / WORLD_D) * size
    this._drawPlayerArrow(ctx, dotX, dotZ, camera.rotation.y)
  }

  // centerX/Z + viewBlocks describe the world-space window currently drawn
  // (the full map for the expanded view, a crop around the player for the
  // small one) so POI markers land in the right screen position in both.
  _drawPOIs(ctx, size, centerX, centerZ, viewBlocks) {
    const scale = size / viewBlocks
    const bossList = this.getBossList?.() ?? []
    for (const poi of POIS) {
      const bossIdx = BOSS_POI_KEYS.indexOf(poi.key)
      if (bossIdx !== -1 && bossList[bossIdx]?.dead) continue
      const sx = size / 2 + (poi.x - centerX) * scale
      const sz = size / 2 + (poi.z - centerZ) * scale
      if (sx < -6 || sx > size + 6 || sz < -6 || sz > size + 6) continue
      ctx.fillStyle = poi.color
      ctx.beginPath()
      ctx.arc(sx, sz, 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = 'rgba(0,0,0,0.6)'
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }

  _drawPlayerArrow(ctx, x, y, rotY) {
    // Three's yaw (rotation.y) is 0 facing -Z and increases counter-
    // clockwise around +Y; map +Y (down the canvas) is world +Z, so the
    // on-screen heading is -rotY measured from "up".
    const heading = -rotY
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(heading)
    ctx.fillStyle = '#5ef55e'
    ctx.strokeStyle = 'rgba(0,0,0,0.7)'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(0, -7)
    ctx.lineTo(5, 6)
    ctx.lineTo(0, 3)
    ctx.lineTo(-5, 6)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }
}
