import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MinimOwBar/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@assets': resolve('./src/assets'),
      '@components': resolve('./src/components'),
      '@layouts': resolve('./src/layouts'),
      '@pages': resolve('./src/pages')
    }
  }
})
