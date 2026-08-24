export class MobType {
  constructor({ id, name, color, health, damage, speed, detectionRange, attackRange,
                attackCooldown, scale = [1, 1.8, 1], dropItems = [] }) {
    this.id = id
    this.name = name
    this.color = color
    this.health = health
    this.damage = damage
    this.speed = speed
    this.detectionRange = detectionRange
    this.attackRange = attackRange
    this.attackCooldown = attackCooldown
    this.scale = scale
    this.dropItems = dropItems  // [{itemId, chance, count}]
  }
}

export const MOB_DB = {
  zombie: new MobType({
    id: 'zombie', name: 'Zombie', color: '#2d5e2d',
    health: 10, damage: 2, speed: 2.5,
    detectionRange: 18, attackRange: 1.8, attackCooldown: 1.5,
    dropItems: [{ itemId: 'raw_meat', chance: 0.7, count: 1 }],
  }),
  skeleton: new MobType({
    id: 'skeleton', name: 'Skeleton', color: '#ccccaa',
    health: 8, damage: 1.5, speed: 2.8,
    detectionRange: 22, attackRange: 1.5, attackCooldown: 1.2,
    dropItems: [{ itemId: 'bone', chance: 0.8, count: 1 }, { itemId: 'string', chance: 0.4, count: 1 }],
  }),
  spider: new MobType({
    id: 'spider', name: 'Spider', color: '#1a0a0a',
    health: 6, damage: 2.5, speed: 4.0,
    detectionRange: 16, attackRange: 2.0, attackCooldown: 0.8,
    scale: [1.4, 0.8, 1.4],
    dropItems: [{ itemId: 'string', chance: 0.9, count: 2 }],
  }),

  // Passive daytime mobs
  cow: new MobType({
    id: 'cow', name: 'Cow', color: '#8B4513',
    health: 10, damage: 0, speed: 1.8,
    detectionRange: 0, attackRange: 0, attackCooldown: 999,
    scale: [1.2, 1.0, 1.2],
    dropItems: [{ itemId: 'raw_meat', chance: 1.0, count: 2 }],
  }),
  pig: new MobType({
    id: 'pig', name: 'Pig', color: '#FFB6C1',
    health: 8, damage: 0, speed: 2.0,
    detectionRange: 0, attackRange: 0, attackCooldown: 999,
    scale: [1.0, 0.8, 1.0],
    dropItems: [{ itemId: 'raw_meat', chance: 1.0, count: 2 }],
  }),
  sheep: new MobType({
    id: 'sheep', name: 'Sheep', color: '#E8E8E8',
    health: 8, damage: 0, speed: 1.9,
    detectionRange: 0, attackRange: 0, attackCooldown: 999,
    scale: [1.0, 0.9, 1.0],
    dropItems: [{ itemId: 'raw_meat', chance: 1.0, count: 1 }],
  }),
  chicken: new MobType({
    id: 'chicken', name: 'Chicken', color: '#FFFFFF',
    health: 4, damage: 0, speed: 2.2,
    detectionRange: 0, attackRange: 0, attackCooldown: 999,
    scale: [0.6, 0.7, 0.6],
    dropItems: [{ itemId: 'raw_meat', chance: 0.8, count: 1 }],
  }),
}
