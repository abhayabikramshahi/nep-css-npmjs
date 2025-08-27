import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/nep.css',
      output: {
        entryFileNames: 'nep.css',
      },
    },
    cssCodeSplit: false,
    minify: false,
  },
  server: {
    open: true,
  },
});
