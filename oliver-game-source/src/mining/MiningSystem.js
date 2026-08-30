import { CHUNK_W } from '../constants.js'
import { BLOCK, BLOCK_DB } from '../world/BlockRegistry.js'
import { sounds } from '../systems/SoundSystem.js'

export class MiningSystem {
  constructor(worldData, worldRenderer, inventory, playerStats, itemRegistry) {
    this.worldData = worldData
    this.worldRenderer = worldRenderer
    this.inventory = inventory
    this.stats = playerStats
    this.itemRegistry = itemRegistry

    this._breakingPos = null
    this._breakProgress = 0
    this._breakDuration = 0
    this._mineSoundTimer = 0
    this.onBreakProgress = null  // callback(fraction)
    this.onPickup = null         // callback(itemName)
    this.onOverflow = null       // callback(itemId, count) when inventory is full
    this.onBroke = null          // callback(block, dropId)
    this.isOccupied = null       // callback(x,y,z) — player body cells
    this.removeCropAt = null     // callback([x,y,z])
  }

  beginBreak(worldPos) {
    const [bx, by, bz] = worldPos
    const blockId = this.worldData.get(bx, by, bz)
    if (blockId === BLOCK.AIR) return
    const block = BLOCK_DB[blockId]
    if (!block || block.hardness === 999) return

    // If already breaking this exact block, don't restart
    if (this._breakingPos &&
        this._breakingPos[0] === bx &&
        this._breakingPos[1] === by &&
        this._breakingPos[2] === bz) return

    this._breakingPos = [bx, by, bz]
    this._breakProgress = 0
    // Duration: hardness controls how long to hold (min 0.15s, scales with hardness)
    this._breakDuration = Math.max(0.15, block.hardness * 0.6)
    this._mineSoundTimer = 0
  }

  cancelBreak() {
    this._breakingPos = null
    this._breakProgress = 0
    this.onBreakProgress?.(0)
  }

  update(dt, heldItem) {
    if (!this._breakingPos) return false

    const [bx, by, bz] = this._breakingPos
    const blockId = this.worldData.get(bx, by, bz)
    if (blockId === BLOCK.AIR) { this.cancelBreak(); return false }

    const block = BLOCK_DB[blockId]
    const speedMult = this._toolSpeedMult(heldItem, block)
    this._breakProgress += dt * speedMult

    this._mineSoundTimer -= dt
    if (this._mineSoundTimer <= 0) {
      sounds.playMine()
      this._mineSoundTimer = 0.3
    }

    const fraction = Math.min(1, this._breakProgress / this._breakDuration)
    this.onBreakProgress?.(fraction)

    if (this._breakProgress >= this._breakDuration) {
      this._completeBreak(bx, by, bz, block, heldItem)
      return true
    }
    return false
  }

  _toolSpeedMult(item, block) {
    if (!item) {
      return block.minTier === 0 ? 1.0 : 0.2
    }
    const tierDiff = item.tier - block.minTier
    if (tierDiff < 0) return 0.3
    return 1.0 + tierDiff * 0.5
  }

  _completeBreak(bx, by, bz, block, heldItem) {
    // Remove the block from the world FIRST. Everything below this point
    // (inventory updates, UI refresh callbacks, sounds) is a side effect —
    // if any of it throws, the block must still be gone. Previously the
    // block removal ran last, so an exception anywhere above it (e.g. in a
    // UI refresh triggered by inventory.add) would silently abort mining
    // while leaving the break progress UI reset, making blocks appear
    // unbreakable.
    this.worldData.set(bx, by, bz, BLOCK.AIR)
    this.removeCropAt?.([bx, by, bz])
    this.removeCropAt?.([bx, by - 1, bz])
    const cx = Math.floor(bx / CHUNK_W)
    const cz = Math.floor(bz / CHUNK_W)
    this.worldRenderer.rebuildChunk(cx, cz)
    this.cancelBreak()

    try {
      sounds.playBlockBreak()
    } catch (e) {
      console.error('playBlockBreak failed:', e)
    }

    // Determine what drops
    const dropId = block.dropItem === null ? block.name : block.dropItem

    // Check if the item exists in registry
    const item = this.itemRegistry.getItem(dropId)
    if (item) {
      try {
        const leftover = this.inventory.add(dropId, block.dropCount, this.itemRegistry)
        if (leftover > 0) this.onOverflow?.(dropId, leftover)
        this.onPickup?.(item.name)
        this.onBroke?.(block, dropId)
      } catch (e) {
        console.error('Failed to add mined item to inventory:', e)
      }
    }

    // Damage tool
    if (heldItem && heldItem.durability > 0) {
      const hotbarIdx = this._findHotbarIndex(heldItem)
      if (hotbarIdx !== -1) {
        try {
          this.inventory.damageTool(hotbarIdx, 1, this.itemRegistry)
        } catch (e) {
          console.error('Failed to damage tool:', e)
        }
      }
    }
  }

  _findHotbarIndex(item) {
    for (let i = 0; i < 9; i++) {
      const slot = this.inventory.slots[i]
      if (slot.itemId === item.id) return i
    }
    return -1
  }

  placeBlock(worldPos, blockId) {
    const [bx, by, bz] = worldPos
    if (!this.worldData.inBounds(bx, by, bz)) return false
    const existing = this.worldData.get(bx, by, bz)
    const replaceable = existing === BLOCK.AIR ||
      existing === BLOCK.TALL_GRASS || existing === BLOCK.FLOWER
    if (!replaceable) return false
    if (this.isOccupied?.(bx, by, bz)) return false
    this.worldData.set(bx, by, bz, blockId)
    const cx = Math.floor(bx / CHUNK_W)
    const cz = Math.floor(bz / CHUNK_W)
    this.worldRenderer.rebuildChunk(cx, cz)
    return true
  }

  tillBlock(worldPos) {
    const [bx, by, bz] = worldPos
    const bid = this.worldData.get(bx, by, bz)
    if (bid !== BLOCK.GRASS && bid !== BLOCK.DIRT) return false
    this.worldData.set(bx, by, bz, BLOCK.FARMLAND)
    const cx = Math.floor(bx / CHUNK_W)
    const cz = Math.floor(bz / CHUNK_W)
    this.worldRenderer.rebuildChunk(cx, cz)
    return true
  }
}
