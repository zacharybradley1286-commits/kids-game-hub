import { WORLD_W, WORLD_H, WORLD_D } from '../constants.js'
import { BLOCK } from './BlockRegistry.js'

export class WorldData {
  constructor() {
    // Flat Uint8Array: index = x * WORLD_H * WORLD_D + y * WORLD_D + z
    this.data = new Uint8Array(WORLD_W * WORLD_H * WORLD_D)
    this.data.fill(BLOCK.AIR)
  }

  _idx(x, y, z) {
    return x * WORLD_H * WORLD_D + y * WORLD_D + z
  }

  inBounds(x, y, z) {
    return x >= 0 && x < WORLD_W && y >= 0 && y < WORLD_H && z >= 0 && z < WORLD_D
  }

  get(x, y, z) {
    if (!this.inBounds(x, y, z)) return BLOCK.AIR
    return this.data[this._idx(x, y, z)]
  }

  set(x, y, z, blockId) {
    if (!this.inBounds(x, y, z)) return
    this.data[this._idx(x, y, z)] = blockId
  }

  // Returns true if block at (x,y,z) blocks movement/vision
  isSolid(x, y, z) {
    if (!this.inBounds(x, y, z)) return false
    const bid = this.get(x, y, z)
    return bid !== BLOCK.AIR && bid !== BLOCK.WATER && bid !== BLOCK.LEAVES && bid !== BLOCK.LAVA
  }

  // Find the topmost solid block Y at (x, z), returns -1 if none
  surfaceY(x, z) {
    for (let y = WORLD_H - 1; y >= 0; y--) {
      if (this.get(x, y, z) !== BLOCK.AIR) return y
    }
    return -1
  }

  // Run-length encoded as a flat [blockId, runLength, blockId, runLength, ...]
  // array. The raw world is now WORLD_W*WORLD_H*WORLD_D bytes (18.8M on the
  // current 768x768x32 map) — serializing that directly as a JSON array of
  // numbers blows well past localStorage's ~5-10MB quota and silently fails
  // to save. Voxel terrain is highly repetitive (long runs of the same
  // block), so RLE typically shrinks this by two to three orders of
  // magnitude, which is what keeps saving working at the larger map size.
  serialize() {
    const data = this.data
    const runs = []
    let i = 0
    while (i < data.length) {
      const value = data[i]
      let runLength = 1
      while (i + runLength < data.length && data[i + runLength] === value) runLength++
      runs.push(value, runLength)
      i += runLength
    }
    return runs
  }

  deserialize(arr) {
    // Back-compat: pre-RLE saves stored the raw byte array (length equal to
    // the full world volume). Detect and load those directly instead of
    // misinterpreting them as run-length pairs.
    const total = WORLD_W * WORLD_H * WORLD_D
    if (arr.length === total) {
      this.data = new Uint8Array(arr)
      return
    }
    const data = new Uint8Array(total)
    let pos = 0
    for (let i = 0; i < arr.length; i += 2) {
      const value = arr[i]
      const runLength = arr[i + 1]
      data.fill(value, pos, pos + runLength)
      pos += runLength
    }
    this.data = data
  }
}
