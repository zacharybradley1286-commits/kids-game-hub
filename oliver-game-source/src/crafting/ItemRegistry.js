export class ItemType {
  constructor({ id, name, category, tier = 0, stackSize = 64,
                damage = 0, durability = 0, foodValue = 0, blockId = -1,
                isHoe = false, isAxe = false, isSword = false, isPickaxe = false, isShovel = false }) {
    this.id = id
    this.name = name
    this.category = category  // 'block','tool','weapon','food','seed','misc'
    this.tier = tier
    this.stackSize = stackSize
    this.damage = damage
    this.durability = durability   // 0 = unbreakable
    this.foodValue = foodValue
    this.blockId = blockId         // -1 = not placeable
    this.isHoe = isHoe
    this.isAxe = isAxe
    this.isSword = isSword
    this.isPickaxe = isPickaxe
    this.isShovel = isShovel
  }
}

const ITEMS = [
  // Blocks (placeable)
  { id:'wood_log',       name:'Wood Log',       category:'block',  stackSize:64, blockId:5 },
  { id:'cobblestone',    name:'Cobblestone',    category:'block',  stackSize:64, blockId:4 },
  { id:'dirt',           name:'Dirt',           category:'block',  stackSize:64, blockId:2 },
  { id:'sand',           name:'Sand',           category:'block',  stackSize:64, blockId:7 },
  { id:'gravel',         name:'Gravel',         category:'block',  stackSize:64, blockId:15 },
  { id:'planks',         name:'Wood Planks',    category:'block',  stackSize:64, blockId:16 },
  { id:'glass',          name:'Glass',          category:'block',  stackSize:64, blockId:17 },
  { id:'crafting_table', name:'Crafting Table', category:'block',  stackSize:1,  blockId:11 },
  { id:'forge',          name:'Forge',          category:'block',  stackSize:1,  blockId:12 },
  { id:'chest',          name:'Chest',          category:'block',  stackSize:1,  blockId:18 },
  { id:'campfire',       name:'Campfire',       category:'block',  stackSize:1,  blockId:20 },
  { id:'bed',            name:'Bed',            category:'block',  stackSize:1,  blockId:21 },
  { id:'obsidian',       name:'Obsidian',       category:'block',  stackSize:64, blockId:25 },
  { id:'nether_portal',  name:'Nether Portal',  category:'block',  stackSize:1,  blockId:26 },
  { id:'netherrack',     name:'Netherrack',     category:'block',  stackSize:64, blockId:22 },
  { id:'glowstone',      name:'Glowstone',      category:'block',  stackSize:64, blockId:24 },

  // Raw materials
  { id:'iron_ore',       name:'Iron Ore',       category:'misc',   stackSize:64 },
  { id:'iron_ingot',     name:'Iron Ingot',     category:'misc',   stackSize:64 },
  { id:'crystal_shard',  name:'Crystal Shard',  category:'misc',   stackSize:64 },
  { id:'stick',          name:'Stick',          category:'weapon', stackSize:64, damage:1.5, isSword:true },
  { id:'string',         name:'String',         category:'misc',   stackSize:64 },
  { id:'bone',           name:'Bone',           category:'misc',   stackSize:64 },

  // Boss drops
  { id:'troll_fang',     name:'Troll Fang',     category:'misc',   stackSize:1 },
  { id:'witch_eye',      name:"Witch's Eye",    category:'misc',   stackSize:1 },
  { id:'golem_core',     name:'Golem Core',     category:'misc',   stackSize:1 },
  { id:'summoning_stone',name:'Summoning Stone',category:'misc',   stackSize:1 },

  // Seeds & food
  { id:'wheat_seed',     name:'Wheat Seed',     category:'seed',   stackSize:64 },
  { id:'wheat',          name:'Wheat',          category:'food',   stackSize:64, foodValue:2 },
  { id:'bread',          name:'Bread',          category:'food',   stackSize:16, foodValue:5 },
  { id:'carrot_seed',    name:'Carrot Seed',    category:'seed',   stackSize:64 },
  { id:'carrot',         name:'Carrot',         category:'food',   stackSize:64, foodValue:3 },
  { id:'potato_seed',    name:'Potato',         category:'seed',   stackSize:64 },
  { id:'baked_potato',   name:'Baked Potato',   category:'food',   stackSize:16, foodValue:5 },
  { id:'cooked_meat',    name:'Cooked Meat',    category:'food',   stackSize:16, foodValue:8 },
  { id:'raw_meat',       name:'Raw Meat',       category:'food',   stackSize:16, foodValue:2 },

  // Tier 1 — Wood tools
  { id:'wooden_axe',     name:'Wooden Axe',     category:'tool',   tier:1, stackSize:1, damage:2.5, durability:60,  isAxe:true },
  { id:'wooden_pickaxe', name:'Wooden Pickaxe', category:'tool',   tier:1, stackSize:1, damage:2.0, durability:60,  isPickaxe:true },
  { id:'wooden_hoe',     name:'Wooden Hoe',     category:'tool',   tier:1, stackSize:1, damage:1.0, durability:60,  isHoe:true },
  { id:'wooden_shovel',  name:'Wooden Shovel',  category:'tool',   tier:1, stackSize:1, damage:1.5, durability:60,  isShovel:true },
  { id:'wooden_sword',   name:'Wooden Sword',   category:'weapon', tier:1, stackSize:1, damage:4.0, durability:60,  isSword:true },

  // Tier 2 — Stone tools
  { id:'stone_axe',      name:'Stone Axe',      category:'tool',   tier:2, stackSize:1, damage:3.5, durability:130, isAxe:true },
  { id:'stone_pickaxe',  name:'Stone Pickaxe',  category:'tool',   tier:2, stackSize:1, damage:3.0, durability:130, isPickaxe:true },
  { id:'stone_hoe',      name:'Stone Hoe',      category:'tool',   tier:2, stackSize:1, damage:1.5, durability:130, isHoe:true },
  { id:'stone_shovel',   name:'Stone Shovel',   category:'tool',   tier:2, stackSize:1, damage:2.5, durability:130, isShovel:true },
  { id:'stone_sword',    name:'Stone Sword',    category:'weapon', tier:2, stackSize:1, damage:5.0, durability:130, isSword:true },

  // Tier 3 — Iron tools
  { id:'iron_axe',       name:'Iron Axe',       category:'tool',   tier:3, stackSize:1, damage:5.0, durability:250, isAxe:true },
  { id:'iron_pickaxe',   name:'Iron Pickaxe',   category:'tool',   tier:3, stackSize:1, damage:4.5, durability:250, isPickaxe:true },
  { id:'iron_hoe',       name:'Iron Hoe',       category:'tool',   tier:3, stackSize:1, damage:2.0, durability:250, isHoe:true },
  { id:'iron_shovel',    name:'Iron Shovel',    category:'tool',   tier:3, stackSize:1, damage:3.5, durability:250, isShovel:true },
  { id:'iron_sword',     name:'Iron Sword',     category:'weapon', tier:3, stackSize:1, damage:7.0, durability:250, isSword:true },

  // Tier 4 — Crystal tools
  { id:'crystal_axe',    name:'Crystal Axe',    category:'tool',   tier:4, stackSize:1, damage:7.0, durability:500, isAxe:true },
  { id:'crystal_pickaxe',name:'Crystal Pickaxe',category:'tool',   tier:4, stackSize:1, damage:6.5, durability:500, isPickaxe:true },
  { id:'crystal_shovel', name:'Crystal Shovel', category:'tool',   tier:4, stackSize:1, damage:5.5, durability:500, isShovel:true },
  { id:'crystal_sword',  name:'Crystal Sword',  category:'weapon', tier:4, stackSize:1, damage:12.0,durability:500, isSword:true },
]

export class ItemRegistry {
  constructor() {
    this._db = new Map()
    for (const def of ITEMS) {
      this._db.set(def.id, new ItemType(def))
    }
  }

  getItem(id) {
    return this._db.get(id) ?? null
  }

  all() {
    return [...this._db.values()]
  }
}
