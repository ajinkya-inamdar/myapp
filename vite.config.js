import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  server: {
    historyApiFallback: true,
  },
  // PERFORMANCE OPTIMIZATION ADDED BELOW
  build: {
    // 1. Splitting code into smaller chunks to fix "Reduce unused JavaScript"
    rollupOptions: {
      output: {
        manualChunks: {
          // Separates React core from your website logic for faster caching
          vendor: ['react', 'react-dom'], 
        },
      },
    },
    // 2. Minify CSS and JS to reduce network payload
    cssCodeSplit: true, 
    chunkSizeWarningLimit: 500, 
  }
})