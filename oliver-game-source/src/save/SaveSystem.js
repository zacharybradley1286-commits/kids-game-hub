const SAVE_KEY = 'oliver_game_save'

export class SaveSystem {
  constructor(opts) {
    this.getState = opts.getState  // () => extra blob
    this.worldData = opts.worldData
    this.inventory = opts.inventory
    this.stats = opts.playerStats
    this.dayNight = opts.dayNight
    this.killedBosses = opts.killedBosses
    this.getPlayerPos = opts.getPlayerPos
  }

  hasSave() {
    return !!localStorage.getItem(SAVE_KEY)
  }

  save() {
    const pos = this.getPlayerPos()
    const extra = this.getState ? this.getState() : {}
    const data = {
      version: 2,
      worldData: this.worldData.serialize(),
      inventory: this.inventory.serialize(),
      playerStats: this.stats.serialize(),
      dayNumber: this.dayNight.dayNumber,
      timeOfDay: this.dayNight.timeOfDay,
      killedBosses: [...this.killedBosses],
      playerPos: { x: pos.x, y: pos.y, z: pos.z },
      ...extra,
    }
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(data))
    } catch (e) {
      console.warn('Save failed (storage full?):', e)
    }
  }

  load() {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return null
    try {
      return JSON.parse(raw)
    } catch {
      return null
    }
  }

  apply(data, playerController) {
    if (!data) return
    this.worldData.deserialize(data.worldData)
    this.inventory.deserialize(data.inventory)
    this.stats.deserialize(data.playerStats)
    this.dayNight.dayNumber  = data.dayNumber  ?? 1
    this.dayNight.timeOfDay  = data.timeOfDay  ?? 0.05
    for (const id of (data.killedBosses ?? [])) {
      this.killedBosses.add(id)
    }
    if (data.playerPos && playerController) {
      playerController.camera.position.set(data.playerPos.x, data.playerPos.y, data.playerPos.z)
    }
    return data
  }

  clear() {
    localStorage.removeItem(SAVE_KEY)
  }
}
