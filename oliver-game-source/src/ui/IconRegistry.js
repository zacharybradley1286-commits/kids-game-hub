import { BLOCK_DB } from '../world/BlockRegistry.js'

const cache = new Map()

function shade(hex, amt) {
  const n = parseInt(hex.replace('#', ''), 16)
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  r = Math.max(0, Math.min(255, r + amt))
  g = Math.max(0, Math.min(255, g + amt))
  b = Math.max(0, Math.min(255, b + amt))
  return `rgb(${r},${g},${b})`
}

function newCanvas() {
  const c = document.createElement('canvas')
  c.width = 32; c.height = 32
  return c
}

// Icons are drawn on a 16x16 pixel grid (each "pixel" = a 2x2 block on the
// 32x32 canvas) using only axis-aligned rects — no arcs/curves/rotation.
// That's what actually reads as "Minecraft-like": hard, un-anti-aliased
// pixel edges, not the shape of any particular item. These are original
// pixel art in that style, not traced from Mojang's textures.
const G = 16
const PX = 2

function cell(ctx, gx, gy, hex) {
  ctx.fillStyle = hex
  ctx.fillRect(gx * PX, gy * PX, PX, PX)
}

function cellRect(ctx, gx, gy, gw, gh, hex) {
  ctx.fillStyle = hex
  ctx.fillRect(gx * PX, gy * PX, gw * PX, gh * PX)
}

function cells(ctx, coords, hex) {
  for (const [x, y] of coords) cell(ctx, x, y, hex)
}

function hashSeed(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  return h || 1
}

function mkRng(seed) {
  let s = seed
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0xffffffff }
}

// ── Blocks ──────────────────────────────────────────────────────────────
// Dithered fill (like a material texture) + a beveled highlight/shadow edge
// + a dark outline, echoing how Minecraft's inventory item frame reads.
function drawBlockSquare(ctx, base) {
  const rng = mkRng(hashSeed(base))
  for (let gy = 0; gy < G; gy++) {
    for (let gx = 0; gx < G; gx++) {
      cell(ctx, gx, gy, shade(base, (rng() - 0.5) * 24))
    }
  }
  for (let i = 0; i < 10; i++) {
    const gx = Math.floor(rng() * G), gy = Math.floor(rng() * G)
    cell(ctx, gx, gy, shade(base, (rng() - 0.5) * 55))
  }
  cellRect(ctx, 0, 0, G, 1, shade(base, 55))
  cellRect(ctx, 0, 0, 1, G, shade(base, 40))
  cellRect(ctx, 0, G - 1, G, 1, shade(base, -55))
  cellRect(ctx, G - 1, 0, 1, G, shade(base, -45))
  ctx.strokeStyle = shade(base, -70)
  ctx.lineWidth = PX
  ctx.strokeRect(PX / 2, PX / 2, G * PX - PX, G * PX - PX)
}

function drawChest(ctx) {
  drawBlockSquare(ctx, '#8b5a2b')
  cellRect(ctx, 1, 6, 14, 1, '#5a3010')
  cellRect(ctx, 6, 5, 4, 4, '#c8a020')
  cellRect(ctx, 7, 6, 2, 2, '#7a5010')
}

function drawForge(ctx) {
  drawBlockSquare(ctx, '#3a3a3a')
  cellRect(ctx, 3, 8, 4, 4, '#ff8800')
  cellRect(ctx, 8, 8, 4, 4, '#ff8800')
  cellRect(ctx, 4, 9, 2, 2, '#ffcc00')
  cellRect(ctx, 9, 9, 2, 2, '#ffcc00')
}

function drawCraftingTable(ctx) {
  drawBlockSquare(ctx, '#c49a40')
  cellRect(ctx, 1, 1, 14, 1, '#7a5010')
  cellRect(ctx, 1, 14, 14, 1, '#7a5010')
  cellRect(ctx, 1, 1, 1, 14, '#7a5010')
  cellRect(ctx, 14, 1, 1, 14, '#7a5010')
  cellRect(ctx, 7, 1, 1, 14, '#7a5010')
}

function drawCampfire(ctx) {
  drawBlockSquare(ctx, '#2e1808')
  const flame = [
    [7, 3, 2], [6, 4, 4], [6, 5, 4], [5, 6, 6], [5, 7, 6],
    [4, 8, 8], [4, 9, 8], [4, 10, 8], [4, 11, 8],
  ]
  for (const [x, y, w] of flame) cellRect(ctx, x, y, w, 1, '#cc5500')
  const core = [
    [7, 5, 2], [6, 7, 4], [6, 8, 4], [5, 9, 6], [5, 10, 6],
  ]
  for (const [x, y, w] of core) cellRect(ctx, x, y, w, 1, '#ffcc00')
}

function drawBed(ctx) {
  cellRect(ctx, 1, 5, 14, 8, '#7a4a20')
  cellRect(ctx, 2, 7, 12, 5, '#a02020')
  cellRect(ctx, 2, 6, 4, 3, '#e8e0d0')
  cellRect(ctx, 1, 12, 2, 3, '#5a3010')
  cellRect(ctx, 13, 12, 2, 3, '#5a3010')
}

function drawGlass(ctx) {
  cellRect(ctx, 1, 1, 14, 14, 'rgba(160,220,255,0.35)')
  ctx.strokeStyle = '#7ab0cc'
  ctx.lineWidth = PX
  ctx.strokeRect(PX / 2, PX / 2, G * PX - PX, G * PX - PX)
  cellRect(ctx, 3, 3, 3, 1, 'rgba(255,255,255,0.6)')
  cellRect(ctx, 3, 3, 1, 3, 'rgba(255,255,255,0.6)')
}

function drawBlock(ctx, item) {
  const specials = { chest: drawChest, forge: drawForge, crafting_table: drawCraftingTable, campfire: drawCampfire, glass: drawGlass, bed: drawBed }
  if (specials[item.id]) { specials[item.id](ctx); return }
  const block = item.blockId >= 0 ? BLOCK_DB[item.blockId] : null
  drawBlockSquare(ctx, block?.color ?? '#888888')
}

// ── Tools & weapons ────────────────────────────────────────────────────
// All tools share a diagonal grip running from bottom-left toward centre,
// with a distinct head shape per tool type stacked on top of it.
const TIER_COLOR = { 1: '#c8a44a', 2: '#9a9a9a', 3: '#cfd6e6', 4: '#a866ff' }
const HANDLE = '#6b4423'
const HANDLE_DARK = '#4a2c10'

function drawHandle(ctx, coords) {
  coords.forEach(([x, y], i) => cell(ctx, x, y, i % 2 === 0 ? HANDLE : HANDLE_DARK))
}

function drawTool(ctx, item) {
  const head = TIER_COLOR[item.tier] ?? '#aaaaaa'
  const light = shade(head, 45)
  const dark = shade(head, -35)

  if (item.isSword) {
    drawHandle(ctx, [[2, 14], [3, 13], [4, 12]])
    cell(ctx, 2, 14, '#2a1808')
    cellRect(ctx, 4, 10, 3, 2, dark)
    cells(ctx, [[6, 10], [7, 9], [7, 8], [8, 8], [8, 7], [9, 7], [9, 6],
                [10, 6], [10, 5], [11, 5], [11, 4], [12, 4], [12, 3]], head)
    cell(ctx, 13, 2, light)
  } else if (item.isAxe) {
    drawHandle(ctx, [[3, 14], [4, 13], [5, 12], [6, 11], [7, 10]])
    const bladeRows = [[9, 2, 4], [8, 3, 5], [8, 4, 5], [8, 5, 5], [8, 6, 4], [9, 7, 2]]
    for (const [x, y, w] of bladeRows) cellRect(ctx, x, y, w, 1, head)
    cellRect(ctx, 12, 3, 1, 3, light)
    cellRect(ctx, 8, 3, 1, 3, dark)
  } else if (item.isPickaxe) {
    drawHandle(ctx, [[7, 13], [7, 11], [8, 9], [8, 7]])
    cells(ctx, [[3, 4], [4, 3], [5, 2], [6, 2], [7, 1], [8, 1], [9, 1],
                [10, 2], [11, 2], [12, 3], [13, 4]], head)
    cell(ctx, 3, 4, light); cell(ctx, 13, 4, light)
    cell(ctx, 8, 2, dark); cell(ctx, 9, 2, dark)
  } else if (item.isHoe) {
    drawHandle(ctx, [[7, 14], [7, 12], [8, 10], [8, 8]])
    cellRect(ctx, 6, 1, 7, 2, head)
    cellRect(ctx, 6, 1, 7, 1, light)
    cellRect(ctx, 6, 2, 7, 1, dark)
  } else if (item.isShovel) {
    drawHandle(ctx, [[7, 15], [7, 13], [7, 11], [8, 9]])
    cellRect(ctx, 6, 2, 4, 3, head)
    cells(ctx, [[7, 5], [8, 5]], head)
    cellRect(ctx, 6, 2, 4, 1, light)
    cellRect(ctx, 6, 3, 1, 2, dark); cellRect(ctx, 9, 3, 1, 2, dark)
  }
}

// ── Food & seeds ────────────────────────────────────────────────────────
function drawCircleFood(ctx, color, highlight) {
  const rows = [[5, 3, 6], [4, 4, 8], [3, 5, 10], [3, 6, 10], [3, 7, 10],
                [3, 8, 10], [3, 9, 10], [4, 10, 8], [5, 11, 6]]
  for (const [x, y, w] of rows) cellRect(ctx, x, y, w, 1, color)
  cellRect(ctx, 4, 5, 2, 2, highlight)
}

function drawBread(ctx) {
  cellRect(ctx, 2, 6, 12, 6, '#c8863c')
  cellRect(ctx, 2, 6, 12, 1, '#e8b878')
  cellRect(ctx, 3, 7, 10, 2, '#e8b878')
  for (const x of [5, 8, 10]) cellRect(ctx, x, 8, 1, 3, '#8a5820')
}

function drawCarrot(ctx) {
  const rows = [[7, 4, 2], [7, 6, 2], [6, 8, 4], [6, 10, 4], [7, 12, 2], [7, 13, 2]]
  for (const [x, y, w] of rows) cellRect(ctx, x, y, w, 1, '#ff7722')
  cellRect(ctx, 7, 4, 1, 8, '#e05500')
  cellRect(ctx, 6, 1, 1, 3, '#3a9028')
  cellRect(ctx, 9, 0, 1, 4, '#3a9028')
  cellRect(ctx, 8, 2, 1, 2, '#3a9028')
}

function drawSeed(ctx, color) {
  cellRect(ctx, 5, 9, 6, 3, '#3a2810')
  cellRect(ctx, 7, 7, 2, 5, color)
  cellRect(ctx, 8, 2, 1, 5, '#2a7020')
}

// ── Materials & misc ──────────────────────────────────────────────────
function drawIngot(ctx, color) {
  const dark = shade(color, -30), light = shade(color, 40)
  cellRect(ctx, 3, 6, 10, 4, dark)
  cellRect(ctx, 4, 6, 8, 1, light)
  cellRect(ctx, 3, 7, 10, 3, color)
  cellRect(ctx, 4, 9, 8, 1, shade(color, -15))
}

function drawShard(ctx, color) {
  const light = shade(color, 55)
  const rows = [[7, 2, 2], [6, 3, 4], [6, 4, 4], [5, 5, 6], [5, 6, 6],
                [5, 7, 6], [6, 8, 4], [6, 9, 4], [7, 10, 2]]
  for (const [x, y, w] of rows) cellRect(ctx, x, y, w, 1, color)
  cellRect(ctx, 6, 3, 1, 5, light)
}

function drawStick(ctx) {
  const path = [[3, 13], [4, 12], [5, 11], [6, 10], [7, 9], [8, 8], [9, 7], [10, 6], [11, 5], [12, 4]]
  path.forEach(([x, y], i) => cell(ctx, x, y, i % 3 === 0 ? '#6a4018' : '#8b5a2b'))
}

function drawString(ctx) {
  const path = [[3, 3], [4, 4], [4, 5], [5, 6], [5, 7], [6, 8], [6, 9],
                [7, 10], [8, 10], [9, 11], [10, 11], [11, 12], [12, 12]]
  cells(ctx, path, '#eeddcc')
}

function drawBone(ctx) {
  cellRect(ctx, 5, 7, 6, 2, '#e8e0c8')
  for (const [x, y] of [[3, 6], [3, 8], [11, 6], [11, 8]]) cellRect(ctx, x, y, 2, 2, '#e8e0c8')
}

function drawOre(ctx, base, fleckColor) {
  drawBlockSquare(ctx, base)
  const flecks = [[3, 3, 2], [9, 3, 2], [5, 6, 2], [10, 8, 2], [3, 10, 2], [8, 11, 2]]
  for (const [x, y, w] of flecks) cellRect(ctx, x, y, w, w, fleckColor)
}

function drawMeat(ctx, color) {
  const dark = shade(color, -40)
  const rows = [[6, 4, 4], [5, 5, 6], [4, 6, 8], [4, 7, 8], [4, 8, 8], [5, 9, 6], [6, 10, 4]]
  for (const [x, y, w] of rows) cellRect(ctx, x, y, w, 1, color)
  cellRect(ctx, 5, 6, 1, 3, dark)
  cellRect(ctx, 9, 6, 1, 3, dark)
}

function drawFang(ctx) {
  const rows = [[5, 2, 6], [5, 4, 6], [6, 6, 4], [6, 8, 4], [7, 10, 2], [7, 12, 2]]
  for (const [x, y, w] of rows) cellRect(ctx, x, y, w, 2, '#eeeecc')
}

function drawEye(ctx) {
  cellRect(ctx, 2, 5, 12, 6, '#1a0a1a')
  cellRect(ctx, 5, 6, 6, 4, '#8822aa')
  cellRect(ctx, 7, 7, 2, 2, '#44ff44')
}

function drawGolemCore(ctx) {
  cellRect(ctx, 2, 2, 12, 12, '#333333')
  cellRect(ctx, 3, 3, 10, 10, '#2a2a2a')
  cellRect(ctx, 4, 4, 8, 8, '#44ccff')
  cellRect(ctx, 6, 6, 2, 2, '#ccffff')
}

function drawSummoningStone(ctx) {
  const rows = [[7, 1, 2], [6, 2, 4], [5, 3, 6], [4, 4, 8], [3, 5, 10],
                [3, 6, 10], [3, 7, 10], [3, 8, 10], [4, 9, 8], [5, 10, 6],
                [6, 11, 4], [7, 12, 2]]
  for (const [x, y, w] of rows) cellRect(ctx, x, y, w, 1, '#220022')
  cellRect(ctx, 6, 6, 4, 4, '#cc44ff')
  cellRect(ctx, 7, 7, 2, 2, '#f0aaff')
}

// ── Dispatch ─────────────────────────────────────────────────────────
const SPECIAL = {
  bread: drawBread,
  carrot: drawCarrot,
  wheat: (ctx) => drawCircleFood(ctx, '#cccc44', '#eeee88'),
  baked_potato: (ctx) => drawMeat(ctx, '#c87830'),
  cooked_meat: (ctx) => drawMeat(ctx, '#8b4a2a'),
  raw_meat: (ctx) => drawMeat(ctx, '#cc4444'),
  wheat_seed: (ctx) => drawSeed(ctx, '#aaaa22'),
  carrot_seed: (ctx) => drawSeed(ctx, '#ff8800'),
  potato_seed: (ctx) => drawSeed(ctx, '#c89050'),
  iron_ore: (ctx) => drawOre(ctx, '#828282', '#cc8855'),
  crystal_shard: (ctx) => drawShard(ctx, '#9944ee'),
  iron_ingot: (ctx) => drawIngot(ctx, '#c0c0d0'),
  stick: drawStick,
  string: drawString,
  bone: drawBone,
  troll_fang: drawFang,
  witch_eye: drawEye,
  golem_core: drawGolemCore,
  summoning_stone: drawSummoningStone,
}

export function getItemIcon(item) {
  if (!item) return ''
  const cached = cache.get(item.id)
  if (cached) return cached

  // Icon drawing is purely cosmetic — it must never be able to throw out
  // into callers like Hotbar.refresh() or Inventory's change listeners,
  // which run inside gameplay code paths (e.g. mining) that need to
  // complete regardless of what the UI does.
  let url
  try {
    const canvas = newCanvas()
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = false

    if (SPECIAL[item.id]) {
      SPECIAL[item.id](ctx)
    } else if (item.category === 'block') {
      drawBlock(ctx, item)
    } else if (item.category === 'tool' || item.category === 'weapon') {
      drawTool(ctx, item)
    } else {
      drawBlockSquare(ctx, '#666666')
    }

    url = canvas.toDataURL()
  } catch (e) {
    console.error(`Failed to draw icon for item "${item.id}":`, e)
    url = ''
  }

  cache.set(item.id, url)
  return url
}
