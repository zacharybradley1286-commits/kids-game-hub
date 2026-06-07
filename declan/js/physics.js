// Returns index of the waypoint the bike is closest to
function closestWaypointIndex(x, y, waypoints) {
  let minDist = Infinity, minIdx = 0;
  for (let i = 0; i < waypoints.length; i++) {
    const dx = waypoints[i].x - x;
    const dy = waypoints[i].y - y;
    const d = dx * dx + dy * dy;
    if (d < minDist) { minDist = d; minIdx = i; }
  }
  return minIdx;
}

// Returns the next waypoint index (wraps around)
function nextWaypointIndex(current, waypoints) {
  return (current + 1) % waypoints.length;
}

// Perpendicular distance from point (px,py) to line segment (ax,ay)-(bx,by)
function distToSegment(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(px - ax, py - ay);
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

// Returns true if (x,y) is more than trackWidth/2 from the nearest road segment
function isOffRoad(x, y, waypoints, trackWidth) {
  const half = trackWidth / 2;
  const closest = closestWaypointIndex(x, y, waypoints);
  const prev = (closest - 1 + waypoints.length) % waypoints.length;
  const next = nextWaypointIndex(closest, waypoints);

  const d1 = distToSegment(x, y,
    waypoints[prev].x, waypoints[prev].y,
    waypoints[closest].x, waypoints[closest].y);
  const d2 = distToSegment(x, y,
    waypoints[closest].x, waypoints[closest].y,
    waypoints[next].x, waypoints[next].y);

  return Math.min(d1, d2) > half;
}

// Update a bike's position and angle based on input and dt (seconds)
// Returns new state object (does not mutate)
function updateBike(bike, input, trackWidth, waypoints, dt) {
  const offRoad = isOffRoad(bike.x, bike.y, waypoints, trackWidth);
  const speedCap = offRoad
    ? bike.maxSpeed * C.OFF_ROAD_PENALTY
    : bike.maxSpeed;

  let speed = bike.speed;
  let angle = bike.angle;

  if (input.accel) {
    speed = Math.min(speedCap, speed + bike.acceleration * dt);
  } else if (input.brake) {
    speed = Math.max(-bike.maxSpeed * 0.4, speed - bike.deceleration * 2 * dt);
  } else {
    // friction
    const friction = bike.deceleration * dt;
    speed = speed > 0
      ? Math.max(0, speed - friction)
      : Math.min(0, speed + friction);
  }

  // Cap speed if we drove off-road while going fast
  if (speed > speedCap) speed = speedCap;

  if (Math.abs(speed) > 5) {
    const dir = speed > 0 ? 1 : -1;
    if (input.left)  angle -= bike.turnRate * dt * dir;
    if (input.right) angle += bike.turnRate * dt * dir;
  }

  const margin = 20;
  return {
    ...bike,
    speed,
    angle,
    x: Math.max(margin, Math.min(C.WIDTH  - margin, bike.x + Math.cos(angle) * speed * dt)),
    y: Math.max(margin, Math.min(C.HEIGHT - margin, bike.y + Math.sin(angle) * speed * dt)),
  };
}
