// trucks.js — all truck definitions live here. Tweak stats freely.
// Stats are on a 1..10 scale (used for the bars in Truck Select) and are
// translated into real physics multipliers by physics.js.

export const TRUCKS = [
  {
    id: "blaze",
    name: "Blaze Beast",
    body: "#ff5b3a",
    accent: "#ffb22e",
    cab: "#c8401f",
    // 1..10 display stats
    speed: 6,
    acceleration: 6,
    jump: 6,
    durability: 7,
    grip: 6,
    blurb: "Balanced all-rounder. A great first truck.",
  },
  {
    id: "thunder",
    name: "Blue Thunder",
    body: "#3a86ff",
    accent: "#8ecbff",
    cab: "#1f5fc8",
    speed: 8,
    acceleration: 7,
    jump: 7,
    durability: 5,
    grip: 5,
    blurb: "Faster and bouncier, but dents more easily.",
  },
  {
    id: "dino",
    name: "Dino Crusher",
    body: "#3fae5a",
    accent: "#bdf25f",
    cab: "#277d3e",
    speed: 5,
    acceleration: 5,
    jump: 5,
    durability: 9,
    grip: 8,
    blurb: "Heavy and tough. Slower, but crushes everything.",
  },
];

export function getTruck(id) {
  return TRUCKS.find((t) => t.id === id) || TRUCKS[0];
}

// Convert 1..10 display stats into physics multipliers used by the engine.
export function truckPhysics(truck) {
  return {
    maxSpeed: 5 + truck.speed * 1.1,        // px/frame target
    accel: 0.18 + truck.acceleration * 0.045,
    jumpForce: 8 + truck.jump * 1.0,
    grip: 0.78 + truck.grip * 0.018,        // 0..1 traction factor
    mass: 0.8 + truck.durability * 0.06,    // heavier = more crushing, less damage
    damageResist: 0.6 + truck.durability * 0.06,
  };
}
