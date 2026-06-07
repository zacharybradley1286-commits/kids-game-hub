// input.js — keyboard handling. Tracks currently-held keys for the physics
// loop and fires one-shot callbacks for menu/action keys (R, P, Esc, M).

export const keys = {
  up: false,
  down: false,
  left: false,
  right: false,
};

const handlers = { restart: null, pause: null, menu: null };

export function onAction(name, fn) {
  handlers[name] = fn;
}

function setKey(code, val) {
  switch (code) {
    case "ArrowUp": keys.up = val; return true;
    case "ArrowDown": keys.down = val; return true;
    case "ArrowLeft": keys.left = val; return true;
    case "ArrowRight": keys.right = val; return true;
    default: return false;
  }
}

export function initInput() {
  window.addEventListener("keydown", (e) => {
    if (setKey(e.code, true)) {
      e.preventDefault();
      return;
    }
    // One-shot action keys (ignore auto-repeat)
    if (e.repeat) return;
    if (e.code === "KeyR") handlers.restart?.();
    else if (e.code === "KeyP" || e.code === "Escape") handlers.pause?.();
    else if (e.code === "KeyM") handlers.menu?.();
  });

  window.addEventListener("keyup", (e) => {
    if (setKey(e.code, false)) e.preventDefault();
  });

  // Safety: clear keys when window loses focus so the truck doesn't run off.
  window.addEventListener("blur", () => {
    keys.up = keys.down = keys.left = keys.right = false;
  });
}
