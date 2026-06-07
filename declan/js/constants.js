const C = {
  WIDTH: 900,
  HEIGHT: 600,
  TOTAL_LAPS: 3,
  AI_COUNT: 3,
  OFF_ROAD_PENALTY: 0.12,   // multiplier when off track — crawl speed to discourage leaving the road
  RUBBER_BAND_DISTANCE: 200, // pixels ahead/behind before rubber-banding kicks in
  RUBBER_BAND_BOOST: 0.15,  // fraction of maxSpeed added/removed

  COLORS: {
    desertRoad: '#c8a96e',
    desertBorder: '#8b6914',
    desertBg: '#e8c87a',
    jungleRoad: '#3a3a3a',
    jungleBorder: '#1a4a1a',
    jungleBg: '#2a5a2a',
    hud: 'rgba(10,10,30,0.65)',
    hudText: '#ffffff',
  },
};

function formatTime(seconds) {
  if (seconds === Infinity || !seconds) return '--:--.--';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 100);
  return `${m}:${String(s).padStart(2,'0')}.${String(ms).padStart(2,'0')}`;
}
