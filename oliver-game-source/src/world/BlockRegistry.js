import { TILE_UV } from '../constants.js'

// Atlas layout (col, row) → UV offset. Each tile is TILE_UV wide/tall.
function uv(col, row) {
  return { u: col * TILE_UV, v: 1 - (row + 1) * TILE_UV }
}

export class BlockType {
  constructor({ id, name, color, hardness, minTier = 0, dropItem = null, dropCount = 1,
                isTransparent = false, isSolid = true, isFarmland = false, isHazard = false,
                atlasCol = 0, atlasRow = 0, atlasTop = null, atlasBottom = null }) {
    this.id = id
    this.name = name
    this.color = color           // fallback color (used to generate atlas)
    this.hardness = hardness
    this.minTier = minTier
    this.dropItem = dropItem     // null = drops self (uses block name as item)
    this.dropCount = dropCount
    this.isTransparent = isTransparent
    this.isSolid = isSolid
    this.isFarmland = isFarmland
    this.isHazard = isHazard     // damages the player on contact (e.g. lava)
    // Atlas UV for side faces
    this.uvSide   = uv(atlasCol, atlasRow)
    // Top/bottom can differ (e.g. grass top is green, sides are dirt)
    this.uvTop    = atlasTop    ? uv(atlasTop[0],    atlasTop[1])    : this.uvSide
    this.uvBottom = atlasBottom ? uv(atlasBottom[0], atlasBottom[1]) : this.uvSide
  }
}

// Block IDs
export const BLOCK = {
  AIR:            0,
  GRASS:          1,
  DIRT:           2,
  STONE:          3,
  COBBLESTONE:    4,
  WOOD_LOG:       5,
  LEAVES:         6,
  SAND:           7,
  IRON_ORE:       8,
  CRYSTAL_ORE:    9,
  FARMLAND:       10,
  CRAFTING_TABLE: 11,
  FORGE:          12,
  ALTAR:          13,
  WATER:          14,
  GRAVEL:         15,
  PLANKS:         16,
  GLASS:          17,
  CHEST:          18,
  TORCH:          19,
  CAMPFIRE:       20,
  BED:            21,
  NETHERRACK:     22,
  LAVA:           23,
  GLOWSTONE:      24,
  OBSIDIAN:       25,
  PORTAL:         26,
  CORAL:          27,
  KELP:           28,
  TALL_GRASS:     29,
  FLOWER:         30,
}

export const BLOCK_DB = {
  [BLOCK.AIR]:            new BlockType({ id: BLOCK.AIR,            name: 'air',            color: '#000000', hardness: 0,    isTransparent: true, isSolid: false, atlasCol: 15, atlasRow: 15 }),
  [BLOCK.GRASS]:          new BlockType({ id: BLOCK.GRASS,          name: 'grass',          color: '#4a8f3f', hardness: 0.5,  dropItem: 'dirt',   atlasCol: 3, atlasRow: 0, atlasTop: [0, 0], atlasBottom: [2, 0] }),
  [BLOCK.DIRT]:           new BlockType({ id: BLOCK.DIRT,           name: 'dirt',           color: '#8b6914', hardness: 0.5,  atlasCol: 2, atlasRow: 0 }),
  [BLOCK.STONE]:          new BlockType({ id: BLOCK.STONE,          name: 'stone',          color: '#888888', hardness: 1.5,  minTier: 1, dropItem: 'cobblestone', atlasCol: 1, atlasRow: 0 }),
  [BLOCK.COBBLESTONE]:    new BlockType({ id: BLOCK.COBBLESTONE,    name: 'cobblestone',    color: '#6b6b6b', hardness: 2.0,  minTier: 1, atlasCol: 0, atlasRow: 1 }),
  [BLOCK.WOOD_LOG]:       new BlockType({ id: BLOCK.WOOD_LOG,       name: 'wood_log',       color: '#6b4423', hardness: 1.0,  atlasCol: 4, atlasRow: 1, atlasTop: [5, 1], atlasBottom: [5, 1] }),
  [BLOCK.LEAVES]:         new BlockType({ id: BLOCK.LEAVES,         name: 'leaves',         color: '#2d6e1e', hardness: 0.2,  dropItem: null, isTransparent: true, atlasCol: 4, atlasRow: 3 }),
  [BLOCK.SAND]:           new BlockType({ id: BLOCK.SAND,           name: 'sand',           color: '#d4c27a', hardness: 0.5,  atlasCol: 2, atlasRow: 1 }),
  [BLOCK.IRON_ORE]:       new BlockType({ id: BLOCK.IRON_ORE,       name: 'iron_ore',       color: '#7a7a60', hardness: 3.0,  minTier: 2, dropItem: 'iron_ore', atlasCol: 1, atlasRow: 2 }),
  [BLOCK.CRYSTAL_ORE]:    new BlockType({ id: BLOCK.CRYSTAL_ORE,    name: 'crystal_ore',    color: '#4a2080', hardness: 4.5,  minTier: 3, dropItem: 'crystal_shard', atlasCol: 2, atlasRow: 2 }),
  [BLOCK.FARMLAND]:       new BlockType({ id: BLOCK.FARMLAND,       name: 'farmland',       color: '#4a2e08', hardness: 0.5,  dropItem: 'dirt', isFarmland: true, atlasCol: 6, atlasRow: 0 }),
  [BLOCK.CRAFTING_TABLE]: new BlockType({ id: BLOCK.CRAFTING_TABLE, name: 'crafting_table', color: '#8b4513', hardness: 1.0,  atlasCol: 11, atlasRow: 2, atlasTop: [11, 2], atlasBottom: [4, 0] }),
  [BLOCK.FORGE]:          new BlockType({ id: BLOCK.FORGE,          name: 'forge',          color: '#555555', hardness: 1.5,  minTier: 1, atlasCol: 13, atlasRow: 2 }),
  [BLOCK.ALTAR]:          new BlockType({ id: BLOCK.ALTAR,          name: 'altar',          color: '#200030', hardness: 999,  atlasCol: 14, atlasRow: 2 }),
  [BLOCK.WATER]:          new BlockType({ id: BLOCK.WATER,          name: 'water',          color: '#2255aa', hardness: 999,  isTransparent: true, isSolid: false, atlasCol: 15, atlasRow: 12 }),
  [BLOCK.GRAVEL]:         new BlockType({ id: BLOCK.GRAVEL,         name: 'gravel',         color: '#888877', hardness: 0.6,  atlasCol: 3, atlasRow: 1 }),
  [BLOCK.PLANKS]:         new BlockType({ id: BLOCK.PLANKS,         name: 'planks',         color: '#c8a44a', hardness: 0.75, atlasCol: 4, atlasRow: 0 }),
  [BLOCK.GLASS]:          new BlockType({ id: BLOCK.GLASS,          name: 'glass',          color: '#aaddff', hardness: 0.3,  isTransparent: true, atlasCol: 1, atlasRow: 3 }),
  [BLOCK.CHEST]:          new BlockType({ id: BLOCK.CHEST,          name: 'chest',          color: '#8b6914', hardness: 0.75, atlasCol: 9, atlasRow: 1 }),
  [BLOCK.TORCH]:          new BlockType({ id: BLOCK.TORCH,          name: 'torch',          color: '#ffaa00', hardness: 0,    isSolid: false, isTransparent: true, atlasCol: 0, atlasRow: 5 }),
  [BLOCK.CAMPFIRE]:       new BlockType({ id: BLOCK.CAMPFIRE,       name: 'campfire',       color: '#cc4400', hardness: 0.5,  atlasCol: 7, atlasRow: 5 }),
  [BLOCK.BED]:            new BlockType({ id: BLOCK.BED,            name: 'bed',            color: '#a02020', hardness: 0.3,  atlasCol: 6, atlasRow: 1, atlasTop: [7, 1] }),
  [BLOCK.NETHERRACK]:     new BlockType({ id: BLOCK.NETHERRACK,     name: 'netherrack',     color: '#5a2a20', hardness: 1.0,  minTier: 1, atlasCol: 3, atlasRow: 2 }),
  // LAVA/PORTAL keep isSolid:true (see ChunkRenderer — isSolid:false blocks
  // get no mesh at all, it's a render flag more than a physics one here).
  // Actual walk-through-and-sink movement for lava is handled by a
  // dedicated exclusion in WorldData.isSolid() instead.
  [BLOCK.LAVA]:           new BlockType({ id: BLOCK.LAVA,           name: 'lava',           color: '#e8480a', hardness: 999,  isTransparent: true, isSolid: true, isHazard: true, atlasCol: 4, atlasRow: 2 }),
  [BLOCK.GLOWSTONE]:      new BlockType({ id: BLOCK.GLOWSTONE,      name: 'glowstone',      color: '#f0d878', hardness: 0.5,  atlasCol: 5, atlasRow: 2 }),
  [BLOCK.OBSIDIAN]:       new BlockType({ id: BLOCK.OBSIDIAN,       name: 'obsidian',       color: '#1a0e28', hardness: 6.0,  minTier: 4, atlasCol: 6, atlasRow: 2 }),
  [BLOCK.PORTAL]:         new BlockType({ id: BLOCK.PORTAL,         name: 'nether_portal',  color: '#9020e0', hardness: 999,  isTransparent: true, isSolid: true, atlasCol: 7, atlasRow: 2 }),
  [BLOCK.CORAL]:          new BlockType({ id: BLOCK.CORAL,          name: 'coral',          color: '#ff6a8a', hardness: 0.2,  isTransparent: true, isSolid: false, atlasCol: 8, atlasRow: 3 }),
  [BLOCK.KELP]:           new BlockType({ id: BLOCK.KELP,           name: 'kelp',           color: '#2a8a4a', hardness: 0.2,  isTransparent: true, isSolid: false, atlasCol: 9, atlasRow: 3 }),
  [BLOCK.TALL_GRASS]:     new BlockType({ id: BLOCK.TALL_GRASS,     name: 'tall_grass',     color: '#4a8f3f', hardness: 0.1,  dropItem: null,     isTransparent: true, isSolid: false, atlasCol: 10, atlasRow: 3 }),
  [BLOCK.FLOWER]:         new BlockType({ id: BLOCK.FLOWER,         name: 'flower',         color: '#e05070', hardness: 0.1,  dropItem: null,     isTransparent: true, isSolid: false, atlasCol: 11, atlasRow: 3 }),
}

export const BLOCK_BY_NAME = {}
for (const b of Object.values(BLOCK_DB)) {
  BLOCK_BY_NAME[b.name] = b
}
