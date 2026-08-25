import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Sitio estático puro: institucional, sin SSR.
// output: 'static' es el default, se deja explícito por claridad.
export default defineConfig({
  site: 'https://prochembio.com', // reemplazar por el dominio definitivo
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false, // usamos nuestro propio src/styles/global.css
    }),
  ],
});
