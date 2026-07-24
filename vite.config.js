import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served at site root in dev; at the GitHub Pages project subpath in prod.
// Override at build time with VITE_BASE (e.g. "/" for a root/custom-domain host).
export default defineConfig(({ command }) => ({
  base: process.env.VITE_BASE || (command === 'build' ? '/projectxten80ten/' : '/'),
  plugins: [react()],
  server: { port: 4390 },
}))
