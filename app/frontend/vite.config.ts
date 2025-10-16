import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ts-fullstack/shared': path.resolve(__dirname, '../shared/src'),
    },
  },
  optimizeDeps: {
    include: ['@ts-fullstack/shared'],
  },
  server: {
    fs: {
      // 👇 Allow Vite to access files one level up (shared/)
      allow: ['..'],
    },
  },
})
