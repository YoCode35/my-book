import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Pour avoir accès à des méthodes globales comme "render" et "screen"
    environment: 'jsdom', // Simuler un environnement de navigateur    
  },
});
