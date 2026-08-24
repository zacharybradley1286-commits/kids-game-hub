import { defineConfig } from 'vite'
import { tmpdir } from 'os'
import { join } from 'path'

export default defineConfig({
  base: './',
  cacheDir: join(tmpdir(), 'oliver-game-vite-cache'),
  server: {
    port: 5173,
    host: '127.0.0.1',
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
