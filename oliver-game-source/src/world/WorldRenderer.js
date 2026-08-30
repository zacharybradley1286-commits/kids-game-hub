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

    // Water needs alpha blending (translucent), not the alphaTest cutout
    // the opaque terrain material uses, so it's a separate material/mesh
    // per chunk rather than sharing this.material.
    const waterMat = new THREE.MeshLambertMaterial({
      map: atlasTex,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
    this.waterMaterial = waterMat

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
    const renderer = new ChunkRenderer(cx, cz, this.worldData, this.material, this.waterMaterial)
    this.chunks.set(key, renderer)
    if (renderer.mesh) {
      this.group.add(renderer.mesh)
    }
    if (renderer.waterMesh) {
      this.group.add(renderer.waterMesh)
    }
  }

  rebuildChunk(cx, cz) {
    if (cx < 0 || cx >= CHUNKS_X || cz < 0 || cz >= CHUNKS_Z) return
    const key = `${cx},${cz}`
    const old = this.chunks.get(key)
    if (old?.mesh) this.group.remove(old.mesh)
    if (old?.waterMesh) this.group.remove(old.waterMesh)
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
      if (nr?.waterMesh) this.group.remove(nr.waterMesh)
      const rebuilt = new ChunkRenderer(nx, nz, this.worldData, this.material, this.waterMaterial)
      this.chunks.set(nkey, rebuilt)
      if (rebuilt.mesh) this.group.add(rebuilt.mesh)
      if (rebuilt.waterMesh) this.group.add(rebuilt.waterMesh)
    }
  }

  // Solid meshes only — this feeds the mine/place targeting raycast
  // (PlayerController._raycastBlock), which must not be able to target
  // water (there's nothing to mine or place a block against there).
  get allMeshes() {
    const out = []
    for (const r of this.chunks.values()) {
      if (r.mesh) out.push(r.mesh)
    }
    return out
  }
}
