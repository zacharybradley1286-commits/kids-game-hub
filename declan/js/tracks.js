const TRACKS = [
  {
    name: 'Desert Highway',
    trackWidth: 110,
    bgColor: C.COLORS.desertBg,
    roadColor: C.COLORS.desertRoad,
    borderColor: C.COLORS.desertBorder,
    // Gentle wide oval with soft curves
    waypoints: [
      {x: 450, y: 80},
      {x: 650, y: 90},
      {x: 800, y: 150},
      {x: 840, y: 300},
      {x: 800, y: 450},
      {x: 650, y: 510},
      {x: 450, y: 520},
      {x: 250, y: 510},
      {x: 100, y: 450},
      {x: 60,  y: 300},
      {x: 100, y: 150},
      {x: 250, y: 90},
    ],
    // Scenery: cacti positions
    scenery: [
      {type: 'cactus', x: 450, y: 310},
      {type: 'cactus', x: 350, y: 200},
      {type: 'cactus', x: 560, y: 410},
      {type: 'cactus', x: 200, y: 320},
      {type: 'cactus', x: 700, y: 280},
    ],
    startPosition: {x: 450, y: 100},
    startAngle: 0, // radians, 0 = pointing right
  },
  {
    name: 'Jungle Circuit',
    trackWidth: 75,
    bgColor: C.COLORS.jungleBg,
    roadColor: C.COLORS.jungleRoad,
    borderColor: C.COLORS.jungleBorder,
    // Tighter, more complex loop
    waypoints: [
      {x: 450, y: 60},
      {x: 620, y: 80},
      {x: 740, y: 170},
      {x: 760, y: 300},
      {x: 700, y: 420},
      {x: 580, y: 490},
      {x: 430, y: 520},
      {x: 290, y: 500},
      {x: 180, y: 420},
      {x: 140, y: 300},
      {x: 180, y: 180},
      {x: 300, y: 90},
    ],
    // Scenery: trees
    scenery: [
      {type: 'tree', x: 450, y: 310},
      {type: 'tree', x: 340, y: 240},
      {type: 'tree', x: 570, y: 360},
      {type: 'tree', x: 250, y: 360},
      {type: 'tree', x: 640, y: 260},
      {type: 'tree', x: 450, y: 430},
    ],
    startPosition: {x: 450, y: 75},
    startAngle: 0,
  },
];
