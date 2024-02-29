import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

   server: {
    port: 8080,
    host: true,
    origin: "http://0.0.0.0:8080",
   },
  
 
})
