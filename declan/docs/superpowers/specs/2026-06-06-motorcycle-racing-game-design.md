# Motorcycle Racing Game — Design Spec
**Date:** 2026-06-06

## Context

A web-based top-down arcade motorcycle racing game. Built as a fun, visually polished browser game with smooth rounded graphics (no blocky/pixelated look). No backend, no dependencies — ships as plain HTML + JS files that open directly in a browser.

---

## Technology

- **Rendering:** HTML5 Canvas 2D API (vanilla JS, no frameworks)
- **Visual style:** All shapes drawn with bezier curves, arcs, `lineCap: 'round'`, `lineJoin: 'round'` — smooth and rounded throughout
- **No build step:** Open `index.html` directly in browser

---

## File Structure

```
index.html       — canvas element, UI overlay divs
game.js          — game loop (requestAnimationFrame), state machine
track.js         — track waypoints, road polygons, scenery for both tracks
bike.js          — bike definitions, physics constants
ai.js            — AI waypoint-following logic with rubber-banding
renderer.js      — all canvas drawing (track, bikes, HUD, effects)
ui.js            — menus, select screens, podium/results screen
```

---

## Game Modes

### Race Mode
- Player races against 3 AI opponents over 3 laps
- Finish position determines podium placement
- Ends with podium animation + stats screen

### Time Trial Mode
- No AI opponents
- Track best lap time across 3 laps
- Ends with personal stats screen (no podium)

---

## Tracks

### Desert Highway
- Wide road, long straights, gentle sweeping curves
- Color palette: sandy tan road, warm brown borders, sparse cacti scenery
- Favors Sport Bike (high top speed rewarded on straights)

### Jungle Circuit
- Narrower road, tight corners, winding layout
- Color palette: dark asphalt, green tree clusters along edges
- Favors Dirt Bike (tight turning radius rewarded)

Both tracks defined as closed waypoint loops. Road rendered as thick stroked path with rounded joins. Scenery drawn as simple rounded canvas shapes (no image sprites).

---

## Motorcycles

### Sport Bike
- Stats: Speed ●●●●○ / Handling ●●○○○
- High top speed, wider turning radius
- Visual: narrow elongated oval, low fairing — red/white color scheme

### Dirt Bike
- Stats: Speed ●●○○○ / Handling ●●●●○
- Lower top speed, tighter turning radius
- Visual: taller rounder upright shape — green/black color scheme

---

## Physics (Arcade)

Per-bike constants: `maxSpeed`, `acceleration`, `deceleration`, `turnRate`

**Controls:**
- `Up / W` — accelerate (hold to build speed with momentum)
- `Down / S` — brake / reverse
- `Left / Right / A / D` — steer

**Rules:**
- Speed builds gradually on hold, bleeds off on release (friction)
- Braking drops speed faster than releasing
- Off-road penalty: 40% speed reduction when outside track bounds
- AI collision: brief speed penalty on impact
- No gear shifting — pure single-throttle arcade

---

## AI Opponents (Race Mode)

- 3 AI bikes per race
- Follow track waypoints with slight randomized lateral deviation (not all on same line)
- Rubber-banding: AI adjusts speed slightly when too far ahead/behind player to keep races competitive

---

## UI Flow

```
Main Menu
  ├── Race → Track Select → Bike Select → Countdown → Racing → Results (Podium)
  └── Time Trial → Track Select → Bike Select → Countdown → Racing → Results (Stats)
```

### Screens

| Screen | Contents |
|---|---|
| Main Menu | Title, "Race" / "Time Trial" buttons, animated idle bike |
| Track Select | Desert Highway / Jungle Circuit — name + brief description |
| Bike Select | Sport Bike / Dirt Bike — name + Speed/Handling stat bars |
| Countdown | 3… 2… 1… GO! overlay on track |
| Racing HUD | Lap counter (of 3), position (Race mode), lap timer, best lap |
| Results | Podium animation (Race) or stats only (Time Trial), best lap, total time, Play Again / Main Menu |

---

## Visual Style Notes

- Rounded corners and edges everywhere — no sharp/blocky shapes
- Track: thick rounded stroked path, subtle curb border color
- Bikes: drawn with arcs and bezier curves, small directional indicator (headlight dot)
- Scenery: cacti and trees as simple rounded filled canvas shapes
- HUD: clean sans-serif font, semi-transparent panel backgrounds
- Color palette: vivid but not neon — readable at a glance

---

## Out of Scope

- Sound / music
- Multiplayer (network)
- Mobile touch controls
- Persistent leaderboard / save data
- Power-ups or weapons
