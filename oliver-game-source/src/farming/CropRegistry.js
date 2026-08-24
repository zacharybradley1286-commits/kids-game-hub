export class CropType {
  constructor({ id, name, seedItem, harvestItem, harvestCount, growthTime, stages = 4 }) {
    this.id = id
    this.name = name
    this.seedItem = seedItem
    this.harvestItem = harvestItem
    this.harvestCount = harvestCount
    this.growthTime = growthTime  // seconds per stage
    this.stages = stages
    // Colors per stage for procedural display (young=yellow-green → mature=green)
    this.stageColors = ['#8b7a1a', '#aaaa22', '#88cc44', '#44aa22']
  }
}

export const CROP_DB = {
  wheat:  new CropType({ id:'wheat',  name:'Wheat',  seedItem:'wheat_seed',  harvestItem:'wheat',      harvestCount:2, growthTime:25 }),
  carrot: new CropType({ id:'carrot', name:'Carrot', seedItem:'carrot_seed', harvestItem:'carrot',     harvestCount:1, growthTime:35 }),
  potato: new CropType({ id:'potato', name:'Potato', seedItem:'potato_seed', harvestItem:'baked_potato', harvestCount:1, growthTime:40 }),
}

export function findCropBySeed(seedItemId) {
  return Object.values(CROP_DB).find(c => c.seedItem === seedItemId) ?? null
}
