// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro.com',

  vite: {
    root: 'src/',
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: true
    }
  },

  integrations: [alpinejs()]
});