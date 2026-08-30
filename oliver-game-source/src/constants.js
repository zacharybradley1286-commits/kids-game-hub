export const WORLD_W = 1536
export const WORLD_D = 1536
export const WORLD_H = 32
export const CHUNK_W = 16
export const CHUNKS_X = WORLD_W / CHUNK_W  // 96
export const CHUNKS_Z = WORLD_D / CHUNK_W  // 96
// Mesh only chunks this far from the player (circle, in chunks). 6 → ~13×13
// loaded at once instead of all 9,216. Voxel data for the full 1536 map is
// still stored; we just don't build GPU meshes for the far side of the island.
export const CHUNK_LOAD_RADIUS = 6
export const SURFACE_Y = 14
export const SEA_LEVEL = 9

// Daytime lengthened by ~2 minutes (240s -> 360s); night kept the same
// length (240s), so DAY_LENGTH and NIGHT_START both grow together.
export const DAY_LENGTH = 600       // seconds per full cycle
export const NIGHT_START = 0.6     // fraction of cycle where night begins

export const MOB_SPAWN_RADIUS = 55
export const MAX_MOBS = 30
export const PLAYER_REACH = 5
export const GRAVITY = 20
export const JUMP_SPEED = 8
export const MOVE_SPEED = 5

export const ATLAS_COLS = 16        // tiles per row in atlas PNG
export const TILE_UV = 1 / ATLAS_COLS
