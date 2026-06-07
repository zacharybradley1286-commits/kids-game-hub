// game.js — the run controller: owns the active level + truck, runs the loop,
// tracks score/damage/timer, and detects win/lose. UI is notified via callbacks.

import { Renderer } from "./renderer.js";
import { makeTruck, updateTruck, speed01, groundHeightAt } from "./physics.js";
import { getLevel, createEndlessLevel, extendEndless } from "./levels.js";
import { getTruck } from "./trucks.js";
import { keys } from "./input.js";
import { Audio } from "./audio.js";
import { Storage } from "./storage.js";
import { session } from "./state.js";

// Scoring constants (kept here so they're easy to tune).
const PTS = {
  bolt: 25,
  crush: 50,
  distancePerPx: 0.02,
  levelComplete: 500,
  timeBonusPerSec: 10,
  endlessPerMeter: 1,
};
const PX_PER_METER = 30;

export class Game {
  constructor(canvas, ui) {
    this.canvas = canvas;
    this.ui = ui;
    this.renderer = new Renderer(canvas);
    this.active = false;
    this.paused = false;
    this.raf = null;
    this._loop = this._loop.bind(this);
  }

  // opts: { levelId, freeDrive, endless }
  start(opts) {
    this.opts = opts;
    this.mode = session.mode;

    // Build level (deep-ish clone so crushed/collected flags reset each run).
    if (opts.endless) {
      this.level = createEndlessLevel();
    } else {
      this.level = cloneLevel(getLevel(opts.levelId));
    }

    // Free drive on a handcrafted level = no finish line, no damage failure.
    if (opts.freeDrive) {
      this.level.finishX = Infinity;
    }

    const truckDef = getTruck(session.truckId);
    this.truck = makeTruck(truckDef);
    this.truck.y = groundHeightAt(this.level, this.truck.x) - 30;

    // Run stats
    this.score = 0;
    this.bolts = 0;
    this.crushes = 0;
    this.startTime = performance.now();
    this.elapsed = 0;
    this.finished = false;
    this.gameOver = false;
    this.maxDistancePx = 0;

    this.paused = false;
    this.active = true;

    Audio.startEngine();
    this.ui.showHud(this);
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(this._loop);
  }

  pause() {
    if (!this.active || this.finished || this.gameOver) return;
    this.paused = true;
    Audio.stopEngine();
    this.ui.showScreen("screen-pause");
  }

  resume() {
    if (!this.active) return;
    this.paused = false;
    this.ui.hideScreens();
    Audio.startEngine();
    this.startTime = performance.now() - this.elapsed; // keep timer continuous
    this.raf = requestAnimationFrame(this._loop);
  }

  restart() {
    this.start(this.opts);
  }

  stop() {
    this.active = false;
    this.paused = false;
    if (this.raf) cancelAnimationFrame(this.raf);
    Audio.stopEngine();
    this.ui.hideHud();
  }

  _loop() {
    if (!this.active || this.paused) return;

    // --- Endless: keep terrain generated ahead, prune behind ---
    if (this.level.endless) {
      extendEndless(this.level, this.truck.x);
    }

    // --- Physics ---
    const events = updateTruck(this.truck, this.level, keys, this.mode);

    // --- React to events ---
    for (const c of events.collected) {
      this.bolts++;
      this.score += PTS.bolt;
      Audio.collect();
    }
    for (const o of events.crushed) {
      this.crushes++;
      this.score += PTS.crush;
      Audio.crush();
    }
    if (events.jumped) Audio.jump();
    if (events.crashed) Audio.crash();

    // --- Distance scoring ---
    const dist = Math.max(0, this.truck.x - this.truck.startX);
    if (dist > this.maxDistancePx) {
      this.score += (dist - this.maxDistancePx) * PTS.distancePerPx;
      this.maxDistancePx = dist;
    }

    // --- Timer ---
    this.elapsed = performance.now() - this.startTime;

    // --- Sound: engine pitch tracks speed ---
    Audio.updateEngine(speed01(this.truck));

    // --- Win / lose checks ---
    this._checkEndConditions();

    // --- Render ---
    this.renderer.updateCamera(this.truck);
    this.renderer.drawScene(this.level, this.truck);

    // --- HUD ---
    this.ui.updateHud(this);

    if (this.active && !this.paused) this.raf = requestAnimationFrame(this._loop);
  }

  _checkEndConditions() {
    // Damage game-over (normal mode only; kid-safe never hard-fails).
    if (this.mode === "normal" && this.truck.damage >= 100) {
      this._end(false);
      return;
    }
    // Finish line (level mode, not free drive / endless).
    if (isFinite(this.level.finishX) && this.truck.x >= this.level.finishX) {
      this._end(true);
    }
  }

  _end(won) {
    if (this.finished || this.gameOver) return;
    this.active = false;
    if (this.raf) cancelAnimationFrame(this.raf);
    Audio.stopEngine();

    let timeBonus = 0;
    let newRecord = false;
    const distanceMeters = this.maxDistancePx / PX_PER_METER;

    if (this.level.endless || this.opts.freeDrive) {
      // Endless / free drive end only happens on game over (normal mode).
      this.score += Math.floor(distanceMeters * PTS.endlessPerMeter);
    }

    if (won) {
      this.finished = true;
      this.score += PTS.levelComplete;
      // time bonus
      if (this.level.hasTimer && this.level.timeBonusSeconds) {
        const secs = this.elapsed / 1000;
        if (secs < this.level.timeBonusSeconds) {
          timeBonus = Math.floor((this.level.timeBonusSeconds - secs) * PTS.timeBonusPerSec);
          this.score += timeBonus;
        }
      }
      Audio.complete();
    } else {
      this.gameOver = true;
      Audio.gameover();
    }

    // Persist records
    if (this.level.endless) {
      newRecord = Storage.recordEndless(distanceMeters);
    } else if (!this.opts.freeDrive) {
      newRecord = Storage.recordScore(this.level.id, Math.floor(this.score));
    }

    this.ui.showResult(this, { won, timeBonus, newRecord, distanceMeters });
  }
}

// Clone a handcrafted level so per-run mutable flags don't leak between runs.
function cloneLevel(level) {
  return {
    ...level,
    terrain: level.terrain.map((p) => ({ ...p })),
    ramps: level.ramps.map((r) => ({ ...r })),
    obstacles: level.obstacles.map((o) => ({ ...o, crushed: false })),
    collectibles: level.collectibles.map((c) => ({ ...c, collected: false })),
  };
}
