// levels.js — all handcrafted level data + endless generation.
//
// A level is defined by terrain control points (x, y in world units) that get
// smoothly interpolated into ground, plus arrays of features. y increases DOWN
// (canvas convention). Higher y = lower ground. Keep ground y around 360-460.
//
// To add a level: copy a block, give it a new id, edit terrain + features,
// and add it to the LEVELS array. The level-select screen builds itself.

const GROUND = 420; // baseline ground height

// Helper to make a flat-ish ground baseline with bumps.
function flat(xStart, xEnd, y = GROUND) {
  return [
    { x: xStart, y },
    { x: xEnd, y },
  ];
}

export const LEVELS = [
  {
    id: "level1",
    name: "Backyard Ramp Run",
    description: "A gentle warm-up. Small ramps, toy cones, and a few cars to squish.",
    bg: { sky: "#9fd8ff", far: "#bfe3a8", ground: "#7cae54", soil: "#5f8a3f" },
    hasTimer: false,
    finishX: 3200,
    terrain: [
      { x: 0, y: GROUND },
      { x: 500, y: GROUND },
      { x: 700, y: GROUND - 40 },   // little hill
      { x: 900, y: GROUND },
      { x: 1300, y: GROUND },
      { x: 1500, y: GROUND + 30 },  // dip
      { x: 1700, y: GROUND },
      { x: 2200, y: GROUND },
      { x: 2400, y: GROUND - 30 },
      { x: 2700, y: GROUND },
      { x: 3300, y: GROUND },
    ],
    ramps: [
      { x: 600, w: 150, h: 70 },
      { x: 2000, w: 170, h: 80 },
    ],
    obstacles: [
      { x: 450, type: "cone" },
      { x: 480, type: "cone" },
      { x: 1150, type: "car" },
      { x: 1850, type: "car" },
      { x: 2550, type: "cone" },
      { x: 2600, type: "car" },
    ],
    collectibles: [
      { x: 650, y: GROUND - 120 },
      { x: 700, y: GROUND - 150 },
      { x: 750, y: GROUND - 120 },
      { x: 1300, y: GROUND - 70 },
      { x: 1400, y: GROUND - 70 },
      { x: 2050, y: GROUND - 140 },
      { x: 2100, y: GROUND - 170 },
      { x: 2150, y: GROUND - 140 },
      { x: 2900, y: GROUND - 70 },
    ],
  },

  {
    id: "level2",
    name: "Dirt Arena Challenge",
    description: "Bigger ramps, uneven ground, stacked tires, and a time bonus.",
    bg: { sky: "#ffd9a0", far: "#d8a86a", ground: "#a9743f", soil: "#7c5128" },
    hasTimer: true,
    timeBonusSeconds: 45, // finish under this for bonus points
    finishX: 4000,
    terrain: [
      { x: 0, y: GROUND },
      { x: 400, y: GROUND },
      { x: 650, y: GROUND - 60 },
      { x: 900, y: GROUND + 20 },
      { x: 1150, y: GROUND - 50 },
      { x: 1500, y: GROUND },
      { x: 1800, y: GROUND - 80 },
      { x: 2100, y: GROUND + 30 },
      { x: 2500, y: GROUND },
      { x: 2900, y: GROUND - 60 },
      { x: 3300, y: GROUND },
      { x: 3700, y: GROUND - 30 },
      { x: 4100, y: GROUND },
    ],
    ramps: [
      { x: 550, w: 180, h: 100 },
      { x: 1650, w: 200, h: 120 },
      { x: 3050, w: 190, h: 110 },
    ],
    obstacles: [
      { x: 480, type: "tire" },
      { x: 510, type: "tire" },
      { x: 1300, type: "car" },
      { x: 1350, type: "car" },
      { x: 2300, type: "tire" },
      { x: 2330, type: "tire" },
      { x: 2360, type: "tire" },
      { x: 3450, type: "car" },
      { x: 3500, type: "cone" },
    ],
    collectibles: [
      { x: 600, y: GROUND - 160 },
      { x: 650, y: GROUND - 190 },
      { x: 700, y: GROUND - 160 },
      { x: 1700, y: GROUND - 200 },
      { x: 1750, y: GROUND - 230 },
      { x: 1800, y: GROUND - 200 },
      { x: 2500, y: GROUND - 80 },
      { x: 2550, y: GROUND - 80 },
      { x: 3100, y: GROUND - 200 },
      { x: 3150, y: GROUND - 230 },
      { x: 3700, y: GROUND - 90 },
    ],
  },

  {
    id: "level3",
    name: "Mega Garage Mayhem",
    description: "Big jumps, rolling barrels, platforms, and precise driving.",
    bg: { sky: "#3a2b5e", far: "#5b4a8a", ground: "#46408a", soil: "#2e2a5e" },
    hasTimer: true,
    timeBonusSeconds: 60,
    finishX: 4800,
    terrain: [
      { x: 0, y: GROUND },
      { x: 350, y: GROUND },
      { x: 600, y: GROUND - 90 },
      { x: 850, y: GROUND + 40 },
      { x: 1100, y: GROUND - 70 },
      { x: 1450, y: GROUND - 120 }, // elevated section
      { x: 1750, y: GROUND - 120 },
      { x: 1900, y: GROUND + 20 },  // drop
      { x: 2200, y: GROUND },
      { x: 2600, y: GROUND - 100 },
      { x: 2950, y: GROUND + 30 },
      { x: 3300, y: GROUND - 60 },
      { x: 3700, y: GROUND - 140 }, // second platform
      { x: 4000, y: GROUND - 140 },
      { x: 4150, y: GROUND + 10 },
      { x: 4500, y: GROUND },
      { x: 4900, y: GROUND },
    ],
    ramps: [
      { x: 500, w: 200, h: 130 },
      { x: 2400, w: 210, h: 140 },
      { x: 3500, w: 220, h: 150 },
    ],
    obstacles: [
      { x: 400, type: "cone" },
      { x: 430, type: "cone" },
      { x: 1500, type: "car" },
      { x: 1600, type: "barrel" },
      { x: 2250, type: "car" },
      { x: 2300, type: "car" },
      { x: 3000, type: "barrel" },
      { x: 3050, type: "barrel" },
      { x: 3750, type: "car" },
      { x: 4200, type: "cone" },
      { x: 4250, type: "car" },
    ],
    collectibles: [
      { x: 550, y: GROUND - 220 },
      { x: 600, y: GROUND - 250 },
      { x: 650, y: GROUND - 220 },
      { x: 1500, y: GROUND - 200 },
      { x: 1600, y: GROUND - 200 },
      { x: 1700, y: GROUND - 200 },
      { x: 2450, y: GROUND - 240 },
      { x: 2500, y: GROUND - 270 },
      { x: 3550, y: GROUND - 260 },
      { x: 3600, y: GROUND - 290 },
      { x: 3850, y: GROUND - 200 },
      { x: 3950, y: GROUND - 200 },
    ],
  },
];

export function getLevel(id) {
  return LEVELS.find((l) => l.id === id) || LEVELS[0];
}

// ---------------- Endless mode ----------------
// Endless generates terrain + features in chunks as the player advances.
// Difficulty scales with distance. Returns a fresh mutable level-like object.

export function createEndlessLevel() {
  return {
    id: "endless",
    name: "Endless Mayhem",
    description: "Drive forever — it just keeps getting tougher.",
    bg: { sky: "#7fc7ff", far: "#a8d8c0", ground: "#6fae74", soil: "#4f8a54" },
    hasTimer: false,
    finishX: Infinity,
    endless: true,
    terrain: [
      { x: 0, y: GROUND },
      { x: 600, y: GROUND },
    ],
    ramps: [],
    obstacles: [],
    collectibles: [],
    _genX: 600,       // how far terrain has been generated
    _lastY: GROUND,
  };
}

// Extend an endless level so terrain always exists ahead of the truck.
// Also prunes everything far behind the truck — without this the arrays grow
// forever and groundHeightAt's linear scan slowly grinds long runs to a halt.
export function extendEndless(level, truckX) {
  const cut = truckX - 1500;
  if (cut > 0) {
    // Keep terrain[0] as the left sentinel: drop interior points behind the cut.
    while (level.terrain.length > 2 && level.terrain[1].x < cut) {
      level.terrain.shift();
    }
    if (level.obstacles.length && level.obstacles[0].x < cut) {
      level.obstacles = level.obstacles.filter((o) => o.x >= cut);
    }
    if (level.collectibles.length && level.collectibles[0].x < cut) {
      level.collectibles = level.collectibles.filter((c) => c.x >= cut);
    }
    if (level.ramps.length && level.ramps[0].x + level.ramps[0].w < cut) {
      level.ramps = level.ramps.filter((r) => r.x + r.w >= cut);
    }
  }

  const target = truckX + 2000;
  while (level._genX < target) {
    const dist = level._genX;
    const difficulty = Math.min(1, dist / 8000); // 0..1 ramps up over 8000px
    const step = 250 + Math.random() * 150;
    const nextX = level._genX + step;
    const swing = 40 + difficulty * 120;
    let nextY = level._lastY + (Math.random() * 2 - 1) * swing;
    nextY = Math.max(GROUND - 160, Math.min(GROUND + 60, nextY));
    level.terrain.push({ x: nextX, y: nextY });

    // Occasionally add a ramp
    if (Math.random() < 0.3 + difficulty * 0.2) {
      level.ramps.push({ x: nextX - 60, w: 150 + difficulty * 90, h: 70 + difficulty * 90 });
    }
    // Obstacles get more frequent with difficulty
    if (Math.random() < 0.35 + difficulty * 0.3) {
      const types = ["cone", "car", "tire", "barrel"];
      const t = types[Math.floor(Math.random() * types.length)];
      level.obstacles.push({ x: nextX + 40, type: t });
    }
    // Collectibles (bolts) — a little arc
    if (Math.random() < 0.6) {
      const baseY = nextY - 90 - Math.random() * 120;
      for (let i = 0; i < 3; i++) {
        level.collectibles.push({ x: nextX + i * 40, y: baseY - Math.abs(i - 1) * -20 });
      }
    }

    level._lastY = nextY;
    level._genX = nextX;
  }
}
