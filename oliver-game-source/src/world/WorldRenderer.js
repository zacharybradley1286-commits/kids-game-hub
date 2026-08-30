import * as THREE from 'three'
import { CHUNKS_X, CHUNKS_Z, CHUNK_W, CHUNK_LOAD_RADIUS } from '../constants.js'
import { ChunkRenderer } from './ChunkRenderer.js'

export class WorldRenderer {
  constructor(scene, worldData, atlasTex, opts = {}) {
    this.scene = scene
    this.worldData = worldData
    this.ensureChunkData = opts.ensureChunkData || null
    this.loadRadius = opts.loadRadius ?? CHUNK_LOAD_RADIUS

    const mat = new THREE.MeshLambertMaterial({
      map: atlasTex,
      alphaTest: 0.1,
      // DoubleSide: the chunk mesh's face winding is inconsistent (front vs.
      // back-facing triangles vary by face direction), which under FrontSide
      // culling made the raycaster silently miss the correct face and fall
      // through to a backface one block away — breaking mine/place targeting.
      // Only exposed faces are ever generated (see ChunkRenderer's neighbor
      // check), so double-sided rendering costs nothing visually here.
      side: THREE.DoubleSide,
    })
    this.material = mat

    // Water/lava get their own alpha-blended pass with depth writes off —
    // with depthWrite on, a translucent-looking water face would still write
    // full opaque depth like solid stone and hide anything (fish, sharks,
    // terrain) sitting inside or behind it.
    this.liquidMaterial = new THREE.MeshLambertMaterial({
      map: atlasTex,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    })

    this.chunks = new Map()  // "cx,cz" → ChunkRenderer

    // All chunk meshes live under this group rather than directly on the
    // scene, so a whole dimension's terrain can be shown/hidden in one
    // toggle (group.visible) when switching between the overworld and the
    // Nether, instead of walking every chunk.
    this.group = new THREE.Group()
    this.scene.add(this.group)
  }

  _key(cx, cz) { return `${cx},${cz}` }

  _buildChunk(cx, cz) {
    const key = this._key(cx, cz)
    const existing = this.chunks.get(key)
    if (existing) existing.dispose()
    this.ensureChunkData?.(cx, cz)
    const renderer = new ChunkRenderer(cx, cz, this.worldData, this.material, this.liquidMaterial)
    this.chunks.set(key, renderer)
    if (renderer.mesh) this.group.add(renderer.mesh)
    if (renderer.liquidMesh) this.group.add(renderer.liquidMesh)
  }

  // Mesh chunks in a circle around the player; drop anything farther away.
  // maxBuilds caps how many NEW chunks we mesh this call so a long sprint
  // doesn't hitch — leftover holes fill in over the next few frames.
  streamAround(wx, wz, maxBuilds = 6) {
    const pcx = Math.floor(wx / CHUNK_W)
    const pcz = Math.floor(wz / CHUNK_W)
    const r = this.loadRadius
    const needed = new Set()
    const toBuild = []
    for (let dx = -r; dx <= r; dx++) {
      for (let dz = -r; dz <= r; dz++) {
        if (dx * dx + dz * dz > r * r) continue
        const cx = pcx + dx, cz = pcz + dz
        if (cx < 0 || cz < 0 || cx >= CHUNKS_X || cz >= CHUNKS_Z) continue
        const key = this._key(cx, cz)
        needed.add(key)
        if (!this.chunks.has(key)) toBuild.push({ cx, cz, d: dx * dx + dz * dz })
      }
    }
    toBuild.sort((a, b) => a.d - b.d)
    let built = 0
    for (const { cx, cz } of toBuild) {
      if (built >= maxBuilds) break
      this._buildChunk(cx, cz)
      built++
    }
    for (const [key, renderer] of [...this.chunks.entries()]) {
      if (!needed.has(key)) {
        renderer.dispose()
        this.chunks.delete(key)
      }
    }
  }

  rebuildChunk(cx, cz) {
    if (cx < 0 || cx >= CHUNKS_X || cz < 0 || cz >= CHUNKS_Z) return
    const targets = [[cx, cz], [cx - 1, cz], [cx + 1, cz], [cx, cz - 1], [cx, cz + 1]]
    for (const [nx, nz] of targets) {
      if (nx < 0 || nx >= CHUNKS_X || nz < 0 || nz >= CHUNKS_Z) continue
      const key = this._key(nx, nz)
      if (!this.chunks.has(key)) continue  // not loaded — voxels are already updated
      this._buildChunk(nx, nz)
    }
  }

  disposeAll() {
    for (const r of this.chunks.values()) r.dispose()
    this.chunks.clear()
  }

  get allMeshes() {
    const out = []
    for (const r of this.chunks.values()) {
      if (r.mesh) out.push(r.mesh)
    }
    return out
  }
}
