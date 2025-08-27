import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.js',
        style: 'index.css',
      },
    },
  },
  server: {
    open: true,
  },
});
