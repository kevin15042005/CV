import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Permite conexiones desde cualquier IP de la red
    port: 5173,       // Puerto fijo (puedes cambiarlo si lo necesitas)
    strictPort: true,  // Evita que Vite busque puertos alternativos
    open: true,        // Abre el navegador automáticamente
    hmr: {
      protocol: 'ws',  // WebSocket para Hot Module Replacement
      host: 'localhost'
    }
  },
  preview: {
    port: 5173,        // Mismo puerto para el preview
    host: true         // Habilita acceso en red para el preview
  }
})