import { WORLD_W, WORLD_D, WORLD_H } from '../constants.js'
import { BLOCK } from './BlockRegistry.js'

// Shares the overworld's exact dimensions (WORLD_W x WORLD_D x WORLD_H) and
// a 1:1 coordinate mapping with it — a portal at (x,z) in the overworld
// always leads to (x,z) in the Nether, and back. That trades the classic
// Minecraft 8:1 scale for a much simpler implementation: no extra world
// size, no separate chunk/render math, just a different generator filling
// the same grid.

// Layered like the real Nether: a lava basement, a solid walkable crust
// above it, a tall open "wastes" airspace players actually stand and fight
// in, and a solid roof glowstone hangs from. ensurePortalAt() always lands
// the player on top of this crust — real open ground, not a hand-carved
// pocket buried in solid rock or a random cave.
const LAVA_TOP = 3          // basement lava sea occupies y <= this
const ROOF_START = WORLD_H - 5  // solid roof cap begins at this y

function crustTop(x, z) {
  // Gentle rolling height for the walkable floor — cheap sine bumps rather
  // than hashed noise, since this gets called per-column across the whole
  // map both at generation time and every later portal placement.
  return 6 + Math.round(Math.sin(x * 0.08) * 1.5 + Math.cos(z * 0.08) * 1.5)
}

export function buildNether(worldData) {
  for (let x = 0; x < WORLD_W; x++) {
    for (let z = 0; z < WORLD_D; z++) {
      const top = crustTop(x, z)
      for (let y = 0; y < WORLD_H; y++) {
        if (y <= LAVA_TOP) {
          worldData.set(x, y, z, BLOCK.LAVA)
        } else if (y <= top) {
          worldData.set(x, y, z, BLOCK.NETHERRACK)
        } else if (y >= ROOF_START) {
          worldData.set(x, y, z, BLOCK.NETHERRACK)
        } else {
          worldData.set(x, y, z, BLOCK.AIR)
        }
      }
      worldData.set(x, 0, z, BLOCK.NETHERRACK) // solid base under the lava sea
    }
  }

  let s = 555
  const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff }

  // Cave tunnels burrowing through the crust only (bounded "worm" carving,
  // same technique the overworld uses) — the open wastes airspace above is
  // deliberately left alone, since that's the "normal land" players land
  // and walk around on.
  const NUM_CAVERNS = 150
  for (let i = 0; i < NUM_CAVERNS; i++) {
    let x = 8 + Math.floor(rng() * (WORLD_W - 16))
    let y = 1 + Math.floor(rng() * 4)
    let z = 8 + Math.floor(rng() * (WORLD_D - 16))
    const len = 25 + Math.floor(rng() * 45)
    let dx = rng() * 2 - 1, dz = rng() * 2 - 1, dy = (rng() - 0.5) * 0.4
    for (let step = 0; step < len; step++) {
      const r = 2 + (rng() > 0.75 ? 1 : 0)
      for (let ox = -r; ox <= r; ox++) {
        for (let oy = -r; oy <= r; oy++) {
          for (let oz = -r; oz <= r; oz++) {
            if (ox*ox + oy*oy*1.5 + oz*oz > r*r) continue
            const wy = y + oy
            if (wy <= LAVA_TOP || wy > crustTop(x+ox, z+oz)) continue  // stay inside the crust
            if (worldData.inBounds(x+ox, wy, z+oz)) worldData.set(x+ox, wy, z+oz, BLOCK.AIR)
          }
        }
      }
      x += Math.round(dx); y += Math.round(dy); z += Math.round(dz)
      dx += (rng() - 0.5) * 0.4; dz += (rng() - 0.5) * 0.4; dy += (rng() - 0.5) * 0.1
      dx = Math.max(-1.5, Math.min(1.5, dx)); dz = Math.max(-1.5, Math.min(1.5, dz))
      dy = Math.max(-0.4, Math.min(0.4, dy))
      if (!worldData.inBounds(x, y, z) || y <= LAVA_TOP + 1 || y >= ROOF_START - 2) break
    }
  }

  // Glowstone clusters hanging from the roof into the open wastes.
  for (let i = 0; i < 400; i++) {
    const x = 2 + Math.floor(rng() * (WORLD_W - 4))
    const z = 2 + Math.floor(rng() * (WORLD_D - 4))
    if (worldData.get(x, ROOF_START - 1, z) === BLOCK.AIR) {
      worldData.set(x, ROOF_START, z, BLOCK.GLOWSTONE)
    }
  }

  // Scattered lava pools sitting on the crust floor, out in the wastes.
  for (let i = 0; i < 150; i++) {
    const x = 2 + Math.floor(rng() * (WORLD_W - 4))
    const z = 2 + Math.floor(rng() * (WORLD_D - 4))
    const top = crustTop(x, z)
    if (worldData.get(x, top + 1, z) === BLOCK.AIR) {
      worldData.set(x, top + 1, z, BLOCK.LAVA)
    }
  }
}

// Guarantees a safe landing spot at (x,z): always on top of the solid crust
// (real open "land", not a cave or a hand-carved pocket buried in rock),
// with a proper obsidian-framed portal — matching the one pre-built at the
// overworld spawn — so the player always has a real structure to find
// their way back through.
export function ensurePortalAt(worldData, x, z) {
  const y = crustTop(x, z)

  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      // Guarantee footing under the whole landing pocket, not just the
      // centre — the player lands one cell off from the portal itself (see
      // Game.js#_switchDimension), so that cell needs solid ground too.
      if (worldData.get(x + dx, y, z + dz) !== BLOCK.NETHERRACK) {
        worldData.set(x + dx, y, z + dz, BLOCK.NETHERRACK)
      }
      for (let dy = 1; dy <= 4; dy++) {
        worldData.set(x + dx, y + dy, z + dz, BLOCK.AIR)
      }
    }
  }

  // 3-wide obsidian frame with a 2-tall portal opening, built along the
  // same (x,z) column the player teleported to. The landing spot itself is
  // one cell over (x, z+1, see Game.js) so it never overlaps the frame.
  for (const dx of [-1, 0, 1]) {
    worldData.set(x + dx, y + 1, z, BLOCK.OBSIDIAN)
    worldData.set(x + dx, y + 4, z, BLOCK.OBSIDIAN)
  }
  for (const dx of [-1, 1]) {
    worldData.set(x + dx, y + 2, z, BLOCK.OBSIDIAN)
    worldData.set(x + dx, y + 3, z, BLOCK.OBSIDIAN)
  }
  worldData.set(x, y + 2, z, BLOCK.PORTAL)
  worldData.set(x, y + 3, z, BLOCK.PORTAL)
  return y
}
