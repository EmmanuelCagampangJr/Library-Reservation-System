// Example with server options and proxy
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Optional: Configure a proxy if your backend is running on a different port
  // For example, if your Spring Boot backend runs on port 8080:
  server: {
    port: 5173, // Optional: Change frontend dev server port
    proxy: {
      '/api': { // Proxy requests starting with /api
        target: 'http://localhost:8080', // Your backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix when forwarding
      },
      // You might need to add other specific paths if your backend endpoints don't start with /api
      '/bookings': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/students': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/equipment': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/reservations': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
