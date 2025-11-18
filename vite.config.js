import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'; // Import this

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    // SPEED FIX: Compress assets to make them load faster
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  base: '/',
  server: {
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion', 'react-router-dom'], // Added more libs here
        },
      },
    },
    cssCodeSplit: true, 
    chunkSizeWarningLimit: 500, 
    minify: 'esbuild', // Faster minification
  }
})