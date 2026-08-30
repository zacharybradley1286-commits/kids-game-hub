export class Recipe {
  constructor(id, ingredients, resultItem, resultCount, station, requiredTier, killedBosses = []) {
    this.id = id
    this.ingredients = ingredients  // { itemId: count, … }
    this.resultItem = resultItem
    this.resultCount = resultCount
    this.station = station          // 'hand' | 'crafting_table' | 'forge'
    this.requiredTier = requiredTier
    this.killedBosses = killedBosses  // boss ids that must be dead to unlock
  }
}

const STATION_ORDER = ['hand', 'campfire', 'crafting_table', 'forge']

const ALL_RECIPES = [
  // --- Hand-craftable ---
  new Recipe('planks',          { wood_log: 1 },                                  'planks',          4,  'hand', 0),
  new Recipe('stick',           { planks: 1 },                                    'stick',           4,  'hand', 0),
  new Recipe('crafting_table',  { planks: 4 },                                    'crafting_table',  1,  'hand', 0),
  new Recipe('campfire',        { wood_log: 3 },                                  'campfire',        1,  'hand', 0),
  new Recipe('bread',           { wheat: 3 },                                     'bread',           1,  'hand', 0),

  // --- Campfire cooking ---
  new Recipe('cooked_meat',     { raw_meat: 1 },                                  'cooked_meat',     1,  'campfire', 0),
  new Recipe('cooked_fish',     { raw_fish: 1 },                                  'cooked_fish',     1,  'campfire', 0),
  new Recipe('baked_potato',    { potato_seed: 1 },                               'baked_potato',    1,  'campfire', 0),

  // --- Crafting table ---
  new Recipe('wooden_axe',      { planks: 3, stick: 2 },                         'wooden_axe',      1,  'crafting_table', 0),
  new Recipe('wooden_pickaxe',  { planks: 3, stick: 2 },                         'wooden_pickaxe',  1,  'crafting_table', 0),
  new Recipe('wooden_hoe',      { planks: 2, stick: 2 },                         'wooden_hoe',      1,  'crafting_table', 0),
  new Recipe('wooden_shovel',   { planks: 1, stick: 2 },                         'wooden_shovel',   1,  'crafting_table', 0),
  new Recipe('wooden_sword',    { planks: 2, stick: 1 },                         'wooden_sword',    1,  'crafting_table', 0),

  new Recipe('stone_axe',       { cobblestone: 3, stick: 2 },                   'stone_axe',       1,  'crafting_table', 1),
  new Recipe('stone_pickaxe',   { cobblestone: 3, stick: 2 },                   'stone_pickaxe',   1,  'crafting_table', 1),
  new Recipe('stone_hoe',       { cobblestone: 2, stick: 2 },                   'stone_hoe',       1,  'crafting_table', 1),
  new Recipe('stone_shovel',    { cobblestone: 1, stick: 2 },                   'stone_shovel',    1,  'crafting_table', 1),
  new Recipe('stone_sword',     { cobblestone: 2, stick: 1 },                   'stone_sword',     1,  'crafting_table', 1),

  new Recipe('iron_axe',        { iron_ingot: 3, stick: 2 },                    'iron_axe',        1,  'crafting_table', 2),
  new Recipe('iron_pickaxe',    { iron_ingot: 3, stick: 2 },                    'iron_pickaxe',    1,  'crafting_table', 2),
  new Recipe('iron_hoe',        { iron_ingot: 2, stick: 2 },                    'iron_hoe',        1,  'crafting_table', 2),
  new Recipe('iron_shovel',     { iron_ingot: 1, stick: 2 },                    'iron_shovel',     1,  'crafting_table', 2),
  new Recipe('iron_sword',      { iron_ingot: 2, stick: 1 },                    'iron_sword',      1,  'crafting_table', 2),

  new Recipe('glass',           { sand: 1 },                                     'glass',           1,  'crafting_table', 0),
  new Recipe('chest',           { planks: 8 },                                   'chest',           1,  'crafting_table', 0),
  new Recipe('bed',             { planks: 3, string: 3 },                       'bed',             1,  'crafting_table', 0),

  // --- Forge ---
  new Recipe('iron_ingot',      { iron_ore: 1 },                                 'iron_ingot',      1,  'forge', 0),
  new Recipe('crystal_axe',     { crystal_shard: 3, iron_ingot: 1, stick: 2 },  'crystal_axe',     1,  'forge', 3),
  new Recipe('crystal_pickaxe', { crystal_shard: 3, iron_ingot: 1, stick: 2 },  'crystal_pickaxe', 1,  'forge', 3),
  new Recipe('crystal_shovel',  { crystal_shard: 1, iron_ingot: 1, stick: 2 },  'crystal_shovel',  1,  'forge', 3),
  new Recipe('crystal_sword',   { crystal_shard: 2, iron_ingot: 1 },            'crystal_sword',   1,  'forge', 3),

  // --- Armor ---
  new Recipe('wooden_helmet',     { planks: 5 },                                   'wooden_helmet',     1,  'crafting_table', 0),
  new Recipe('wooden_chestplate', { planks: 8 },                                   'wooden_chestplate', 1,  'crafting_table', 0),
  new Recipe('wooden_leggings',   { planks: 7 },                                   'wooden_leggings',   1,  'crafting_table', 0),
  new Recipe('wooden_boots',      { planks: 4 },                                   'wooden_boots',      1,  'crafting_table', 0),

  new Recipe('stone_helmet',     { cobblestone: 5 },                               'stone_helmet',     1,  'crafting_table', 1),
  new Recipe('stone_chestplate', { cobblestone: 8 },                               'stone_chestplate', 1,  'crafting_table', 1),
  new Recipe('stone_leggings',   { cobblestone: 7 },                               'stone_leggings',   1,  'crafting_table', 1),
  new Recipe('stone_boots',      { cobblestone: 4 },                               'stone_boots',      1,  'crafting_table', 1),

  new Recipe('iron_helmet',     { iron_ingot: 5 },                                 'iron_helmet',     1,  'crafting_table', 2),
  new Recipe('iron_chestplate', { iron_ingot: 8 },                                 'iron_chestplate', 1,  'crafting_table', 2),
  new Recipe('iron_leggings',   { iron_ingot: 7 },                                 'iron_leggings',   1,  'crafting_table', 2),
  new Recipe('iron_boots',      { iron_ingot: 4 },                                 'iron_boots',      1,  'crafting_table', 2),

  new Recipe('crystal_helmet',     { crystal_shard: 3, iron_ingot: 2 },            'crystal_helmet',     1,  'forge', 3),
  new Recipe('crystal_chestplate', { crystal_shard: 6, iron_ingot: 2 },            'crystal_chestplate', 1,  'forge', 3),
  new Recipe('crystal_leggings',   { crystal_shard: 5, iron_ingot: 2 },            'crystal_leggings',   1,  'forge', 3),
  new Recipe('crystal_boots',      { crystal_shard: 3, iron_ingot: 1 },            'crystal_boots',      1,  'forge', 3),

  // Obsidian and the portal that leads to the Nether
  new Recipe('obsidian',        { cobblestone: 4, crystal_shard: 2 },           'obsidian',        1,  'forge', 3),
  new Recipe('nether_portal',   { obsidian: 4 },                                'nether_portal',   1,  'forge', 3),

  // Boss unlock — requires all 3 mini-bosses killed
  new Recipe('summoning_stone', { troll_fang: 1, witch_eye: 1, golem_core: 1 }, 'summoning_stone', 1,  'forge', 3,
    ['cave_troll', 'swamp_witch', 'stone_golem']),
]

export class RecipeRegistry {
  constructor() {
    this.recipes = ALL_RECIPES
  }

  getAvailable(inventory, station, playerTier, killedBosses = new Set()) {
    const stationLevel = STATION_ORDER.indexOf(station)
    return this.recipes.filter(r => {
      const rLevel = STATION_ORDER.indexOf(r.station)
      if (rLevel > stationLevel) return false
      if (r.requiredTier > playerTier) return false
      for (const bossId of r.killedBosses) {
        if (!killedBosses.has(bossId)) return false
      }
      return inventory.hasAll(r.ingredients)
    })
  }

  getAllVisible(inventory, station, playerTier, killedBosses = new Set()) {
    const stationLevel = STATION_ORDER.indexOf(station)
    return this.recipes.filter(r => {
      const rLevel = STATION_ORDER.indexOf(r.station)
      if (rLevel > stationLevel) return false
      if (r.requiredTier > playerTier) return false
      for (const bossId of r.killedBosses) {
        if (!killedBosses.has(bossId)) return false
      }
      return true
    })
  }

  craft(recipe, inventory, itemRegistry) {
    if (!inventory.hasAll(recipe.ingredients)) return false
    for (const [itemId, count] of Object.entries(recipe.ingredients)) {
      inventory.remove(itemId, count)
    }
    inventory.add(recipe.resultItem, recipe.resultCount, itemRegistry)
    return true
  }
}
