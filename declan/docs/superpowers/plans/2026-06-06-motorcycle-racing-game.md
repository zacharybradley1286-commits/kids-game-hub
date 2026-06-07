# Motorcycle Racing Game Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a web-based top-down arcade motorcycle racing game with smooth rounded graphics, 2 tracks, 2 bikes, Race and Time Trial modes.

**Architecture:** Pure HTML5 Canvas 2D, vanilla JS, no dependencies, no build step. Game logic is split into focused modules loaded via `<script>` tags. State machine in `game.js` drives the loop; renderer is fully decoupled from logic.

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript (ES6), HTML Canvas 2D API

---

## File Map

| File | Responsibility |
|------|---------------|
| `index.html` | Canvas element, UI overlay divs, script loading order |
| `css/style.css` | Canvas fills viewport, overlay positioning |
| `js/constants.js` | All magic numbers: speeds, colors, canvas size, track widths |
| `js/tracks.js` | Waypoint arrays + metadata for Desert Highway and Jungle Circuit |
| `js/bikes.js` | Bike stat definitions (maxSpeed, acceleration, turnRate, colors) |
| `js/physics.js` | Pure functions: updateBike(), isOffRoad(), closestWaypointIndex() |
| `js/ai.js` | updateAI() — waypoint-following + rubber-banding per AI bike |
| `js/renderer.js` | drawTrack(), drawBike(), drawHUD(), drawScenery() |
| `js/ui.js` | showScreen(), hideScreen() — manages HTML overlay screens |
| `js/game.js` | State machine, game loop, input handling, race/lap logic |

---

### Task 1: Project Scaffold

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `js/constants.js`

- [ ] **Step 1: Create index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Moto Racer</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <canvas id="gameCanvas"></canvas>

  <!-- UI Overlays -->
  <div id="screen-main" class="screen">
    <h1>MOTO RACER</h1>
    <button id="btn-race">Race</button>
    <button id="btn-trial">Time Trial</button>
  </div>

  <div id="screen-track" class="screen hidden">
    <h2>Select Track</h2>
    <button class="track-btn" data-track="0">
      <strong>Desert Highway</strong>
      <span>Wide sweeping curves — high speed</span>
    </button>
    <button class="track-btn" data-track="1">
      <strong>Jungle Circuit</strong>
      <span>Tight corners — technical ride</span>
    </button>
  </div>

  <div id="screen-bike" class="screen hidden">
    <h2>Select Bike</h2>
    <button class="bike-btn" data-bike="0">
      <strong>Sport Bike</strong>
      <span>Speed ●●●●○  Handling ●●○○○</span>
    </button>
    <button class="bike-btn" data-bike="1">
      <strong>Dirt Bike</strong>
      <span>Speed ●●○○○  Handling ●●●●○</span>
    </button>
  </div>

  <div id="screen-countdown" class="screen hidden">
    <div id="countdown-text">3</div>
  </div>

  <div id="screen-results" class="screen hidden">
    <h2 id="results-title">Race Results</h2>
    <div id="podium"></div>
    <div id="results-stats"></div>
    <button id="btn-again">Play Again</button>
    <button id="btn-menu">Main Menu</button>
  </div>

  <script src="js/constants.js"></script>
  <script src="js/tracks.js"></script>
  <script src="js/bikes.js"></script>
  <script src="js/physics.js"></script>
  <script src="js/ai.js"></script>
  <script src="js/renderer.js"></script>
  <script src="js/ui.js"></script>
  <script src="js/game.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create css/style.css**

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #1a1a2e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

#gameCanvas {
  display: block;
  border-radius: 12px;
  box-shadow: 0 0 40px rgba(0,0,0,0.6);
}

.screen {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: rgba(10, 10, 30, 0.88);
  color: #fff;
  z-index: 10;
}

.screen.hidden { display: none; }

.screen h1 {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  color: #f0c040;
  text-shadow: 0 2px 12px rgba(240,192,64,0.4);
}

.screen h2 { font-size: 1.8rem; color: #f0c040; }

button {
  padding: 14px 36px;
  border: none;
  border-radius: 50px;
  background: #f0c040;
  color: #1a1a2e;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.1s, background 0.1s;
}

button:hover { background: #ffd966; transform: scale(1.04); }
button:active { transform: scale(0.97); }

.track-btn, .bike-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 260px;
  background: #2a2a4e;
  color: #eee;
  border: 2px solid #f0c040;
  border-radius: 16px;
  padding: 18px 24px;
}

.track-btn:hover, .bike-btn:hover {
  background: #3a3a6e;
  transform: scale(1.03);
}

.track-btn strong, .bike-btn strong { font-size: 1.2rem; color: #f0c040; }
.track-btn span, .bike-btn span { font-size: 0.9rem; color: #aaa; }

#countdown-text {
  font-size: 8rem;
  font-weight: 900;
  color: #f0c040;
  text-shadow: 0 4px 20px rgba(240,192,64,0.6);
}

#podium {
  display: flex;
  gap: 16px;
  margin: 10px 0;
  align-items: flex-end;
}

.podium-place {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #eee;
  font-size: 0.95rem;
}

.podium-block {
  width: 60px;
  border-radius: 8px 8px 0 0;
  background: #555;
}

.podium-block.gold { background: #f0c040; height: 80px; }
.podium-block.silver { background: #aaa; height: 60px; }
.podium-block.bronze { background: #c87533; height: 45px; }

#results-stats { color: #ccc; font-size: 1rem; text-align: center; line-height: 1.8; }
```

- [ ] **Step 3: Create js/constants.js**

```js
const C = {
  WIDTH: 900,
  HEIGHT: 600,
  TOTAL_LAPS: 3,
  AI_COUNT: 3,
  OFF_ROAD_PENALTY: 0.4,    // multiplier when off track
  RUBBER_BAND_DISTANCE: 200, // pixels ahead/behind before rubber-banding kicks in
  RUBBER_BAND_BOOST: 0.15,  // fraction of maxSpeed added/removed

  COLORS: {
    desertRoad: '#c8a96e',
    desertBorder: '#8b6914',
    desertBg: '#e8c87a',
    jungleRoad: '#3a3a3a',
    jungleBorder: '#1a4a1a',
    jungleBg: '#2a5a2a',
    hud: 'rgba(10,10,30,0.65)',
    hudText: '#ffffff',
  },
};
```

- [ ] **Step 4: Open index.html in browser — verify blank canvas renders, no console errors**

- [ ] **Step 5: Commit**

```bash
git init
git add index.html css/style.css js/constants.js
git commit -m "feat: project scaffold — canvas, styles, constants"
```

---

### Task 2: Track Data

**Files:**
- Create: `js/tracks.js`

- [ ] **Step 1: Create js/tracks.js**

Each track is a closed loop of waypoints. Road polygons are computed at runtime by offsetting each waypoint segment by `trackWidth / 2` perpendicular to the direction of travel.

```js
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
```

- [ ] **Step 2: Commit**

```bash
git add js/tracks.js
git commit -m "feat: track waypoint data for Desert Highway and Jungle Circuit"
```

---

### Task 3: Physics Helpers

**Files:**
- Create: `js/physics.js`

These are pure functions with no side effects — easy to verify manually in the browser console.

- [ ] **Step 1: Create js/physics.js**

```js
// Returns index of the waypoint the bike is closest to
function closestWaypointIndex(x, y, waypoints) {
  let minDist = Infinity, minIdx = 0;
  for (let i = 0; i < waypoints.length; i++) {
    const dx = waypoints[i].x - x;
    const dy = waypoints[i].y - y;
    const d = dx * dx + dy * dy;
    if (d < minDist) { minDist = d; minIdx = i; }
  }
  return minIdx;
}

// Returns the next waypoint index (wraps around)
function nextWaypointIndex(current, waypoints) {
  return (current + 1) % waypoints.length;
}

// Perpendicular distance from point (px,py) to line segment (ax,ay)-(bx,by)
function distToSegment(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(px - ax, py - ay);
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

// Returns true if (x,y) is more than trackWidth/2 from the nearest road segment
function isOffRoad(x, y, waypoints, trackWidth) {
  const half = trackWidth / 2;
  const closest = closestWaypointIndex(x, y, waypoints);
  const prev = (closest - 1 + waypoints.length) % waypoints.length;
  const next = nextWaypointIndex(closest, waypoints);

  const d1 = distToSegment(x, y,
    waypoints[prev].x, waypoints[prev].y,
    waypoints[closest].x, waypoints[closest].y);
  const d2 = distToSegment(x, y,
    waypoints[closest].x, waypoints[closest].y,
    waypoints[next].x, waypoints[next].y);

  return Math.min(d1, d2) > half;
}

// Update a bike's position and angle based on input and dt (seconds)
// Returns new state object (does not mutate)
function updateBike(bike, input, trackWidth, waypoints, dt) {
  const offRoad = isOffRoad(bike.x, bike.y, waypoints, trackWidth);
  const speedCap = offRoad
    ? bike.maxSpeed * C.OFF_ROAD_PENALTY
    : bike.maxSpeed;

  let speed = bike.speed;
  let angle = bike.angle;

  if (input.accel) {
    speed = Math.min(speedCap, speed + bike.acceleration * dt);
  } else if (input.brake) {
    speed = Math.max(-bike.maxSpeed * 0.4, speed - bike.deceleration * 2 * dt);
  } else {
    // friction
    const friction = bike.deceleration * dt;
    speed = speed > 0
      ? Math.max(0, speed - friction)
      : Math.min(0, speed + friction);
  }

  // Cap speed if we drove off-road while going fast
  if (speed > speedCap) speed = speedCap;

  if (Math.abs(speed) > 5) {
    const dir = speed > 0 ? 1 : -1;
    if (input.left)  angle -= bike.turnRate * dt * dir;
    if (input.right) angle += bike.turnRate * dt * dir;
  }

  return {
    ...bike,
    speed,
    angle,
    x: bike.x + Math.cos(angle) * speed * dt,
    y: bike.y + Math.sin(angle) * speed * dt,
  };
}
```

- [ ] **Step 2: Verify in browser console**

Open `index.html`, open DevTools Console, paste:
```js
const wp = [{x:0,y:0},{x:100,y:0},{x:100,y:100}];
console.log(closestWaypointIndex(95, 5, wp));   // expect 1
console.log(isOffRoad(50, 100, wp, 80));         // expect true (far from road)
console.log(isOffRoad(50, 10, wp, 80));          // expect false (on road)
```

- [ ] **Step 3: Commit**

```bash
git add js/physics.js
git commit -m "feat: pure physics helpers — updateBike, isOffRoad, closestWaypoint"
```

---

### Task 4: Bike Definitions

**Files:**
- Create: `js/bikes.js`

- [ ] **Step 1: Create js/bikes.js**

```js
const BIKES = [
  {
    name: 'Sport Bike',
    maxSpeed: 280,       // px/sec
    acceleration: 180,
    deceleration: 120,
    turnRate: 2.2,       // radians/sec
    bodyColor: '#e02020',
    accentColor: '#ffffff',
    // Visual dimensions
    length: 26,
    width: 12,
  },
  {
    name: 'Dirt Bike',
    maxSpeed: 200,
    acceleration: 220,   // faster off-the-line
    deceleration: 150,
    turnRate: 3.0,       // tighter turning
    bodyColor: '#2a8a2a',
    accentColor: '#1a1a1a',
    length: 22,
    width: 14,
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add js/bikes.js
git commit -m "feat: bike definitions — Sport Bike and Dirt Bike stats"
```

---

### Task 5: Renderer

**Files:**
- Create: `js/renderer.js`

- [ ] **Step 1: Create js/renderer.js**

```js
const Renderer = (() => {
  let canvas, ctx;

  function init(canvasEl) {
    canvas = canvasEl;
    ctx = canvas.getContext('2d');
    canvas.width = C.WIDTH;
    canvas.height = C.HEIGHT;
  }

  function clear(bgColor) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, C.WIDTH, C.HEIGHT);
  }

  // Draw the road as a thick rounded stroke along waypoints
  function drawTrack(track) {
    const { waypoints, trackWidth, roadColor, borderColor, bgColor } = track;

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, C.WIDTH, C.HEIGHT);

    // Border (slightly wider)
    _strokePath(waypoints, trackWidth + 10, borderColor);

    // Road surface
    _strokePath(waypoints, trackWidth, roadColor);

    // Center dashed line
    ctx.save();
    ctx.setLineDash([20, 15]);
    _strokePath(waypoints, 2, 'rgba(255,255,255,0.35)');
    ctx.setLineDash([]);
    ctx.restore();
  }

  function _strokePath(waypoints, width, color) {
    ctx.beginPath();
    ctx.moveTo(waypoints[0].x, waypoints[0].y);
    for (let i = 1; i < waypoints.length; i++) {
      ctx.lineTo(waypoints[i].x, waypoints[i].y);
    }
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  }

  function drawScenery(track) {
    for (const item of track.scenery) {
      if (item.type === 'cactus') _drawCactus(item.x, item.y);
      if (item.type === 'tree')   _drawTree(item.x, item.y);
    }
  }

  function _drawCactus(x, y) {
    ctx.fillStyle = '#4a8a3a';
    // Main trunk
    ctx.beginPath();
    ctx.roundRect(x - 4, y - 18, 8, 22, 4);
    ctx.fill();
    // Left arm
    ctx.beginPath();
    ctx.roundRect(x - 12, y - 10, 10, 6, 3);
    ctx.fill();
    // Right arm
    ctx.beginPath();
    ctx.roundRect(x + 2, y - 14, 10, 6, 3);
    ctx.fill();
  }

  function _drawTree(x, y) {
    // Trunk
    ctx.fillStyle = '#5a3a1a';
    ctx.beginPath();
    ctx.roundRect(x - 4, y - 4, 8, 14, 2);
    ctx.fill();
    // Canopy
    ctx.fillStyle = '#1a6a1a';
    ctx.beginPath();
    ctx.arc(x, y - 12, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2a8a2a';
    ctx.beginPath();
    ctx.arc(x - 5, y - 16, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawBike(bike) {
    ctx.save();
    ctx.translate(bike.x, bike.y);
    ctx.rotate(bike.angle);

    const hw = bike.width / 2;
    const hl = bike.length / 2;

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.beginPath();
    ctx.ellipse(2, 2, hl, hw, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body
    ctx.fillStyle = bike.bodyColor;
    ctx.beginPath();
    ctx.roundRect(-hl, -hw, bike.length, bike.width, hw);
    ctx.fill();

    // Accent stripe
    ctx.fillStyle = bike.accentColor;
    ctx.beginPath();
    ctx.roundRect(-hl * 0.3, -hw * 0.4, hl * 0.6, hw * 0.8, hw * 0.3);
    ctx.fill();

    // Headlight
    ctx.fillStyle = '#ffffaa';
    ctx.beginPath();
    ctx.arc(hl - 3, 0, 3, 0, Math.PI * 2);
    ctx.fill();

    // Wheels
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.ellipse(-hl + 4, 0, 5, hw * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(hl - 4, 0, 5, hw * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawHUD(state) {
    const { mode, currentLap, position, lapTime, bestLap, aiCount } = state;
    const pad = 12, lineH = 22;
    const w = 160, h = mode === 'race' ? 100 : 80;

    // Panel
    ctx.fillStyle = C.COLORS.hud;
    ctx.beginPath();
    ctx.roundRect(pad, pad, w, h, 10);
    ctx.fill();

    ctx.fillStyle = C.COLORS.hudText;
    ctx.font = 'bold 14px system-ui';
    const x = pad + 12;
    let y = pad + 22;

    ctx.fillText(`Lap: ${Math.min(currentLap, C.TOTAL_LAPS)} / ${C.TOTAL_LAPS}`, x, y); y += lineH;
    if (mode === 'race') {
      ctx.fillText(`Position: ${position} / ${aiCount + 1}`, x, y); y += lineH;
    }
    ctx.fillText(`Time: ${_fmt(lapTime)}`, x, y); y += lineH;
    if (bestLap < Infinity) ctx.fillText(`Best: ${_fmt(bestLap)}`, x, y);
  }

  function _fmt(seconds) {
    if (seconds === Infinity) return '--:--.--';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);
    return `${m}:${String(s).padStart(2,'0')}.${String(ms).padStart(2,'0')}`;
  }

  return { init, clear, drawTrack, drawScenery, drawBike, drawHUD };
})();
```

- [ ] **Step 2: Test renderer standalone** — open `index.html`, DevTools Console:

```js
// Quick smoke test (requires constants + tracks loaded)
Renderer.init(document.getElementById('gameCanvas'));
Renderer.drawTrack(TRACKS[0]);
Renderer.drawScenery(TRACKS[0]);
// Should see Desert Highway track on canvas
```

- [ ] **Step 3: Commit**

```bash
git add js/renderer.js
git commit -m "feat: canvas renderer — track, scenery, bikes, HUD"
```

---

### Task 6: AI Logic

**Files:**
- Create: `js/ai.js`

- [ ] **Step 1: Create js/ai.js**

```js
const AI = (() => {
  // Create an AI bike instance
  function create(bikeIndex, startX, startY, startAngle, offset) {
    const def = BIKES[bikeIndex % BIKES.length];
    return {
      ...def,
      x: startX + offset.x,
      y: startY + offset.y,
      angle: startAngle,
      speed: 0,
      waypointIdx: 0,
      lapCount: 0,
      raceTime: 0,
      isAI: true,
      deviation: (Math.random() - 0.5) * 20, // lateral wander
    };
  }

  // Update a single AI bike toward its target waypoint
  function update(ai, waypoints, trackWidth, playerX, playerY, dt) {
    const target = waypoints[ai.waypointIdx];
    const dx = target.x - ai.x + ai.deviation;
    const dy = target.y - ai.y;
    const targetAngle = Math.atan2(dy, dx);

    // Smoothly rotate toward target
    let da = targetAngle - ai.angle;
    while (da >  Math.PI) da -= Math.PI * 2;
    while (da < -Math.PI) da += Math.PI * 2;
    const maxTurn = ai.turnRate * dt;
    ai.angle += Math.max(-maxTurn, Math.min(maxTurn, da));

    // Rubber-banding
    const distToPlayer = Math.hypot(ai.x - playerX, ai.y - playerY);
    let speedMult = 1;
    if (distToPlayer > C.RUBBER_BAND_DISTANCE) {
      // AI is far — either catch up or slow down based on who's ahead
      speedMult = 1 + C.RUBBER_BAND_BOOST;
    } else if (distToPlayer < 60) {
      speedMult = 1 - C.RUBBER_BAND_BOOST;
    }

    const targetSpeed = ai.maxSpeed * 0.88 * speedMult;
    ai.speed += (targetSpeed - ai.speed) * Math.min(1, dt * 2);

    ai.x += Math.cos(ai.angle) * ai.speed * dt;
    ai.y += Math.sin(ai.angle) * ai.speed * dt;

    // Advance to next waypoint when close enough
    const distToTarget = Math.hypot(target.x - ai.x, target.y - ai.y);
    if (distToTarget < trackWidth * 0.6) {
      const prevIdx = ai.waypointIdx;
      ai.waypointIdx = (ai.waypointIdx + 1) % waypoints.length;
      if (ai.waypointIdx === 0 && prevIdx !== 0) ai.lapCount++;
    }

    return ai;
  }

  return { create, update };
})();
```

- [ ] **Step 2: Commit**

```bash
git add js/ai.js
git commit -m "feat: AI waypoint-following with rubber-banding"
```

---

### Task 7: UI Manager

**Files:**
- Create: `js/ui.js`

- [ ] **Step 1: Create js/ui.js**

```js
const UI = (() => {
  const screens = {
    main:      document.getElementById('screen-main'),
    track:     document.getElementById('screen-track'),
    bike:      document.getElementById('screen-bike'),
    countdown: document.getElementById('screen-countdown'),
    results:   document.getElementById('screen-results'),
  };

  function show(name) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    if (screens[name]) screens[name].classList.remove('hidden');
  }

  function hide(name) {
    if (screens[name]) screens[name].classList.add('hidden');
  }

  function hideAll() {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
  }

  function showResults({ mode, positions, bestLap, totalTime }) {
    const title = document.getElementById('results-title');
    const podium = document.getElementById('podium');
    const stats = document.getElementById('results-stats');

    title.textContent = mode === 'race' ? 'Race Results' : 'Time Trial Results';

    if (mode === 'race' && positions.length >= 3) {
      const grades = ['gold', 'silver', 'bronze'];
      const heights = [80, 60, 45];
      const order = [1, 0, 2]; // visual order: 2nd, 1st, 3rd
      podium.innerHTML = order.map(i => {
        const p = positions[i];
        return `<div class="podium-place">
          <span>${p ? p.name : '---'}</span>
          <div class="podium-block ${grades[i]}" style="height:${heights[i]}px"></div>
          <span>${i + 1}${['st','nd','rd'][i]}</span>
        </div>`;
      }).join('');
    } else {
      podium.innerHTML = '';
    }

    const fmt = (s) => {
      if (s === Infinity || !s) return '--:--.--';
      const m = Math.floor(s / 60);
      const sec = Math.floor(s % 60);
      const ms = Math.floor((s % 1) * 100);
      return `${m}:${String(sec).padStart(2,'0')}.${String(ms).padStart(2,'0')}`;
    };

    stats.innerHTML = `Best Lap: ${fmt(bestLap)}<br>Total Time: ${fmt(totalTime)}`;
    show('results');
  }

  return { show, hide, hideAll, showResults };
})();
```

- [ ] **Step 2: Commit**

```bash
git add js/ui.js
git commit -m "feat: UI screen manager and results screen"
```

---

### Task 8: Game Loop & State Machine

**Files:**
- Create: `js/game.js`

This is the main orchestrator. It wires everything together.

- [ ] **Step 1: Create js/game.js**

```js
const Game = (() => {
  // --- State ---
  let state = 'MAIN_MENU'; // MAIN_MENU | TRACK_SELECT | BIKE_SELECT | COUNTDOWN | RACING | RESULTS
  let mode = 'race';       // 'race' | 'trial'
  let selectedTrack = 0;
  let selectedBike = 0;

  let player = null;
  let aiRacers = [];
  let track = null;

  let lapStartTime = 0;
  let raceStartTime = 0;
  let bestLap = Infinity;
  let lapTime = 0;
  let lastCheckpointIdx = 0;

  let countdownValue = 3;
  let countdownTimer = 0;

  let lastTimestamp = null;
  let rafId = null;

  const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false,
                  w: false, s: false, a: false, d: false };

  // --- Init ---
  function init() {
    const canvas = document.getElementById('gameCanvas');
    Renderer.init(canvas);

    // Keyboard
    window.addEventListener('keydown', e => { if (e.key in keys) { keys[e.key] = true; e.preventDefault(); }});
    window.addEventListener('keyup',   e => { if (e.key in keys) keys[e.key] = false; });

    // Menu buttons
    document.getElementById('btn-race').addEventListener('click', () => { mode = 'race'; UI.show('track'); });
    document.getElementById('btn-trial').addEventListener('click', () => { mode = 'trial'; UI.show('track'); });

    document.querySelectorAll('.track-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedTrack = parseInt(btn.dataset.track);
        UI.show('bike');
      });
    });

    document.querySelectorAll('.bike-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedBike = parseInt(btn.dataset.bike);
        startCountdown();
      });
    });

    document.getElementById('btn-again').addEventListener('click', () => {
      UI.show('bike');
      // re-select same bike — bike select screen will call startCountdown again
    });

    document.getElementById('btn-menu').addEventListener('click', () => {
      UI.show('main');
      state = 'MAIN_MENU';
    });

    UI.show('main');
    requestAnimationFrame(loop);
  }

  // --- Countdown ---
  function startCountdown() {
    track = TRACKS[selectedTrack];
    const bikeDef = BIKES[selectedBike];
    const sp = track.startPosition;

    player = {
      ...bikeDef,
      x: sp.x,
      y: sp.y,
      angle: track.startAngle,
      speed: 0,
      lapCount: 0,
      raceTime: 0,
      isAI: false,
      name: 'You',
    };

    aiRacers = [];
    if (mode === 'race') {
      const offsets = [{x:-30,y:0},{x:30,y:0},{x:0,y:30}];
      for (let i = 0; i < C.AI_COUNT; i++) {
        aiRacers.push(AI.create(
          (selectedBike + 1) % 2,
          sp.x, sp.y, track.startAngle,
          offsets[i]
        ));
      }
    }

    bestLap = Infinity;
    lapTime = 0;
    countdownValue = 3;
    countdownTimer = 0;
    state = 'COUNTDOWN';
    UI.show('countdown');
    document.getElementById('countdown-text').textContent = '3';
  }

  // --- Main Loop ---
  function loop(ts) {
    rafId = requestAnimationFrame(loop);
    if (!lastTimestamp) { lastTimestamp = ts; return; }
    const dt = Math.min((ts - lastTimestamp) / 1000, 0.05); // cap at 50ms
    lastTimestamp = ts;

    if (state === 'COUNTDOWN') {
      updateCountdown(dt);
    } else if (state === 'RACING') {
      updateRacing(dt);
    }

    render();
  }

  // --- Countdown update ---
  function updateCountdown(dt) {
    countdownTimer += dt;
    if (countdownTimer >= 1) {
      countdownTimer = 0;
      countdownValue--;
      if (countdownValue <= 0) {
        document.getElementById('countdown-text').textContent = 'GO!';
        setTimeout(() => {
          UI.hideAll();
          state = 'RACING';
          lapStartTime = performance.now() / 1000;
          raceStartTime = lapStartTime;
          lastCheckpointIdx = 0;
        }, 600);
      } else {
        document.getElementById('countdown-text').textContent = countdownValue;
      }
    }
  }

  // --- Racing update ---
  function updateRacing(dt) {
    const input = {
      accel: keys.ArrowUp   || keys.w,
      brake: keys.ArrowDown || keys.s,
      left:  keys.ArrowLeft || keys.a,
      right: keys.ArrowRight|| keys.d,
    };

    player = updateBike(player, input, track.trackWidth, track.waypoints, dt);
    checkLap(player, dt);

    if (mode === 'race') {
      aiRacers = aiRacers.map(ai =>
        AI.update(ai, track.waypoints, track.trackWidth, player.x, player.y, dt)
      );
      // Update AI race times and lap counts (already tracked in AI.update)
    }

    // Check race end
    if (player.lapCount >= C.TOTAL_LAPS) {
      endRace();
    }
  }

  function checkLap(bike, dt) {
    lapTime = (performance.now() / 1000) - lapStartTime;

    // Detect crossing start/finish (waypoint 0 area)
    const finish = track.waypoints[0];
    const distToFinish = Math.hypot(bike.x - finish.x, bike.y - finish.y);
    const nearFinish = distToFinish < track.trackWidth * 0.7;

    // Track which waypoint sector we're in to prevent counting the same crossing twice
    const wpIdx = closestWaypointIndex(bike.x, bike.y, track.waypoints);
    const halfWay = Math.floor(track.waypoints.length / 2);

    if (nearFinish && lastCheckpointIdx > halfWay) {
      // Completed a lap
      if (lapTime < bestLap) bestLap = lapTime;
      player.lapCount++;
      lapStartTime = performance.now() / 1000;
      lapTime = 0;
    }

    lastCheckpointIdx = wpIdx;
  }

  function endRace() {
    state = 'RESULTS';
    const totalTime = (performance.now() / 1000) - raceStartTime;

    if (mode === 'race') {
      // Build positions array: player + AI sorted by laps desc then waypointIdx desc
      const all = [
        { name: 'You', lapCount: player.lapCount, waypointIdx: closestWaypointIndex(player.x, player.y, track.waypoints) },
        ...aiRacers.map((ai, i) => ({ name: `Racer ${i+1}`, lapCount: ai.lapCount, waypointIdx: ai.waypointIdx })),
      ];
      all.sort((a, b) => b.lapCount !== a.lapCount ? b.lapCount - a.lapCount : b.waypointIdx - a.waypointIdx);
      UI.showResults({ mode: 'race', positions: all, bestLap, totalTime });
    } else {
      UI.showResults({ mode: 'trial', positions: [], bestLap, totalTime });
    }
  }

  // --- Render ---
  function render() {
    if (!track) {
      Renderer.clear('#1a1a2e');
      return;
    }

    Renderer.drawTrack(track);
    Renderer.drawScenery(track);

    if (mode === 'race') {
      aiRacers.forEach(ai => Renderer.drawBike(ai));
    }

    if (player && (state === 'RACING' || state === 'COUNTDOWN' || state === 'RESULTS')) {
      Renderer.drawBike(player);
    }

    if (state === 'RACING') {
      const position = mode === 'race' ? _calcPosition() : 0;
      Renderer.drawHUD({
        mode,
        currentLap: player.lapCount + 1,
        position,
        lapTime,
        bestLap,
        aiCount: C.AI_COUNT,
      });
    }
  }

  function _calcPosition() {
    const playerWp = closestWaypointIndex(player.x, player.y, track.waypoints);
    const playerProgress = player.lapCount * track.waypoints.length + playerWp;
    let ahead = 0;
    for (const ai of aiRacers) {
      const aiProgress = ai.lapCount * track.waypoints.length + ai.waypointIdx;
      if (aiProgress > playerProgress) ahead++;
    }
    return ahead + 1;
  }

  return { init };
})();

// Boot
window.addEventListener('DOMContentLoaded', () => Game.init());
```

- [ ] **Step 2: Open index.html in browser — full game flow test:**

  1. Click "Race" → track select screen appears
  2. Click "Desert Highway" → bike select screen appears
  3. Click "Sport Bike" → countdown 3-2-1-GO appears then clears
  4. Bike appears on track, arrow keys move it
  5. Drive 3 laps → results screen with podium
  6. Click "Play Again" → bike select returns
  7. Click "Main Menu" → main menu returns

- [ ] **Step 3: Test Time Trial mode:**

  1. Click "Time Trial" → track/bike select
  2. Race — verify no AI bikes appear
  3. 3 laps → results without podium, shows best lap + total time

- [ ] **Step 4: Commit**

```bash
git add js/game.js
git commit -m "feat: game loop, state machine, race logic, input handling"
```

---

### Task 9: Polish Pass

**Files:**
- Modify: `js/renderer.js` (add start/finish line)
- Modify: `js/game.js` (fix edge cases)
- Modify: `css/style.css` (final tweaks)

- [ ] **Step 1: Add start/finish line to renderer**

In `renderer.js`, add inside `drawTrack()` after the road stroke:

```js
// Start/finish line
const wp0 = waypoints[0];
const wp1 = waypoints[1];
const perpAngle = Math.atan2(wp1.y - wp0.y, wp1.x - wp0.x) + Math.PI / 2;
const hw = trackWidth / 2;
ctx.save();
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 4;
ctx.setLineDash([8, 8]);
ctx.beginPath();
ctx.moveTo(wp0.x + Math.cos(perpAngle) * hw, wp0.y + Math.sin(perpAngle) * hw);
ctx.lineTo(wp0.x - Math.cos(perpAngle) * hw, wp0.y - Math.sin(perpAngle) * hw);
ctx.stroke();
ctx.setLineDash([]);
ctx.restore();
```

- [ ] **Step 2: Verify start/finish line appears as a dashed white line across the road at the start of each track**

- [ ] **Step 3: Test off-road penalty** — drive off the track edge, verify bike noticeably slows

- [ ] **Step 4: Test both tracks with both bikes — 4 combinations total**

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: polish — start/finish line, final testing"
```

---

## Verification Checklist

- [ ] `index.html` opens directly in browser with no errors in DevTools console
- [ ] Both tracks render with smooth rounded road edges (no blocky appearance)
- [ ] Both bikes render with rounded shapes, distinct colors
- [ ] Scenery (cacti / trees) renders inside the track area
- [ ] Player bike responds to arrow keys and WASD
- [ ] Off-road penalty visibly slows the bike
- [ ] HUD shows correct lap count, position (race mode), and lap timer
- [ ] AI bikes follow the track and complete laps (race mode)
- [ ] Lap detection triggers correctly after crossing start/finish
- [ ] After 3 laps: results screen shows podium (race) or stats (trial)
- [ ] "Play Again" and "Main Menu" buttons work correctly
- [ ] All 4 mode/track/bike combinations playable without errors
