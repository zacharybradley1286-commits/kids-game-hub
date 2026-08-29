import * as THREE from 'three'
import { Game } from './Game.js'

// Show any uncaught errors visibly on screen
window.addEventListener('error', (e) => {
  const el = document.createElement('div')
  el.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#c0392b;color:#fff;padding:12px;font:13px monospace;z-index:9999;white-space:pre-wrap;'
  el.textContent = `ERROR: ${e.message}\nat ${e.filename}:${e.lineno}`
  document.body.appendChild(el)
})
window.addEventListener('unhandledrejection', (e) => {
  const el = document.createElement('div')
  el.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#c0392b;color:#fff;padding:12px;font:13px monospace;z-index:9999;white-space:pre-wrap;'
  el.textContent = `PROMISE ERROR: ${e.reason}`
  document.body.appendChild(el)
})

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: false })
renderer.setSize(window.innerWidth, window.innerHeight)
// Shadow map disabled: no mesh in the scene receives shadows (terrain
// opted out — full-world shadow-casting geometry dominated frame time —
// and nothing else receives), so the shadow pass was pure dead weight.
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.prepend(renderer.domElement)

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  game.camera.aspect = window.innerWidth / window.innerHeight
  game.camera.updateProjectionMatrix()
})

let game
try {
  game = new Game(renderer)
  window.__game__ = game
} catch (e) {
  const el = document.createElement('div')
  el.style.cssText = 'position:fixed;top:50px;left:0;right:0;background:#c0392b;color:#fff;padding:16px;font:13px monospace;z-index:9999;white-space:pre-wrap;'
  el.textContent = `GAME INIT ERROR:\n${e.stack || e.message}`
  document.body.appendChild(el)
  throw e
}

const clock = new THREE.Clock()
function animate() {
  requestAnimationFrame(animate)
  const dt = Math.min(clock.getDelta(), 0.1)
  try {
    game.update(dt)
  } catch (e) {
    console.error('Update error:', e)
  }
  renderer.render(game.scene, game.camera)
}
animate()
