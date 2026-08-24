import { getItemIcon } from './IconRegistry.js'

export class InventoryUI {
  constructor(inventory, itemRegistry) {
    this.inventory = inventory
    this.itemRegistry = itemRegistry
    this.el = document.getElementById('inventory-overlay')
    this.grid = document.getElementById('inv-grid')
    this.visible = false
    this._selected = null   // index of clicked slot waiting to be swapped
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
    this.grid.innerHTML = ''
    for (let i = 0; i < 36; i++) {
      const slot = this.inventory.slots[i]
      const cell = document.createElement('div')
      cell.className = 'inv-slot'
      if (i < 9) cell.style.border = '1px solid rgba(255,255,150,0.4)'  // hotbar row
      if (i === this._selected) cell.style.outline = '2px solid #fff'   // selection highlight

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

      // Click to pick up / swap slots
      cell.addEventListener('click', () => {
        if (this._selected === null) {
          if (this.inventory.slots[i].itemId) {
            this._selected = i
            this.refresh()
          }
        } else {
          this.inventory.swapSlots(this._selected, i)
          this._selected = null
          this.refresh()
        }
      })

      this.grid.appendChild(cell)
    }
  }
}
