// storage.js — thin wrapper over localStorage. No backend.
// Stores: selected truck, preferred mode, sound pref, best scores per level,
// best endless distance.

const KEY = "monsterTruckMayhem_v1";

const DEFAULTS = {
  truckId: "blaze",
  mode: "kid", // "kid" | "normal"
  sound: true,
  bestScores: {}, // { level1: 1234, ... }
  bestEndless: 0, // meters
};

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULTS };
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULTS };
  }
}

function save(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* storage may be unavailable (private mode); ignore */
  }
}

let cache = load();

export const Storage = {
  get all() {
    return cache;
  },
  get(key) {
    return cache[key];
  },
  set(key, value) {
    cache[key] = value;
    save(cache);
  },
  recordScore(levelId, score) {
    const best = cache.bestScores[levelId] || 0;
    if (score > best) {
      cache.bestScores[levelId] = score;
      save(cache);
      return true; // new record
    }
    return false;
  },
  recordEndless(distance) {
    if (distance > cache.bestEndless) {
      cache.bestEndless = Math.floor(distance);
      save(cache);
      return true;
    }
    return false;
  },
};
