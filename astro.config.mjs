// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeSeccionesCaso } from './src/lib/secciones.mjs';
import { rehypeEnlacesExternos } from './src/lib/enlaces-externos.mjs';

// En GitHub Pages el sitio vive en https://valeriagt.github.io/portafolio/.
// scripts/publicar.sh pasa SITE y BASE al construir; en tu computador no hace falta tocarlos.
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
  trailingSlash: 'always',
  // Las imágenes dentro de los texto.md también salen en varios tamaños (srcset)
  image: { layout: 'constrained' },
  markdown: {
    rehypePlugins: [rehypeSeccionesCaso, rehypeEnlacesExternos],
  },
});
