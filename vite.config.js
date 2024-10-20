import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/form-programmer-test.vercel.app/",
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://emsifa.github.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
