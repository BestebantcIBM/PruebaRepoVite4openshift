import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080,
   },
  
   server: {
    port: 8080,
    host: true,
    origin: "http://0.0.0.0:8080",
   },
  
 
})
