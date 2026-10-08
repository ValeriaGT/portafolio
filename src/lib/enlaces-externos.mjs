// Los enlaces a otros sitios dentro de los texto.md se abren en otra pestaña,
// con una flecha ↗ visible y un aviso para lectores de pantalla.
const AVISO = { es: 'se abre en otra pestaña', en: 'opens in a new tab' };

function recorrer(nodo, idioma) {
  for (const hijo of nodo.children || []) {
    if (hijo.type === 'element' && hijo.tagName === 'a' && /^https?:\/\/|prototipos\//.test(hijo.properties?.href || '')) {
      hijo.properties.target = '_blank';
      hijo.properties.rel = ['noopener', 'noreferrer'];
      hijo.children.push(
        { type: 'element', tagName: 'span', properties: { ariaHidden: 'true' }, children: [{ type: 'text', value: ' ↗' }] },
        {
          type: 'element',
          tagName: 'span',
          properties: { className: ['visualmente-oculto'] },
          children: [{ type: 'text', value: ` (${AVISO[idioma]})` }],
        },
      );
    }
    recorrer(hijo, idioma);
  }
}

export function rehypeEnlacesExternos() {
  return (arbol, archivo) => {
    const ruta = archivo.path || archivo.history?.[0] || '';
    recorrer(arbol, /\.en\.md$/.test(ruta) ? 'en' : 'es');
  };
}
