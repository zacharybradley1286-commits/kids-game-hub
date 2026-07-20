// physics.js — simple, forgiving arcade physics for a toy monster truck.
// Not a real simulation: we favor "fun and bouncy" over accuracy.
//
// World coordinates: x grows right, y grows DOWN (canvas style).
// The truck is modeled as a chassis center point with two wheels at +/- wheelBase/2.

import { truckPhysics } from "./trucks.js";

export const GRAVITY = 0.6;
export const RIDE_HEIGHT = 30; // how high the chassis center sits above the ground line

// ----- Terrain sampling -----
// terrain is an array of {x, y} sorted by x. Linear interpolation between points.
export function groundHeightAt(level, x) {
  const t = level.terrain;
  if (x <= t[0].x) return t[0].y;
  if (x >= t[t.length - 1].x) return t[t.length - 1].y;
  // binary-ish linear scan (terrain arrays are small)
  for (let i = 0; i < t.length - 1; i++) {
    const a = t[i];
    const b = t[i + 1];
    if (x >= a.x && x <= b.x) {
      const f = (x - a.x) / (b.x - a.x);
      return a.y + (b.y - a.y) * f;
    }
  }
  return t[t.length - 1].y;
}

// Obstacle sizing by type (w = half-width, h = height above ground).
export const OBSTACLE_SIZES = {
  cone: { w: 14, h: 26, heavy: false },
  car: { w: 38, h: 30, heavy: false },
  tire: { w: 22, h: 24, heavy: false },
  barrel: { w: 22, h: 40, heavy: true },
};

export function makeTruck(truckDef) {
  return {
    def: truckDef,
    phys: truckPhysics(truckDef),
    x: 80,
    y: 0,
    vx: 0,
    vy: 0,
    angle: 0,
    angVel: 0,
    width: 74,
    height: 30,
    wheelBase: 54,
    wheelRadius: 16,
    onGround: false,
    damage: 0,
    flipTimer: 0,    // seconds spent upside-down (for kid-safe auto-recover)
    recovering: 0,   // recovery animation timer
    startX: 80,
  };
}

// Normalize angle to (-PI, PI]
function norm(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

// Advance the truck one step. Returns an events object the game loop reacts to.
export function updateTruck(truck, level, keys, mode, dt = 1) {
  const events = { crushed: [], collected: [], jumped: false, crashed: false, landedHard: false, recovered: false };
  const p = truck.phys;

  // --- Auto-recover handling (kid-safe flips, or active recovery anim) ---
  if (truck.recovering > 0) {
    truck.recovering -= dt;
    // gently lift & upright the truck (per-frame decay rates scaled by dt)
    truck.angle = norm(truck.angle) * Math.pow(0.8, dt);
    const rest = groundHeightAt(level, truck.x) - RIDE_HEIGHT;
    truck.y += (rest - 60 - truck.y) * (1 - Math.pow(0.8, dt));
    truck.vx *= Math.pow(0.8, dt);
    truck.vy = 0;
    if (truck.recovering <= 0) {
      truck.y = rest;
      truck.angle = 0;
      truck.vx = 0;
      truck.vy = 0;
      events.recovered = true;
    }
    return events;
  }

  // --- Ground sampling at both wheels ---
  const cos = Math.cos(truck.angle);
  const half = truck.wheelBase / 2;
  const backX = truck.x - cos * half;
  const frontX = truck.x + cos * half;
  const gBack = groundHeightAt(level, backX);
  const gFront = groundHeightAt(level, frontX);
  const groundCenter = (gBack + gFront) / 2;
  const restY = groundCenter - RIDE_HEIGHT;

  const wasAirborne = !truck.onGround;
  truck.onGround = truck.y >= restY - 4 && truck.vy >= -0.1;

  if (truck.onGround) {
    // Landing detection
    if (wasAirborne) {
      const impact = truck.vy;
      if (impact > 9) {
        events.landedHard = true;
        if (mode === "normal") {
          const dmg = (impact - 9) * 2.2 / p.damageResist;
          truck.damage += dmg;
        }
      }
    }

    truck.y = restY;
    truck.vy = 0;

    // Align chassis to slope (lerp factor scaled by dt)
    const targetAngle = Math.atan2(gFront - gBack, truck.wheelBase);
    const alignK = 0.18 + p.grip * 0.1;
    truck.angle += (targetAngle - truck.angle) * (1 - Math.pow(1 - alignK, dt));
    truck.angVel = 0;

    // Drive
    if (keys.right) truck.vx += p.accel * p.grip * dt;
    if (keys.left) truck.vx -= p.accel * 0.9 * dt; // reverse/brake
    if (keys.down) truck.vx *= Math.pow(0.9, dt); // brake/stabilize

    // Friction + clamp
    truck.vx *= Math.pow(0.985, dt);
    const maxS = p.maxSpeed;
    if (truck.vx > maxS) truck.vx = maxS;
    if (truck.vx < -maxS * 0.5) truck.vx = -maxS * 0.5;

    // Jump
    if (keys.up) {
      truck.vy = -p.jumpForce;
      truck.onGround = false;
      events.jumped = true;
      // a little forward pop so jumps feel snappy
      truck.vx += cos * 1.2;
    }
  } else {
    // Airborne: gravity + air rotation control (lets kids do & correct flips)
    truck.vy += GRAVITY * dt;
    if (keys.up) truck.angVel -= 0.006 * dt;   // nose up / backflip
    if (keys.down) truck.angVel += 0.006 * dt; // nose down / stabilize
    truck.angVel *= Math.pow(0.99, dt);
    truck.angle = norm(truck.angle + truck.angVel * dt * 16.6);
  }

  // Integrate position
  truck.x += truck.vx * dt;
  truck.y += truck.vy * dt;

  // Prevent driving backwards off the start
  if (truck.x < truck.startX) {
    truck.x = truck.startX;
    if (truck.vx < 0) truck.vx = 0;
  }

  // --- Flip detection ---
  const a = Math.abs(norm(truck.angle));
  const upsideDown = a > 2.2;
  if (upsideDown && truck.onGround) {
    truck.flipTimer += dt / 60;
    const limit = mode === "kid" ? 0.8 : 1.6;
    if (truck.flipTimer > limit) {
      if (mode === "normal") {
        truck.damage += 30; // a hard rollover hurts in normal mode
        events.crashed = true;
      }
      truck.recovering = 30; // ~0.5s recovery
      truck.flipTimer = 0;
    }
  } else {
    truck.flipTimer = 0;
  }

  // --- Obstacle collisions (crushing) ---
  const truckBottom = truck.y + truck.height / 2 + truck.wheelRadius;
  for (const obs of level.obstacles) {
    if (obs.crushed) continue;
    const size = OBSTACLE_SIZES[obs.type] || OBSTACLE_SIZES.cone;
    const dx = Math.abs(truck.x - obs.x);
    if (dx < truck.width / 2 + size.w) {
      const obsGround = groundHeightAt(level, obs.x);
      const obsTop = obsGround - size.h;
      // Crush if the truck's underside reaches the obstacle's body
      if (truckBottom > obsTop - 6) {
        obs.crushed = true;
        events.crushed.push(obs);
        // Heavy objects nudge the truck & can dent it in normal mode
        if (size.heavy) {
          truck.vx *= 0.6;
          if (mode === "normal" && Math.abs(truck.vx) > 4) {
            truck.damage += 6 / p.damageResist;
          }
        }
      }
    }
  }

  // --- Collectibles ---
  for (const c of level.collectibles) {
    if (c.collected) continue;
    const dx = truck.x - c.x;
    const dy = truck.y - c.y;
    if (dx * dx + dy * dy < 38 * 38) {
      c.collected = true;
      events.collected.push(c);
    }
  }

  // Clamp damage
  if (truck.damage < 0) truck.damage = 0;
  if (truck.damage > 100) truck.damage = 100;

  return events;
}

// Speed as a 0..1 fraction of this truck's max (for engine sound / effects).
export function speed01(truck) {
  return Math.min(1, Math.abs(truck.vx) / truck.phys.maxSpeed);
}
