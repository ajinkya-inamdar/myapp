import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-pages-sitemap'  // 🧩 Add this import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({

      hostname: 'https://ajinkyainamdar.vercel.app/',


    }),
  ],
  base: '/',
  server: {
    historyApiFallback: true,
  },
})
