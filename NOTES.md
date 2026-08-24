# Notes

## `archive/companion-pig-feature` branch

Before this repo's content was replaced, it contained a version of Oliver's
game with a companion-pig feature ("companion pig spawns near player, all
pigs follow player, difficulty select fixed") that was never present in the
`oliver-game-source/` code tracked here. That version is preserved at the
`archive/companion-pig-feature` branch — check it out or diff against it if
that feature is worth porting into the current codebase:

```
git log archive/companion-pig-feature
git diff main archive/companion-pig-feature -- oliver/
```

Note that branch only has the built/bundled output (`oliver/`), not
separate source, so recovering the pig feature means reading the minified
bundle or re-implementing it against the current source.

## Repo layout

- `index.html`, `emmett/`, `declan/`, `oliver/` — the deployed Game Hub site
  (matches what's live at ourcustomgames.vercel.app). `oliver/` here is a
  **built** copy (dist output), regenerated from `oliver-game-source/`.
- `oliver-game-source/` — the actual editable source for Oliver's game
  (Vite project: `src/`, `package.json`, etc.). Run `npm install && npm run
  build` here, then copy `dist/` into `oliver/` to update the hub copy.
