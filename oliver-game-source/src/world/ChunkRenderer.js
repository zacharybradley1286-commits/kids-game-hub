import * as THREE from 'three'
import { CHUNK_W, WORLD_H, TILE_UV } from '../constants.js'
import { BLOCK, BLOCK_DB } from './BlockRegistry.js'

// Face directions: [dx, dy, dz, normal, uvGetter]
const FACES = [
  { dir: [0,  0, -1], normal: [0,  0, -1], uvKey: 'uvSide'   }, // front  (-Z)
  { dir: [0,  0,  1], normal: [0,  0,  1], uvKey: 'uvSide'   }, // back   (+Z)
  { dir: [-1, 0,  0], normal: [-1, 0,  0], uvKey: 'uvSide'   }, // left   (-X)
  { dir: [1,  0,  0], normal: [1,  0,  0], uvKey: 'uvSide'   }, // right  (+X)
  { dir: [0,  1,  0], normal: [0,  1,  0], uvKey: 'uvTop'    }, // top    (+Y)
  { dir: [0, -1,  0], normal: [0, -1,  0], uvKey: 'uvBottom' }, // bottom (-Y)
]

// Vertex offsets for each face (two triangles = 6 vertices)
const FACE_VERTS = [
  // front (-Z)
  [[0,0,0],[1,0,0],[1,1,0],[0,1,0]],
  // back (+Z)
  [[1,0,1],[0,0,1],[0,1,1],[1,1,1]],
  // left (-X)
  [[0,0,1],[0,0,0],[0,1,0],[0,1,1]],
  // right (+X)
  [[1,0,0],[1,0,1],[1,1,1],[1,1,0]],
  // top (+Y)
  [[0,1,0],[1,1,0],[1,1,1],[0,1,1]],
  // bottom (-Y)
  [[0,0,1],[1,0,1],[1,0,0],[0,0,0]],
]

export class ChunkRenderer {
  constructor(cx, cz, worldData, material) {
    this.cx = cx
    this.cz = cz
    this.worldData = worldData
    this.material = material
    this.mesh = null
    this.build()
  }

  build() {
    const positions = []
    const normals   = []
    const uvs       = []
    const indices   = []
    let vertCount = 0

    const ox = this.cx * CHUNK_W
    const oz = this.cz * CHUNK_W

    for (let lx = 0; lx < CHUNK_W; lx++) {
      const wx = ox + lx
      for (let y = 0; y < WORLD_H; y++) {
        for (let lz = 0; lz < CHUNK_W; lz++) {
          const wz = oz + lz
          const blockId = this.worldData.get(wx, y, wz)
          if (blockId === BLOCK.AIR) continue
          const block = BLOCK_DB[blockId]
          if (!block || !block.isSolid && !block.isTransparent) continue
          if (!block.isSolid) continue  // skip non-solid transparent (water)

          for (let fi = 0; fi < 6; fi++) {
            const face = FACES[fi]
            const nx = wx + face.dir[0]
            const ny = y  + face.dir[1]
            const nz = wz + face.dir[2]
            const neighbor = BLOCK_DB[this.worldData.get(nx, ny, nz)]

            // Only draw face if neighbor is transparent/air
            const neighborTransparent = !neighbor || !neighbor.isSolid || neighbor.isTransparent
            if (!neighborTransparent) continue

            const uv0 = block[face.uvKey]
            // Quad UVs: bottom-left, bottom-right, top-right, top-left
            const faceUVs = [
              [uv0.u,           uv0.v],
              [uv0.u + TILE_UV, uv0.v],
              [uv0.u + TILE_UV, uv0.v + TILE_UV],
              [uv0.u,           uv0.v + TILE_UV],
            ]

            const verts = FACE_VERTS[fi]
            const base = vertCount
            for (let vi = 0; vi < 4; vi++) {
              const v = verts[vi]
              positions.push(lx + v[0], y + v[1], lz + v[2])
              normals.push(...face.normal)
              uvs.push(faceUVs[vi][0], faceUVs[vi][1])
            }
            // Two triangles: 0,1,2 and 0,2,3
            indices.push(base, base+1, base+2, base, base+2, base+3)
            vertCount += 4
          }
        }
      }
    }

    if (this.mesh) {
      this.mesh.geometry.dispose()
      this.mesh.parent?.remove(this.mesh)
    }

    if (vertCount === 0) {
      this.mesh = null
      return
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geo.setAttribute('normal',   new THREE.Float32BufferAttribute(normals,   3))
    geo.setAttribute('uv',       new THREE.Float32BufferAttribute(uvs,       2))
    geo.setIndex(indices)
    geo.computeBoundingBox()

    this.mesh = new THREE.Mesh(geo, this.material)
    this.mesh.position.set(this.cx * CHUNK_W, 0, this.cz * CHUNK_W)
    this.mesh.castShadow = true
    this.mesh.receiveShadow = true
  }

  dispose() {
    if (this.mesh) {
      this.mesh.geometry.dispose()
      this.mesh.parent?.remove(this.mesh)
      this.mesh = null
    }
  }
}
