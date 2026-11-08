import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps the build portable (GitHub Pages sub-path or custom domain).
export default defineConfig({
  plugins: [react()],
  base: './',
});
