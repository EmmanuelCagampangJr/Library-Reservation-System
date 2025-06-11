// Example with server options and proxy
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Change frontend dev server port
    proxy: {
      '/api': { // Proxy requests starting with /api
        target: 'http://localhost:8080', // Your Spring Boot backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix when forwarding
      },
    },
  },
})