// state.js — shared in-memory session state that bridges the menus (ui.js) and
// the running game (game.js). Persistent prefs live in storage.js; this is the
// "current choices + current run" scratch space.

import { Storage } from "./storage.js";

export const Screens = {
  MENU: "screen-menu",
  TRUCKS: "screen-trucks",
  SETTINGS: "screen-settings",
  INSTRUCTIONS: "screen-instructions",
  LEVELS: "screen-levels",
  PAUSE: "screen-pause",
  RESULT: "screen-result",
};

// Live session — initialized from saved preferences.
export const session = {
  truckId: Storage.get("truckId"),
  mode: Storage.get("mode"),       // "kid" | "normal"
  sound: Storage.get("sound"),
  // set when a run starts:
  levelId: null,
  freeDrive: false,
  endless: false,
};
