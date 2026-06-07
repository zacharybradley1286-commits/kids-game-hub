# Monster Truck Mayhem

A kid-friendly, Hot-Wheels-*inspired* (but 100% original) monster-truck driving
game that runs entirely in the browser. Drive a toy monster truck through
obstacle courses, crush toy cars, collect bolts, jump ramps, and reach the
finish flag. Built with plain HTML, CSS, and JavaScript on a `<canvas>` — no
backend, no login, no build step, no dependencies.

Designed for kids ages ~5–11: **Kid-Safe Mode** never lets you lose, while
**Normal Mode** adds a damage meter and real challenge.

---

## How to run it locally

Because the game uses JavaScript ES modules, it must be served over HTTP (opening
`index.html` directly with `file://` will be blocked by the browser).

Pick any one of these:

```bash
# Python (already on most Macs/Linux)
cd monster-truck-game
python3 -m http.server 8000
# then open http://localhost:8000

# or Node
npx serve monster-truck-game

# or VS Code: right-click index.html → "Open with Live Server"
```

Then open the printed URL in any modern browser (Chrome, Firefox, Safari, Edge).

---

## Controls

| Key | Action |
| --- | --- |
| → Right Arrow | Accelerate |
| ← Left Arrow | Reverse / brake |
| ↑ Up Arrow | Jump / boost (in air: nose up / backflip) |
| ↓ Down Arrow | Brake / stabilize (in air: nose down) |
| R | Restart current level |
| P or Esc | Pause |
| M | Return to main menu |

Controls are also shown on the in-game **How to Play** screen.

---

## Game modes

- **Kid-Safe Mode** — forgiving and frustration-free. The truck can't lose,
  auto-recovers if flipped, and takes no damage. Great for the youngest player.
- **Normal Mode** — crashes and hard landings cause damage. A visible damage
  meter fills up; at 100% the run ends and you can restart. Heavy impacts hurt
  more than small bumps.

Other play options:

- **Start Game** → pick one of three handcrafted levels.
- **Endless Mode** → procedurally generated terrain that gets harder the farther
  you drive. Never hard-fails in Kid-Safe mode.
- **Free Drive** → a relaxed, no-finish, no-damage roam of Level 1's terrain.

---

## Trucks

Three selectable trucks, each with slightly different stats (configured in
[`src/trucks.js`](src/trucks.js)):

| Truck | Theme | Feel |
| --- | --- | --- |
| **Blaze Beast** | Red/orange | Balanced all-rounder |
| **Blue Thunder** | Blue | Faster & bouncier, less durable |
| **Dino Crusher** | Green | Heavy & tough, slower, great at crushing |

Stats: Speed, Acceleration, Jump, Durability (toughness), Grip.

---

## Levels

1. **Backyard Ramp Run** — gentle beginner course: small ramps, cones, a few
   toy cars, bolts to collect, forgiving terrain.
2. **Dirt Arena Challenge** — bigger ramps, uneven ground, stacked tires, more
   collectibles, and a time bonus.
3. **Mega Garage Mayhem** — large jumps, rolling barrels, elevated platforms,
   and precise driving. Also has a time bonus.
4. **Endless Mode** — generated forever, scaling difficulty, distance scoring.

---

## Scoring

- Bolts collected, toy cars crushed, distance driven.
- Level-completion bonus, plus a time bonus on timed levels.
- Endless mode scores by distance (meters).

Best scores per level and best endless distance are saved to `localStorage`,
along with your selected truck, preferred mode, and sound setting.

---

## How to add a new truck

Edit [`src/trucks.js`](src/trucks.js) and add an object to the `TRUCKS` array:

```js
{
  id: "myrig",            // unique id
  name: "My Rig",
  body: "#ff00aa", accent: "#ffffff", cab: "#aa0077", // colors
  speed: 6, acceleration: 6, jump: 6, durability: 7, grip: 6, // 1..10
  blurb: "Short description shown on the select screen.",
}
```

The Truck Select screen, preview art, and stat bars build themselves
automatically. Physics multipliers are derived from the 1..10 stats in
`truckPhysics()` — adjust that function to change how stats translate to feel.

## How to add a new level

Edit [`src/levels.js`](src/levels.js) and add an object to the `LEVELS` array:

```js
{
  id: "level4",
  name: "My New Level",
  description: "Shown on the level-select card.",
  bg: { sky: "#...", far: "#...", ground: "#...", soil: "#..." },
  hasTimer: true, timeBonusSeconds: 50,   // optional timer/bonus
  finishX: 3500,                          // world-x of the finish flag
  terrain: [ { x: 0, y: 420 }, /* ...control points, y grows downward... */ ],
  ramps: [ { x: 600, w: 160, h: 80 } ],
  obstacles: [ { x: 450, type: "cone" } ], // types: cone, car, tire, barrel
  collectibles: [ { x: 650, y: 300 } ],
}
```

The level-select screen and "Next Level" flow pick it up automatically.

---

## Project structure

```
monster-truck-game/
  index.html          # markup + all menu/HUD screens
  README.md
  styles/main.css     # UI + HUD styling
  src/
    main.js           # entry point, wires everything together
    game.js           # run controller: loop, scoring, win/lose
    state.js          # shared in-memory session state
    input.js          # keyboard handling
    physics.js        # terrain sampling + arcade truck physics
    renderer.js       # all canvas drawing
    levels.js         # handcrafted levels + endless generation
    trucks.js         # truck definitions + stat→physics mapping
    ui.js             # screen navigation + dynamic menus + HUD
    audio.js          # synthesized sounds (no asset files needed)
    storage.js        # localStorage save/load
  assets/             # (empty placeholder; see assets/README.md)
```

---

## Known limitations

- Graphics are simple vector shapes (no sprite art yet). The code is structured
  so image assets can be dropped in later by editing the `draw*` helpers in
  `renderer.js`.
- Keyboard only — no touch/gamepad controls in this version.
- Physics is intentionally arcade-y and forgiving, not a realistic simulation.
- Sounds are synthesized with the Web Audio API; some browsers require a click/
  key press before audio can start.
- Endless mode keeps generated terrain in memory; extremely long single runs
  (tens of thousands of pixels) slowly grow the terrain array.

## Suggested next improvements

- Touch controls / on-screen buttons for tablets and phones.
- Swap in real sprite/image art for trucks, obstacles, and backgrounds.
- Truck unlocks tied to scores or stars earned.
- More levels and obstacle types; a level editor.
- Particle effects for crushes, dust, and landings.
- Gamepad support.
```
