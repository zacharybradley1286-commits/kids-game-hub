import * as THREE from 'three'
import { getItemIcon } from '../ui/IconRegistry.js'

const PICKUP_RADIUS = 1.1
const DESPAWN_TIME = 90   // seconds before an unclaimed drop vanishes
const MAX_DROPPED = 40    // oldest drop is cleared if this is exceeded

// A single dropped item — a small bobbing, spinning sprite of the item's
// own icon, so it's recognizable at a glance rather than a generic marker.
class DroppedItem {
  constructor(itemId, count, worldPos, scene, itemRegistry) {
    this.itemId = itemId
    this.count = count
    this.position = worldPos.clone()
    this.age = 0
    this.scene = scene

    const item = itemRegistry.getItem(itemId)
    const tex = new THREE.TextureLoader().load(getItemIcon(item))
    tex.magFilter = THREE.NearestFilter
    tex.minFilter = THREE.NearestFilter
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true })
    this.mesh = new THREE.Sprite(mat)
    this.mesh.scale.set(0.5, 0.5, 0.5)
    this.mesh.position.copy(this.position)
    scene.add(this.mesh)
  }

  update(dt) {
    this.age += dt
    this.mesh.position.y = this.position.y + Math.sin(this.age * 3) * 0.08
  }

  dispose() {
    this.scene.remove(this.mesh)
    this.mesh.material.map?.dispose()
    this.mesh.material.dispose()
  }
}

// Items dropped with Q sit in the world as a pickup rather than vanishing
// outright — walking back over one (or waiting out the despawn timer if
// you don't) is the only way this game's simple item model can make a drop
// safely reversible, since there's no fall/physics simulation for it.
export class DroppedItemManager {
  constructor(scene, inventory, itemRegistry) {
    this.scene = scene
    this.inventory = inventory
    this.itemRegistry = itemRegistry
    this.items = []
  }

  spawn(itemId, count, worldPos) {
    if (this.items.length >= MAX_DROPPED) {
      this.items.shift().dispose()
    }
    this.items.push(new DroppedItem(itemId, count, worldPos, this.scene, this.itemRegistry))
  }

  update(dt, playerPos) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i]
      it.update(dt)
      // Horizontal distance only — playerPos is the camera (eye height,
      // ~1.8 above the feet), so comparing full 3D distance against a
      // ground-level item would always exceed PICKUP_RADIUS on its own and
      // pickup could never trigger. A generous vertical band still keeps
      // items on a completely different floor from being scooped up.
      const dx = it.position.x - playerPos.x
      const dz = it.position.z - playerPos.z
      const horizDist = Math.hypot(dx, dz)
      const withinHeight = Math.abs(it.position.y - (playerPos.y - 1.8)) < 2.2
      const pickedUp = horizDist < PICKUP_RADIUS && withinHeight
      if (pickedUp || it.age > DESPAWN_TIME) {
        if (pickedUp) this.inventory.add(it.itemId, it.count, this.itemRegistry)
        it.dispose()
        this.items.splice(i, 1)
      }
    }
  }

  // Called on dimension switch — drops belong to whichever world's
  // coordinate space they landed in, and both dimensions share one scene.
  clear() {
    for (const it of this.items) it.dispose()
    this.items = []
  }
}
