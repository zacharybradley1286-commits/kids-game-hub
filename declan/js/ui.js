const UI = (() => {
  const screens = {
    main:      document.getElementById('screen-main'),
    track:     document.getElementById('screen-track'),
    bike:      document.getElementById('screen-bike'),
    countdown: document.getElementById('screen-countdown'),
    pause:     document.getElementById('screen-pause'),
    results:   document.getElementById('screen-results'),
  };
  const pauseHint = document.getElementById('pause-hint');

  function show(name) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    if (screens[name]) screens[name].classList.remove('hidden');
    // Show ESC hint only during active racing
    if (name === 'none') pauseHint.classList.remove('hidden');
    else pauseHint.classList.add('hidden');
  }

  function showRacingHint() {
    pauseHint.classList.remove('hidden');
  }

  function hide(name) {
    if (screens[name]) screens[name].classList.add('hidden');
  }

  function hideAll() {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
  }

  function showResults({ mode, positions, bestLap, totalTime }) {
    const title = document.getElementById('results-title');
    const podium = document.getElementById('podium');
    const stats = document.getElementById('results-stats');

    title.textContent = mode === 'race' ? 'Race Results' : 'Time Trial Results';

    if (mode === 'race' && positions.length >= 3) {
      const grades = ['gold', 'silver', 'bronze'];
      const heights = [80, 60, 45];
      const order = [1, 0, 2]; // visual order: 2nd, 1st, 3rd
      podium.innerHTML = order.map(i => {
        const p = positions[i];
        return `<div class="podium-place">
          <span>${p ? p.name : '---'}</span>
          <div class="podium-block ${grades[i]}" style="height:${heights[i]}px"></div>
          <span>${i + 1}${['st','nd','rd'][i]}</span>
        </div>`;
      }).join('');
    } else {
      podium.innerHTML = '';
    }

    stats.innerHTML = `Best Lap: ${formatTime(bestLap)}<br>Total Time: ${formatTime(totalTime)}`;
    show('results');
  }

  return { show, hide, hideAll, showResults, showRacingHint };
})();
