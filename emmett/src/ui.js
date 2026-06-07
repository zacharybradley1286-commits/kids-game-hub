// ui.js — screen navigation, dynamic menu building, and HUD updates.
// Holds no game logic; it calls into the Game instance (set via setGame).

import { TRUCKS, getTruck } from "./trucks.js";
import { drawTruckShape as drawShape } from "./renderer.js";
import { LEVELS } from "./levels.js";
import { Storage } from "./storage.js";
import { Audio } from "./audio.js";
import { session } from "./state.js";

export class UI {
  constructor() {
    this.game = null;
    this.screens = [...document.querySelectorAll(".screen")];
    this.hud = document.getElementById("hud");
    this.pendingTruckId = session.truckId; // selection before "confirm"
    this._cacheHud();
    this._buildTrucks();
    this._buildLevels();
    this._wireButtons();
    this._refreshModeButtons();
    this._refreshSoundButton();
    this.showScreen("screen-menu");
  }

  setGame(game) {
    this.game = game;
  }

  // ---------- Screen management ----------
  showScreen(id) {
    for (const s of this.screens) s.classList.toggle("active", s.id === id);
  }
  hideScreens() {
    for (const s of this.screens) s.classList.remove("active");
  }

  // ---------- HUD ----------
  _cacheHud() {
    this.el = {
      score: document.getElementById("hud-score"),
      bolts: document.getElementById("hud-bolts"),
      timerWrap: document.getElementById("hud-timer-wrap"),
      timer: document.getElementById("hud-timer"),
      truck: document.getElementById("hud-truck"),
      level: document.getElementById("hud-level"),
      damageWrap: document.getElementById("hud-damage-wrap"),
      damageFill: document.getElementById("hud-damage-fill"),
    };
  }

  showHud(game) {
    this.hideScreens();
    this.hud.classList.remove("hidden");
    const truck = getTruck(session.truckId);
    this.el.truck.textContent = "🚚 " + truck.name;
    this.el.level.textContent = game.level.name;
    const showDamage = game.mode === "normal" && !game.opts.freeDrive;
    this.el.damageWrap.classList.toggle("hidden", !showDamage);
    this.el.timerWrap.classList.toggle("hidden", !game.level.hasTimer);
  }

  hideHud() {
    this.hud.classList.add("hidden");
  }

  updateHud(game) {
    this.el.score.textContent = Math.floor(game.score);
    this.el.bolts.textContent = game.bolts;
    if (game.level.hasTimer) {
      this.el.timer.textContent = (game.elapsed / 1000).toFixed(1) + "s";
    }
    if (game.mode === "normal" && !game.opts.freeDrive) {
      const d = game.truck.damage;
      this.el.damageFill.style.width = d + "%";
      this.el.damageFill.style.background =
        d < 31 ? "var(--good)" : d < 61 ? "var(--warn)" : "var(--bad)";
    }
  }

  // ---------- Result screen ----------
  showResult(game, info) {
    const title = document.getElementById("result-title");
    const stats = document.getElementById("result-stats");
    const nextBtn = document.getElementById("next-level-btn");

    title.textContent = info.won ? "🏁 Level Complete!" : "💥 Game Over";

    let html = `<div>Score: <span class="big">${Math.floor(game.score)}</span></div>`;
    html += `<div>Bolts collected: ${game.bolts}</div>`;
    html += `<div>Cars crushed: ${game.crushes}</div>`;
    if (game.level.endless || game.opts.freeDrive) {
      html += `<div>Distance: ${Math.floor(info.distanceMeters)} m</div>`;
    }
    if (info.timeBonus > 0) html += `<div>Time bonus: +${info.timeBonus}</div>`;
    if (info.newRecord) html += `<div style="color:var(--accent)">⭐ New Best!</div>`;
    stats.innerHTML = html;

    // Show "Next Level" only when there is a next handcrafted level and we won.
    const idx = LEVELS.findIndex((l) => l.id === game.level.id);
    const hasNext = info.won && idx >= 0 && idx < LEVELS.length - 1;
    nextBtn.classList.toggle("hidden", !hasNext);
    this._nextLevelId = hasNext ? LEVELS[idx + 1].id : null;

    this.hideHud();
    this.showScreen("screen-result");
  }

  // ---------- Build truck cards ----------
  _buildTrucks() {
    const grid = document.getElementById("truck-grid");
    grid.innerHTML = "";
    for (const t of TRUCKS) {
      const card = document.createElement("div");
      card.className = "truck-card" + (t.id === this.pendingTruckId ? " selected" : "");
      card.dataset.truckId = t.id;

      const canvas = document.createElement("canvas");
      canvas.width = 180;
      canvas.height = 90;
      card.appendChild(canvas);
      const ctx = canvas.getContext("2d");
      ctx.translate(90, 55);
      drawShape(ctx, t, 1.0);

      const h = document.createElement("h3");
      h.textContent = t.name;
      card.appendChild(h);

      for (const [label, key] of [
        ["Speed", "speed"], ["Accel", "acceleration"],
        ["Jump", "jump"], ["Tough", "durability"], ["Grip", "grip"],
      ]) {
        const row = document.createElement("div");
        row.className = "stat";
        row.innerHTML = `<span>${label}</span><div class="bar"><i style="width:${t[key] * 10}%"></i></div>`;
        card.appendChild(row);
      }

      const blurb = document.createElement("p");
      blurb.className = "hint";
      blurb.style.marginTop = "8px";
      blurb.textContent = t.blurb;
      card.appendChild(blurb);

      card.addEventListener("click", () => {
        this.pendingTruckId = t.id;
        for (const c of grid.children) c.classList.toggle("selected", c.dataset.truckId === t.id);
      });

      grid.appendChild(card);
    }
  }

  // ---------- Build level cards ----------
  _buildLevels() {
    const grid = document.getElementById("level-grid");
    grid.innerHTML = "";
    for (const l of LEVELS) {
      const card = document.createElement("div");
      card.className = "level-card";
      const best = Storage.get("bestScores")[l.id] || 0;
      card.innerHTML = `<h3>${l.name}</h3><p>${l.description}</p>` +
        `<div class="best">Best: ${best}</div>`;
      card.addEventListener("click", () => {
        this._startLevel(l.id);
      });
      grid.appendChild(card);
    }
    // Endless card
    const e = document.createElement("div");
    e.className = "level-card";
    const bestE = Storage.get("bestEndless") || 0;
    e.innerHTML = `<h3>Endless Mode</h3><p>Drive forever — it keeps getting harder!</p>` +
      `<div class="best">Best: ${bestE} m</div>`;
    e.addEventListener("click", () => this._startEndless());
    grid.appendChild(e);
  }

  refreshLevelBests() {
    this._buildLevels();
  }

  // ---------- Mode + sound buttons ----------
  _refreshModeButtons() {
    const hint = document.getElementById("mode-hint");
    for (const b of document.querySelectorAll(".mode-btn")) {
      b.classList.toggle("selected", b.dataset.mode === session.mode);
    }
    hint.textContent = session.mode === "kid"
      ? "Kid-Safe: no losing, auto-recovers from flips, no damage. Great for little kids."
      : "Normal: crashes cause damage, too much damage ends the run. More challenge!";
  }

  _refreshSoundButton() {
    const btn = document.getElementById("sound-btn");
    btn.textContent = "Sound: " + (session.sound ? "ON" : "OFF");
    Audio.setEnabled(session.sound);
  }

  // ---------- Start helpers ----------
  _startLevel(levelId) {
    session.levelId = levelId;
    session.freeDrive = false;
    session.endless = false;
    this.game.start({ levelId, freeDrive: false, endless: false });
  }
  _startEndless() {
    session.endless = true;
    this.game.start({ endless: true });
  }
  _startFreeDrive() {
    // Free drive uses level 1 terrain with no finish / no failure.
    this.game.start({ levelId: LEVELS[0].id, freeDrive: true });
  }

  // ---------- Button wiring ----------
  _wireButtons() {
    document.getElementById("ui").addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;

      // mode buttons
      if (btn.classList.contains("mode-btn")) {
        session.mode = btn.dataset.mode;
        Storage.set("mode", session.mode);
        this._refreshModeButtons();
        return;
      }

      const action = btn.dataset.action;
      switch (action) {
        case "play": this.showScreen("screen-levels"); break;
        case "endless": this._startEndless(); break;
        case "freedrive": this._startFreeDrive(); break;
        case "trucks": this.pendingTruckId = session.truckId; this._buildTrucks(); this.showScreen("screen-trucks"); break;
        case "settings": this._refreshModeButtons(); this.showScreen("screen-settings"); break;
        case "instructions": this.showScreen("screen-instructions"); break;
        case "back": this.refreshLevelBests(); this.showScreen("screen-menu"); break;

        case "confirm-truck":
          session.truckId = this.pendingTruckId;
          Storage.set("truckId", session.truckId);
          this.showScreen("screen-menu");
          break;

        case "toggle-sound":
          session.sound = !session.sound;
          Storage.set("sound", session.sound);
          this._refreshSoundButton();
          break;

        case "resume": this.game.resume(); break;
        case "restart": this.game.restart(); break;
        case "to-menu":
          this.game.stop();
          this.refreshLevelBests();
          this.showScreen("screen-menu");
          break;
        case "next-level":
          if (this._nextLevelId) this._startLevel(this._nextLevelId);
          break;
      }
    });
  }
}
