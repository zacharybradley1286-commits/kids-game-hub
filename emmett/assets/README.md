# Assets

This folder is a placeholder for future image and sound assets.

The current build uses **no external assets** — all graphics are drawn as
vector shapes in `src/renderer.js`, and all sounds are synthesized in
`src/audio.js`. This keeps the game dependency-free and avoids any licensing
concerns.

## Adding image art later

Drop PNG/SVG files here (e.g. `truck-blaze.png`, `car.png`, `bg-level1.png`) and
load them in `src/renderer.js`. The `draw*` helper functions are the only place
that needs to change — replace the shape-drawing code with `ctx.drawImage(...)`.

## Adding sound files later

Drop audio files here (e.g. `jump.mp3`, `collect.mp3`) and load them in
`src/audio.js`, keeping the existing `Audio.jump()`, `Audio.collect()`, etc. API
so the rest of the game doesn't need to change.

> Use only original or properly licensed assets. Do not use copyrighted Hot
> Wheels (or other brand) names, logos, vehicles, art, or music.
