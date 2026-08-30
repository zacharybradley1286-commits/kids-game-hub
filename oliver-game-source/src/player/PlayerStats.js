export class PlayerStats {
  constructor() {
    this.maxHealth = 20
    this.health = 20
    this.maxHunger = 20
    this.hunger = 20
    this.tier = 0          // 0=bare hand, 1=wood, 2=stone, 3=iron, 4=crystal
    this.dead = false
    this._hungerTimer = 0
    this._regenTimer = 0
    this._hungerInterval = 30   // seconds between hunger ticks
    this.damageMult = 1.0       // incoming damage multiplier (set by difficulty)
    this.difficulty = 'normal'
    this.onDeath = null    // callback
    this.onChange = null   // callback for UI
    this._inventory = null
    this._itemRegistry = null
  }

  // Called once from Game.js so takeDamage can look up equipped armor.
  linkArmorSource(inventory, itemRegistry) {
    this._inventory = inventory
    this._itemRegistry = itemRegistry
  }

  // Call once at new game start — locked in for the run
  setDifficulty(level, { resetVitals = true } = {}) {
    const PRESETS = {
      easy:   { maxHealth: 30, hungerInterval: 50, damageMult: 0.5  },
      normal: { maxHealth: 20, hungerInterval: 30, damageMult: 1.0  },
      hard:   { maxHealth: 15, hungerInterval: 20, damageMult: 1.25 },
    }
    const p = PRESETS[level] ?? PRESETS.normal
    this.difficulty = level in PRESETS ? level : 'normal'
    this.maxHealth = p.maxHealth
    this._hungerInterval = p.hungerInterval
    this.damageMult = p.damageMult
    if (resetVitals) {
      this.health = p.maxHealth
      this.hunger = this.maxHunger
    } else {
      this.health = Math.min(this.health, this.maxHealth)
    }
    this.onChange?.()
  }

  update(dt) {
    if (this.dead) return
    // Drain hunger — interval depends on difficulty
    this._hungerTimer += dt
    if (this._hungerTimer >= this._hungerInterval) {
      this._hungerTimer = 0
      this.hunger = Math.max(0, this.hunger - 1)
      if (this.hunger === 0) {
        this.takeDamage(1)
      }
    }
    // Slow regen if hunger > 14
    if (this.hunger > 14 && this.health < this.maxHealth) {
      this._regenTimer += dt
      if (this._regenTimer >= 4) {
        this._regenTimer = 0
        this.health = Math.min(this.maxHealth, this.health + 1)
        this.onChange?.()
      }
    }
  }

  takeDamage(amount) {
    if (this.dead) return
    const defense = this._inventory ? this._inventory.getArmorDefense(this._itemRegistry) : 0
    const reduction = Math.min(0.8, defense * 0.04)  // each defense point cuts 4%, capped at 80%
    this.health = Math.max(0, this.health - amount * this.damageMult * (1 - reduction))
    this.onChange?.()
    if (this.health <= 0 && !this.dead) {
      this.dead = true
      this.onDeath?.()
    }
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount)
    this.onChange?.()
  }

  eat(foodValue) {
    this.hunger = Math.min(this.maxHunger, this.hunger + foodValue)
    this.onChange?.()
  }

  updateTier(equippedItem) {
    const itemTier = equippedItem?.tier ?? 0
    if (itemTier > this.tier) {
      this.tier = itemTier
    }
  }

  serialize() {
    return {
      health: this.health,
      hunger: this.hunger,
      tier: this.tier,
      difficulty: this.difficulty,
    }
  }

  deserialize(data) {
    this.setDifficulty(data.difficulty ?? 'normal', { resetVitals: false })
    this.health = data.health ?? this.maxHealth
    this.hunger = data.hunger ?? 20
    this.tier   = data.tier   ?? 0
    this.dead = false
    this.onChange?.()
  }
}
