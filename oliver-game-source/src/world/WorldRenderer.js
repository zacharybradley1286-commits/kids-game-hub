import * as THREE from 'three'
import { CHUNKS_X, CHUNKS_Z } from '../constants.js'
import { ChunkRenderer } from './ChunkRenderer.js'

export class WorldRenderer {
  constructor(scene, worldData, atlasTex) {
    this.scene = scene
    this.worldData = worldData

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

    // Water gets its own alpha-blended pass with depth writes off — with
    // depthWrite on, a translucent-looking water face would still write
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

    this._buildAll()
  }

  _buildAll() {
    for (let cx = 0; cx < CHUNKS_X; cx++) {
      for (let cz = 0; cz < CHUNKS_Z; cz++) {
        this._buildChunk(cx, cz)
      }
    }
  }

  _buildChunk(cx, cz) {
    const key = `${cx},${cz}`
    const existing = this.chunks.get(key)
    if (existing) {
      existing.dispose()
    }
    const renderer = new ChunkRenderer(cx, cz, this.worldData, this.material, this.liquidMaterial)
    this.chunks.set(key, renderer)
    if (renderer.mesh) {
      this.group.add(renderer.mesh)
    }
    if (renderer.liquidMesh) {
      this.group.add(renderer.liquidMesh)
    }
  }

  rebuildChunk(cx, cz) {
    if (cx < 0 || cx >= CHUNKS_X || cz < 0 || cz >= CHUNKS_Z) return
    const key = `${cx},${cz}`
    const old = this.chunks.get(key)
    if (old?.mesh) this.group.remove(old.mesh)
    if (old?.liquidMesh) this.group.remove(old.liquidMesh)
    this._buildChunk(cx, cz)
    // Also rebuild neighbors (shared face culling edge)
    const neighbors = [
      [cx-1, cz], [cx+1, cz], [cx, cz-1], [cx, cz+1]
    ]
    for (const [nx, nz] of neighbors) {
      if (nx < 0 || nx >= CHUNKS_X || nz < 0 || nz >= CHUNKS_Z) continue
      const nkey = `${nx},${nz}`
      const nr = this.chunks.get(nkey)
      if (nr?.mesh) this.group.remove(nr.mesh)
      if (nr?.liquidMesh) this.group.remove(nr.liquidMesh)
      const rebuilt = new ChunkRenderer(nx, nz, this.worldData, this.material, this.liquidMaterial)
      this.chunks.set(nkey, rebuilt)
      if (rebuilt.mesh) this.group.add(rebuilt.mesh)
      if (rebuilt.liquidMesh) this.group.add(rebuilt.liquidMesh)
    }
  }

  get allMeshes() {
    const out = []
    for (const r of this.chunks.values()) {
      if (r.mesh) out.push(r.mesh)
    }
    return out
  }
}
