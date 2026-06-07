// audio.js — tiny WebAudio sound engine. No external files; all sounds are
// synthesized so there are no licensing/asset issues. If you'd rather load
// real sound files later, replace the play* functions but keep the API.

let ctx = null;
let enabled = true;
let engineOsc = null;
let engineGain = null;

function ensureCtx() {
  if (!ctx) {
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch {
      ctx = null;
    }
  }
  // Browsers suspend audio until a user gesture; resume opportunistically.
  if (ctx && ctx.state === "suspended") ctx.resume();
  return ctx;
}

// A short synthesized blip. type: oscillator wave.
function blip(freq, dur, type = "square", vol = 0.2, slideTo = null) {
  if (!enabled) return;
  const c = ensureCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, c.currentTime);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, c.currentTime + dur);
  gain.gain.setValueAtTime(vol, c.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
  osc.connect(gain).connect(c.destination);
  osc.start();
  osc.stop(c.currentTime + dur);
}

export const Audio = {
  setEnabled(v) {
    enabled = v;
    if (!v) this.stopEngine();
  },
  isEnabled() {
    return enabled;
  },

  // Continuous engine hum whose pitch tracks speed (0..1).
  startEngine() {
    if (!enabled) return;
    const c = ensureCtx();
    if (!c || engineOsc) return;
    engineOsc = c.createOscillator();
    engineGain = c.createGain();
    engineOsc.type = "sawtooth";
    engineOsc.frequency.value = 60;
    engineGain.gain.value = 0.0;
    engineOsc.connect(engineGain).connect(c.destination);
    engineOsc.start();
  },
  updateEngine(speed01) {
    if (!engineOsc || !engineGain || !ctx) return;
    const f = 55 + speed01 * 120;
    engineOsc.frequency.setTargetAtTime(f, ctx.currentTime, 0.05);
    engineGain.gain.setTargetAtTime(enabled ? 0.04 + speed01 * 0.05 : 0, ctx.currentTime, 0.05);
  },
  stopEngine() {
    if (engineOsc) {
      try { engineOsc.stop(); } catch { /* already stopped */ }
      engineOsc.disconnect();
      engineOsc = null;
      engineGain = null;
    }
  },

  jump() { blip(300, 0.18, "square", 0.18, 620); },
  collect() { blip(880, 0.1, "sine", 0.2, 1320); },
  crush() { blip(140, 0.18, "sawtooth", 0.22, 60); },
  crash() { blip(90, 0.3, "sawtooth", 0.25, 40); },
  complete() {
    blip(523, 0.12, "square", 0.2);
    setTimeout(() => blip(659, 0.12, "square", 0.2), 130);
    setTimeout(() => blip(784, 0.2, "square", 0.2), 260);
  },
  gameover() {
    blip(330, 0.2, "square", 0.2, 160);
    setTimeout(() => blip(160, 0.35, "square", 0.2, 80), 200);
  },
};
