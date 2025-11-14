import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['src/locales/injector.py'],
    },
  },
  optimizeDeps: {
    exclude: ['src/locales/injector.py'],
  },
});
