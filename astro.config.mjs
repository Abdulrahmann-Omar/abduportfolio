import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Check if we're in production mode
const isProduction = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://abdulrahmann-omar.github.io',
  base: '/abduportfolio/',
  outDir: 'docs',
  build: {
    format: 'directory',
  },
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
    ssr: {
      noExternal: ['@astrojs/mdx', 'framer-motion']
    },
    base: './',
    build: {
      assetsInlineLimit: 0,
    },
  },
  output: 'static',
});
