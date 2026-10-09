import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Carpetas que empiezan con "_" (como _plantilla) no se publican.
const casos = defineCollection({
  loader: glob({
    pattern: '[!_]*/texto.{es,en}.md',
    base: './contenido/casos',
    // "acelera/texto.es.md" → "acelera/es"
    generateId: ({ entry }) => entry.replace(/\/texto\.(es|en)\.md$/, '/$1'),
  }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string().optional(),
      bajada: z.string().optional(),
      rol: z.string().optional(),
      resumen: z.string().optional(),
      origen: z.string().optional(),
      estado: z.string().optional(),
      periodo: z.string().optional(),
      equipo: z.string().optional(),
      herramientas: z.array(z.string()).optional(),
      portada: image().optional(),
      portadaAlt: z.string().optional(),
      destacado: z.boolean().default(false),
      orden: z.number().default(99),
      // URL completa o ruta dentro del sitio (ej. prototipos/mi-caso/)
      prototipo: z.string().optional(),
      sitio: z.string().url().optional(),
      borrador: z.boolean().default(false),
      traduccion: z.string().optional(),
    }),
});

const sobreMi = defineCollection({
  loader: glob({
    pattern: 'texto.{es,en}.md',
    base: './contenido/sobre-mi',
    generateId: ({ entry }) => entry.replace(/^texto\.(es|en)\.md$/, '$1'),
  }),
  schema: z.object({
    nombre: z.string(),
    roles: z.array(z.string()),
    frase: z.string().optional(),
    alcance: z.string().optional(),
    ubicacion: z.string().optional(),
    telefono: z.string().optional(),
    correo: z.string().optional(),
    linkedin: z.string().optional(),
    fotoAlt: z.string().optional(),
    bannerAlt: z.string().optional(),
    herramientas: z.array(z.string()).default([]),
    habilidades: z.array(z.object({ grupo: z.string(), items: z.string() })).default([]),
    experiencia: z
      .array(z.object({ cargo: z.string(), empresa: z.string(), periodo: z.string(), logros: z.array(z.string()).default([]) }))
      .default([]),
    proyectos: z.array(z.object({ titulo: z.string(), periodo: z.string(), descripcion: z.string() })).default([]),
    educacion: z.array(z.object({ titulo: z.string(), institucion: z.string(), periodo: z.string() })).default([]),
    idiomas: z.array(z.string()).default([]),
    certificaciones: z.array(z.object({ nombre: z.string(), entidad: z.string(), fecha: z.string() })).default([]),
    traduccion: z.string().optional(),
  }),
});

export const collections = { casos, sobreMi };
