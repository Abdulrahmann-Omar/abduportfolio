import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://abdulrahmann-omar.github.io',
  base: '/abduportfolio/',
  outDir: 'docs',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  server: {
    port: 3000,
    host: true,
  },
  output: 'static',
});
