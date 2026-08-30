import * as THREE from 'three'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import { GRAVITY, JUMP_SPEED, MOVE_SPEED, PLAYER_REACH, CHUNK_W, WORLD_W, WORLD_D, WORLD_H } from '../constants.js'
import { BLOCK } from '../world/BlockRegistry.js'
import { sounds } from '../systems/SoundSystem.js'

export class PlayerController {
  constructor(camera, renderer, worldData, worldRenderer, stats, inventory,
              miningSystem, farmingSystem, hotbar, hud, itemRegistry) {
    this.camera    = camera
    this.worldData = worldData
    this.worldRenderer = worldRenderer
    this.stats     = stats
    this.inventory = inventory
    this.mining    = miningSystem
    this.farming   = farmingSystem
    this.hotbar    = hotbar
    this.hud       = hud
    this.itemRegistry = itemRegistry

    this.controls = new PointerLockControls(camera, renderer.domElement)
    this._keys = {}
    this._vy = 0
    this._onGround = false
    this._raycaster = new THREE.Raycaster()
    this._raycaster.far = PLAYER_REACH
    this._mouseDown = false
    this._rightMouseDown = false
    this._currentStation = 'hand'
    this.onStationChange = null
    // Minecraft-like feel
    this.targetBlock = null    // highlighted block for outline
    this._bobTimer  = 0
    this._prevBob   = 0
    this._stepTimer = 0
    this._sprinting = false
    this._attackCooldown = 0
    this.mounted = false
    this.boat = null  // { mesh, x, y, z }
    this.onOpenChest = null
    this.onSetSpawn = null
    this.onOverflow = null
    this.onPlanted = null
    this.getDimension = () => 'overworld'
    this.scene = null

    this._setupInputListeners(renderer)

    // Start at island center surface
    const sx = WORLD_W / 2
    const sz = WORLD_D / 2
    const sy = worldData.solidSurfaceY?.(sx, sz) ?? worldData.surfaceY(sx, sz)
    camera.position.set(sx + 0.5, (sy >= 0 ? sy : 12) + 1.8, sz + 0.5)
  }

  lock() {
    this.controls.lock()
  }

  get isLocked() {
    return this.controls.isLocked
  }

  _setupInputListeners(renderer) {
    window.addEventListener('keydown', e => {
      this._keys[e.code] = true
      // Number keys for hotbar
      const n = parseInt(e.key)
      if (n >= 1 && n <= 9) this.hotbar.select(n - 1)
      // Jump (also used for swimming — handled in update)
      if (e.code === 'Space' && this._onGround) {
        this._vy = JUMP_SPEED
        this._onGround = false
      }
      if (e.code === 'KeyQ') this._dropHeldItem()
    })
    window.addEventListener('keyup', e => {
      this._keys[e.code] = false
    })
    // Block context menu so right-click always goes to the game
    window.addEventListener('contextmenu', e => e.preventDefault())

    window.addEventListener('mousedown', e => {
      if (!this.controls.isLocked) return
      if (e.button === 0 && (e.altKey || e.metaKey)) {
        // Alt/Option+click = right-click alternative (trackpad friendly).
        // Shift is sprint, so it must NOT steal mining.
        this._handleRightClick()
        return
      }
      if (e.button === 0) {
        this._mouseDown = true
      }
      if (e.button === 2) {
        e.preventDefault()
        this._handleRightClick()
      }
    })
    window.addEventListener('mouseup', e => {
      if (e.button === 0) {
        this._mouseDown = false
        this.mining.cancelBreak()
      }
    })
    window.addEventListener('wheel', e => {
      if (!this.controls.isLocked) return
      this.hotbar.scroll(e.deltaY > 0 ? 1 : -1)
    })
  }

  occupies(bx, by, bz) {
    const px = Math.floor(this.camera.position.x)
    const pz = Math.floor(this.camera.position.z)
    const feet = Math.floor(this.camera.position.y - 1.8)
    const head = Math.floor(this.camera.position.y + 0.1)
    return bx === px && bz === pz && by >= feet && by <= head
  }

  update(dt) {
    if (!this.controls.isLocked) return
    if (this._attackCooldown > 0) this._attackCooldown -= dt

    // Sprint — hold Shift. Ctrl still works; Shift is NOT "place".
    this._sprinting = this._keys['ShiftLeft'] || this._keys['ShiftRight'] ||
                       this._keys['ControlLeft'] || this._keys['ControlRight']
    const speed = MOVE_SPEED * (this._sprinting ? 1.65 : 1.0) * (this.mounted ? 1.8 : 1)

    if (this.mounted && this.boat) {
      this._updateBoat(dt, speed)
      this._updateStation()
      return
    }

    // Movement
    const dir = new THREE.Vector3()
    if (this._keys['KeyW']) dir.z -= 1
    if (this._keys['KeyS']) dir.z += 1
    if (this._keys['KeyA']) dir.x -= 1
    if (this._keys['KeyD']) dir.x += 1
    dir.normalize()

    const oldX = this.camera.position.x
    const oldZ = this.camera.position.z

    if (dir.length() > 0) {
      this.controls.moveRight(dir.x * speed * dt)
      this.controls.moveForward(-dir.z * speed * dt)
    }

    // Horizontal collision — push back if body overlaps a solid block
    const bodyY  = Math.floor(this.camera.position.y - 0.6)  // chest level
    const feetYh = Math.floor(this.camera.position.y - 1.6)  // near feet
    const newFx = Math.floor(this.camera.position.x)
    const newFz = Math.floor(this.camera.position.z)
    const oldFx = Math.floor(oldX)
    const oldFz = Math.floor(oldZ)
    if (this.worldData.isSolid(newFx, bodyY, oldFz) ||
        this.worldData.isSolid(newFx, feetYh, oldFz)) {
      this.camera.position.x = oldX
    }
    if (this.worldData.isSolid(Math.floor(this.camera.position.x), bodyY, newFz) ||
        this.worldData.isSolid(Math.floor(this.camera.position.x), feetYh, newFz)) {
      this.camera.position.z = oldZ
    }

    // Water check — slow fall and allow swimming with Space
    const fx = Math.floor(this.camera.position.x)
    const fz = Math.floor(this.camera.position.z)
    const headY = Math.floor(this.camera.position.y - 0.5)
    const feetWY = Math.floor(this.camera.position.y - 1.6)
    const inWater = this.worldData.get(fx, feetWY, fz) === BLOCK.WATER ||
                    this.worldData.get(fx, headY,  fz) === BLOCK.WATER

    // Lava check — Nether hazard, damages the player continuously on contact
    const inLava = this.worldData.get(fx, feetWY, fz) === BLOCK.LAVA ||
                   this.worldData.get(fx, headY,  fz) === BLOCK.LAVA
    if (inLava) this.stats.takeDamage(dt * 8)

    // Gravity + vertical movement
    if (inLava) {
      // Lava is thick and punishing, but not an automatic death sentence —
      // a weaker rise than water so panicking and mashing Space can still
      // get you out before the damage-over-time finishes you off.
      this._vy = Math.max(this._vy - GRAVITY * dt * 0.3, -1.2)
      if (this._keys['Space']) this._vy = 2
    } else if (inWater) {
      // Buoyancy — slow everything down in water
      this._vy = Math.max(this._vy - GRAVITY * dt * 0.3, -3)
      if (this._keys['Space']) this._vy = 4   // swim up with Space
    } else {
      this._vy -= GRAVITY * dt
    }
    const newY = this.camera.position.y + this._vy * dt

    // Collision — sweep through all Y blocks between old and new position
    // so fast falls never tunnel through thin floors
    const oldFeetY = Math.floor(this.camera.position.y - 1.8)
    const newFeetY = Math.floor(newY - 1.8)

    const landedAt = (() => {
      if (this._vy <= 0) {
        const minY = Math.min(oldFeetY, newFeetY)
        const maxY = Math.max(oldFeetY, newFeetY)
        for (let y = maxY; y >= minY; y--) {
          if (this.worldData.isSolid(fx, y, fz)) return y
        }
      }
      return -1
    })()

    if (landedAt >= 0) {
      this._vy = 0
      this._onGround = true
      this.camera.position.y = landedAt + 1 + 1.8
    } else {
      // Ceiling — don't jump through a solid block above the head
      const oldHeadY = Math.floor(this.camera.position.y + 0.15)
      const newHeadY = Math.floor(newY + 0.15)
      let bonked = false
      if (this._vy > 0) {
        const minY = Math.min(oldHeadY, newHeadY)
        const maxY = Math.max(oldHeadY, newHeadY)
        for (let y = minY; y <= maxY; y++) {
          if (this.worldData.isSolid(fx, y, fz)) { bonked = true; break }
        }
      }
      if (bonked) {
        this._vy = 0
      } else {
        this._onGround = inWater
        this.camera.position.y = Math.max(1.8, newY)
      }
    }

    // Clamp to world bounds
    this.camera.position.x = Math.max(0.5, Math.min(WORLD_W - 0.5, this.camera.position.x))
    this.camera.position.z = Math.max(0.5, Math.min(WORLD_D - 0.5, this.camera.position.z))

    // Void / fall-through respawn — triggers if player escapes below the world
    if (this.camera.position.y < 2) {
      const sx = WORLD_W / 2
      const sz = WORLD_D / 2
      const sy = this.worldData.solidSurfaceY?.(sx, sz) ?? this.worldData.surfaceY(sx, sz)
      this.camera.position.set(sx + 0.5, (sy >= 0 ? sy : 12) + 1.8, sz + 0.5)
      this._vy = 0
      this.stats.takeDamage(5)
      this.hud.showPickup('You fell through the world! (-5 hp)')
    }

    // Mining update — continuously feed target block while mouse is held
    const heldItem = this._getHeldItem()
    if (this._mouseDown) {
      const hit = this._raycastBlock()
      if (hit) {
        this.mining.beginBreak(hit.blockPos)
      } else {
        this.mining.cancelBreak()
      }
    }
    const broke = this.mining.update(dt, heldItem)
    if (broke) {
      this.hud.setBreakProgress(0)
    }
    if (this._mouseDown && this.mining._breakingPos) {
      this.hud.setBreakProgress(
        Math.min(1, this.mining._breakProgress / this.mining._breakDuration)
      )
    } else if (!this._mouseDown) {
      this.hud.setBreakProgress(0)
    }

    // ── Head bob (Minecraft-style camera oscillation when walking) ──────
    const moving = dir.length() > 0 && this._onGround
    if (moving) {
      this._bobTimer += dt * (this._sprinting ? 14 : 9)
    } else {
      this._bobTimer = 0
    }
    const newBob = moving ? Math.sin(this._bobTimer) * 0.032 : 0
    this.camera.position.y += newBob - this._prevBob
    this._prevBob = newBob

    // ── Footstep sounds ─────────────────────────────────────────────────
    if (moving) {
      this._stepTimer -= dt
      if (this._stepTimer <= 0) {
        this._stepTimer = this._sprinting ? 0.28 : 0.42
        // Detect surface below feet
        const sfx = Math.floor(this.camera.position.x)
        const sfz = Math.floor(this.camera.position.z)
        const sfy = Math.floor(this.camera.position.y - 1.9)
        const surfBlock = this.worldData.get(sfx, sfy, sfz)
        const surfName = { 3:'stone',4:'cobble',7:'sand',15:'gravel',5:'wood',16:'wood',9:'stone' }[surfBlock] || 'grass'
        sounds.playStep(surfName)
      }
    }

    // ── Update targeted block for outline renderer ───────────────────────
    const hit = this._raycastBlock()
    this.targetBlock = hit ? hit.blockPos : null

    // Detect nearby station
    this._updateStation()
  }

  _raycastBlock() {
    this._raycaster.setFromCamera({ x: 0, y: 0 }, this.camera)
    const meshes = this.worldRenderer.allMeshes
    const hits = this._raycaster.intersectObjects(meshes)
    if (hits.length === 0) return null

    const hit = hits[0]
    const point = hit.point
    const normal = hit.face.normal.clone()
    const dir = this._raycaster.ray.direction

    // Step INTO the hit block (tiny step so we don't overshoot into the next block)
    const blockPos = [
      Math.floor(point.x + dir.x * 0.01),
      Math.floor(point.y + dir.y * 0.01),
      Math.floor(point.z + dir.z * 0.01),
    ]

    // Find which face was hit. Use ray direction as a bias so that when
    // looking down at the top of a block we reliably place above it, not to the side.
    const bx = blockPos[0], by = blockPos[1], bz = blockPos[2]
    const lx = point.x - bx   // local hit position within block (0–1)
    const ly = point.y - by
    const lz = point.z - bz
    // Each distance is weighted: faces the ray is coming FROM get half weight
    // so they win ties against neighbouring side faces.
    const dists = [
      lx        * (dir.x > 0 ? 0.5 : 1),
      (1 - lx)  * (dir.x < 0 ? 0.5 : 1),
      ly        * (dir.y > 0 ? 0.5 : 1),
      (1 - ly)  * (dir.y < 0 ? 0.5 : 1),
      lz        * (dir.z > 0 ? 0.5 : 1),
      (1 - lz)  * (dir.z < 0 ? 0.5 : 1),
    ]
    const offsets = [[-1,0,0],[1,0,0],[0,-1,0],[0,1,0],[0,0,-1],[0,0,1]]
    const faceIdx = dists.indexOf(Math.min(...dists))
    const [ox, oy, oz] = offsets[faceIdx]
    const adjacentPos = [bx + ox, by + oy, bz + oz]

    return { blockPos, adjacentPos, normal }
  }

  _handleRightClick() {
    const heldItem = this._getHeldItem()

    if (this.mounted) {
      this._dismountBoat()
      return
    }
    if (this.boat && this._nearBoat(3)) {
      this._mountBoat()
      return
    }

    // Eat food — works even when not pointing at a block
    if (heldItem?.category === 'food' && this.stats.hunger < this.stats.maxHunger - 1) {
      this.stats.eat(heldItem.foodValue)
      this.inventory.removeSlot(this.inventory.hotbarIndex)
      this.hud.showPickup(`Ate ${heldItem.name}`)
      return
    }

    const hit = this._raycastBlock()
    if (!hit) return

    // Summoning stone: use at altar
    if (heldItem?.id === 'summoning_stone') {
      const [bx, by, bz] = hit.blockPos
      if (this.worldData.get(bx, by, bz) === BLOCK.ALTAR) {
        this.onUseAltarWithStone?.()
        this.inventory.remove('summoning_stone', 1)
        return
      }
      this.hud.showPickup('Right-click the Altar in the swamp to use this!')
      return
    }

    // Hoe: till farmland
    if (heldItem?.isHoe) {
      const tilled = this.mining.tillBlock(hit.blockPos)
      if (tilled) {
        const idx = this.inventory.hotbarIndex
        this.inventory.damageTool(idx, 1, this.itemRegistry)
        return
      }
    }

    // Seed: plant on farmland
    if (heldItem?.category === 'seed') {
      const planted = this.farming.plant(heldItem.id, hit.blockPos, this.inventory, this.itemRegistry)
      if (planted) return
      // Try the adjacent block (clicked top of farmland)
      this.farming.plant(heldItem.id, hit.adjacentPos, this.inventory, this.itemRegistry)
      return
    }

    // Harvest crop (right-click on farmland)
    const harvest = this.farming.tryHarvest(hit.blockPos)
    if (harvest) {
      this._give(harvest.itemId, harvest.count)
      if (harvest.seedCount > 0) this._give(harvest.seedItem, harvest.seedCount)
      this.hud.showPickup(this.itemRegistry.getItem(harvest.itemId)?.name ?? harvest.itemId)
      return
    }

    // Open chest — chest stays in the world; contents live in ChestSystem
    {
      const [bx, by, bz] = hit.blockPos
      if (this.worldData.get(bx, by, bz) === BLOCK.CHEST) {
        this.onOpenChest?.(bx, by, bz)
        return
      }
    }

    // Sleep in bed + set respawn
    {
      const [bx, by, bz] = hit.blockPos
      if (this.worldData.get(bx, by, bz) === BLOCK.BED) {
        this.onSetSpawn?.({ x: bx + 0.5, y: by + 1.8, z: bz + 0.5 })
        this.onSleepInBed?.()
        return
      }
    }

    // Step through a Nether portal
    {
      const [bx, by, bz] = hit.blockPos
      if (this.worldData.get(bx, by, bz) === BLOCK.PORTAL) {
        this.onUsePortal?.()
        return
      }
    }

    // Place a raft on water
    if (heldItem?.isBoat) {
      const [ax, ay, az] = hit.adjacentPos
      if (this.worldData.get(ax, ay, az) === BLOCK.WATER ||
          this.worldData.get(ax, ay - 1, az) === BLOCK.WATER) {
        this._placeBoat(ax + 0.5, (this.worldData.get(ax, ay, az) === BLOCK.WATER ? ay : ay - 1) + 0.2, az + 0.5)
        this.inventory.removeSlot(this.inventory.hotbarIndex)
        return
      }
    }

    // Place block
    if (heldItem?.blockId >= 0) {
      const placed = this.mining.placeBlock(hit.adjacentPos, heldItem.blockId)
      if (placed) {
        this.inventory.removeSlot(this.inventory.hotbarIndex)
      }
    }

  }

  _give(itemId, count) {
    const leftover = this.inventory.add(itemId, count, this.itemRegistry)
    if (leftover > 0) this.onOverflow?.(itemId, leftover)
  }

  _placeBoat(x, y, z) {
    this._removeBoatMesh()
    const geo = new THREE.BoxGeometry(1.6, 0.25, 1.1)
    const mat = new THREE.MeshLambertMaterial({ color: 0x8b5a2b })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(x, y, z)
    this.scene?.add(mesh)
    this.boat = { mesh, x, y, z }
    this.hud.showPickup('Raft placed — right-click it to hop on')
  }

  _removeBoatMesh() {
    if (!this.boat) return
    this.scene?.remove(this.boat.mesh)
    this.boat.mesh.geometry.dispose()
    this.boat.mesh.material.dispose()
    this.boat = null
    this.mounted = false
  }

  _nearBoat(r) {
    if (!this.boat) return false
    const p = this.camera.position
    const b = this.boat.mesh.position
    return Math.hypot(p.x - b.x, p.z - b.z) < r
  }

  _mountBoat() {
    this.mounted = true
    this._vy = 0
    this.hud.showPickup('Sailing — Space to hop off')
  }

  _dismountBoat() {
    this.mounted = false
    this.camera.position.y += 0.6
    this.hud.showPickup('You hop off the raft')
  }

  _updateBoat(dt, speed) {
    const dir = new THREE.Vector3()
    if (this._keys['KeyW']) dir.z -= 1
    if (this._keys['KeyS']) dir.z += 1
    if (this._keys['KeyA']) dir.x -= 1
    if (this._keys['KeyD']) dir.x += 1
    if (this._keys['Space']) { this._dismountBoat(); return }
    dir.normalize()
    if (dir.length() > 0) {
      this.controls.moveRight(dir.x * speed * dt)
      this.controls.moveForward(-dir.z * speed * dt)
    }
    const fx = Math.floor(this.camera.position.x)
    const fz = Math.floor(this.camera.position.z)
    let waterY = -1
    for (let y = WORLD_H - 1; y >= 0; y--) {
      if (this.worldData.get(fx, y, fz) === BLOCK.WATER) { waterY = y; break }
    }
    if (waterY < 0) { this._dismountBoat(); return }
    this.camera.position.y = waterY + 1.5
    this.camera.position.x = Math.max(0.5, Math.min(WORLD_W - 0.5, this.camera.position.x))
    this.camera.position.z = Math.max(0.5, Math.min(WORLD_D - 0.5, this.camera.position.z))
    if (this.boat) {
      this.boat.mesh.position.set(this.camera.position.x, waterY + 0.2, this.camera.position.z)
    }
  }

  _getHeldItem() {
    const slot = this.inventory.selectedSlot
    if (!slot.itemId) return null
    return this.itemRegistry.getItem(slot.itemId)
  }

  // Q — drops one of the currently selected item out into the world as a
  // pickup (see onDropItem / DroppedItemManager), rather than just deleting
  // it, so an accidental press never permanently costs the player anything.
  _dropHeldItem() {
    if (!this.controls.isLocked) return
    const slot = this.inventory.selectedSlot
    if (!slot.itemId) return

    const dir = new THREE.Vector3()
    this.camera.getWorldDirection(dir)
    const dropPos = this.camera.position.clone().add(dir.multiplyScalar(1.5))
    dropPos.y -= 1.0

    this.onDropItem?.(slot.itemId, 1, dropPos)
    this.inventory.removeSlot(this.inventory.hotbarIndex)
  }

  _updateStation() {
    const px = Math.floor(this.camera.position.x)
    const py = Math.floor(this.camera.position.y - 1.8)
    const pz = Math.floor(this.camera.position.z)
    let station = 'hand'

    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        for (let dy = -1; dy <= 1; dy++) {
          const b = this.worldData.get(px + dx, py + dy, pz + dz)
          if (b === BLOCK.CAMPFIRE  && station === 'hand') station = 'campfire'
          if (b === BLOCK.CRAFTING_TABLE && (station === 'hand' || station === 'campfire')) station = 'crafting_table'
          if (b === BLOCK.FORGE) station = 'forge'
        }
      }
    }

    if (station !== this._currentStation) {
      this._currentStation = station
      this.onStationChange?.(station)
    }
  }

  get currentStation() { return this._currentStation }

  attackMob(mob, damage) {
    mob.takeDamage(damage)
  }

  setupAttackListener(getMobsAndBosses) {
    window.addEventListener('mousedown', (e) => {
      if (!this.controls.isLocked || e.button !== 0) return
      if (this._attackCooldown > 0) return
      const heldItem = this._getHeldItem()
      const damage = heldItem?.isSword || heldItem?.isAxe
        ? heldItem.damage
        : 1.5  // fists
      const allMobs = getMobsAndBosses()
      const camPos = this.camera.position
      for (const mob of allMobs) {
        if (!mob.dead) {
          const dist = mob.position.distanceTo(camPos)
          if (dist < 4) {
            mob.takeDamage(damage)
            this._attackCooldown = 0.4
            if (heldItem) this.stats.updateTier(heldItem)
            break
          }
        }
      }
    })
  }
}
