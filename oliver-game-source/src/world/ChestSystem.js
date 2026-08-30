import { WORLD_W, WORLD_D } from '../constants.js'

function keyOf(dim, x, y, z) {
  return `${dim}:${x},${y},${z}`
}

function rollTable(table) {
  const rolls = 3 + Math.floor(Math.random() * 3)
  const totalWeight = table.reduce((s, e) => s + e[3], 0)
  const picked = []
  const used = new Set()
  for (let n = 0; n < rolls; n++) {
    let r = Math.random() * totalWeight
    for (const entry of table) {
      r -= entry[3]
      if (r <= 0 && !used.has(entry[0])) {
        picked.push(entry)
        used.add(entry[0])
        break
      }
    }
  }
  return picked.map(([id, min, max]) => ({
    itemId: id,
    count: min + Math.floor(Math.random() * (max - min + 1)),
  }))
}

const LOOT_COMMON = [
  ['bread', 2, 5, 30], ['cooked_meat', 1, 4, 25], ['iron_ore', 2, 6, 25],
  ['stick', 4, 12, 20], ['string', 2, 6, 18], ['bone', 2, 5, 18],
  ['cobblestone', 6, 16, 15], ['planks', 4, 10, 15], ['wheat_seed', 3, 8, 12],
  ['carrot', 2, 6, 12], ['torch', 2, 6, 14],
]
const LOOT_UNCOMMON = [
  ['iron_ingot', 2, 5, 40], ['crystal_shard', 1, 2, 15],
  ['stone_sword', 1, 1, 20], ['stone_pickaxe', 1, 1, 18],
  ['iron_pickaxe', 1, 1, 8], ['glass', 2, 6, 12],
]
const LOOT_RARE = [
  ['crystal_shard', 2, 4, 40], ['iron_ingot', 4, 8, 30],
  ['iron_sword', 1, 1, 20], ['iron_pickaxe', 1, 1, 18],
  ['crystal_sword', 1, 1, 5], ['bread', 3, 8, 20],
]
const LOOT_NETHER = [
  ['glowstone', 4, 10, 40], ['netherrack', 8, 16, 30],
  ['crystal_shard', 2, 5, 25], ['iron_ingot', 3, 6, 20],
  ['obsidian', 1, 3, 15], ['cooked_meat', 2, 5, 15],
]

export class ChestSystem {
  constructor() {
    this.chests = new Map()  // key → [{itemId, count}]
  }

  open(dim, x, y, z) {
    const k = keyOf(dim, x, y, z)
    if (!this.chests.has(k)) this.chests.set(k, this._rollLoot(dim, x, z))
    return this.chests.get(k)
  }

  takeAll(dim, x, y, z) {
    const k = keyOf(dim, x, y, z)
    const items = this.chests.get(k) ?? []
    this.chests.set(k, [])
    return items
  }

  serialize() {
    return [...this.chests.entries()].map(([k, items]) => ({ k, items }))
  }

  deserialize(list) {
    this.chests.clear()
    if (!list) return
    for (const row of list) this.chests.set(row.k, row.items ?? [])
  }

  _rollLoot(dim, x, z) {
    if (dim === 'nether') return rollTable(LOOT_NETHER)
    const spawnCx = WORLD_W / 2, spawnCz = WORLD_D / 2
    const dist = Math.sqrt((x - spawnCx) ** 2 + (z - spawnCz) ** 2)
    const table = dist > 480 ? LOOT_RARE : dist > 240 ? LOOT_UNCOMMON : LOOT_COMMON
    return rollTable(table)
  }
}
