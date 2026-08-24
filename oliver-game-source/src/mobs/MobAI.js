const AI_STATE = { IDLE: 'idle', CHASE: 'chase', ATTACK: 'attack' }

export class MobAI {
  constructor(mob, playerController, worldData) {
    this.mob = mob
    this.player = playerController
    this.worldData = worldData
    this.state = AI_STATE.IDLE
    this._attackTimer = 0
    this._steerAngle = 0
  }

  update(dt) {
    if (this.mob.dead) return
    const { mobType } = this.mob
    const dx = this.player.camera.position.x - this.mob.position.x
    const dy = this.player.camera.position.y - this.mob.position.y
    const dz = this.player.camera.position.z - this.mob.position.z
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

    if (this.state === AI_STATE.IDLE) {
      if (dist < mobType.detectionRange && this._hasLineOfSight()) this.state = AI_STATE.CHASE
    } else if (this.state === AI_STATE.CHASE) {
      if (dist > mobType.detectionRange * 1.6) { this.state = AI_STATE.IDLE; return }
      if (dist <= mobType.attackRange) { this.state = AI_STATE.ATTACK; return }
      this._moveToward(dt, dx, dz, dist, mobType.speed)
    } else if (this.state === AI_STATE.ATTACK) {
      if (dist > mobType.attackRange * 1.4) { this.state = AI_STATE.CHASE; return }
      this._attackTimer -= dt
      if (this._attackTimer <= 0) {
        if (this._hasLineOfSight()) this.player.stats.takeDamage(mobType.damage)
        this._attackTimer = mobType.attackCooldown
      }
    }

    // Apply gravity
    this.mob.applyGravity(dt, this.worldData)
    // Face player
    if (this.state !== AI_STATE.IDLE) {
      this.mob.mesh.rotation.y = Math.atan2(dx, dz)
    }
  }

  _hasLineOfSight() {
    const from = this.mob.position
    const to = this.player.camera.position
    const dx = to.x - from.x
    const dy = to.y - from.y
    const dz = to.z - from.z
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
    if (dist === 0) return true
    const steps = Math.ceil(dist / 0.5)
    for (let i = 1; i < steps; i++) {
      const t = i / steps
      const x = Math.floor(from.x + dx * t)
      const y = Math.floor(from.y + dy * t)
      const z = Math.floor(from.z + dz * t)
      if (this.worldData.isSolid(x, y, z)) return false
    }
    return true
  }

  _moveToward(dt, dx, dz, dist, speed) {
    let nx = dx / dist
    let nz = dz / dist

    // Simple obstacle steering: cast a ray; if blocked, deflect
    const pos = this.mob.position
    const ahead = 1.2
    const checkX = Math.floor(pos.x + nx * ahead)
    const checkY = Math.floor(pos.y)
    const checkZ = Math.floor(pos.z + nz * ahead)
    if (this.worldData.isSolid(checkX, checkY, checkZ)) {
      // Try turning left or right
      this._steerAngle += 0.15
      const a = this._steerAngle
      nx = Math.cos(a) * nx - Math.sin(a) * nz
      nz = Math.sin(a) * nx + Math.cos(a) * nz
    } else {
      this._steerAngle *= 0.9
    }

    this.mob.position.x += nx * speed * dt
    this.mob.position.z += nz * speed * dt
  }
}
