import { getItemIcon } from './IconRegistry.js'
import { ARMOR_SLOTS } from '../player/Inventory.js'

export class InventoryUI {
  constructor(inventory, itemRegistry) {
    this.inventory = inventory
    this.itemRegistry = itemRegistry
    this.el = document.getElementById('inventory-overlay')
    this.grid = document.getElementById('inv-grid')
    this.armorRow = document.getElementById('armor-row')
    this.defenseLabel = document.getElementById('armor-defense-label')
    this.pigGrid = document.getElementById('pig-grid')
    this.visible = false
    this._selected = null   // slot ref waiting to be swapped
    inventory.addChangeListener(() => { if (this.visible) this.refresh() })
  }

  toggle() {
    this.visible ? this.hide() : this.show()
    return this.visible
  }

  show() {
    this.visible = true
    this.el.style.display = 'block'
    this.refresh()
  }

  hide() {
    this.visible = false
    this.el.style.display = 'none'
  }

  refresh() {
    this._refreshArmor()
    this._fillGrid(this.grid, this.inventory.slots, (i) => i, { hotbar: true, armorClick: true })
    if (this.pigGrid) {
      this._fillGrid(this.pigGrid, this.inventory.pigSlots, (i) => `p${i}`, { hotbar: false, armorClick: false })
    }
  }

  _fillGrid(grid, slots, refOf, { hotbar, armorClick }) {
    if (!grid) return
    grid.innerHTML = ''
    for (let i = 0; i < slots.length; i++) {
      const slot = slots[i]
      const ref = refOf(i)
      const cell = document.createElement('div')
      cell.className = 'inv-slot'
      if (hotbar && i < 9) cell.style.border = '1px solid rgba(255,255,150,0.4)'
      if (this._selected === ref) cell.style.outline = '2px solid #fff'

      if (slot.itemId && slot.count > 0) {
        const item = this.itemRegistry.getItem(slot.itemId)
        const icon = document.createElement('img')
        icon.src = getItemIcon(item)
        icon.title = item?.name ?? slot.itemId
        cell.appendChild(icon)
        if (slot.count > 1) {
          const cnt = document.createElement('span')
          cnt.className = 'slot-count'
          cnt.textContent = slot.count
          cell.appendChild(cnt)
        }
      }

      cell.addEventListener('click', () => {
        const item = slot.itemId ? this.itemRegistry.getItem(slot.itemId) : null
        if (armorClick && item?.armorSlot && this._selected === null && typeof ref === 'number') {
          this.inventory.equipArmor(ref, this.itemRegistry)
          this.refresh()
          return
        }
        if (this._selected === null) {
          if (slot.itemId) {
            this._selected = ref
            this.refresh()
          }
        } else {
          this.inventory.swapSlots(this._selected, ref)
          this._selected = null
          this.refresh()
        }
      })
      grid.appendChild(cell)
    }
  }

  _refreshArmor() {
    if (!this.armorRow) return
    this.armorRow.innerHTML = ''
    for (const slotType of ARMOR_SLOTS) {
      const slot = this.inventory.armor[slotType]
      const cell = document.createElement('div')
      cell.className = 'armor-slot'

      const label = document.createElement('div')
      label.className = 'slot-label'
      label.textContent = slotType.slice(0, 4)
      cell.appendChild(label)

      if (slot.itemId) {
        const item = this.itemRegistry.getItem(slot.itemId)
        const icon = document.createElement('img')
        icon.src = getItemIcon(item)
        icon.title = item?.name ?? slot.itemId
        cell.appendChild(icon)
      }

      cell.addEventListener('click', () => {
        this.inventory.unequipArmor(slotType, this.itemRegistry)
        this.refresh()
      })

      this.armorRow.appendChild(cell)
    }
    if (this.defenseLabel) {
      this.defenseLabel.textContent = `Defense: ${this.inventory.getArmorDefense(this.itemRegistry)}`
    }
  }
}
