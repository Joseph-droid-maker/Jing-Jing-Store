import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  //base: '/saripos/',  


  server: {
    proxy: {
      '/saripos': {
        target: 'http://localhost',
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
