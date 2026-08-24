export class InventorySlot {
  constructor() {
    this.itemId = null
    this.count = 0
    this.durability = null  // null = not tracked
  }
}

export class Inventory {
  constructor() {
    this.HOTBAR_SIZE = 9
    this.TOTAL_SIZE = 36
    this.slots = Array.from({ length: this.TOTAL_SIZE }, () => new InventorySlot())
    this.hotbarIndex = 0
    this._changeListeners = []
  }

  addChangeListener(fn) { this._changeListeners.push(fn) }
  _fireChange() { this._changeListeners.forEach(fn => fn()) }

  hotbarSlot(i) {
    return this.slots[i]
  }

  get selectedSlot() {
    return this.slots[this.hotbarIndex]
  }

  // Add items, returns leftover count
  add(itemId, count, itemRegistry) {
    const stackSize = itemRegistry?.getItem(itemId)?.stackSize ?? 64
    let remaining = count
    // Fill existing stacks first
    for (let i = 0; i < this.TOTAL_SIZE && remaining > 0; i++) {
      const slot = this.slots[i]
      if (slot.itemId === itemId && slot.count < stackSize) {
        const canAdd = Math.min(remaining, stackSize - slot.count)
        slot.count += canAdd
        remaining -= canAdd
      }
    }
    // Fill empty slots
    for (let i = 0; i < this.TOTAL_SIZE && remaining > 0; i++) {
      const slot = this.slots[i]
      if (!slot.itemId) {
        const canAdd = Math.min(remaining, stackSize)
        slot.itemId = itemId
        slot.count = canAdd
        remaining -= canAdd
      }
    }
    this._fireChange()
    return remaining
  }

  remove(itemId, count) {
    let remaining = count
    for (let i = 0; i < this.TOTAL_SIZE && remaining > 0; i++) {
      const slot = this.slots[i]
      if (slot.itemId === itemId) {
        const take = Math.min(remaining, slot.count)
        slot.count -= take
        remaining -= take
        if (slot.count === 0) {
          slot.itemId = null
          slot.durability = null
        }
      }
    }
    this._fireChange()
  }

  countOf(itemId) {
    let total = 0
    for (const slot of this.slots) {
      if (slot.itemId === itemId) total += slot.count
    }
    return total
  }

  hasAll(ingredients) {
    for (const [itemId, count] of Object.entries(ingredients)) {
      if (this.countOf(itemId) < count) return false
    }
    return true
  }

  removeSlot(index) {
    const slot = this.slots[index]
    if (!slot.itemId) return
    slot.count--
    if (slot.count === 0) {
      slot.itemId = null
      slot.durability = null
    }
    this._fireChange()
  }

  damageTool(index, amount = 1, itemRegistry) {
    const slot = this.slots[index]
    if (!slot.itemId) return
    const item = itemRegistry?.getItem(slot.itemId)
    if (!item || !item.durability) return
    if (slot.durability === null) slot.durability = item.durability
    slot.durability -= amount
    if (slot.durability <= 0) {
      slot.itemId = null
      slot.count = 0
      slot.durability = null
    }
    this._fireChange()
  }

  swapSlots(a, b) {
    const tmp = { itemId: this.slots[a].itemId, count: this.slots[a].count, durability: this.slots[a].durability }
    this.slots[a].itemId    = this.slots[b].itemId
    this.slots[a].count     = this.slots[b].count
    this.slots[a].durability = this.slots[b].durability
    this.slots[b].itemId    = tmp.itemId
    this.slots[b].count     = tmp.count
    this.slots[b].durability = tmp.durability
    this._fireChange()
  }

  serialize() {
    return this.slots.map(s => ({ itemId: s.itemId, count: s.count, durability: s.durability }))
  }

  deserialize(data) {
    for (let i = 0; i < Math.min(data.length, this.TOTAL_SIZE); i++) {
      this.slots[i].itemId = data[i].itemId
      this.slots[i].count = data[i].count
      this.slots[i].durability = data[i].durability
    }
    this._fireChange()
  }
}
