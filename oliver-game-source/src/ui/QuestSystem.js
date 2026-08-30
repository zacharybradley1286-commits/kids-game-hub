const QUESTS = [
  {
    id: 'chop_wood',
    name: 'Chop some wood',
    desc: 'Break 10 wood logs.',
    type: 'mine',
    itemId: 'wood_log',
    target: 10,
    reward: { stick: 4, planks: 4 },
  },
  {
    id: 'plant_wheat',
    name: 'Start a farm',
    desc: 'Plant wheat on farmland.',
    type: 'plant',
    itemId: 'wheat_seed',
    target: 1,
    reward: { bread: 2 },
  },
  {
    id: 'find_witch',
    name: 'Find the Swamp Witch',
    desc: 'Travel to the south-east swamp.',
    type: 'visit',
    bossId: 'swamp_witch',
    target: 1,
    reward: { cooked_meat: 3, torch: 4 },
  },
]

export class QuestSystem {
  constructor() {
    this.progress = Object.fromEntries(QUESTS.map(q => [q.id, 0]))
    this.done = new Set()
    this.onComplete = null
  }

  list() { return QUESTS }

  noteMine(itemId, count = 1) {
    for (const q of QUESTS) {
      if (q.type === 'mine' && q.itemId === itemId) this._add(q, count)
    }
  }

  notePlant(itemId) {
    for (const q of QUESTS) {
      if (q.type === 'plant' && q.itemId === itemId) this._add(q, 1)
    }
  }

  noteVisit(bossId) {
    for (const q of QUESTS) {
      if (q.type === 'visit' && q.bossId === bossId) this._add(q, 1)
    }
  }

  _add(q, n) {
    if (this.done.has(q.id)) return
    this.progress[q.id] = Math.min(q.target, (this.progress[q.id] ?? 0) + n)
    if (this.progress[q.id] >= q.target) {
      this.done.add(q.id)
      this.onComplete?.(q)
    }
  }

  serialize() {
    return { progress: this.progress, done: [...this.done] }
  }

  deserialize(data) {
    if (!data) return
    this.progress = { ...this.progress, ...(data.progress ?? {}) }
    this.done = new Set(data.done ?? [])
  }
}
