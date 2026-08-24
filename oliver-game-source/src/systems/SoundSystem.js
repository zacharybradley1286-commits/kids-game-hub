// Procedural audio using Web Audio API — no external files needed

class SoundSystem {
  constructor() {
    this._ctx = null
    this._sfxBus = null
    this._musicBus = null
    this._running = false
    this._beatIndex = 0
    this._musicTimeout = null
    this._mineTimer = 0
  }

  _init() {
    if (this._ctx) return
    this._ctx = new (window.AudioContext || window.webkitAudioContext)()

    const master = this._ctx.createGain()
    master.gain.value = 1.0
    master.connect(this._ctx.destination)

    this._sfxBus = this._ctx.createGain()
    this._sfxBus.gain.value = 0.8
    this._sfxBus.connect(master)

    this._musicBus = this._ctx.createGain()
    this._musicBus.gain.value = 0.22
    this._musicBus.connect(master)
  }

  _noise(duration, freq, gain) {
    const ctx = this._ctx
    const len = Math.floor(ctx.sampleRate * duration)
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1

    const src = ctx.createBufferSource()
    src.buffer = buf

    const filt = ctx.createBiquadFilter()
    filt.type = 'bandpass'
    filt.frequency.value = freq
    filt.Q.value = 1.2

    const g = ctx.createGain()
    g.gain.setValueAtTime(gain, ctx.currentTime)
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)

    src.connect(filt); filt.connect(g); g.connect(this._sfxBus)
    src.start()
  }

  // Periodic tick played while holding left-click on a block
  playMine() {
    this._init()
    const ctx = this._ctx
    const now = ctx.currentTime

    // Low thud: triangle sweep down
    const osc = ctx.createOscillator()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(110, now)
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.09)
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.45, now)
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.1)
    osc.connect(g); g.connect(this._sfxBus)
    osc.start(now); osc.stop(now + 0.1)

    // Gritty crunch noise
    this._noise(0.07, 700, 0.28)
  }

  // Played when a block fully breaks
  playBlockBreak() {
    this._init()
    const ctx = this._ctx
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(70, now)
    osc.frequency.exponentialRampToValueAtTime(18, now + 0.22)
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.7, now)
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.22)
    osc.connect(g); g.connect(this._sfxBus)
    osc.start(now); osc.stop(now + 0.22)

    this._noise(0.15, 350, 0.5)
    this._noise(0.07, 1400, 0.18)
  }

  // Footstep sound — varies by surface type
  playStep(surface = 'grass') {
    this._init()
    const ctx = this._ctx
    const now = ctx.currentTime
    if (surface === 'stone' || surface === 'cobble') {
      const o = ctx.createOscillator(); o.type = 'triangle'
      o.frequency.setValueAtTime(120, now); o.frequency.exponentialRampToValueAtTime(60, now+0.04)
      const g = ctx.createGain(); g.gain.setValueAtTime(0.18, now); g.gain.exponentialRampToValueAtTime(0.001, now+0.06)
      o.connect(g); g.connect(this._sfxBus); o.start(now); o.stop(now+0.06)
      this._noise(0.05, 1200, 0.09)
    } else if (surface === 'sand' || surface === 'gravel') {
      this._noise(0.09, 600, 0.16); this._noise(0.05, 300, 0.09)
    } else if (surface === 'wood') {
      const o = ctx.createOscillator(); o.type = 'triangle'
      o.frequency.setValueAtTime(200, now); o.frequency.exponentialRampToValueAtTime(80, now+0.06)
      const g = ctx.createGain(); g.gain.setValueAtTime(0.2, now); g.gain.exponentialRampToValueAtTime(0.001, now+0.08)
      o.connect(g); g.connect(this._sfxBus); o.start(now); o.stop(now+0.08)
    } else {
      // Grass/dirt — soft thud + rustle
      const o = ctx.createOscillator(); o.type = 'triangle'
      o.frequency.setValueAtTime(90, now); o.frequency.exponentialRampToValueAtTime(40, now+0.07)
      const g = ctx.createGain(); g.gain.setValueAtTime(0.14, now); g.gain.exponentialRampToValueAtTime(0.001, now+0.1)
      o.connect(g); g.connect(this._sfxBus); o.start(now); o.stop(now+0.1)
      this._noise(0.06, 800, 0.07)
    }
  }

  // Played when weapon hits a mob or boss
  playHit() {
    this._init()
    const ctx = this._ctx
    const now = ctx.currentTime

    // Metallic thwack: sawtooth sweep
    const osc = ctx.createOscillator()
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(380, now)
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.1)

    const shape = ctx.createWaveShaper()
    const curve = new Float32Array(256)
    for (let i = 0; i < 256; i++) {
      const x = (i * 2) / 256 - 1
      curve[i] = (Math.PI + 40) * x / (Math.PI + 40 * Math.abs(x))
    }
    shape.curve = curve

    const g = ctx.createGain()
    g.gain.setValueAtTime(0.38, now)
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.13)

    osc.connect(shape); shape.connect(g); g.connect(this._sfxBus)
    osc.start(now); osc.stop(now + 0.13)

    // High snap
    this._noise(0.04, 3500, 0.22)
  }

  // Epic action music
  startMusic() {
    this._init()
    if (this._running) return
    this._running = true
    this._beatIndex = 0
    this._scheduleBeat()
  }

  stopMusic() {
    this._running = false
    clearTimeout(this._musicTimeout)
    if (this._ctx && this._musicBus) {
      const now = this._ctx.currentTime
      this._musicBus.gain.linearRampToValueAtTime(0, now + 1.5)
      setTimeout(() => { if (this._musicBus) this._musicBus.gain.value = 0.22 }, 2000)
    }
  }

  _kick(time) {
    const ctx = this._ctx
    const osc = ctx.createOscillator()
    osc.frequency.setValueAtTime(180, time)
    osc.frequency.exponentialRampToValueAtTime(28, time + 0.18)
    const g = ctx.createGain()
    g.gain.setValueAtTime(1.4, time)
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.22)
    osc.connect(g); g.connect(this._musicBus)
    osc.start(time); osc.stop(time + 0.22)
  }

  _snare(time) {
    const ctx = this._ctx
    // Noise burst
    const len = Math.floor(ctx.sampleRate * 0.18)
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1
    const src = ctx.createBufferSource()
    src.buffer = buf
    const filt = ctx.createBiquadFilter()
    filt.type = 'highpass'
    filt.frequency.value = 1800
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.55, time)
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.18)
    src.connect(filt); filt.connect(g); g.connect(this._musicBus)
    src.start(time)
    // Body tone
    const osc = ctx.createOscillator()
    osc.frequency.setValueAtTime(220, time)
    osc.frequency.exponentialRampToValueAtTime(100, time + 0.06)
    const og = ctx.createGain()
    og.gain.setValueAtTime(0.35, time)
    og.gain.exponentialRampToValueAtTime(0.001, time + 0.06)
    osc.connect(og); og.connect(this._musicBus)
    osc.start(time); osc.stop(time + 0.06)
  }

  _hihat(time, vol = 1) {
    const ctx = this._ctx
    const len = Math.floor(ctx.sampleRate * 0.035)
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1
    const src = ctx.createBufferSource()
    src.buffer = buf
    const filt = ctx.createBiquadFilter()
    filt.type = 'highpass'
    filt.frequency.value = 9000
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.12 * vol, time)
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.035)
    src.connect(filt); filt.connect(g); g.connect(this._musicBus)
    src.start(time)
  }

  _bass(time, freq, dur) {
    const ctx = this._ctx
    const osc = ctx.createOscillator()
    osc.type = 'sawtooth'
    osc.frequency.value = freq
    const filt = ctx.createBiquadFilter()
    filt.type = 'lowpass'
    filt.frequency.value = 400
    filt.Q.value = 3
    const g = ctx.createGain()
    g.gain.setValueAtTime(0, time)
    g.gain.linearRampToValueAtTime(0.9, time + 0.025)
    g.gain.linearRampToValueAtTime(0.5, time + dur * 0.6)
    g.gain.linearRampToValueAtTime(0, time + dur)
    osc.connect(filt); filt.connect(g); g.connect(this._musicBus)
    osc.start(time); osc.stop(time + dur)
  }

  _pad(time, notes, dur) {
    const ctx = this._ctx
    for (const freq of notes) {
      for (const dt of [-6, 0, 6]) {
        const o = ctx.createOscillator()
        o.type = 'sawtooth'
        o.frequency.value = freq
        o.detune.value = dt
        const filt = ctx.createBiquadFilter()
        filt.type = 'lowpass'
        filt.frequency.value = 1800
        const g = ctx.createGain()
        g.gain.setValueAtTime(0, time)
        g.gain.linearRampToValueAtTime(0.045, time + 0.35)
        g.gain.linearRampToValueAtTime(0.025, time + dur * 0.8)
        g.gain.linearRampToValueAtTime(0, time + dur)
        o.connect(filt); filt.connect(g); g.connect(this._musicBus)
        o.start(time); o.stop(time + dur)
      }
    }
  }

  _melody(time, freq, dur) {
    const ctx = this._ctx
    const osc = ctx.createOscillator()
    osc.type = 'square'
    osc.frequency.value = freq
    // Light distortion for edge
    const shape = ctx.createWaveShaper()
    const curve = new Float32Array(64)
    for (let i = 0; i < 64; i++) {
      const x = (i * 2) / 64 - 1
      curve[i] = Math.tanh(x * 2.5) * 0.75
    }
    shape.curve = curve
    const g = ctx.createGain()
    g.gain.setValueAtTime(0, time)
    g.gain.linearRampToValueAtTime(0.28, time + 0.02)
    g.gain.linearRampToValueAtTime(0.18, time + dur * 0.65)
    g.gain.linearRampToValueAtTime(0, time + dur)
    osc.connect(shape); shape.connect(g); g.connect(this._musicBus)
    osc.start(time); osc.stop(time + dur)
  }

  _scheduleBeat() {
    if (!this._running) return
    const ctx = this._ctx
    const now = ctx.currentTime
    const bpm = 130
    const beat = 60 / bpm          // ~0.46s per beat
    const bar  = beat * 4

    // Epic minor progression: Dm → Bb → F → C
    const CHORDS = [
      { bass: 73.42, pad: [146.83, 174.61, 220.00, 293.66] },  // Dm
      { bass: 58.27, pad: [116.54, 146.83, 174.61, 233.08] },  // Bb
      { bass: 87.31, pad: [174.61, 220.00, 261.63, 349.23] },  // F
      { bass: 65.41, pad: [130.81, 164.81, 196.00, 261.63] },  // C
    ]

    // Heroic melody (D minor pentatonic + passing tones)
    const MELODY = [
      587.33, 0,      523.25, 493.88,
      440.00, 493.88, 440.00, 392.00,
      440.00, 0,      493.88, 523.25,
      587.33, 523.25, 440.00, 392.00,
    ]

    const bar4    = Math.floor(this._beatIndex / 4)
    const beatPos = this._beatIndex % 4
    const chord   = CHORDS[bar4 % CHORDS.length]

    // --- Drums ---
    // Kick: beats 0 and 2
    if (beatPos === 0 || beatPos === 2) this._kick(now)
    // Snare: beats 1 and 3
    if (beatPos === 1 || beatPos === 3) this._snare(now)
    // Hi-hat every beat + off-beat
    this._hihat(now)
    this._hihat(now + beat * 0.5, 0.5)

    // --- Bass (whole bar, retrigger on beat 0) ---
    if (beatPos === 0) this._bass(now, chord.bass, bar)

    // --- Pad (whole bar) ---
    if (beatPos === 0) this._pad(now, chord.pad, bar)

    // --- Melody ---
    const note = MELODY[this._beatIndex % MELODY.length]
    if (note) this._melody(now, note, beat * 0.75)

    this._beatIndex++
    this._musicTimeout = setTimeout(() => this._scheduleBeat(), (beat - 0.02) * 1000)
  }
}

export const sounds = new SoundSystem()
