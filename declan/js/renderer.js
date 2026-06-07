const Renderer = (() => {
  let canvas, ctx;

  function init(canvasEl) {
    canvas = canvasEl;
    ctx = canvas.getContext('2d');
    canvas.width = C.WIDTH;
    canvas.height = C.HEIGHT;
  }

  function clear(bgColor) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, C.WIDTH, C.HEIGHT);
  }

  // Draw the road as a thick rounded stroke along waypoints
  function drawTrack(track) {
    const { waypoints, trackWidth, roadColor, borderColor, bgColor } = track;

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, C.WIDTH, C.HEIGHT);

    // Border (slightly wider)
    _strokePath(waypoints, trackWidth + 10, borderColor);

    // Road surface
    _strokePath(waypoints, trackWidth, roadColor);

    // Center dashed line
    ctx.save();
    ctx.setLineDash([20, 15]);
    _strokePath(waypoints, 2, 'rgba(255,255,255,0.35)');
    ctx.setLineDash([]);
    ctx.restore();

    // Start/finish line
    const wp0 = waypoints[0];
    const wp1 = waypoints[1];
    const perpAngle = Math.atan2(wp1.y - wp0.y, wp1.x - wp0.x) + Math.PI / 2;
    const hw = trackWidth / 2;
    ctx.save();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(wp0.x + Math.cos(perpAngle) * hw, wp0.y + Math.sin(perpAngle) * hw);
    ctx.lineTo(wp0.x - Math.cos(perpAngle) * hw, wp0.y - Math.sin(perpAngle) * hw);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  function _strokePath(waypoints, width, color) {
    ctx.beginPath();
    ctx.moveTo(waypoints[0].x, waypoints[0].y);
    for (let i = 1; i < waypoints.length; i++) {
      ctx.lineTo(waypoints[i].x, waypoints[i].y);
    }
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  }

  function drawScenery(track) {
    for (const item of track.scenery) {
      if (item.type === 'cactus') _drawCactus(item.x, item.y);
      if (item.type === 'tree')   _drawTree(item.x, item.y);
    }
  }

  function _drawCactus(x, y) {
    ctx.fillStyle = '#4a8a3a';
    // Main trunk
    ctx.beginPath();
    ctx.roundRect(x - 4, y - 18, 8, 22, 4);
    ctx.fill();
    // Left arm
    ctx.beginPath();
    ctx.roundRect(x - 12, y - 10, 10, 6, 3);
    ctx.fill();
    // Right arm
    ctx.beginPath();
    ctx.roundRect(x + 2, y - 14, 10, 6, 3);
    ctx.fill();
  }

  function _drawTree(x, y) {
    // Trunk
    ctx.fillStyle = '#5a3a1a';
    ctx.beginPath();
    ctx.roundRect(x - 4, y - 4, 8, 14, 2);
    ctx.fill();
    // Canopy
    ctx.fillStyle = '#1a6a1a';
    ctx.beginPath();
    ctx.arc(x, y - 12, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2a8a2a';
    ctx.beginPath();
    ctx.arc(x - 5, y - 16, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawBike(bike) {
    ctx.save();
    ctx.translate(bike.x, bike.y);
    ctx.rotate(bike.angle);

    const hw = bike.width / 2;
    const hl = bike.length / 2;

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.beginPath();
    ctx.ellipse(2, 2, hl, hw, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body
    ctx.fillStyle = bike.bodyColor;
    ctx.beginPath();
    ctx.roundRect(-hl, -hw, bike.length, bike.width, hw);
    ctx.fill();

    // Accent stripe
    ctx.fillStyle = bike.accentColor;
    ctx.beginPath();
    ctx.roundRect(-hl * 0.3, -hw * 0.4, hl * 0.6, hw * 0.8, hw * 0.3);
    ctx.fill();

    // Headlight
    ctx.fillStyle = '#ffffaa';
    ctx.beginPath();
    ctx.arc(hl - 3, 0, 3, 0, Math.PI * 2);
    ctx.fill();

    // Wheels
    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.ellipse(-hl + 4, 0, 5, hw * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(hl - 4, 0, 5, hw * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawHUD(state) {
    const { mode, currentLap, position, lapTime, bestLap, aiCount } = state;
    const pad = 12, lineH = 22;
    const w = 160, h = mode === 'race' ? 100 : 80;

    // Panel
    ctx.fillStyle = C.COLORS.hud;
    ctx.beginPath();
    ctx.roundRect(pad, pad, w, h, 10);
    ctx.fill();

    ctx.fillStyle = C.COLORS.hudText;
    ctx.font = 'bold 14px system-ui';
    const x = pad + 12;
    let y = pad + 22;

    ctx.fillText(`Lap: ${Math.min(currentLap, C.TOTAL_LAPS)} / ${C.TOTAL_LAPS}`, x, y); y += lineH;
    if (mode === 'race') {
      ctx.fillText(`Position: ${position} / ${aiCount + 1}`, x, y); y += lineH;
    }
    ctx.fillText(`Time: ${formatTime(lapTime)}`, x, y); y += lineH;
    if (bestLap < Infinity) ctx.fillText(`Best: ${formatTime(bestLap)}`, x, y);
  }

  return { init, clear, drawTrack, drawScenery, drawBike, drawHUD };
})();
