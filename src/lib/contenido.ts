import { getCollection, getEntry } from 'astro:content';
import { IDIOMAS, type Idioma } from '../i18n/textos';

const avisados = new Set<string>();
/** Avisa una sola vez en la terminal (las páginas se construyen varias veces). */
export function avisar(mensaje: string) {
  if (avisados.has(mensaje)) return;
  avisados.add(mensaje);
  console.warn(`[portafolio] ${mensaje}`);
}

const carpeta = (id: string) => id.split('/')[0];

/** Un valor vacío o que empieza con [PENDIENTE / [PENDING cuenta como pendiente. */
export const esPendiente = (v: unknown) => !v || (typeof v === 'string' && /^\[(PENDIENTE|PENDING)/.test(v));

/** Casos de un idioma, ordenados. Si falta la versión en ese idioma, avisa. */
export async function casosDe(idioma: Idioma) {
  const todos = await getCollection('casos', (c) => !c.data.borrador);
  const carpetas = [...new Set(todos.map((c) => carpeta(c.id)))];
  for (const otro of IDIOMAS) {
    for (const cp of carpetas) {
      if (!todos.some((c) => c.id === `${cp}/${otro}`)) avisar(`${cp}: falta texto.${otro}.md`);
    }
  }
  for (const c of todos) {
    const faltan = (['titulo', 'rol', 'resumen', 'portada'] as const).filter((k) => esPendiente(c.data[k]));
    if (faltan.length) avisar(`${c.id}: faltan datos → ${faltan.join(', ')}`);
    if (c.data.portada && !c.data.portadaAlt) avisar(`${c.id}: la portada no tiene portadaAlt`);
    if (c.data.traduccion) avisar(`${c.id}: traducción ${c.data.traduccion}`);
    // El Markdown procesado queda en caché, así que la revisión del texto se hace aquí y no en el plugin
    const html = c.rendered?.html ?? '';
    const pendientes = [...html.matchAll(/class="pendiente">([^<]*)</g)].map((m) => m[1]);
    if (pendientes.length) avisar(`${c.id}: ${pendientes.length} pendiente(s) en el texto → ${pendientes.join(' | ')}`);
    const imagenesSinAlt = (c.body?.match(/!\[\s*\]\(/g) ?? []).length;
    if (imagenesSinAlt) avisar(`${c.id}: ${imagenesSinAlt} imagen(es) sin texto alternativo`);
  }
  return todos
    .filter((c) => c.id.endsWith(`/${idioma}`))
    .map((c) => ({ ...c, carpeta: carpeta(c.id) }))
    .sort((a, b) => a.data.orden - b.data.orden || a.carpeta.localeCompare(b.carpeta));
}

export async function sobreMiDe(idioma: Idioma) {
  const entrada = await getEntry('sobreMi', idioma);
  if (!entrada) throw new Error(`Falta contenido/sobre-mi/texto.${idioma}.md`);
  if (entrada.data.traduccion) avisar(`sobre-mi (${idioma}): traducción ${entrada.data.traduccion}`);
  return entrada;
}
