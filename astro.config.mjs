import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://abdulrahmann-omar.github.io/abduportfolio', // GitHub Pages URL
  base: '/abduportfolio/', // IMPORTANT for GitHub Pages
  outDir: 'docs', // build output folder for GitHub Pages
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  server: {
    port: 3000,
    host: true,
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@headlessui/react', 'framer-motion'],
      exclude: ['@resvg/resvg-js']
    }
  }
});
