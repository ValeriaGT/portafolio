// Las 7 secciones de cada caso, en el orden en que se muestran.
// `alias` son los títulos que se aceptan en el texto.md (sin tildes, en minúscula).
export const SECCIONES = [
  { id: 'resumen', es: 'Resumen', en: 'Summary', alias: ['resumen', 'summary', 'overview'] },
  {
    id: 'contexto',
    es: 'Contexto y problema',
    en: 'Context and problem',
    alias: ['contexto y problema', 'contexto', 'problema', 'context and problem', 'context & problem', 'context', 'problem'],
  },
  { id: 'investigacion', es: 'Investigación', en: 'Research', alias: ['investigacion', 'research'] },
  {
    id: 'proceso',
    es: 'Proceso de diseño',
    en: 'Design process',
    alias: ['proceso de diseno', 'proceso', 'design process', 'process'],
  },
  { id: 'validacion', es: 'Validación', en: 'Validation', alias: ['validacion', 'validation', 'testing'] },
  {
    id: 'solucion',
    es: 'Solución final',
    en: 'Final solution',
    alias: ['solucion final', 'solucion', 'resultado', 'final solution', 'solution', 'outcome', 'result'],
  },
  {
    id: 'aprendizajes',
    es: 'Aprendizajes',
    en: 'Learnings',
    alias: ['aprendizajes', 'learnings', 'lessons learned', 'takeaways'],
  },
];

export const PENDIENTE = '[PENDIENTE]';

const normalizar = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

const texto = (nodo) =>
  nodo.type === 'text' ? nodo.value : (nodo.children || []).map(texto).join('');

const el = (tagName, properties, children) => ({ type: 'element', tagName, properties, children });

// Marca con la clase "pendiente" los párrafos y elementos de lista que empiezan con [PENDIENTE o [PENDING
function marcarPendientes(nodo, contador) {
  for (const hijo of nodo.children || []) {
    if (hijo.type === 'element' && ['p', 'li'].includes(hijo.tagName) && /^\[(PENDIENTE|PENDING)/.test(texto(hijo).trim())) {
      hijo.properties = { ...hijo.properties, className: ['pendiente'] };
      contador.n++;
    }
    marcarPendientes(hijo, contador);
  }
}

/**
 * Plugin rehype para los texto.{es,en}.md de contenido/casos/:
 * reordena las secciones ## según SECCIONES, completa las que falten con [PENDIENTE],
 * envuelve cada una en <section id="..."> y avisa en la terminal qué falta.
 */
export function rehypeSeccionesCaso() {
  return (arbol, archivo) => {
    const ruta = archivo.path || archivo.history?.[0] || '';
    if (!ruta.includes('/contenido/casos/')) return;
    const idioma = /texto\.en\.md$/.test(ruta) ? 'en' : 'es';
    const caso = ruta.split('/contenido/casos/')[1];

    const grupos = { _inicio: [] };
    let actual = '_inicio';
    for (const nodo of arbol.children) {
      if (nodo.type === 'element' && nodo.tagName === 'h2') {
        const titulo = normalizar(texto(nodo));
        const seccion = SECCIONES.find((s) => s.alias.includes(titulo));
        if (seccion && !grupos[seccion.id]) {
          actual = seccion.id;
          grupos[actual] = [];
          continue;
        }
        // Título desconocido: se conserva como subtítulo dentro de la sección anterior
        console.warn(`[portafolio] ${caso}: el título "${texto(nodo)}" no es una de las 7 secciones; queda dentro de la anterior.`);
        nodo.tagName = 'h3';
      }
      grupos[actual].push(nodo);
    }

    const faltantes = [];
    const salida = [...grupos._inicio];
    for (const s of SECCIONES) {
      let contenido = grupos[s.id];
      if (!contenido || !contenido.some((n) => n.type === 'element')) {
        faltantes.push(s[idioma]);
        contenido = [el('p', {}, [{ type: 'text', value: idioma === 'en' ? '[PENDING]' : PENDIENTE }])];
      }
      salida.push(
        el('section', { id: s.id, className: ['seccion-caso'], ariaLabelledBy: `titulo-${s.id}` }, [
          el('h2', { id: `titulo-${s.id}` }, [{ type: 'text', value: s[idioma] }]),
          ...contenido,
        ]),
      );
    }
    arbol.children = salida;

    marcarPendientes(arbol, { n: 0 });
    if (faltantes.length) console.warn(`[portafolio] ${caso}: faltan secciones → ${faltantes.join(', ')}`);
  };
}
