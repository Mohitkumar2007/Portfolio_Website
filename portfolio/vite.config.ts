import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
export default defineConfig({
  envDir: path.resolve(__dirname, '..'), plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    allowedHosts: ['breathable-felicita-godly.ngrok-free.dev'],
  },
  resolve: { alias: { '@shared': path.resolve(__dirname, '../shared') } }
})
