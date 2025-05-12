import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Define backend URLs
const LOCAL_API_URL = 'http://localhost:5000'
const PROD_API_URL = 'http://16.16.77.239:5000'

// Determine which URL to use based on environment
const target =
  process.env.NODE_ENV === 'production' ? PROD_API_URL : LOCAL_API_URL

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to backend
      '/api': {
        target,
        changeOrigin: true,
        secure: false,
      },
    },
  },
})