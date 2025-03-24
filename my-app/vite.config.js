import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'ntu-ee5188-lab04/',
  plugins: [react()],
})
