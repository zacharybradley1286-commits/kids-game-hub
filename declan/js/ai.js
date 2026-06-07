const AI = (() => {
  // Create an AI bike instance
  function create(bikeIndex, startX, startY, startAngle, offset) {
    const def = BIKES[bikeIndex % BIKES.length];
    return {
      ...def,
      x: startX + offset.x,
      y: startY + offset.y,
      angle: startAngle,
      speed: 0,
      waypointIdx: 0,
      lapCount: 0,
      raceTime: 0,
      isAI: true,
      deviation: (Math.random() - 0.5) * 20, // lateral wander
    };
  }

  // Update a single AI bike toward its target waypoint
  function update(ai, waypoints, trackWidth, playerX, playerY, playerLapCount, playerWpIdx, dt) {
    const target = waypoints[ai.waypointIdx];
    const dx = target.x - ai.x + ai.deviation;
    const dy = target.y - ai.y;
    const targetAngle = Math.atan2(dy, dx);

    // Smoothly rotate toward target
    let da = targetAngle - ai.angle;
    while (da >  Math.PI) da -= Math.PI * 2;
    while (da < -Math.PI) da += Math.PI * 2;
    const maxTurn = ai.turnRate * dt;
    ai.angle += Math.max(-maxTurn, Math.min(maxTurn, da));

    // Rubber-banding: slow leaders, speed up trailers to keep races competitive
    const distToPlayer = Math.hypot(ai.x - playerX, ai.y - playerY);
    const aiProgress = ai.lapCount * waypoints.length + ai.waypointIdx;
    const playerProgress = playerLapCount * waypoints.length + playerWpIdx;
    const aheadOfPlayer = aiProgress > playerProgress;
    let speedMult = 1;
    if (distToPlayer > C.RUBBER_BAND_DISTANCE) {
      speedMult = aheadOfPlayer ? 1 - C.RUBBER_BAND_BOOST : 1 + C.RUBBER_BAND_BOOST;
    } else if (distToPlayer < 60) {
      speedMult = aheadOfPlayer ? 1 - C.RUBBER_BAND_BOOST : 1 + C.RUBBER_BAND_BOOST;
    }

    const targetSpeed = ai.maxSpeed * 0.88 * speedMult;
    ai.speed += (targetSpeed - ai.speed) * Math.min(1, dt * 2);

    ai.x += Math.cos(ai.angle) * ai.speed * dt;
    ai.y += Math.sin(ai.angle) * ai.speed * dt;

    // Advance to next waypoint when close enough
    const distToTarget = Math.hypot(target.x - ai.x, target.y - ai.y);
    if (distToTarget < trackWidth * 0.6) {
      const prevIdx = ai.waypointIdx;
      ai.waypointIdx = (ai.waypointIdx + 1) % waypoints.length;
      if (ai.waypointIdx === 0 && prevIdx !== 0) ai.lapCount++;
    }

    return ai;
  }

  return { create, update };
})();
