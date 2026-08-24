import { WORLD_W, WORLD_D, WORLD_H, SURFACE_Y, SEA_LEVEL } from '../constants.js'
import { BLOCK } from './BlockRegistry.js'

// World was quadrupled in each linear dimension (192->768, 16x area). All the
// hand-placed feature coordinates below were originally tuned for the old
// 192x192 map, so every anchor position is multiplied by SCALE to spread
// them proportionally across the new map. Large biome footprints (mountain/
// swamp/forest radii) are grown by SCALE_SOFT so they stay prominent without
// becoming absurdly oversized. Small human-scale structures (houses, towers,
// graves, tree crowns) are left at their original size. Density counts for
// scattered content (caves, ore veins, decorations) are scaled by SCALE too
// so the bigger map doesn't feel empty, without blowing up generation time
// the way a full 16x (area-proportional) increase would.
const SCALE = 4
const SCALE_SOFT = 2

// ── Noise helpers ──────────────────────────────────────────────────────────
function hash(x, z) {
  let h = Math.imul(x * 1664525 + z, 22695477) + 1013904223
  h ^= h >>> 16
  h  = Math.imul(h, 0x45d9f3b)
  h ^= h >>> 16
  return (h >>> 0) / 4294967295
}

function smooth(x, z, scale) {
  const xi = Math.floor(x / scale), zi = Math.floor(z / scale)
  const xf = x / scale - xi,        zf = z / scale - zi
  const u  = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf)
  return hash(xi,   zi  ) * (1-u)*(1-v) +
         hash(xi+1, zi  ) * u    *(1-v) +
         hash(xi,   zi+1) * (1-u)* v    +
         hash(xi+1, zi+1) * u    * v
}

// Fractal Brownian Motion
function fbm(x, z, octaves = 4, baseScale = 55) {
  let val = 0, amp = 1, freq = 1, max = 0
  for (let i = 0; i < octaves; i++) {
    val += smooth(x * freq, z * freq, baseScale) * amp
    max += amp
    amp  *= 0.5
    freq *= 2.1
  }
  return val / max
}

// ── Island mask — oval with organic warped coastline ──────────────────────
function islandMask(x, z) {
  const cx = WORLD_W / 2, cz = WORLD_D / 2
  const dx = (x - cx) / (WORLD_W * 0.44)
  const dz = (z - cz) / (WORLD_D * 0.44)
  const warp = smooth(x, z, 52) * 0.20 - 0.10
  return Math.sqrt(dx*dx + dz*dz) + warp
}

// ── Main entry ─────────────────────────────────────────────────────────────
export function buildIsland(worldData) {
  _fillBase(worldData)
  _addSurface(worldData)
  _addBeach(worldData)
  _addPonds(worldData)
  _addRavine(worldData)
  _addMainMountain(worldData)
  _addSecondMountain(worldData)
  _addMainSwamp(worldData)
  _addForestBiome(worldData)
  _addTrees(worldData)
  _addFallenLogs(worldData)
  _addRockyOutcrops(worldData)
  _carveCaves(worldData)
  _addCrystalCavern(worldData)
  _placeOreVeins(worldData)
  _placeStructures(worldData)
  _addRuins(worldData)
  _addStandingStones(worldData)
  _addCampsites(worldData)
  _addLootChests(worldData)
  _addRiver(worldData)
  _addGraveyard(worldData)
  _addTowers(worldData)
  _addVillages(worldData)
  _addSnowCaps(worldData)
  _addCliffFaces(worldData)
  _addCaveEntrances(worldData)
  _addPondFloors(worldData)
  _addNaturalDecorations(worldData)
  _addGravelLayer(worldData)
}

// ── Stone base ────────────────────────────────────────────────────────────
function _fillBase(worldData) {
  for (let x = 0; x < WORLD_W; x++) {
    for (let z = 0; z < WORLD_D; z++) {
      const mask = islandMask(x, z)
      if (mask > 0.92) continue
      const baseH = Math.floor(SURFACE_Y - 2 - mask * mask * 5)
      for (let y = 0; y <= Math.min(baseH, WORLD_H - 1); y++) {
        worldData.set(x, y, z, BLOCK.STONE)
      }
    }
  }
}

// ── Surface terrain (multi-octave hills) ──────────────────────────────────
function _addSurface(worldData) {
  for (let x = 0; x < WORLD_W; x++) {
    for (let z = 0; z < WORLD_D; z++) {
      const mask = islandMask(x, z)
      if (mask > 0.90) continue

      const h1 = fbm(x, z, 4, 58) * 4.0      // broad rolling hills
      const h2 = fbm(x + 300, z + 300, 3, 24) * 1.5  // medium bumps
      const h3 = smooth(x, z, 12) * 0.6       // fine pebbles
      const hillFade = Math.max(0, 1 - mask * 1.3)
      const surfY = Math.round(SURFACE_Y + (h1 + h2 + h3 - 3.0) * hillFade)
      const topY  = Math.max(SEA_LEVEL, Math.min(surfY, WORLD_H - 4))

      worldData.set(x, topY, z, BLOCK.GRASS)
      for (let d = 1; d <= 4; d++) {
        if (topY - d >= 0 && worldData.get(x, topY - d, z) === BLOCK.STONE)
          worldData.set(x, topY - d, z, BLOCK.DIRT)
      }
    }
  }
}

// ── Sandy beach ───────────────────────────────────────────────────────────
function _addBeach(worldData) {
  for (let x = 0; x < WORLD_W; x++) {
    for (let z = 0; z < WORLD_D; z++) {
      const mask = islandMask(x, z)
      if (mask < 0.68 || mask > 0.92) continue
      const sy = worldData.surfaceY(x, z)
      if (sy < SEA_LEVEL - 2 || sy > SEA_LEVEL + 2) continue
      const depth = 2 + Math.round(smooth(x * 2, z * 2, 20))
      for (let d = 0; d < depth; d++) {
        const by = sy - d
        if (by < 0) break
        const b = worldData.get(x, by, z)
        if (b === BLOCK.GRASS || b === BLOCK.DIRT || b === BLOCK.STONE)
          worldData.set(x, by, z, BLOCK.SAND)
      }
    }
  }
}

// ── Ponds / small lakes ───────────────────────────────────────────────────
function _addPonds(worldData) {
  // 5 ponds spread across the island
  const pondCentres = [
    [114*SCALE, 90*SCALE,  5],   // central plains
    [ 66*SCALE,114*SCALE,  4],   // western area
    [140*SCALE, 70*SCALE,  5],   // eastern plains
    [ 80*SCALE, 50*SCALE,  4],   // northern region
    [110*SCALE,150*SCALE,  6],   // southern plains (large)
  ]
  for (const [px, pz, radius] of pondCentres) {
    for (let x = px - radius - 2; x <= px + radius + 2; x++) {
      for (let z = pz - radius - 2; z <= pz + radius + 2; z++) {
        const dist = Math.sqrt((x-px)**2 + (z-pz)**2)
        if (dist > radius + 0.5) continue
        const sy = worldData.surfaceY(x, z)
        if (sy < 0) continue
        worldData.set(x, sy, z, BLOCK.WATER)
        if (dist < radius - 1) worldData.set(x, sy - 1, z, BLOCK.DIRT)
        if (dist >= radius - 1) {
          if (worldData.get(x, sy, z) === BLOCK.GRASS)
            worldData.set(x, sy, z, BLOCK.SAND)
        }
      }
    }
  }
}

// ── Main Mountain — NW quadrant ───────────────────────────────────────────
function _addMountain(worldData, px, pz, maxH, radius) {
  for (let x = px - radius; x <= px + radius; x++) {
    for (let z = pz - radius; z <= pz + radius; z++) {
      if (x < 0 || x >= WORLD_W || z < 0 || z >= WORLD_D) continue
      const dist = Math.sqrt((x-px)**2 + (z-pz)**2)
      const warp = smooth(x, z, 16) * 6 - 3
      const h = Math.max(0, Math.floor(maxH - dist * (maxH / radius) + warp))
      if (h === 0) continue
      for (let y = 0; y < Math.min(h, WORLD_H); y++) {
        worldData.set(x, y, z, BLOCK.STONE)
      }
      const cap = worldData.get(x, h, z)
      if (cap === BLOCK.AIR || cap === BLOCK.GRASS || cap === BLOCK.DIRT) {
        worldData.set(x, h, z, h > maxH - 4 ? BLOCK.GRAVEL : BLOCK.STONE)
      }
      if (h >= maxH - 3) {
        if (worldData.inBounds(x, h + 1, z)) worldData.set(x, h + 1, z, BLOCK.GRAVEL)
      }
    }
  }
}

function _addMainMountain(worldData) {
  _addMountain(worldData, 46*SCALE, 46*SCALE, 28, 28*SCALE_SOFT)
}

function _addSecondMountain(worldData) {
  // Smaller rugged peak in NE
  _addMountain(worldData, 150*SCALE, 44*SCALE, 22, 20*SCALE_SOFT)
}

// ── Swamp — SE quadrant ───────────────────────────────────────────────────
function _addMainSwamp(worldData) {
  const sx = 138*SCALE, sz = 138*SCALE, sRadius = 28*SCALE_SOFT
  for (let x = sx - sRadius; x <= sx + sRadius; x++) {
    for (let z = sz - sRadius; z <= sz + sRadius; z++) {
      if (x < 0 || x >= WORLD_W || z < 0 || z >= WORLD_D) continue
      const dist = Math.sqrt((x-sx)**2 + (z-sz)**2)
      if (dist > sRadius) continue
      const sy = worldData.surfaceY(x, z)
      if (sy < 0) continue
      if (worldData.get(x, sy, z) === BLOCK.GRASS)
        worldData.set(x, sy, z, BLOCK.GRAVEL)
      const puddle = smooth(x * 2, z * 2, 14)
      if (puddle < 0.32 && sy <= SEA_LEVEL + 2) {
        worldData.set(x, sy, z, BLOCK.WATER)
        worldData.set(x, sy - 1, z, BLOCK.DIRT)
      }
    }
  }
  // Dead trees scattered in swamp
  const swampTrees = [
    [120,120],[126,124],[122,132],[130,126],[136,130],
    [142,122],[128,140],[134,142],[144,136],[118,136],
    [148,128],[122,148],[138,148],[150,140],[112,128],
  ].map(([x, z]) => [x*SCALE, z*SCALE])
  for (const [tx, tz] of swampTrees) {
    const sy = worldData.surfaceY(tx, tz)
    if (sy < 0 || worldData.get(tx, sy, tz) === BLOCK.WATER) continue
    const h = 4 + Math.round(smooth(tx, tz, 10))
    for (let i = 1; i <= h; i++) worldData.set(tx, sy + i, tz, BLOCK.WOOD_LOG)
    for (let ox = -1; ox <= 1; ox++) {
      for (let oz = -1; oz <= 1; oz++) {
        if (Math.abs(ox) + Math.abs(oz) > 1) continue
        const lx = tx+ox, ly = sy+h, lz = tz+oz
        if (worldData.inBounds(lx, ly, lz) && worldData.get(lx, ly, lz) === BLOCK.AIR)
          worldData.set(lx, ly, lz, BLOCK.LEAVES)
      }
    }
  }
}

// ── Dense forest biome — SW quadrant ──────────────────────────────────────
function _addForestBiome(worldData) {
  // Pack trees tightly in the SW region
  const fx = 50*SCALE, fz = 150*SCALE, fRadius = 30*SCALE_SOFT
  for (let tx = fx - fRadius; tx <= fx + fRadius; tx += 5) {
    for (let tz = fz - fRadius; tz <= fz + fRadius; tz += 5) {
      const dist = Math.sqrt((tx-fx)**2 + (tz-fz)**2)
      if (dist > fRadius) continue
      // Randomise position within cell
      const ox2 = Math.floor(smooth(tx, tz, 3) * 4) - 2
      const oz2 = Math.floor(smooth(tx + 50, tz + 50, 3) * 4) - 2
      const ttx = tx + ox2, ttz = tz + oz2
      if (ttx < 4 || ttx >= WORLD_W - 4 || ttz < 4 || ttz >= WORLD_D - 4) continue
      const sy = worldData.surfaceY(ttx, ttz)
      if (sy < 0) continue
      const top = worldData.get(ttx, sy, ttz)
      if (top !== BLOCK.GRASS && top !== BLOCK.DIRT) continue
      const h = 5 + Math.round(smooth(ttx * 2, ttz * 2, 6) * 4)
      for (let j = 1; j <= h; j++) worldData.set(ttx, sy + j, ttz, BLOCK.WOOD_LOG)
      const crownR = 3
      for (let dx = -crownR; dx <= crownR; dx++) {
        for (let dz2 = -crownR; dz2 <= crownR; dz2++) {
          for (let dy = -1; dy <= 2; dy++) {
            if (Math.abs(dx) === crownR && Math.abs(dz2) === crownR) continue
            const lx = ttx+dx, ly = sy+h+dy, lz2 = ttz+dz2
            if (worldData.inBounds(lx, ly, lz2) && worldData.get(lx, ly, lz2) === BLOCK.AIR)
              worldData.set(lx, ly, lz2, BLOCK.LEAVES)
          }
        }
      }
    }
  }
}

// ── Scattered trees across the island ─────────────────────────────────────
function _addTrees(worldData) {
  const candidates = []
  for (let x = 14; x < WORLD_W - 14; x++) {
    for (let z = 14; z < WORLD_D - 14; z++) {
      const mask = islandMask(x, z)
      if (mask > 0.78) continue
      // Skip swamp, mountain peaks, forest biome (already handled)
      const inSwamp  = Math.sqrt((x-138*SCALE)**2 + (z-138*SCALE)**2) < 30*SCALE_SOFT
      const inPeak1  = Math.sqrt((x-46*SCALE)**2  + (z-46*SCALE)**2)  < 8*SCALE_SOFT
      const inPeak2  = Math.sqrt((x-150*SCALE)**2 + (z-44*SCALE)**2)  < 6*SCALE_SOFT
      const inForest = Math.sqrt((x-50*SCALE)**2  + (z-150*SCALE)**2) < 32*SCALE_SOFT
      if (inSwamp || inPeak1 || inPeak2 || inForest) continue
      const treeDensity = smooth(x * 3, z * 3, 20)
      if (treeDensity > 0.70) candidates.push([x, z])
    }
  }
  // Pick ~280 trees from candidates (4x the original ~70, matching SCALE)
  const step = Math.max(1, Math.floor(candidates.length / (70 * SCALE)))
  for (let i = 0; i < candidates.length; i += step) {
    const [tx, tz] = candidates[i]
    const sy = worldData.surfaceY(tx, tz)
    if (sy < 0) continue
    const top = worldData.get(tx, sy, tz)
    if (top !== BLOCK.GRASS && top !== BLOCK.DIRT) continue
    const h = 4 + Math.round(smooth(tx, tz, 12) * 3)
    for (let j = 1; j <= h; j++) worldData.set(tx, sy + j, tz, BLOCK.WOOD_LOG)
    const crownR = 2
    for (let ox = -crownR; ox <= crownR; ox++) {
      for (let oz = -crownR; oz <= crownR; oz++) {
        for (let oy = -1; oy <= 2; oy++) {
          if (Math.abs(ox) === crownR && Math.abs(oz) === crownR) continue
          const lx = tx+ox, ly = sy+h+oy, lz = tz+oz
          if (worldData.inBounds(lx, ly, lz) && worldData.get(lx, ly, lz) === BLOCK.AIR)
            worldData.set(lx, ly, lz, BLOCK.LEAVES)
        }
      }
    }
  }
}

// ── Rocky outcrops ────────────────────────────────────────────────────────
function _addRockyOutcrops(worldData) {
  const spots = [
    [ 78, 42], [ 42, 80], [108, 60], [ 60,108],
    [132, 88], [ 88,132], [160, 96], [ 96,160],
    [ 70, 70], [120,120], [160, 60], [ 60,160],
    [100, 40], [ 40,100], [155,100], [100,155],
  ].map(([x, z]) => [x*SCALE, z*SCALE])
  for (const [rx, rz] of spots) {
    const sy = worldData.surfaceY(rx, rz)
    if (sy < 0) continue
    if (worldData.get(rx, sy, rz) !== BLOCK.GRASS) continue
    for (let ox = -1; ox <= 1; ox++) {
      for (let oz = -1; oz <= 1; oz++) {
        if (Math.abs(ox) + Math.abs(oz) > 1) continue
        const bsy = worldData.surfaceY(rx+ox, rz+oz)
        if (bsy >= 0) worldData.set(rx+ox, bsy + 1, rz+oz, BLOCK.STONE)
      }
    }
    worldData.set(rx, sy + 2, rz, BLOCK.STONE)
  }
}

// ── Caves — lots of underground tunnels ───────────────────────────────────
function _carveCaves(worldData) {
  let s = 42
  const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff }
  const NUM_CAVES = 48 * SCALE
  for (let i = 0; i < NUM_CAVES; i++) {
    let x = 16 + Math.floor(rng() * (WORLD_W - 32))
    let y =  2 + Math.floor(rng() * 9)
    let z = 16 + Math.floor(rng() * (WORLD_D - 32))
    const len = 30 + Math.floor(rng() * 60)
    let dx = rng() * 2 - 1, dz = rng() * 2 - 1
    for (let step = 0; step < len; step++) {
      const r = 1 + (rng() > 0.65 ? 1 : 0) + (rng() > 0.9 ? 1 : 0)
      for (let ox = -r; ox <= r; ox++)
        for (let oy = 0; oy <= r; oy++)
          for (let oz = -r; oz <= r; oz++)
            if (worldData.inBounds(x+ox, y+oy, z+oz) &&
                worldData.get(x+ox, y+oy, z+oz) !== BLOCK.AIR)
              worldData.set(x+ox, y+oy, z+oz, BLOCK.AIR)
      x += Math.round(dx); z += Math.round(dz)
      dx += (rng() - 0.5) * 0.45; dz += (rng() - 0.5) * 0.45
      dx = Math.max(-1.5, Math.min(1.5, dx)); dz = Math.max(-1.5, Math.min(1.5, dz))
      if (!worldData.inBounds(x, y, z)) break
    }
  }
}

// ── Ore veins ─────────────────────────────────────────────────────────────
function _placeOreVeins(worldData) {
  let s = 13
  const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff }
  // Iron — abundant at mid depths
  for (let i = 0; i < 80 * SCALE; i++) {
    const ox = 12 + Math.floor(rng() * (WORLD_W - 24))
    const oy =  2 + Math.floor(rng() * 8)
    const oz = 12 + Math.floor(rng() * (WORLD_D - 24))
    for (let j = 0; j < 4 + Math.floor(rng() * 6); j++) {
      const vx = ox + Math.floor(rng()*3)-1
      const vy = oy + Math.floor(rng()*2)
      const vz = oz + Math.floor(rng()*3)-1
      if (worldData.inBounds(vx, vy, vz) && worldData.get(vx, vy, vz) === BLOCK.STONE)
        worldData.set(vx, vy, vz, BLOCK.IRON_ORE)
    }
  }
  // Crystal — deep under both mountain zones and randomly elsewhere
  for (let i = 0; i < 30 * SCALE; i++) {
    const ox = 10 + Math.floor(rng() * (WORLD_W - 20))
    const oy =  1 + Math.floor(rng() * 5)
    const oz = 10 + Math.floor(rng() * (WORLD_D - 20))
    for (let j = 0; j < 3 + Math.floor(rng() * 4); j++) {
      const vx = ox + Math.floor(rng()*3)-1
      const vz = oz + Math.floor(rng()*3)-1
      if (worldData.inBounds(vx, oy, vz) && worldData.get(vx, oy, vz) === BLOCK.STONE)
        worldData.set(vx, oy, vz, BLOCK.CRYSTAL_ORE)
    }
  }
}

// ── Ravine — deep linear crack in the terrain ─────────────────────────────
function _addRavine(worldData) {
  // A winding ravine cutting through the NE plains
  let rx = 120*SCALE, rz = 70*SCALE
  let dx = 0.6, dz = 1.0
  for (let step = 0; step < 55 * SCALE; step++) {
    const width = 3 + Math.round(smooth(rx, rz, 8) * 2)
    for (let ox = -width; ox <= width; ox++) {
      for (let oz = -width; oz <= width; oz++) {
        const dist = Math.sqrt(ox*ox + oz*oz)
        if (dist > width) continue
        const depth = Math.floor(10 + smooth(rx+ox, rz+oz, 6) * 5)
        const sx = Math.floor(rx + ox), sz = Math.floor(rz + oz)
        if (!worldData.inBounds(sx, 0, sz)) continue
        const topY = worldData.surfaceY(sx, sz)
        for (let y = topY; y >= Math.max(2, topY - depth); y--) {
          worldData.set(sx, y, sz, BLOCK.AIR)
        }
        // Expose stone/gravel walls
        const wallY = Math.max(2, topY - depth)
        if (worldData.inBounds(sx, wallY, sz)) worldData.set(sx, wallY, sz, BLOCK.GRAVEL)
      }
    }
    dx += (smooth(rx*0.1, rz*0.1, 4) - 0.5) * 0.4
    dz += (smooth(rx*0.1+50, rz*0.1+50, 4) - 0.5) * 0.4
    const len = Math.sqrt(dx*dx + dz*dz)
    dx /= len; dz /= len
    rx += dx * 1.8; rz += dz * 1.8
  }
}

// ── Crystal cavern — glowing underground hollow ────────────────────────────
function _addCrystalCavern(worldData) {
  // Hidden cavern under the eastern mountain area
  const cx = 155*SCALE, cy = 5, cz = 55*SCALE
  const radX = 12, radY = 5, radZ = 11
  for (let ox = -radX; ox <= radX; ox++) {
    for (let oy = -radY; oy <= radY; oy++) {
      for (let oz = -radZ; oz <= radZ; oz++) {
        const e = (ox/radX)**2 + (oy/radY)**2 + (oz/radZ)**2
        if (e > 1.0) continue
        const x = cx+ox, y = cy+oy, z = cz+oz
        if (!worldData.inBounds(x, y, z)) continue
        worldData.set(x, y, z, BLOCK.AIR)
      }
    }
  }
  // Line the walls with crystal ore clusters
  for (let ox = -radX; ox <= radX; ox++) {
    for (let oy = -radY; oy <= radY; oy++) {
      for (let oz = -radZ; oz <= radZ; oz++) {
        const e = (ox/radX)**2 + (oy/radY)**2 + (oz/radZ)**2
        if (e < 0.75 || e > 1.15) continue
        const x = cx+ox, y = cy+oy, z = cz+oz
        if (!worldData.inBounds(x, y, z)) continue
        if (worldData.get(x, y, z) === BLOCK.STONE && smooth(x, y+z*3, 4) > 0.5)
          worldData.set(x, y, z, BLOCK.CRYSTAL_ORE)
      }
    }
  }
}

// ── Structures ────────────────────────────────────────────────────────────
function _placeStructures(worldData) {
  // Crafting table near spawn (island centre ~96,96)
  const sy = worldData.surfaceY(100*SCALE, 100*SCALE)
  if (sy >= 0) worldData.set(100*SCALE, sy + 1, 100*SCALE, BLOCK.CRAFTING_TABLE)

  // Second crafting table in forest
  const fsy = worldData.surfaceY(50*SCALE, 148*SCALE)
  if (fsy >= 0) worldData.set(50*SCALE, fsy + 1, 148*SCALE, BLOCK.CRAFTING_TABLE)

  // Forge on the main mountain
  const msy = worldData.surfaceY(50*SCALE, 50*SCALE)
  if (msy >= 0) worldData.set(50*SCALE, msy + 1, 50*SCALE, BLOCK.FORGE)

  // Second forge on the eastern mountain
  const msy2 = worldData.surfaceY(152*SCALE, 48*SCALE)
  if (msy2 >= 0) worldData.set(152*SCALE, msy2 + 1, 48*SCALE, BLOCK.FORGE)

  // Altar in swamp centre (3 blocks tall)
  const asy = worldData.surfaceY(138*SCALE, 138*SCALE)
  if (asy >= 0) {
    worldData.set(138*SCALE, asy + 1, 138*SCALE, BLOCK.ALTAR)
    worldData.set(138*SCALE, asy + 2, 138*SCALE, BLOCK.ALTAR)
    worldData.set(138*SCALE, asy + 3, 138*SCALE, BLOCK.ALTAR)
  }

  // Pre-built Nether portal a few steps from spawn — ready to use on day
  // one, no need to craft obsidian first. A 3-wide obsidian frame with a
  // 2-tall portal opening in the middle.
  {
    const px = Math.floor(WORLD_W / 2) + 6
    const pz = Math.floor(WORLD_D / 2)
    const psy = worldData.surfaceY(px, pz)
    if (psy >= 0) {
      for (const dx of [-1, 0, 1]) {
        worldData.set(px + dx, psy + 1, pz, BLOCK.OBSIDIAN)
        worldData.set(px + dx, psy + 4, pz, BLOCK.OBSIDIAN)
      }
      for (const dx of [-1, 1]) {
        worldData.set(px + dx, psy + 2, pz, BLOCK.OBSIDIAN)
        worldData.set(px + dx, psy + 3, pz, BLOCK.OBSIDIAN)
      }
      worldData.set(px, psy + 2, pz, BLOCK.PORTAL)
      worldData.set(px, psy + 3, pz, BLOCK.PORTAL)
    }
  }
}

// ── Helper: safely place a block only on grass/dirt surface ──────────────
function _setSurface(worldData, x, z, block) {
  const sy = worldData.surfaceY(x, z)
  if (sy < 0) return -1
  const top = worldData.get(x, sy, z)
  if (top === BLOCK.WATER || top === BLOCK.SAND) return -1
  worldData.set(x, sy + 1, z, block)
  return sy
}

// ── Ruins — partially collapsed stone buildings ───────────────────────────
function _addRuins(worldData) {
  // [centerX, centerZ, rotation(0=NS, 1=EW)]
  const sites = [
    [76, 80],   // open plains N
    [116, 62],  // near ravine
    [88, 155],  // southern area
    [60, 92],   // western plains
    [168, 100], // far east
  ].map(([x, z]) => [x*SCALE, z*SCALE])
  for (const [bx, bz] of sites) {
    const sy = worldData.surfaceY(bx, bz)
    if (sy < 0) continue
    const top = worldData.get(bx, sy, bz)
    if (top === BLOCK.WATER || top === BLOCK.SAND) continue

    // Build a 7×5 ruined cobblestone house shell
    const W = 7, D = 5, H = 4
    for (let dx = 0; dx < W; dx++) {
      for (let dz2 = 0; dz2 < D; dz2++) {
        const wx = bx + dx - Math.floor(W/2)
        const wz = bz + dz2 - Math.floor(D/2)
        const isWall = dx === 0 || dx === W-1 || dz2 === 0 || dz2 === D-1
        if (!isWall) continue
        const wallSy = worldData.surfaceY(wx, wz)
        if (wallSy < 0) continue
        // Wall height varies — ruins are broken
        const maxH = H - Math.round(smooth(wx, wz, 3) * 2.5)
        for (let dy = 1; dy <= Math.max(1, maxH); dy++) {
          const block = smooth(wx*2, wz*2+dy, 2) > 0.6 ? BLOCK.COBBLESTONE : BLOCK.STONE
          worldData.set(wx, wallSy + dy, wz, block)
        }
        // Floor inside
        worldData.set(wx, wallSy, wz, BLOCK.COBBLESTONE)
      }
    }
    // Rubble/gravel strewn around ruin
    for (let i = 0; i < 12; i++) {
      const rx2 = bx + Math.floor(smooth(bx+i, bz+i*3, 3)*9) - 4
      const rz2 = bz + Math.floor(smooth(bx+i*2, bz+i, 3)*7) - 3
      const rsy = worldData.surfaceY(rx2, rz2)
      if (rsy >= 0) worldData.set(rx2, rsy + 1, rz2, BLOCK.COBBLESTONE)
    }
    // Overgrown planks (partial roof remnant)
    const roofY = sy + H - 1
    for (let dx = 1; dx < W-1; dx++) {
      const wx = bx + dx - Math.floor(W/2)
      if (smooth(wx, bz, 5) > 0.55) {
        worldData.set(wx, roofY, bz - 1, BLOCK.PLANKS)
      }
    }
  }
}

// ── Standing stone circle — ancient monument ──────────────────────────────
function _addStandingStones(worldData) {
  // Mystical stone circle in the open central plains
  const cx = 96*SCALE, cz = 120*SCALE, numStones = 9, circleR = 10
  for (let i = 0; i < numStones; i++) {
    const angle = (i / numStones) * Math.PI * 2
    const sx = Math.round(cx + Math.cos(angle) * circleR)
    const sz = Math.round(cz + Math.sin(angle) * circleR)
    const sy = worldData.surfaceY(sx, sz)
    if (sy < 0) continue
    const top = worldData.get(sx, sy, sz)
    if (top === BLOCK.WATER) continue
    // Standing stone: 3-4 blocks tall with a cap
    const h = 3 + (i % 3 === 0 ? 1 : 0)
    for (let dy = 1; dy <= h; dy++) worldData.set(sx, sy + dy, sz, BLOCK.STONE)
    // Wide capstone on taller ones
    if (h === 4) {
      worldData.set(sx - 1, sy + h, sz, BLOCK.STONE)
      worldData.set(sx + 1, sy + h, sz, BLOCK.STONE)
    }
  }
  // Centre altar stone (flat slab)
  const csy = worldData.surfaceY(cx, cz)
  if (csy >= 0) {
    worldData.set(cx, csy + 1, cz, BLOCK.STONE)
    worldData.set(cx-1, csy+1, cz, BLOCK.STONE)
    worldData.set(cx+1, csy+1, cz, BLOCK.STONE)
    worldData.set(cx, csy+1, cz-1, BLOCK.STONE)
    worldData.set(cx, csy+1, cz+1, BLOCK.STONE)
  }
  // Gravel path leading to the circle
  for (let step = 0; step < 18; step++) {
    const px = cx + Math.round(Math.sin(step * 0.22) * 2)
    const pz = cz + circleR + step + 2
    const psy = worldData.surfaceY(px, pz)
    if (psy >= 0 && worldData.get(px, psy, pz) === BLOCK.GRASS)
      worldData.set(px, psy, pz, BLOCK.GRAVEL)
  }
}

// ── Campsites — abandoned traveller camps ─────────────────────────────────
function _addCampsites(worldData) {
  const sites = [
    [72,  130],  // plains
    [108,  88],  // near pond
    [55,   65],  // mountain foot
    [170, 130],  // far eastern shore
    [90,  168],  // southern coast
  ].map(([x, z]) => [x*SCALE, z*SCALE])
  for (const [cx, cz] of sites) {
    const sy = worldData.surfaceY(cx, cz)
    if (sy < 0) continue
    if (worldData.get(cx, sy, cz) === BLOCK.WATER) continue

    // Campfire in centre
    worldData.set(cx, sy + 1, cz, BLOCK.CAMPFIRE)
    // Fire ring — cobblestone circle
    for (const [ox, oz] of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]) {
      const bsy = worldData.surfaceY(cx+ox, cz+oz)
      if (bsy >= 0) worldData.set(cx+ox, bsy + 1, cz+oz, BLOCK.COBBLESTONE)
    }
    // Log seats (3-4 wood logs placed as seats around fire)
    const seats = [[-2,0],[2,0],[0,-2],[0,2]]
    for (const [ox, oz] of seats) {
      const bsy = worldData.surfaceY(cx+ox, cz+oz)
      if (bsy >= 0 && worldData.get(cx+ox, bsy, cz+oz) !== BLOCK.WATER)
        worldData.set(cx+ox, bsy + 1, cz+oz, BLOCK.WOOD_LOG)
    }
    // Chest with supplies nearby
    const csy2 = worldData.surfaceY(cx + 2, cz + 2)
    if (csy2 >= 0) worldData.set(cx + 2, csy2 + 1, cz + 2, BLOCK.CHEST)
    // Gravel ground patch under camp
    for (let ox = -1; ox <= 1; ox++) {
      for (let oz = -1; oz <= 1; oz++) {
        const gsy = worldData.surfaceY(cx+ox, cz+oz)
        if (gsy >= 0 && worldData.get(cx+ox, gsy, cz+oz) === BLOCK.GRASS)
          worldData.set(cx+ox, gsy, cz+oz, BLOCK.DIRT)
      }
    }
  }
}

// ── Fallen logs — scattered throughout the forest and plains ──────────────
function _addFallenLogs(worldData) {
  const logs = [
    [80,  90,  1, 5],   // [x, z, axis(0=X,1=Z), length]
    [105, 75,  0, 4],
    [65,  110, 1, 6],
    [130, 90,  0, 5],
    [75,  140, 1, 4],
    [44,  140, 0, 5],
    [160, 80,  1, 4],
    [100, 130, 0, 5],
    [55,  75,  1, 3],
    [140, 110, 0, 4],
    [175, 115, 1, 5],
    [85,  58,  0, 4],
  ].map(([x, z, axis, len]) => [x*SCALE, z*SCALE, axis, len])
  for (const [lx, lz, axis, len] of logs) {
    const sy = worldData.surfaceY(lx, lz)
    if (sy < 0) continue
    if (worldData.get(lx, sy, lz) === BLOCK.WATER) continue
    for (let i = 0; i < len; i++) {
      const wx = axis === 0 ? lx + i : lx
      const wz = axis === 1 ? lz + i : lz
      const bsy = worldData.surfaceY(wx, wz)
      if (bsy >= 0 && worldData.get(wx, bsy, wz) !== BLOCK.WATER)
        worldData.set(wx, bsy + 1, wz, BLOCK.WOOD_LOG)
    }
  }
}

// ── Loot chests — hidden throughout the world ─────────────────────────────
function _addLootChests(worldData) {
  // Hidden chests in various interesting spots
  const spots = [
    [30,  30],   // near cave troll lair
    [155,  50],  // eastern mountain peak area
    [95,  162],  // southern beach cove
    [170,  70],  // rocky outcrop east
    [52,  170],  // forest south edge
    [120,  40],  // near ravine lip
    [60,  40],   // NW island
    [168, 155],  // far SE
  ].map(([x, z]) => [x*SCALE, z*SCALE])
  for (const [cx, cz] of spots) {
    // Try to place chest at or just below surface (hidden feel)
    const sy = worldData.surfaceY(cx, cz)
    if (sy < 0) continue
    if (worldData.get(cx, sy, cz) === BLOCK.WATER) continue
    worldData.set(cx, sy + 1, cz, BLOCK.CHEST)
    // Surround with some cobblestone so it looks intentional
    const adj = [[1,0],[-1,0],[0,1],[0,-1]]
    for (const [ox, oz] of adj) {
      const asy = worldData.surfaceY(cx+ox, cz+oz)
      if (asy >= 0 && worldData.get(cx+ox, asy, cz+oz) === BLOCK.GRASS)
        worldData.set(cx+ox, asy+1, cz+oz, BLOCK.COBBLESTONE)
    }
  }
}

// ── River — winding water channel connecting two ponds ────────────────────
function _addRiver(worldData) {
  // River flows roughly from NW pond area toward the central pond
  let rx = 68*SCALE, rz = 112*SCALE
  const target = { x: 114*SCALE, z: 90*SCALE }
  for (let step = 0; step < 60 * SCALE; step++) {
    const tdx = target.x - rx, tdz = target.z - rz
    const tlen = Math.sqrt(tdx*tdx + tdz*tdz)
    if (tlen < 4) break
    // Add noise to the path
    const nx = tdx/tlen + (smooth(rx*0.1, rz*0.1, 5) - 0.5) * 0.8
    const nz = tdz/tlen + (smooth(rx*0.1+30, rz*0.1+30, 5) - 0.5) * 0.8
    rx += nx; rz += nz
    const bx = Math.floor(rx), bz = Math.floor(rz)
    if (!worldData.inBounds(bx, 0, bz)) break
    // Carve river channel 2-3 wide
    for (let ox = -1; ox <= 1; ox++) {
      for (let oz = -1; oz <= 1; oz++) {
        const wx = bx+ox, wz = bz+oz
        if (!worldData.inBounds(wx, 0, wz)) continue
        const sy = worldData.surfaceY(wx, wz)
        if (sy < 0 || sy <= SEA_LEVEL) continue
        // Only cut through flat/low terrain
        if (sy > SEA_LEVEL + 4) continue
        const cur = worldData.get(wx, sy, wz)
        if (cur === BLOCK.WATER) continue
        worldData.set(wx, sy, wz, BLOCK.WATER)
        // Sandy bank on either side
        if (Math.abs(ox) + Math.abs(oz) === 1) {
          if (worldData.get(wx, sy, wz) === BLOCK.GRASS)
            worldData.set(wx, sy, wz, BLOCK.SAND)
        }
      }
    }
  }
}

// ── Graveyard — eerie tomb markers in a quiet clearing ────────────────────
function _addGraveyard(worldData) {
  // Small graveyard in the plains west of swamp
  const gx = 110*SCALE, gz = 125*SCALE
  // Gravel/dirt ground patch
  for (let ox = -6; ox <= 6; ox++) {
    for (let oz = -6; oz <= 6; oz++) {
      const wx = gx+ox, wz = gz+oz
      const sy = worldData.surfaceY(wx, wz)
      if (sy < 0 || worldData.get(wx, sy, wz) === BLOCK.WATER) continue
      if (worldData.get(wx, sy, wz) === BLOCK.GRASS)
        worldData.set(wx, sy, wz, BLOCK.DIRT)
    }
  }
  // Grave markers — pairs of stone columns with cross-piece
  const graves = [
    [-4,-4], [0,-4], [4,-4],
    [-4, 0],         [4, 0],
    [-4, 4], [0, 4], [4, 4],
  ]
  for (const [ox, oz] of graves) {
    const wx = gx+ox, wz = gz+oz
    const sy = worldData.surfaceY(wx, wz)
    if (sy < 0) continue
    // Headstone: 2 block tall stone pillar
    worldData.set(wx,   sy + 1, wz, BLOCK.STONE)
    worldData.set(wx,   sy + 2, wz, BLOCK.STONE)
    // Cross arm
    worldData.set(wx-1, sy + 2, wz, BLOCK.COBBLESTONE)
    worldData.set(wx+1, sy + 2, wz, BLOCK.COBBLESTONE)
  }
  // Iron fence (cobblestone border)
  for (let ox = -5; ox <= 5; ox++) {
    const sy1 = worldData.surfaceY(gx+ox, gz-5)
    const sy2 = worldData.surfaceY(gx+ox, gz+5)
    if (sy1 >= 0) worldData.set(gx+ox, sy1+1, gz-5, BLOCK.COBBLESTONE)
    if (sy2 >= 0) worldData.set(gx+ox, sy2+1, gz+5, BLOCK.COBBLESTONE)
  }
  for (let oz = -4; oz <= 4; oz++) {
    const sy1 = worldData.surfaceY(gx-5, gz+oz)
    const sy2 = worldData.surfaceY(gx+5, gz+oz)
    if (sy1 >= 0) worldData.set(gx-5, sy1+1, gz+oz, BLOCK.COBBLESTONE)
    if (sy2 >= 0) worldData.set(gx+5, sy2+1, gz+oz, BLOCK.COBBLESTONE)
  }
  // Gate opening (remove 2 blocks in fence)
  const gsy = worldData.surfaceY(gx, gz+5)
  if (gsy >= 0) {
    worldData.set(gx-1, gsy+1, gz+5, BLOCK.AIR)
    worldData.set(gx+1, gsy+1, gz+5, BLOCK.AIR)
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ── TOWERS ────────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════

// Generic tower builder used by all tower variants
function _buildTower(worldData, cx, cz, height, outerW, wallBlock, floorBlock, hasParapet) {
  const baseY = worldData.surfaceY(cx, cz)
  if (baseY < 0) return baseY
  const inner = outerW - 2   // hollow interior width

  for (let dy = 0; dy <= height; dy++) {
    const y = baseY + dy
    if (y >= WORLD_H) break
    for (let dx = 0; dx < outerW; dx++) {
      for (let dz = 0; dz < outerW; dz++) {
        const wx = cx - Math.floor(outerW/2) + dx
        const wz = cz - Math.floor(outerW/2) + dz
        if (!worldData.inBounds(wx, y, wz)) continue
        const isWall = dx === 0 || dx === outerW-1 || dz === 0 || dz === outerW-1
        const isInterior = dx > 0 && dx < outerW-1 && dz > 0 && dz < outerW-1
        if (dy === 0) {
          // Solid ground floor
          worldData.set(wx, y, wz, wallBlock)
        } else if (isWall) {
          worldData.set(wx, y, wz, wallBlock)
        } else if (dy === height) {
          // Roof floor
          worldData.set(wx, y, wz, floorBlock)
        } else if (dy % 4 === 0 && isInterior) {
          // Interior platform every 4 floors
          worldData.set(wx, y, wz, floorBlock)
        } else {
          worldData.set(wx, y, wz, BLOCK.AIR)
        }
      }
    }
  }

  // Crenellations (battlements) on top
  if (hasParapet) {
    const y = baseY + height + 1
    if (y < WORLD_H) {
      for (let dx = 0; dx < outerW; dx++) {
        for (let dz = 0; dz < outerW; dz++) {
          const isEdge = dx === 0 || dx === outerW-1 || dz === 0 || dz === outerW-1
          if (!isEdge) continue
          // Alternating merlons
          if ((dx + dz) % 2 === 0) {
            const wx = cx - Math.floor(outerW/2) + dx
            const wz = cz - Math.floor(outerW/2) + dz
            if (worldData.inBounds(wx, y, wz))
              worldData.set(wx, y, wz, wallBlock)
          }
        }
      }
    }
  }

  // Door opening in south wall (front entrance)
  const doorX = cx
  const doorZ = cz + Math.floor(outerW/2)
  if (worldData.inBounds(doorX, baseY+1, doorZ)) {
    worldData.set(doorX, baseY+1, doorZ, BLOCK.AIR)
    worldData.set(doorX, baseY+2, doorZ, BLOCK.AIR)
  }

  // Chest on roof
  const roofY = baseY + height
  if (worldData.inBounds(cx, roofY+1, cz) && roofY+1 < WORLD_H)
    worldData.set(cx, roofY+1, cz, BLOCK.CHEST)

  return baseY
}

// Window helper — cut a glass window in a wall
function _addWindow(worldData, x, y, z) {
  if (worldData.inBounds(x, y, z)) worldData.set(x, y, z, BLOCK.GLASS)
}

function _addTowers(worldData) {
  // ── 1. Watch Tower — NW plains, solid cobblestone sentinel ──
  {
    const cx = 74*SCALE, cz = 68*SCALE, h = 12
    const by = _buildTower(worldData, cx, cz, h, 5, BLOCK.COBBLESTONE, BLOCK.PLANKS, true)
    if (by >= 0) {
      // Windows on each face at mid-height
      _addWindow(worldData, cx,     by+5, cz-2)  // north
      _addWindow(worldData, cx,     by+5, cz+2)  // south
      _addWindow(worldData, cx-2,   by+5, cz)    // west
      _addWindow(worldData, cx+2,   by+5, cz)    // east
      _addWindow(worldData, cx,     by+9, cz-2)
      _addWindow(worldData, cx,     by+9, cz+2)
      _addWindow(worldData, cx-2,   by+9, cz)
      _addWindow(worldData, cx+2,   by+9, cz)
      // Torch on roof corner
      if (by+h+2 < WORLD_H) worldData.set(cx+1, by+h+2, cz+1, BLOCK.TORCH)
    }
  }

  // ── 2. Wizard Tower — eastern plains, tall & narrow with glass windows ──
  {
    const cx = 162*SCALE, cz = 80*SCALE, h = 16
    const by = _buildTower(worldData, cx, cz, h, 4, BLOCK.STONE, BLOCK.PLANKS, true)
    if (by >= 0) {
      // Tall narrow windows every 3 floors
      for (let wy = 3; wy < h; wy += 3) {
        _addWindow(worldData, cx,   by+wy, cz-1)
        _addWindow(worldData, cx,   by+wy, cz+1)
        _addWindow(worldData, cx-1, by+wy, cz)
        _addWindow(worldData, cx+1, by+wy, cz)
      }
      // Conical stone top (stacked shrinking layers)
      for (let i = 0; i < 3; i++) {
        const ty = by + h + 1 + i
        if (ty >= WORLD_H) break
        const sz = 2 - i
        for (let dx = -sz; dx <= sz; dx++)
          for (let dz = -sz; dz <= sz; dz++)
            if (worldData.inBounds(cx+dx, ty, cz+dz))
              worldData.set(cx+dx, ty, cz+dz, BLOCK.STONE)
      }
      // Magic crystal on tip
      if (by+h+4 < WORLD_H) worldData.set(cx, by+h+4, cz, BLOCK.CRYSTAL_ORE)
      // Forge inside (wizard's workshop at ground level)
      if (worldData.inBounds(cx, by+1, cz)) worldData.set(cx, by+1, cz, BLOCK.FORGE)
    }
  }

  // ── 3. Dark Swamp Tower — ominous sentinel near swamp ──
  {
    const cx = 118*SCALE, cz = 145*SCALE, h = 14
    const by = _buildTower(worldData, cx, cz, h, 4, BLOCK.STONE, BLOCK.PLANKS, false)
    if (by >= 0) {
      // Narrow slit windows
      for (let wy = 2; wy < h; wy += 4) {
        _addWindow(worldData, cx, by+wy, cz-1)
        _addWindow(worldData, cx, by+wy, cz+1)
      }
      // Broken / crumbling top — remove some blocks
      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          if ((dx+dz+cx+cz) % 3 === 0 && by+h < WORLD_H)
            worldData.set(cx+dx, by+h, cz+dz, BLOCK.AIR)
        }
      }
      // Dark altar at base
      if (worldData.inBounds(cx, by+1, cz-1)) worldData.set(cx, by+1, cz-1, BLOCK.CHEST)
    }
  }

  // ── 4. Coastal Lighthouse — southern shore ──
  {
    const cx = 96*SCALE, cz = 172*SCALE, h = 15
    const by = _buildTower(worldData, cx, cz, h, 3, BLOCK.COBBLESTONE, BLOCK.PLANKS, true)
    if (by >= 0) {
      // All-glass beacon room near top
      for (let wy = h-2; wy <= h-1; wy++) {
        for (let dx = -1; dx <= 1; dx++)
          for (let dz = -1; dz <= 1; dz++) {
            const isEdge = Math.abs(dx)===1 || Math.abs(dz)===1
            if (isEdge && worldData.inBounds(cx+dx, by+wy, cz+dz))
              worldData.set(cx+dx, by+wy, cz+dz, BLOCK.GLASS)
          }
      }
      // Crystal beacon tip (glows)
      if (by+h+1 < WORLD_H) worldData.set(cx, by+h+1, cz, BLOCK.CRYSTAL_ORE)
      // Stone walkway from shore to lighthouse
      for (let i = 1; i < 8; i++) {
        const wx = cx, wz = cz - i
        const wsy = worldData.surfaceY(wx, wz)
        if (wsy >= 0) worldData.set(wx, wsy+1, wz, BLOCK.COBBLESTONE)
      }
    }
  }

  // ── 5. Twin Gate Towers — flanking a main road into village ──
  const gateL = 90*SCALE, gateR = 102*SCALE
  for (const [tcx, tcz] of [[gateL, 72*SCALE],[gateR, 72*SCALE]]) {
    const h = 8
    const by = _buildTower(worldData, tcx, tcz, h, 3, BLOCK.COBBLESTONE, BLOCK.PLANKS, true)
    if (by >= 0) {
      _addWindow(worldData, tcx, by+4, tcz-1)
      _addWindow(worldData, tcx, by+4, tcz+1)
    }
  }
  // Arch connecting the gate towers
  {
    const archZ = 72*SCALE
    const archCx = 96*SCALE
    const archY = worldData.surfaceY(archCx, archZ)
    if (archY >= 0) {
      for (let ax = gateL; ax <= gateR; ax++) {
        const asy = worldData.surfaceY(ax, archZ)
        if (asy < 0) continue
        if (ax === gateL || ax === gateR) continue  // tower walls already there
        // Arch top (cobblestone lintel)
        if (ax > gateL+1 && ax < gateR-1) worldData.set(ax, archY+8, archZ, BLOCK.COBBLESTONE)
      }
      // Gravel road through gate
      for (let rz2 = 68*SCALE; rz2 < 78*SCALE; rz2++) {
        for (let rx2 = archCx-3; rx2 <= archCx+3; rx2++) {
          const rsy = worldData.surfaceY(rx2, rz2)
          if (rsy >= 0 && worldData.get(rx2, rsy, rz2) !== BLOCK.WATER)
            worldData.set(rx2, rsy, rz2, BLOCK.GRAVEL)
        }
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ── VILLAGES ──────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════

// Build a single house: planks walls, cobblestone foundation, glass windows
function _buildHouse(worldData, cx, cz, W, D, H, wallBlock, roofBlock) {
  const baseY = worldData.surfaceY(cx, cz)
  if (baseY < 0) return
  const top = worldData.get(cx, baseY, cz)
  if (top === BLOCK.WATER) return

  for (let dy = 0; dy <= H; dy++) {
    const y = baseY + dy
    if (y >= WORLD_H) break
    for (let dx = 0; dx < W; dx++) {
      for (let dz = 0; dz < D; dz++) {
        const wx = cx - Math.floor(W/2) + dx
        const wz = cz - Math.floor(D/2) + dz
        if (!worldData.inBounds(wx, y, wz)) continue
        const isEdge = dx===0 || dx===W-1 || dz===0 || dz===D-1
        if (dy === 0) {
          worldData.set(wx, y, wz, BLOCK.COBBLESTONE)  // foundation
        } else if (dy === H) {
          worldData.set(wx, y, wz, roofBlock)           // flat roof
        } else if (isEdge) {
          worldData.set(wx, y, wz, wallBlock)           // walls
        } else {
          worldData.set(wx, y, wz, BLOCK.AIR)           // interior
        }
      }
    }
  }

  // Door opening — south face centre
  const doorX = cx
  const doorZ = cz + Math.floor(D/2)
  if (worldData.inBounds(doorX, baseY+1, doorZ)) worldData.set(doorX, baseY+1, doorZ, BLOCK.AIR)
  if (worldData.inBounds(doorX, baseY+2, doorZ)) worldData.set(doorX, baseY+2, doorZ, BLOCK.AIR)

  // Windows — one on each long side at mid-height
  const winY = baseY + 2
  _addWindow(worldData, cx - Math.floor(W/2), winY, cz)          // west
  _addWindow(worldData, cx + Math.floor(W/2) - (W%2===0?1:0), winY, cz)  // east
  _addWindow(worldData, cx, winY, cz - Math.floor(D/2))           // north

  // Crafting table / chest inside
  if (worldData.inBounds(cx-1, baseY+1, cz)) worldData.set(cx-1, baseY+1, cz, BLOCK.CHEST)
  if (worldData.inBounds(cx+1, baseY+1, cz)) worldData.set(cx+1, baseY+1, cz, BLOCK.CRAFTING_TABLE)
}

// Build a well: stone ring around a water centre
function _buildWell(worldData, cx, cz) {
  const baseY = worldData.surfaceY(cx, cz)
  if (baseY < 0) return
  if (worldData.get(cx, baseY, cz) === BLOCK.WATER) return
  // Water in centre (dig 1 down)
  worldData.set(cx, baseY,   cz, BLOCK.WATER)
  // Stone ring
  for (const [ox, oz] of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]) {
    const wy = worldData.surfaceY(cx+ox, cz+oz)
    if (wy < 0) continue
    worldData.set(cx+ox, wy+1, cz+oz, BLOCK.COBBLESTONE)
    worldData.set(cx+ox, wy+2, cz+oz, BLOCK.STONE)
  }
  // Wooden beam across top
  worldData.set(cx-1, baseY+3, cz, BLOCK.WOOD_LOG)
  worldData.set(cx+1, baseY+3, cz, BLOCK.WOOD_LOG)
}

// Lay a gravel road between two points
function _roadTo(worldData, x1, z1, x2, z2) {
  const steps = Math.max(Math.abs(x2-x1), Math.abs(z2-z1))
  for (let i = 0; i <= steps; i++) {
    const t = steps === 0 ? 0 : i/steps
    const rx = Math.round(x1 + (x2-x1)*t)
    const rz = Math.round(z1 + (z2-z1)*t)
    for (let ox = -1; ox <= 1; ox++) {
      const wy = worldData.surfaceY(rx+ox, rz)
      if (wy >= 0 && worldData.get(rx+ox, wy, rz) !== BLOCK.WATER)
        worldData.set(rx+ox, wy, rz, BLOCK.GRAVEL)
      const wz2 = worldData.surfaceY(rx, rz+ox)
      if (wz2 >= 0 && worldData.get(rx, wz2, rz+ox) !== BLOCK.WATER)
        worldData.set(rx, wz2, rz+ox, BLOCK.GRAVEL)
    }
  }
}

// Small farmland plot beside a house
function _buildFarm(worldData, cx, cz, W, D) {
  const baseY = worldData.surfaceY(cx, cz)
  if (baseY < 0 || worldData.get(cx, baseY, cz) === BLOCK.WATER) return
  for (let dx = 0; dx < W; dx++) {
    for (let dz = 0; dz < D; dz++) {
      const wx = cx+dx, wz = cz+dz
      const wy = worldData.surfaceY(wx, wz)
      if (wy < 0 || worldData.get(wx, wy, wz) === BLOCK.WATER) continue
      worldData.set(wx, wy, wz, BLOCK.FARMLAND)
    }
  }
  // Fence border (cobblestone single height)
  for (let dx = -1; dx <= W; dx++) {
    const wy1 = worldData.surfaceY(cx+dx, cz-1)
    const wy2 = worldData.surfaceY(cx+dx, cz+D)
    if (wy1 >= 0) worldData.set(cx+dx, wy1+1, cz-1, BLOCK.COBBLESTONE)
    if (wy2 >= 0) worldData.set(cx+dx, wy2+1, cz+D, BLOCK.COBBLESTONE)
  }
  for (let dz = 0; dz < D; dz++) {
    const wy1 = worldData.surfaceY(cx-1, cz+dz)
    const wy2 = worldData.surfaceY(cx+W, cz+dz)
    if (wy1 >= 0) worldData.set(cx-1, wy1+1, cz+dz, BLOCK.COBBLESTONE)
    if (wy2 >= 0) worldData.set(cx+W, wy2+1, cz+dz, BLOCK.COBBLESTONE)
  }
}

function _addVillages(worldData) {

  // ══════════════════════════════════════════════════════════════════
  // VILLAGE 1 — Northern Plains Village (main village near gate towers)
  // ══════════════════════════════════════════════════════════════════
  {
    const vx = 96*SCALE, vz = 86*SCALE  // centre of village (south of gate towers)

    // Central well
    _buildWell(worldData, vx, vz)

    // Gravel village square around well
    for (let ox = -5; ox <= 5; ox++)
      for (let oz = -5; oz <= 5; oz++) {
        const wy = worldData.surfaceY(vx+ox, vz+oz)
        if (wy >= 0 && worldData.get(vx+ox, wy, vz+oz) !== BLOCK.WATER)
          worldData.set(vx+ox, wy, vz+oz, BLOCK.GRAVEL)
      }

    // Houses — arranged around the square
    const houses = [
      [vx-12, vz-4,  7, 5, 3, BLOCK.PLANKS,      BLOCK.PLANKS],   // tavern (bigger)
      [vx+12, vz-4,  6, 5, 3, BLOCK.COBBLESTONE, BLOCK.PLANKS],   // blacksmith
      [vx-10, vz+10, 5, 4, 3, BLOCK.PLANKS,      BLOCK.PLANKS],   // house W
      [vx+10, vz+10, 5, 4, 3, BLOCK.PLANKS,      BLOCK.PLANKS],   // house E
      [vx,    vz+14, 6, 4, 3, BLOCK.COBBLESTONE, BLOCK.PLANKS],   // storage hall
      [vx-12, vz+18, 5, 4, 3, BLOCK.PLANKS,      BLOCK.PLANKS],   // house S-W
      [vx+12, vz+18, 5, 4, 3, BLOCK.PLANKS,      BLOCK.PLANKS],   // house S-E
    ]
    for (const [hx, hz, W, D, H, wall, roof] of houses)
      _buildHouse(worldData, hx, hz, W, D, H, wall, roof)

    // Forge in the blacksmith
    const bsy = worldData.surfaceY(vx+12, vz-4)
    if (bsy >= 0) worldData.set(vx+12, bsy+1, vz-4, BLOCK.FORGE)

    // Roads connecting houses to the square
    _roadTo(worldData, vx, vz-4,  vx-12, vz-4)
    _roadTo(worldData, vx, vz-4,  vx+12, vz-4)
    _roadTo(worldData, vx, vz+4,  vx,    vz+14)
    _roadTo(worldData, vx, vz+14, vx-10, vz+10)
    _roadTo(worldData, vx, vz+14, vx+10, vz+10)
    _roadTo(worldData, vx, vz+18, vx-12, vz+18)
    _roadTo(worldData, vx, vz+18, vx+12, vz+18)
    // Road north to gate towers
    _roadTo(worldData, vx, vz-5,  vx, 74*SCALE)

    // Farm plots on the east edge
    _buildFarm(worldData, vx+16, vz+2, 5, 4)
    _buildFarm(worldData, vx+16, vz+8, 5, 4)

    // Campfire in village square corner
    const csy = worldData.surfaceY(vx+3, vz+3)
    if (csy >= 0) worldData.set(vx+3, csy+1, vz+3, BLOCK.CAMPFIRE)

    // Lampposts (stone columns with torch)
    for (const [lx, lz] of [[vx-5,vz-5],[vx+5,vz-5],[vx-5,vz+5],[vx+5,vz+5]]) {
      const lsy = worldData.surfaceY(lx, lz)
      if (lsy < 0) continue
      worldData.set(lx, lsy+1, lz, BLOCK.STONE)
      worldData.set(lx, lsy+2, lz, BLOCK.STONE)
      worldData.set(lx, lsy+3, lz, BLOCK.TORCH)
    }
  }

  // ══════════════════════════════════════════════════════════════════
  // VILLAGE 2 — Eastern Fishing Village (coastal, smaller)
  // ══════════════════════════════════════════════════════════════════
  {
    const vx = 162*SCALE, vz = 108*SCALE

    _buildWell(worldData, vx, vz)

    // Gravel square
    for (let ox = -4; ox <= 4; ox++)
      for (let oz = -4; oz <= 4; oz++) {
        const wy = worldData.surfaceY(vx+ox, vz+oz)
        if (wy >= 0 && worldData.get(vx+ox, wy, vz+oz) !== BLOCK.WATER)
          worldData.set(vx+ox, wy, vz+oz, BLOCK.GRAVEL)
      }

    const houses2 = [
      [vx-10, vz-4,  6, 4, 3, BLOCK.PLANKS,      BLOCK.PLANKS],
      [vx+10, vz-4,  5, 4, 3, BLOCK.COBBLESTONE, BLOCK.PLANKS],
      [vx-9,  vz+10, 5, 4, 3, BLOCK.PLANKS,      BLOCK.PLANKS],
      [vx+9,  vz+10, 5, 4, 3, BLOCK.PLANKS,      BLOCK.PLANKS],
      [vx,    vz+14, 5, 4, 3, BLOCK.PLANKS,      BLOCK.PLANKS],
    ]
    for (const [hx, hz, W, D, H, wall, roof] of houses2)
      _buildHouse(worldData, hx, hz, W, D, H, wall, roof)

    _roadTo(worldData, vx, vz, vx-10, vz-4)
    _roadTo(worldData, vx, vz, vx+10, vz-4)
    _roadTo(worldData, vx, vz, vx-9,  vz+10)
    _roadTo(worldData, vx, vz, vx+9,  vz+10)
    _roadTo(worldData, vx, vz, vx,    vz+14)

    _buildFarm(worldData, vx+14, vz+4, 4, 4)

    // Lampposts
    for (const [lx, lz] of [[vx-4,vz-4],[vx+4,vz-4],[vx-4,vz+4],[vx+4,vz+4]]) {
      const lsy = worldData.surfaceY(lx, lz)
      if (lsy < 0) continue
      worldData.set(lx, lsy+1, lz, BLOCK.STONE)
      worldData.set(lx, lsy+2, lz, BLOCK.TORCH)
    }
  }

  // ══════════════════════════════════════════════════════════════════
  // VILLAGE 3 — Forest Hamlet (SW forest, small and rustic)
  // ══════════════════════════════════════════════════════════════════
  {
    const vx = 52*SCALE, vz = 132*SCALE

    _buildWell(worldData, vx, vz)

    for (let ox = -3; ox <= 3; ox++)
      for (let oz = -3; oz <= 3; oz++) {
        const wy = worldData.surfaceY(vx+ox, vz+oz)
        if (wy >= 0 && worldData.get(vx+ox, wy, vz+oz) !== BLOCK.WATER)
          worldData.set(vx+ox, wy, vz+oz, BLOCK.DIRT)
      }

    const houses3 = [
      [vx-9, vz-4, 5, 4, 3, BLOCK.PLANKS, BLOCK.PLANKS],
      [vx+9, vz-4, 5, 4, 3, BLOCK.PLANKS, BLOCK.PLANKS],
      [vx-8, vz+9, 5, 4, 3, BLOCK.PLANKS, BLOCK.PLANKS],
      [vx+8, vz+9, 5, 4, 3, BLOCK.WOOD_LOG, BLOCK.PLANKS],  // log cabin
    ]
    for (const [hx, hz, W, D, H, wall, roof] of houses3)
      _buildHouse(worldData, hx, hz, W, D, H, wall, roof)

    _roadTo(worldData, vx, vz, vx-9, vz-4)
    _roadTo(worldData, vx, vz, vx+9, vz-4)
    _roadTo(worldData, vx, vz, vx-8, vz+9)
    _roadTo(worldData, vx, vz, vx+8, vz+9)

    _buildFarm(worldData, vx+12, vz, 4, 3)

    const csy = worldData.surfaceY(vx, vz+4)
    if (csy >= 0) worldData.set(vx, csy+1, vz+4, BLOCK.CAMPFIRE)
  }
}

// ── Snow caps — gravel/stone snow layer on tall mountain peaks ────────────
function _addSnowCaps(worldData) {
  const SNOW_HEIGHT = SURFACE_Y + 10  // y level above which snow appears
  for (let x = 0; x < WORLD_W; x++) {
    for (let z = 0; z < WORLD_D; z++) {
      const sy = worldData.surfaceY(x, z)
      if (sy < SNOW_HEIGHT) continue
      const top = worldData.get(x, sy, z)
      if (top === BLOCK.AIR || top === BLOCK.WATER || top === BLOCK.LEAVES) continue
      // Replace surface with gravel (snow-like)
      worldData.set(x, sy, z, BLOCK.GRAVEL)
      // Add a second snow block on very high peaks
      if (sy >= SNOW_HEIGHT + 4 && worldData.inBounds(x, sy + 1, z))
        worldData.set(x, sy + 1, z, BLOCK.GRAVEL)
    }
  }
}

// ── Cliff faces — expose stone on steep drops, add ledge detail ───────────
function _addCliffFaces(worldData) {
  for (let x = 1; x < WORLD_W - 1; x++) {
    for (let z = 1; z < WORLD_D - 1; z++) {
      const sy = worldData.surfaceY(x, z)
      if (sy < 0) continue
      // Check height difference to neighbours
      const neighbours = [
        worldData.surfaceY(x+1, z), worldData.surfaceY(x-1, z),
        worldData.surfaceY(x, z+1), worldData.surfaceY(x, z-1),
      ]
      const minNeighbour = Math.min(...neighbours.filter(n => n >= 0))
      const drop = sy - minNeighbour
      if (drop < 4) continue
      // Expose stone on the cliff face below the surface
      for (let dy = 1; dy <= drop; dy++) {
        const fy = sy - dy
        if (fy < 0) break
        const cur = worldData.get(x, fy, z)
        if (cur === BLOCK.DIRT) worldData.set(x, fy, z, BLOCK.STONE)
        if (cur === BLOCK.GRASS) worldData.set(x, fy, z, BLOCK.COBBLESTONE)
      }
      // Add a gravel ledge halfway down tall cliffs
      if (drop >= 6) {
        const ledgeY = sy - Math.floor(drop / 2)
        if (worldData.inBounds(x, ledgeY, z))
          worldData.set(x, ledgeY, z, BLOCK.GRAVEL)
      }
    }
  }
}

// ── Cave entrances — carve visible openings into hillsides ───────────────
function _addCaveEntrances(worldData) {
  let s = 99
  const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff }
  const spots = [
    [44, 58], [58, 44], [150, 52], [54, 148],
    [128, 72], [72, 128], [164, 90], [90, 48],
    [36, 100], [110, 36], [170, 120], [42, 170],
  ].map(([x, z]) => [x*SCALE, z*SCALE])
  for (const [cx, cz] of spots) {
    const sy = worldData.surfaceY(cx, cz)
    if (sy < SEA_LEVEL + 3 || sy < 0) continue
    const top = worldData.get(cx, sy, cz)
    if (top === BLOCK.WATER || top === BLOCK.SAND) continue
    // Open a 2-tall, 1-wide hole in the hill face
    for (let dy = 1; dy <= 3; dy++) {
      const ey = sy - dy
      if (ey < 0) break
      const cur = worldData.get(cx, ey, cz)
      if (cur !== BLOCK.AIR) worldData.set(cx, ey, cz, BLOCK.AIR)
    }
    // Widen the entrance slightly
    for (const [ox, oz] of [[1,0],[-1,0],[0,1],[0,-1]]) {
      for (let dy = 1; dy <= 2; dy++) {
        const ey = sy - dy
        if (ey < 0 || !worldData.inBounds(cx+ox, ey, cz+oz)) continue
        if (rng() > 0.5) worldData.set(cx+ox, ey, cz+oz, BLOCK.AIR)
      }
    }
    // Stone arch around entrance
    if (worldData.inBounds(cx, sy, cz)) worldData.set(cx, sy, cz, BLOCK.COBBLESTONE)
    if (worldData.inBounds(cx-1, sy, cz)) worldData.set(cx-1, sy, cz, BLOCK.STONE)
    if (worldData.inBounds(cx+1, sy, cz)) worldData.set(cx+1, sy, cz, BLOCK.STONE)
  }
}

// ── Pond floors — fill pond bottoms with sand/dirt layers ─────────────────
function _addPondFloors(worldData) {
  for (let x = 0; x < WORLD_W; x++) {
    for (let z = 0; z < WORLD_D; z++) {
      if (worldData.get(x, worldData.surfaceY(x, z), z) !== BLOCK.WATER) continue
      // Find the water surface
      const sy = worldData.surfaceY(x, z)
      if (sy < 0) continue
      // Place sand 1 below water, dirt below that
      if (sy - 1 >= 0 && worldData.get(x, sy - 1, z) === BLOCK.STONE)
        worldData.set(x, sy - 1, z, BLOCK.SAND)
      if (sy - 2 >= 0 && worldData.get(x, sy - 2, z) === BLOCK.STONE)
        worldData.set(x, sy - 2, z, BLOCK.DIRT)
    }
  }
}

// ── Natural decorations — mushrooms, boulders, flower patches ─────────────
function _addNaturalDecorations(worldData) {
  let s = 77
  const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff }

  // Mushrooms (cobblestone stem + stone cap) in dark biomes
  const mushroomSpots = [
    // Swamp mushrooms
    [118,122],[126,138],[134,120],[124,148],[140,132],
    // Forest mushrooms
    [48,142],[56,156],[44,162],[60,138],[52,158],
    // Cave mouths
    [40,56],[58,46],[52,60],
  ].map(([x, z]) => [x*SCALE, z*SCALE])
  for (const [mx, mz] of mushroomSpots) {
    const sy = worldData.surfaceY(mx, mz)
    if (sy < 0 || worldData.get(mx, sy, mz) === BLOCK.WATER) continue
    // Stem (1-2 tall)
    const h = rng() > 0.5 ? 2 : 1
    for (let dy = 1; dy <= h; dy++) {
      if (worldData.inBounds(mx, sy+dy, mz) && worldData.get(mx, sy+dy, mz) === BLOCK.AIR)
        worldData.set(mx, sy+dy, mz, BLOCK.COBBLESTONE)
    }
    // Cap (cross of leaves/stone)
    const capY = sy + h + 1
    if (capY < WORLD_H) {
      for (const [ox, oz] of [[0,0],[1,0],[-1,0],[0,1],[0,-1]]) {
        if (worldData.inBounds(mx+ox, capY, mz+oz) && worldData.get(mx+ox, capY, mz+oz) === BLOCK.AIR)
          worldData.set(mx+ox, capY, mz+oz, BLOCK.LEAVES)
      }
    }
  }

  // Boulders — large stone lumps scattered across terrain
  const boulderSpots = [
    [82,62],[104,54],[66,88],[130,80],[80,108],
    [158,100],[100,148],[62,118],[144,64],[70,152],
    [112,170],[160,140],[38,80],[40,120],[180,90],
  ].map(([x, z]) => [x*SCALE, z*SCALE])
  for (const [bx, bz] of boulderSpots) {
    const sy = worldData.surfaceY(bx, bz)
    if (sy < 0 || worldData.get(bx, sy, bz) === BLOCK.WATER) continue
    const r = 1 + Math.floor(rng() * 2)  // radius 1 or 2
    for (let ox = -r; ox <= r; ox++) {
      for (let oz = -r; oz <= r; oz++) {
        for (let oy = 0; oy <= r; oy++) {
          const dist = Math.sqrt(ox*ox + oy*oy*1.5 + oz*oz)
          if (dist > r + 0.4) continue
          const wx = bx+ox, wy = sy+oy, wz = bz+oz
          if (!worldData.inBounds(wx, wy, wz)) continue
          const cur = worldData.get(wx, wy, wz)
          if (cur === BLOCK.AIR || cur === BLOCK.GRASS || cur === BLOCK.DIRT)
            worldData.set(wx, wy, wz, BLOCK.STONE)
        }
      }
    }
  }

  // Flower patches — small cobblestone "flowers" on plains
  // (using stone blocks standing 1 tall as simple decoration)
  for (let i = 0; i < 60 * SCALE; i++) {
    const fx = 20 + Math.floor(rng() * (WORLD_W - 40))
    const fz = 20 + Math.floor(rng() * (WORLD_D - 40))
    const mask = islandMask(fx, fz)
    if (mask > 0.70) continue
    const sy = worldData.surfaceY(fx, fz)
    if (sy < 0) continue
    const top = worldData.get(fx, sy, fz)
    if (top !== BLOCK.GRASS) continue
    // Tiny 1-block cobblestone stump as a "flower marker"
    if (worldData.inBounds(fx, sy+1, fz) && worldData.get(fx, sy+1, fz) === BLOCK.AIR)
      worldData.set(fx, sy+1, fz, BLOCK.COBBLESTONE)
  }
}

// ── Gravel layer — natural transition between dirt and stone underground ──
function _addGravelLayer(worldData) {
  for (let x = 0; x < WORLD_W; x++) {
    for (let z = 0; z < WORLD_D; z++) {
      // Find the dirt→stone boundary and insert gravel
      let foundDirt = false
      for (let y = WORLD_H - 1; y >= 1; y--) {
        const cur = worldData.get(x, y, z)
        if (cur === BLOCK.DIRT) { foundDirt = true; continue }
        if (foundDirt && cur === BLOCK.STONE) {
          // Insert 1-2 gravel blocks at the dirt/stone boundary
          const thickness = smooth(x, z, 8) > 0.5 ? 2 : 1
          for (let g = 0; g < thickness; g++) {
            const gy = y + g
            if (worldData.inBounds(x, gy, z) && worldData.get(x, gy, z) === BLOCK.STONE)
              worldData.set(x, gy, z, BLOCK.GRAVEL)
          }
          break
        }
        if (cur !== BLOCK.AIR) foundDirt = false
      }
    }
  }
}
