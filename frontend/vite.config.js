// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Needed for the 'resolve' alias if you choose to use it

// https://vitejs.dev/config/
export default defineConfig({
  // Use the React plugin for Vite
  plugins: [react()],

  // *** CRUCIAL FIX FOR YOUR 404 ERROR ***
  // Tell Vite to use the 'public' directory as its root.
  // This means Vite will look for index.html inside the 'public' folder.
  root: 'public', // This line is essential for your CRA-like structure

  // Define the base URL for your application when served in development or built for production.
  // '/' is usually fine for single-page applications served from the root of a domain.
  base: '/',

  // Configure the development server
  server: {
    // Specify the port Vite should run on. Default is 5173.
    port: 5173,
    // Automatically open the browser when the server starts
    open: true,
    // Enable host to allow access from other devices on the same network
    // host: true, // Uncomment if you need to access it from other devices on your LAN

    // Proxy API requests to your backend (preserving your existing proxy configuration)
    proxy: {
      // Proxy requests starting with /api
      '/api': {
        target: 'http://localhost:8080', // Your backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix when forwarding
      },
      // Proxy for specific backend endpoints that might not start with /api
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

  // Configure how the project is built for production
  build: {
    // Specify the output directory for the build artifacts.
    // Since 'root' is 'public', 'outDir' is relative to 'public'.
    // '../dist' means it will create a 'dist' folder one level up from 'public',
    // placing it directly in your 'frontend' directory.
    outDir: '../dist',
    // Set the assets directory relative to the 'outDir' (optional)
    // assetsDir: 'assets',
    // Enable source maps for easier debugging in production (optional, can increase build size)
    // sourcemap: true,
  },

  // Configure path aliases for cleaner imports (optional but recommended)
  // This allows you to use '@' to refer to your 'src' directory,
  // e.g., import MyComponent from '@/components/MyComponent';
  resolve: {
    alias: {
      // This path is relative to the directory containing vite.config.js ('frontend').
      // It correctly points to your 'src' folder which is a sibling of 'public'.
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
