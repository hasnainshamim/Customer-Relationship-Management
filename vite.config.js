import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: 'Customer-Relationship-Management', // Ensure this is set correctly
  build: {
    outDir: 'dist', // This is default for Vite
  }
})
