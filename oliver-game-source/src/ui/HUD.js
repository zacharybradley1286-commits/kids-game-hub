export class HUD {
  constructor() {
    this.healthFill  = document.getElementById('health-fill')
    this.hungerFill  = document.getElementById('hunger-fill')
    this.dayCounter  = document.getElementById('day-counter')
    this.crosshair   = document.getElementById('crosshair')
    this.hudEl       = document.getElementById('hud')
    this.breakWrap   = document.getElementById('break-progress-wrap')
    this.breakFill   = document.getElementById('break-progress-fill')
    this.pickupFlash = document.getElementById('pickup-flash')
    this.minimap     = document.getElementById('minimap')
    this.questPanel  = document.getElementById('quest-panel')
    this._flashTimeout = null
    this._msgTimeout = null
  }

  show() {
    this.hudEl.style.display = 'flex'
    this.crosshair.style.display = 'block'
    this.dayCounter.style.display = 'block'
    this.minimap.style.display = 'block'
    if (this.questPanel) this.questPanel.style.display = 'block'
    const vol = document.getElementById('vol-toggle')
    if (vol) vol.style.display = 'block'
  }

  hide() {
    this.hudEl.style.display = 'none'
    this.crosshair.style.display = 'none'
    this.dayCounter.style.display = 'none'
    this.minimap.style.display = 'none'
    if (this.questPanel) this.questPanel.style.display = 'none'
  }

  updateHealth(current, max) {
    const pct = Math.max(0, current / max) * 100
    this.healthFill.style.width = pct + '%'
  }

  updateHunger(current, max) {
    const pct = Math.max(0, current / max) * 100
    this.hungerFill.style.width = pct + '%'
  }

  updateDay(day) {
    this.dayCounter.textContent = `Day ${day}`
  }

  setBreakProgress(fraction) {
    if (fraction <= 0) {
      this.breakWrap.style.display = 'none'
      this.breakFill.style.width = '0%'
    } else {
      this.breakWrap.style.display = 'block'
      this.breakFill.style.width = (fraction * 100) + '%'
    }
  }

  showPickup(itemName) {
    clearTimeout(this._flashTimeout)
    this.pickupFlash.textContent = `+ ${itemName}`
    this.pickupFlash.style.opacity = '1'
    this._flashTimeout = setTimeout(() => {
      this.pickupFlash.style.opacity = '0'
    }, 1500)
  }

  toggleQuests() {
    if (!this.questPanel) return
    const on = this.questPanel.style.display !== 'none'
    this.questPanel.style.display = on ? 'none' : 'block'
  }

  refreshQuests(quests) {
    if (!this.questPanel) return
    const rows = quests.list().map(q => {
      const done = quests.done.has(q.id)
      const p = quests.progress[q.id] ?? 0
      const mark = done ? '✓' : `${p}/${q.target}`
      return `<div class="quest-row${done ? ' done' : ''}"><b>${q.name}</b> <span>${mark}</span><div class="quest-desc">${q.desc}</div></div>`
    }).join('')
    this.questPanel.innerHTML = `<h3>Jobs (J)</h3>${rows}`
  }
}
