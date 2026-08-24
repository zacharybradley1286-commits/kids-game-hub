import * as THREE from 'three'
import { BLOCK } from '../world/BlockRegistry.js'
import { findCropBySeed } from './CropRegistry.js'

class GrowingCrop {
  constructor(cropType, worldPos, scene) {
    this.cropType = cropType
    this.worldPos = worldPos
    this.stage = 0
    this.timer = 0

    // Visual: a flat billboard quad
    const geo = new THREE.PlaneGeometry(0.6, 0.6)
    const mat = new THREE.MeshBasicMaterial({
      color: cropType.stageColors[0],
      side: THREE.DoubleSide,
    })
    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.rotation.y = Math.PI / 4
    this.mesh.position.set(worldPos[0] + 0.5, worldPos[1] + 0.8, worldPos[2] + 0.5)
    scene.add(this.mesh)
  }

  updateVisual() {
    this.mesh.material.color.set(this.cropType.stageColors[Math.min(this.stage, 3)])
    const scale = 0.4 + this.stage * 0.2
    this.mesh.scale.setScalar(scale)
    this.mesh.position.y = this.worldPos[1] + 0.4 + this.stage * 0.15
  }
}

export class FarmingSystem {
  constructor(worldData, scene) {
    this.worldData = worldData
    this.scene = scene
    this._crops = []   // list of GrowingCrop
    this.onHarvest = null  // callback(itemId, count)
  }

  plant(itemId, worldPos, inventory, itemRegistry) {
    const [bx, by, bz] = worldPos
    if (this.worldData.get(bx, by, bz) !== BLOCK.FARMLAND) return false
    if (this.worldData.get(bx, by + 1, bz) !== BLOCK.AIR) return false
    const cropType = findCropBySeed(itemId)
    if (!cropType) return false
    // Check for existing crop at this position
    if (this._crops.some(c => c.worldPos[0] === bx && c.worldPos[2] === bz)) return false

    inventory.remove(itemId, 1)
    const crop = new GrowingCrop(cropType, [bx, by, bz], this.scene)
    this._crops.push(crop)
    return true
  }

  update(dt) {
    for (const crop of this._crops) {
      if (crop.stage >= crop.cropType.stages - 1) continue
      crop.timer += dt
      if (crop.timer >= crop.cropType.growthTime) {
        crop.timer = 0
        crop.stage++
        crop.updateVisual()
      }
    }
  }

  tryHarvest(worldPos) {
    const [bx, by, bz] = worldPos
    const idx = this._crops.findIndex(c =>
      c.worldPos[0] === bx && c.worldPos[2] === bz)
    if (idx === -1) return null

    const crop = this._crops[idx]
    if (crop.stage < crop.cropType.stages - 1) return null  // not ready

    this.scene.remove(crop.mesh)
    crop.mesh.geometry.dispose()
    this._crops.splice(idx, 1)
    return { itemId: crop.cropType.harvestItem, count: crop.cropType.harvestCount }
  }

  removeCropAt(worldPos) {
    const idx = this._crops.findIndex(c =>
      c.worldPos[0] === worldPos[0] && c.worldPos[2] === worldPos[2])
    if (idx === -1) return
    const crop = this._crops[idx]
    this.scene.remove(crop.mesh)
    crop.mesh.geometry.dispose()
    this._crops.splice(idx, 1)
  }
}
