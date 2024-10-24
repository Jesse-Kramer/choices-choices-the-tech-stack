import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [
    svelte({ preprocess: [] }),
    vue(), // Vue doesn't have preprocess like Svelte
    react() // React doesn't require preprocess either
  ],
});