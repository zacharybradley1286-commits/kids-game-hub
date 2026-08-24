import { getItemIcon } from './IconRegistry.js'

export class Hotbar {
  constructor(inventory, itemRegistry) {
    this.inventory = inventory
    this.itemRegistry = itemRegistry
    this.el = document.getElementById('hotbar')
    this.slotEls = []
    this._build()
    inventory.addChangeListener(() => this.refresh())
  }

  _build() {
    this.el.innerHTML = ''
    this.slotEls = []
    for (let i = 0; i < 9; i++) {
      const slot = document.createElement('div')
      slot.className = 'hotbar-slot'
      slot.innerHTML = `
        <span class="slot-key">${i + 1}</span>
        <div class="slot-icon-wrap" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"></div>
        <span class="slot-count"></span>
      `
      this.el.appendChild(slot)
      this.slotEls.push(slot)
    }
    this._updateSelected()
  }

  show() { this.el.style.display = 'flex' }
  hide() { this.el.style.display = 'none' }

  select(index) {
    this.inventory.hotbarIndex = ((index % 9) + 9) % 9
    this._updateSelected()
  }

  scroll(delta) {
    const newIdx = ((this.inventory.hotbarIndex + delta) % 9 + 9) % 9
    this.select(newIdx)
  }

  _updateSelected() {
    this.slotEls.forEach((el, i) => {
      el.classList.toggle('selected', i === this.inventory.hotbarIndex)
    })
  }

  refresh() {
    for (let i = 0; i < 9; i++) {
      const slotData = this.inventory.slots[i]
      const wrap = this.slotEls[i].querySelector('.slot-icon-wrap')
      const countEl = this.slotEls[i].querySelector('.slot-count')
      wrap.innerHTML = ''
      if (slotData.itemId && slotData.count > 0) {
        const item = this.itemRegistry.getItem(slotData.itemId)
        const icon = document.createElement('img')
        icon.className = 'item-icon'
        icon.src = getItemIcon(item)
        icon.title = item?.name ?? slotData.itemId
        wrap.appendChild(icon)
        countEl.textContent = slotData.count > 1 ? slotData.count : ''
      } else {
        countEl.textContent = ''
      }
    }
  }
}
