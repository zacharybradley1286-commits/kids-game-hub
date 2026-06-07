// renderer.js — all canvas drawing. Everything is simple vector shapes so no
// image assets are required, but the code is organized so sprites could be
// swapped in later (replace the draw* helpers).

import { groundHeightAt, OBSTACLE_SIZES } from "./physics.js";

export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.camX = 0;
    this.camY = 0;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    // Handle high-DPI screens crisply.
    const dpr = window.devicePixelRatio || 1;
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w * dpr;
    this.canvas.height = this.h * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // Camera centers on the truck, biased so more is visible ahead.
  updateCamera(truck) {
    const targetX = truck.x - this.w * 0.35;
    this.camX += (targetX - this.camX) * 0.12;
    if (this.camX < 0) this.camX = 0;
    const targetY = truck.y - this.h * 0.6;
    this.camY += (targetY - this.camY) * 0.08;
    // keep ground visible
    if (this.camY > 80) this.camY = 80;
    if (this.camY < -260) this.camY = -260;
  }

  worldToScreenX(x) { return x - this.camX; }
  worldToScreenY(y) { return y - this.camY; }

  drawScene(level, truck) {
    const ctx = this.ctx;
    const bg = level.bg;

    // --- Sky ---
    const sky = ctx.createLinearGradient(0, 0, 0, this.h);
    sky.addColorStop(0, bg.sky);
    sky.addColorStop(1, bg.far);
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, this.w, this.h);

    // --- Parallax far hills ---
    this.drawHills(bg.far, 0.3, 120);
    this.drawHills(bg.ground, 0.55, 60);

    // --- Ground polygon ---
    this.drawGround(level);

    // --- Finish line ---
    if (isFinite(level.finishX)) this.drawFinish(level);

    // --- Ramps (drawn as triangular wedges sitting on the ground) ---
    for (const r of level.ramps) this.drawRamp(level, r);

    // --- Obstacles ---
    for (const obs of level.obstacles) this.drawObstacle(level, obs);

    // --- Collectibles (bolts) ---
    for (const c of level.collectibles) this.drawBolt(c);

    // --- Truck ---
    this.drawTruck(truck);
  }

  drawHills(color, factor, amp) {
    const ctx = this.ctx;
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    const baseY = this.h * 0.62;
    ctx.moveTo(0, this.h);
    for (let sx = 0; sx <= this.w; sx += 20) {
      const wx = (sx + this.camX * factor) * 0.01;
      const y = baseY - Math.sin(wx) * amp - Math.cos(wx * 0.5) * amp * 0.4;
      ctx.lineTo(sx, y);
    }
    ctx.lineTo(this.w, this.h);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  drawGround(level) {
    const ctx = this.ctx;
    const startWX = this.camX - 50;
    const endWX = this.camX + this.w + 50;

    ctx.beginPath();
    ctx.moveTo(this.worldToScreenX(startWX), this.h + 50);
    for (let wx = startWX; wx <= endWX; wx += 8) {
      const y = groundHeightAt(level, wx);
      ctx.lineTo(this.worldToScreenX(wx), this.worldToScreenY(y));
    }
    ctx.lineTo(this.worldToScreenX(endWX), this.h + 50);
    ctx.closePath();

    const grad = ctx.createLinearGradient(0, this.worldToScreenY(360), 0, this.h);
    grad.addColorStop(0, level.bg.ground);
    grad.addColorStop(1, level.bg.soil);
    ctx.fillStyle = grad;
    ctx.fill();

    // grass/dirt top line
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let wx = startWX; wx <= endWX; wx += 8) {
      const y = groundHeightAt(level, wx);
      const sx = this.worldToScreenX(wx);
      const sy = this.worldToScreenY(y);
      if (wx === startWX) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.stroke();
  }

  drawRamp(level, r) {
    const ctx = this.ctx;
    const gy = groundHeightAt(level, r.x + r.w);
    const x0 = this.worldToScreenX(r.x);
    const x1 = this.worldToScreenX(r.x + r.w);
    const yBase = this.worldToScreenY(gy);
    const yTop = this.worldToScreenY(gy - r.h);
    ctx.fillStyle = "#d98b3a";
    ctx.strokeStyle = "rgba(0,0,0,0.3)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x0, yBase);
    ctx.lineTo(x1, yBase);
    ctx.lineTo(x1, yTop);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // stripes
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    for (let i = 1; i < 4; i++) {
      const f = i / 4;
      ctx.fillRect(x1 - 6, yBase - (yBase - yTop) * f, 6, 4);
    }
  }

  drawObstacle(level, obs) {
    const ctx = this.ctx;
    const size = OBSTACLE_SIZES[obs.type] || OBSTACLE_SIZES.cone;
    const gy = groundHeightAt(level, obs.x);
    const sx = this.worldToScreenX(obs.x);
    const sy = this.worldToScreenY(gy);

    if (obs.crushed) {
      // squished pancake
      ctx.fillStyle = "#888";
      ctx.beginPath();
      ctx.ellipse(sx, sy - 4, size.w, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    switch (obs.type) {
      case "cone": {
        ctx.fillStyle = "#ff7a1a";
        ctx.beginPath();
        ctx.moveTo(sx, sy - size.h);
        ctx.lineTo(sx - size.w, sy);
        ctx.lineTo(sx + size.w, sy);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.fillRect(sx - size.w * 0.7, sy - size.h * 0.5, size.w * 1.4, 5);
        break;
      }
      case "car": {
        // toy car body
        ctx.fillStyle = ["#e74c3c", "#3498db", "#f1c40f", "#9b59b6"][obs.x % 4];
        roundRect(ctx, sx - size.w, sy - size.h, size.w * 2, size.h, 6);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        roundRect(ctx, sx - size.w * 0.5, sy - size.h, size.w, size.h * 0.5, 4);
        ctx.fill();
        ctx.fillStyle = "#222";
        ctx.beginPath();
        ctx.arc(sx - size.w * 0.55, sy, 7, 0, Math.PI * 2);
        ctx.arc(sx + size.w * 0.55, sy, 7, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case "tire": {
        ctx.fillStyle = "#222";
        ctx.beginPath();
        ctx.arc(sx, sy - size.h / 2, size.w, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#555";
        ctx.beginPath();
        ctx.arc(sx, sy - size.h / 2, size.w * 0.5, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case "barrel": {
        ctx.fillStyle = "#c0392b";
        roundRect(ctx, sx - size.w, sy - size.h, size.w * 2, size.h, 6);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.fillRect(sx - size.w, sy - size.h * 0.7, size.w * 2, 4);
        ctx.fillRect(sx - size.w, sy - size.h * 0.35, size.w * 2, 4);
        break;
      }
    }
  }

  drawBolt(c) {
    if (c.collected) return;
    const ctx = this.ctx;
    const sx = this.worldToScreenX(c.x);
    const sy = this.worldToScreenY(c.y) + Math.sin(Date.now() / 300 + c.x) * 4;
    ctx.save();
    ctx.translate(sx, sy);
    ctx.fillStyle = "#ffd23f";
    ctx.strokeStyle = "#b8860b";
    ctx.lineWidth = 2;
    // hex nut shape
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      const px = Math.cos(a) * 12;
      const py = Math.sin(a) * 12;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#b8860b";
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawFinish(level) {
    const ctx = this.ctx;
    const gy = groundHeightAt(level, level.finishX);
    const sx = this.worldToScreenX(level.finishX);
    const sy = this.worldToScreenY(gy);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(sx, sy - 160);
    ctx.stroke();
    // checkered flag
    const fw = 70, fh = 46, sq = 11.5;
    for (let r = 0; r < fh / sq; r++) {
      for (let c = 0; c < fw / sq; c++) {
        ctx.fillStyle = (r + c) % 2 === 0 ? "#fff" : "#222";
        ctx.fillRect(sx + c * sq, sy - 160 + r * sq, sq, sq);
      }
    }
  }

  drawTruck(truck) {
    const ctx = this.ctx;
    const sx = this.worldToScreenX(truck.x);
    const sy = this.worldToScreenY(truck.y);
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(truck.angle);
    drawTruckShape(ctx, truck.def, 1, truck.recovering > 0);
    ctx.restore();
  }
}

// ---- Shared shape helpers (also used by Truck Select previews) ----

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Draws a monster truck centered at the current origin. Used by both the game
// renderer and the truck-select preview canvases.
export function drawTruckShape(ctx, def, scale = 1, sparkle = false) {
  ctx.save();
  ctx.scale(scale, scale);

  const wheelR = 18;
  const wheelY = 14;
  const wheelDX = 28;

  // Big chunky wheels
  for (const dx of [-wheelDX, wheelDX]) {
    ctx.fillStyle = "#1a1a1a";
    ctx.beginPath();
    ctx.arc(dx, wheelY, wheelR, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#444";
    ctx.beginPath();
    ctx.arc(dx, wheelY, wheelR * 0.55, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = def.accent;
    ctx.beginPath();
    ctx.arc(dx, wheelY, wheelR * 0.22, 0, Math.PI * 2);
    ctx.fill();
  }

  // Suspension struts
  ctx.strokeStyle = "#999";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-wheelDX, wheelY);
  ctx.lineTo(-wheelDX + 6, -6);
  ctx.moveTo(wheelDX, wheelY);
  ctx.lineTo(wheelDX - 6, -6);
  ctx.stroke();

  // Body
  ctx.fillStyle = def.body;
  roundRect(ctx, -38, -16, 76, 26, 8);
  ctx.fill();

  // Cab
  ctx.fillStyle = def.cab;
  roundRect(ctx, -16, -32, 34, 20, 6);
  ctx.fill();

  // Window
  ctx.fillStyle = "rgba(200,235,255,0.9)";
  roundRect(ctx, -10, -28, 22, 12, 4);
  ctx.fill();

  // Accent stripe
  ctx.fillStyle = def.accent;
  ctx.fillRect(-38, -4, 76, 5);

  if (sparkle) {
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    for (let i = 0; i < 5; i++) {
      const a = Math.random() * Math.PI * 2;
      const d = 30 + Math.random() * 20;
      ctx.fillRect(Math.cos(a) * d, Math.sin(a) * d, 3, 3);
    }
  }

  ctx.restore();
}
