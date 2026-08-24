import * as THREE from 'three'
import { DAY_LENGTH, NIGHT_START } from '../constants.js'

// Sky color keyframes: [timeFraction, r, g, b]
// Fractions are anchored to real seconds, not to the raw 0-1 cycle, so
// lengthening the day doesn't stretch how long dusk/dawn visually take.
// Each key's original offset (tuned for a 480s day/night split 50/50) is
// re-expressed as a fraction of the day or night portion, then re-mapped
// onto the current DAY_LENGTH/NIGHT_START.
const DAY_MARKS   = [0, 0.12, 0.40, 0.48].map(f => f / 0.5)       // as fraction of the day portion
const NIGHT_MARKS = [0.55, 0.95].map(f => (f - 0.5) / 0.5)        // as fraction of the night portion
const SKY_KEYS = [
  [DAY_MARKS[0] * NIGHT_START,                                  0.7,  0.45, 0.2 ],  // dawn orange
  [DAY_MARKS[1] * NIGHT_START,                                  0.5,  0.7,  1.0 ],  // morning blue
  [DAY_MARKS[2] * NIGHT_START,                                  0.35, 0.6,  0.95],  // midday
  [DAY_MARKS[3] * NIGHT_START,                                  0.65, 0.4,  0.2 ],  // dusk
  [NIGHT_START + NIGHT_MARKS[0] * (1 - NIGHT_START),            0.04, 0.04, 0.12],  // night
  [NIGHT_START + NIGHT_MARKS[1] * (1 - NIGHT_START),            0.04, 0.04, 0.12],  // night end
  [1.00,                                                        0.7,  0.45, 0.2 ],  // next dawn
]

function lerpKey(t) {
  for (let i = 0; i < SKY_KEYS.length - 1; i++) {
    const [t0, r0, g0, b0] = SKY_KEYS[i]
    const [t1, r1, g1, b1] = SKY_KEYS[i + 1]
    if (t >= t0 && t <= t1) {
      const f = (t - t0) / (t1 - t0)
      return { r: r0 + f * (r1 - r0), g: g0 + f * (g1 - g0), b: b0 + f * (b1 - b0) }
    }
  }
  return { r: 0.5, g: 0.7, b: 1.0 }
}

export class DayNightCycle {
  constructor(scene, ambientLight, dirLight) {
    this.scene = scene
    this.ambient = ambientLight
    this.dirLight = dirLight
    this.timeOfDay = 0.05   // start at dawn
    this.dayNumber = 1
    this._wasNight = false
    this.onNightBegin = null
    this.onDayBegin = null
  }

  update(dt) {
    this.timeOfDay = (this.timeOfDay + dt / DAY_LENGTH) % 1.0
    const { r, g, b } = lerpKey(this.timeOfDay)
    this.scene.background = new THREE.Color(r, g, b)
    this.scene.fog = new THREE.FogExp2(new THREE.Color(r, g, b), 0.007)

    // Ambient light: bright during day, dim at night. Peaks at the midpoint
    // of the day portion — generalized from NIGHT_START rather than a fixed
    // 0.25/4 (which assumed a 50/50 day/night split) so this still peaks at
    // midday and reaches its floor exactly at dawn/dusk for any day length.
    const isNight = this.timeOfDay >= NIGHT_START
    const dayMid = NIGHT_START / 2
    const ambIntensity = isNight ? 0.08 : 0.6 + (1 - Math.abs(this.timeOfDay - dayMid) / dayMid) * 0.4
    this.ambient.intensity = Math.max(0.06, ambIntensity)

    // Directional light follows sun arc
    const sunAngle = this.timeOfDay * Math.PI * 2
    this.dirLight.position.set(Math.cos(sunAngle) * 30, Math.sin(sunAngle) * 30, 15)
    this.dirLight.intensity = isNight ? 0 : 0.8

    // Fire phase transition events
    if (isNight && !this._wasNight) {
      this.onNightBegin?.()
    } else if (!isNight && this._wasNight) {
      this.dayNumber++
      this.onDayBegin?.(this.dayNumber)
    }
    this._wasNight = isNight
  }

  get isNight() {
    return this.timeOfDay >= NIGHT_START
  }
}
