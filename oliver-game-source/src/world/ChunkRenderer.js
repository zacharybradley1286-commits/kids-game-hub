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

// Blocks built into a separate alpha-blended pass instead of the main
// opaque/cutout one — real translucent water would otherwise write full
// depth like solid stone and hide anything (fish, sharks, the player's own
// view of terrain) sitting inside or behind it.
const LIQUID_BLOCKS = new Set([BLOCK.WATER])

// Decorative plants (tall grass, flowers) render as a pair of intersecting
// vertical quads — like Minecraft's "X" sprite plants — instead of a full
// cube, so the ground doesn't look like it's covered in little green boxes.
// The chunk material is already DoubleSide, so a single quad per diagonal
// is visible from both faces without duplicating geometry.
const CROSS_BLOCKS = new Set([BLOCK.TALL_GRASS, BLOCK.FLOWER])
const CROSS_QUADS = [
  [[0,0,0], [1,0,1], [1,1,1], [0,1,0]],
  [[1,0,0], [0,0,1], [0,1,1], [1,1,0]],
]

function buildGeometry(worldData, cx, cz, blockFilter) {
  const positions = []
  const normals   = []
  const uvs       = []
  const indices   = []
  let vertCount = 0

  const ox = cx * CHUNK_W
  const oz = cz * CHUNK_W

  for (let lx = 0; lx < CHUNK_W; lx++) {
    const wx = ox + lx
    for (let y = 0; y < WORLD_H; y++) {
      for (let lz = 0; lz < CHUNK_W; lz++) {
        const wz = oz + lz
        const blockId = worldData.get(wx, y, wz)
        if (blockId === BLOCK.AIR) continue
        if (!blockFilter(blockId)) continue
        const block = BLOCK_DB[blockId]
        if (!block || !block.isSolid && !block.isTransparent) continue

        if (CROSS_BLOCKS.has(blockId)) {
          const uv0 = block.uvSide
          const quadUVs = [
            [uv0.u,           uv0.v],
            [uv0.u + TILE_UV, uv0.v],
            [uv0.u + TILE_UV, uv0.v + TILE_UV],
            [uv0.u,           uv0.v + TILE_UV],
          ]
          for (const quad of CROSS_QUADS) {
            const base = vertCount
            for (let vi = 0; vi < 4; vi++) {
              const v = quad[vi]
              positions.push(lx + v[0], y + v[1], lz + v[2])
              normals.push(0, 1, 0)  // unlit-ish flat shading is fine for thin sprites
              uvs.push(quadUVs[vi][0], quadUVs[vi][1])
            }
            indices.push(base, base+1, base+2, base, base+2, base+3)
            vertCount += 4
          }
          continue
        }

        for (let fi = 0; fi < 6; fi++) {
          const face = FACES[fi]
          const nx = wx + face.dir[0]
          const ny = y  + face.dir[1]
          const nz = wz + face.dir[2]
          const neighborId = worldData.get(nx, ny, nz)
          const neighbor = BLOCK_DB[neighborId]

          // Only draw face if neighbor is transparent/air. Two adjacent
          // liquid blocks of the same kind never expose a face between
          // them (no point rendering blended quads no one will ever see
          // the far side of, and it roughly halves the ocean's face count).
          if (LIQUID_BLOCKS.has(blockId) && neighborId === blockId) continue
          const neighborTransparent = !neighbor || !neighbor.isSolid || neighbor.isTransparent
          if (!neighborTransparent) continue

          const uv0 = block[face.uvKey]
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
          indices.push(base, base+1, base+2, base, base+2, base+3)
          vertCount += 4
        }
      }
    }
  }

  if (vertCount === 0) return null

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setAttribute('normal',   new THREE.Float32BufferAttribute(normals,   3))
  geo.setAttribute('uv',       new THREE.Float32BufferAttribute(uvs,       2))
  geo.setIndex(indices)
  geo.computeBoundingBox()
  return geo
}

export class ChunkRenderer {
  constructor(cx, cz, worldData, material, liquidMaterial) {
    this.cx = cx
    this.cz = cz
    this.worldData = worldData
    this.material = material
    this.liquidMaterial = liquidMaterial
    this.mesh = null
    this.liquidMesh = null
    this.build()
  }

  build() {
    if (this.mesh) { this.mesh.geometry.dispose(); this.mesh.parent?.remove(this.mesh) }
    if (this.liquidMesh) { this.liquidMesh.geometry.dispose(); this.liquidMesh.parent?.remove(this.liquidMesh) }
    this.mesh = null
    this.liquidMesh = null

    const ox = this.cx * CHUNK_W, oz = this.cz * CHUNK_W

    const solidGeo = buildGeometry(this.worldData, this.cx, this.cz, id => !LIQUID_BLOCKS.has(id))
    if (solidGeo) {
      this.mesh = new THREE.Mesh(solidGeo, this.material)
      this.mesh.position.set(ox, 0, oz)
      this.mesh.castShadow = true
      this.mesh.receiveShadow = true
    }

    const liquidGeo = buildGeometry(this.worldData, this.cx, this.cz, id => LIQUID_BLOCKS.has(id))
    if (liquidGeo) {
      this.liquidMesh = new THREE.Mesh(liquidGeo, this.liquidMaterial)
      this.liquidMesh.position.set(ox, 0, oz)
      this.liquidMesh.receiveShadow = true
    }
  }

  dispose() {
    if (this.mesh) {
      this.mesh.geometry.dispose()
      this.mesh.parent?.remove(this.mesh)
      this.mesh = null
    }
    if (this.liquidMesh) {
      this.liquidMesh.geometry.dispose()
      this.liquidMesh.parent?.remove(this.liquidMesh)
      this.liquidMesh = null
    }
  }
}
