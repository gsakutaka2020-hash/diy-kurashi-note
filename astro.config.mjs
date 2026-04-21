import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://diy-kurashi-note.com',
  integrations: [
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
