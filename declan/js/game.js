const Game = (() => {
  // --- State ---
  let state = 'MAIN_MENU'; // MAIN_MENU | TRACK_SELECT | BIKE_SELECT | COUNTDOWN | RACING | PAUSED | RESULTS
  let mode = 'race';       // 'race' | 'trial'
  let selectedTrack = 0;
  let selectedBike = 0;

  let player = null;
  let aiRacers = [];
  let track = null;

  let lapStartTime = 0;
  let raceStartTime = 0;
  let bestLap = Infinity;
  let lapTime = 0;
  let hasPassedHalfway = false;
  let pausedAt = 0;

  let countdownValue = 3;
  let countdownTimer = 0;

  let lastTimestamp = null;
  let rafId = null;

  const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false,
                  w: false, s: false, a: false, d: false };

  // --- Init ---
  function init() {
    const canvas = document.getElementById('gameCanvas');
    Renderer.init(canvas);

    // Keyboard
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') { togglePause(); return; }
      if (e.key === 'r' || e.key === 'R') { resetToTrack(); return; }
      if (e.key in keys) { keys[e.key] = true; e.preventDefault(); }
    });
    window.addEventListener('keyup', e => { if (e.key in keys) keys[e.key] = false; });

    // Menu buttons
    document.getElementById('btn-race').addEventListener('click', () => { mode = 'race'; UI.show('track'); });
    document.getElementById('btn-trial').addEventListener('click', () => { mode = 'trial'; UI.show('track'); });

    document.querySelectorAll('.track-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedTrack = parseInt(btn.dataset.track);
        UI.show('bike');
      });
    });

    document.querySelectorAll('.bike-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedBike = parseInt(btn.dataset.bike);
        startCountdown();
      });
    });

    document.getElementById('btn-again').addEventListener('click', () => {
      UI.show('bike');
    });

    document.getElementById('btn-menu').addEventListener('click', () => {
      UI.show('main');
      state = 'MAIN_MENU';
    });

    document.getElementById('btn-resume').addEventListener('click', () => resumeRace());
    document.getElementById('btn-exit-race').addEventListener('click', () => {
      UI.show('main');
      state = 'MAIN_MENU';
      player = null;
      aiRacers = [];
    });

    UI.show('main');
    requestAnimationFrame(loop);
  }

  // --- Countdown ---
  function startCountdown() {
    track = TRACKS[selectedTrack];
    const bikeDef = BIKES[selectedBike];
    const sp = track.startPosition;

    player = {
      ...bikeDef,
      x: sp.x,
      y: sp.y,
      angle: track.startAngle,
      speed: 0,
      lapCount: 0,
      raceTime: 0,
      isAI: false,
      name: 'You',
    };

    aiRacers = [];
    if (mode === 'race') {
      const offsets = [{x:-30,y:0},{x:30,y:0},{x:0,y:30}];
      for (let i = 0; i < C.AI_COUNT; i++) {
        aiRacers.push(AI.create(
          (selectedBike + 1) % 2,
          sp.x, sp.y, track.startAngle,
          offsets[i]
        ));
      }
    }

    bestLap = Infinity;
    lapTime = 0;
    hasPassedHalfway = false;
    countdownValue = 3;
    countdownTimer = 0;
    state = 'COUNTDOWN';
    UI.show('countdown');
    document.getElementById('countdown-text').textContent = '3';
  }

  // --- Main Loop ---
  function loop(ts) {
    rafId = requestAnimationFrame(loop);
    if (!lastTimestamp) { lastTimestamp = ts; return; }
    const dt = Math.min((ts - lastTimestamp) / 1000, 0.05); // cap at 50ms
    lastTimestamp = ts;

    if (state === 'COUNTDOWN') {
      updateCountdown(dt);
    } else if (state === 'RACING') {
      updateRacing(dt);
    }

    render();
  }

  // --- Reset to track ---
  function resetToTrack() {
    if (state !== 'RACING' || !player || !track) return;
    const idx = closestWaypointIndex(player.x, player.y, track.waypoints);
    const wp = track.waypoints[idx];
    const next = track.waypoints[(idx + 1) % track.waypoints.length];
    player.x = wp.x;
    player.y = wp.y;
    player.angle = Math.atan2(next.y - wp.y, next.x - wp.x);
    player.speed = 0;
  }

  // --- Pause ---
  function togglePause() {
    if (state === 'RACING') {
      state = 'PAUSED';
      pausedAt = performance.now() / 1000;
      UI.show('pause');
    } else if (state === 'PAUSED') {
      resumeRace();
    }
  }

  function resumeRace() {
    // Advance start times by the paused duration so lap/race timers don't count idle time
    const pauseDuration = (performance.now() / 1000) - pausedAt;
    lapStartTime += pauseDuration;
    raceStartTime += pauseDuration;
    state = 'RACING';
    UI.hideAll();
    UI.showRacingHint();
  }

  // --- Countdown update ---
  function updateCountdown(dt) {
    countdownTimer += dt;
    if (countdownTimer >= 1) {
      countdownTimer = 0;
      countdownValue--;
      if (countdownValue <= 0) {
        document.getElementById('countdown-text').textContent = 'GO!';
        setTimeout(() => {
          UI.hideAll();
          UI.showRacingHint();
          state = 'RACING';
          lapStartTime = performance.now() / 1000;
          raceStartTime = lapStartTime;
        }, 600);
      } else {
        document.getElementById('countdown-text').textContent = countdownValue;
      }
    }
  }

  // --- Racing update ---
  function updateRacing(dt) {
    const input = {
      accel: keys.ArrowUp   || keys.w,
      brake: keys.ArrowDown || keys.s,
      left:  keys.ArrowLeft || keys.a,
      right: keys.ArrowRight|| keys.d,
    };

    player = updateBike(player, input, track.trackWidth, track.waypoints, dt);
    checkLap(player);

    if (mode === 'race') {
      const playerWpIdx = closestWaypointIndex(player.x, player.y, track.waypoints);
      aiRacers = aiRacers.map(ai =>
        AI.update(ai, track.waypoints, track.trackWidth, player.x, player.y, player.lapCount, playerWpIdx, dt)
      );
    }

    // Check race end
    if (player.lapCount >= C.TOTAL_LAPS) {
      endRace();
    }
  }

  function checkLap(bike) {
    lapTime = (performance.now() / 1000) - lapStartTime;

    const wpIdx = closestWaypointIndex(bike.x, bike.y, track.waypoints);
    const halfWay = Math.floor(track.waypoints.length / 2);

    // Set flag once player has passed halfway around the track
    if (wpIdx >= halfWay) hasPassedHalfway = true;

    // Detect crossing start/finish line (near waypoint 0)
    const finish = track.waypoints[0];
    const distToFinish = Math.hypot(bike.x - finish.x, bike.y - finish.y);
    const nearFinish = distToFinish < track.trackWidth * 0.7;

    if (nearFinish && hasPassedHalfway) {
      if (lapTime < bestLap) bestLap = lapTime;
      player.lapCount++;
      lapStartTime = performance.now() / 1000;
      lapTime = 0;
      hasPassedHalfway = false; // must pass halfway again before next lap counts
    }
  }

  function endRace() {
    state = 'RESULTS';
    const totalTime = (performance.now() / 1000) - raceStartTime;

    if (mode === 'race') {
      // Build positions array: player + AI sorted by laps desc then waypointIdx desc
      const all = [
        { name: 'You', lapCount: player.lapCount, waypointIdx: closestWaypointIndex(player.x, player.y, track.waypoints) },
        ...aiRacers.map((ai, i) => ({ name: `Racer ${i+1}`, lapCount: ai.lapCount, waypointIdx: ai.waypointIdx })),
      ];
      all.sort((a, b) => b.lapCount !== a.lapCount ? b.lapCount - a.lapCount : b.waypointIdx - a.waypointIdx);
      UI.showResults({ mode: 'race', positions: all, bestLap, totalTime });
    } else {
      UI.showResults({ mode: 'trial', positions: [], bestLap, totalTime });
    }
  }

  // --- Render ---
  function render() {
    if (!track) {
      Renderer.clear('#1a1a2e');
      return;
    }

    Renderer.drawTrack(track);
    Renderer.drawScenery(track);

    if (mode === 'race') {
      aiRacers.forEach(ai => Renderer.drawBike(ai));
    }

    if (player && (state === 'RACING' || state === 'COUNTDOWN' || state === 'RESULTS')) {
      Renderer.drawBike(player);
    }

    if (state === 'RACING') {
      const position = mode === 'race' ? _calcPosition() : 0;
      Renderer.drawHUD({
        mode,
        currentLap: player.lapCount + 1,
        position,
        lapTime,
        bestLap,
        aiCount: C.AI_COUNT,
      });
    }
  }

  function _calcPosition() {
    const playerWp = closestWaypointIndex(player.x, player.y, track.waypoints);
    const playerProgress = player.lapCount * track.waypoints.length + playerWp;
    let ahead = 0;
    for (const ai of aiRacers) {
      const aiProgress = ai.lapCount * track.waypoints.length + ai.waypointIdx;
      if (aiProgress > playerProgress) ahead++;
    }
    return ahead + 1;
  }

  return { init };
})();

// Boot
window.addEventListener('DOMContentLoaded', () => Game.init());
