import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  preview: {
    allowedHosts: ['cv-rmph.onrender.com'],
  },
  server: {
    port: process.env.PORT || 10000,  // Usar el puerto proporcionado por Render
    host: '0.0.0.0',  // Permitir acceso desde cualquier red
  },
})
