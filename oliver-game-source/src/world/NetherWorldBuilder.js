import { WORLD_W, WORLD_D, WORLD_H } from '../constants.js'
import { BLOCK } from './BlockRegistry.js'

// Shares the overworld's exact dimensions (WORLD_W x WORLD_D x WORLD_H) and
// a 1:1 coordinate mapping with it — a portal at (x,z) in the overworld
// always leads to (x,z) in the Nether, and back. That trades the classic
// Minecraft 8:1 scale for a much simpler implementation: no extra world
// size, no separate chunk/render math, just a different generator filling
// the same grid.

export function buildNether(worldData) {
  // Solid netherrack fill.
  for (let x = 0; x < WORLD_W; x++) {
    for (let y = 0; y < WORLD_H; y++) {
      for (let z = 0; z < WORLD_D; z++) {
        worldData.set(x, y, z, BLOCK.NETHERRACK)
      }
    }
  }

  let s = 555
  const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff }

  // Carve caverns with bounded tunnel "worms" — the same technique the
  // overworld uses for its caves — rather than a full-volume noise
  // threshold. An earlier version hollowed out roughly half of all 18.8M
  // cells that way, which produced so much interior mesh surface area that
  // building the chunk geometry took over a minute. Worms carve tubes
  // instead of a sponge, so total exposed surface area (and mesh cost)
  // stays proportional to how many tunnels there are, not the world's size.
  const NUM_CAVERNS = 150
  for (let i = 0; i < NUM_CAVERNS; i++) {
    let x = 8 + Math.floor(rng() * (WORLD_W - 16))
    let y = 4 + Math.floor(rng() * (WORLD_H - 10))
    let z = 8 + Math.floor(rng() * (WORLD_D - 16))
    const len = 30 + Math.floor(rng() * 55)
    let dx = rng() * 2 - 1, dz = rng() * 2 - 1, dy = (rng() - 0.5) * 0.6
    for (let step = 0; step < len; step++) {
      const r = 2 + (rng() > 0.75 ? 1 : 0)
      for (let ox = -r; ox <= r; ox++) {
        for (let oy = -r; oy <= r; oy++) {
          for (let oz = -r; oz <= r; oz++) {
            if (ox*ox + oy*oy*1.5 + oz*oz > r*r) continue
            if (worldData.inBounds(x+ox, y+oy, z+oz)) worldData.set(x+ox, y+oy, z+oz, BLOCK.AIR)
          }
        }
      }
      x += Math.round(dx); y += Math.round(dy); z += Math.round(dz)
      dx += (rng() - 0.5) * 0.4; dz += (rng() - 0.5) * 0.4; dy += (rng() - 0.5) * 0.15
      dx = Math.max(-1.5, Math.min(1.5, dx)); dz = Math.max(-1.5, Math.min(1.5, dz))
      dy = Math.max(-0.6, Math.min(0.6, dy))
      if (!worldData.inBounds(x, y, z) || y < 3 || y > WORLD_H - 4) break
    }
  }

  // Lava sea across the floor.
  for (let x = 0; x < WORLD_W; x++) {
    for (let z = 0; z < WORLD_D; z++) {
      for (let y = 0; y < 4; y++) {
        if (worldData.get(x, y, z) === BLOCK.AIR) worldData.set(x, y, z, BLOCK.LAVA)
      }
    }
  }

  // Glowstone clusters hanging from cavern ceilings.
  for (let i = 0; i < 400; i++) {
    const x = 2 + Math.floor(rng() * (WORLD_W - 4))
    const z = 2 + Math.floor(rng() * (WORLD_D - 4))
    for (let y = WORLD_H - 3; y >= 4; y--) {
      if (worldData.get(x, y, z) === BLOCK.NETHERRACK && worldData.get(x, y - 1, z) === BLOCK.AIR) {
        worldData.set(x, y, z, BLOCK.GLOWSTONE)
        break
      }
    }
  }

  // Scattered lava pools inside caverns, not just the floor sea.
  for (let i = 0; i < 200; i++) {
    const x = 2 + Math.floor(rng() * (WORLD_W - 4))
    const z = 2 + Math.floor(rng() * (WORLD_D - 4))
    for (let y = 4; y < WORLD_H - 4; y++) {
      if (worldData.get(x, y, z) === BLOCK.AIR && worldData.get(x, y - 1, z) === BLOCK.NETHERRACK) {
        worldData.set(x, y, z, BLOCK.LAVA)
        break
      }
    }
  }
}

// Guarantees a safe landing spot at (x,z): carves a small pocket, floors it
// with netherrack if it would otherwise open onto air or lava, and builds a
// proper obsidian-framed portal (matching the one pre-built at the
// overworld spawn) so the player always has a real structure to find their
// way back through, not just a bare floating block. The Nether's procedural
// terrain at an arbitrary coordinate can't be trusted to be walkable, so
// this runs every time the player arrives somewhere new.
export function ensurePortalAt(worldData, x, z) {
  let y = Math.floor(WORLD_H / 2)
  while (y > 3 && worldData.get(x, y, z) === BLOCK.AIR) y--
  if (y <= 3) y = 5

  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      // Solid floor under the whole landing pocket, not just the centre —
      // the player lands one cell off from the portal itself (see
      // Game.js#_switchDimension), so that cell needs guaranteed footing too.
      const floor = worldData.get(x + dx, y, z + dz)
      if (floor === BLOCK.AIR || floor === BLOCK.LAVA) worldData.set(x + dx, y, z + dz, BLOCK.NETHERRACK)
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
