// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'pos-164650439.ap-south-1.elb.amazonaws.com'
    ]
  }
})
