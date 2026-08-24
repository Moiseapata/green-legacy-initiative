import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // <-- C'est le réglage qui va faire fonctionner toutes tes images !
  build: {
    outDir: 'dist/public',
  }
})
