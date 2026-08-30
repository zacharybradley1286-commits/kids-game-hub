export const ARMOR_SLOTS = ['helmet', 'chestplate', 'leggings', 'boots']

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
    this.armor = {}
    for (const s of ARMOR_SLOTS) this.armor[s] = new InventorySlot()
    this.hotbarIndex = 0
    this._changeListeners = []
    // Companion pig saddle-bags — 9 extra slots, shown in the inventory UI.
    this.PIG_SIZE = 9
    this.pigSlots = Array.from({ length: this.PIG_SIZE }, () => new InventorySlot())
  }

  // Equip an armor item straight from a main-inventory slot into its armor slot.
  // Any item already equipped there is swapped back into the main slot it came from.
  equipArmor(mainSlotIndex, itemRegistry) {
    const slot = this.slots[mainSlotIndex]
    const item = itemRegistry?.getItem(slot.itemId)
    if (!item || !item.armorSlot) return false
    const armorSlot = this.armor[item.armorSlot]
    const prev = { itemId: armorSlot.itemId, count: armorSlot.count, durability: armorSlot.durability }
    armorSlot.itemId = slot.itemId
    armorSlot.count = 1
    armorSlot.durability = slot.durability
    slot.count--
    if (slot.count <= 0) {
      slot.itemId = prev.itemId
      slot.count = prev.itemId ? prev.count : 0
      slot.durability = prev.durability
    }
    this._fireChange()
    return true
  }

  // Move an equipped armor piece back into the first free main-inventory slot.
  unequipArmor(armorSlotType, itemRegistry) {
    const armorSlot = this.armor[armorSlotType]
    if (!armorSlot.itemId) return false
    const leftover = this.add(armorSlot.itemId, armorSlot.count, itemRegistry)
    if (leftover > 0) return false  // inventory full — leave equipped
    armorSlot.itemId = null
    armorSlot.count = 0
    armorSlot.durability = null
    this._fireChange()
    return true
  }

  getArmorDefense(itemRegistry) {
    let total = 0
    for (const s of ARMOR_SLOTS) {
      const itemId = this.armor[s].itemId
      if (itemId) total += itemRegistry?.getItem(itemId)?.defense ?? 0
    }
    return total
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

  _slotRef(ref) {
    if (typeof ref === 'number') return this.slots[ref]
    if (typeof ref === 'string' && ref[0] === 'p') return this.pigSlots[parseInt(ref.slice(1), 10)]
    return null
  }

  swapSlots(a, b) {
    const sa = this._slotRef(a)
    const sb = this._slotRef(b)
    if (!sa || !sb) return
    const tmp = { itemId: sa.itemId, count: sa.count, durability: sa.durability }
    sa.itemId = sb.itemId; sa.count = sb.count; sa.durability = sb.durability
    sb.itemId = tmp.itemId; sb.count = tmp.count; sb.durability = tmp.durability
    this._fireChange()
  }

  serialize() {
    const armor = {}
    for (const s of ARMOR_SLOTS) {
      armor[s] = { itemId: this.armor[s].itemId, count: this.armor[s].count, durability: this.armor[s].durability }
    }
    return {
      slots: this.slots.map(s => ({ itemId: s.itemId, count: s.count, durability: s.durability })),
      armor,
      pigSlots: this.pigSlots.map(s => ({ itemId: s.itemId, count: s.count, durability: s.durability })),
    }
  }

  deserialize(data) {
    // Backwards-compatible: older saves are a bare slots array with no armor.
    const slots = Array.isArray(data) ? data : (data?.slots ?? [])
    const armor = Array.isArray(data) ? null : data?.armor
    for (let i = 0; i < Math.min(slots.length, this.TOTAL_SIZE); i++) {
      this.slots[i].itemId = slots[i].itemId
      this.slots[i].count = slots[i].count
      this.slots[i].durability = slots[i].durability
    }
    if (armor) {
      for (const s of ARMOR_SLOTS) {
        this.armor[s].itemId = armor[s]?.itemId ?? null
        this.armor[s].count = armor[s]?.count ?? 0
        this.armor[s].durability = armor[s]?.durability ?? null
      }
    }
    const pig = Array.isArray(data) ? null : data?.pigSlots
    if (pig) {
      for (let i = 0; i < Math.min(pig.length, this.PIG_SIZE); i++) {
        this.pigSlots[i].itemId = pig[i].itemId
        this.pigSlots[i].count = pig[i].count
        this.pigSlots[i].durability = pig[i].durability
      }
    }
    this._fireChange()
  }

  // Dump pig bags into the world when the companion dies.
  drainPigSlots() {
    const out = []
    for (const s of this.pigSlots) {
      if (s.itemId && s.count > 0) out.push({ itemId: s.itemId, count: s.count })
      s.itemId = null; s.count = 0; s.durability = null
    }
    this._fireChange()
    return out
  }
}
