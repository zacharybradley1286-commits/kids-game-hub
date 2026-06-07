// main.js — entry point. Wires input, UI, and the game loop together.

import { initInput, onAction } from "./input.js";
import { UI } from "./ui.js";
import { Game } from "./game.js";

function boot() {
  const canvas = document.getElementById("game");
  const ui = new UI();
  const game = new Game(canvas, ui);
  ui.setGame(game);

  initInput();

  // In-game action keys delegate to the game, but only while a run is active.
  onAction("restart", () => {
    if (game.active || game.paused) game.restart();
  });
  onAction("pause", () => {
    if (!game.active && !game.paused) return;
    if (game.paused) game.resume();
    else game.pause();
  });
  onAction("menu", () => {
    if (game.active || game.paused) {
      game.stop();
      ui.refreshLevelBests();
      ui.showScreen("screen-menu");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
