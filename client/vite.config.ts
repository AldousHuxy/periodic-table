import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port : 3000,
    proxy: {
      '/ptable': {
        target: 'http://localhost:1359',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
