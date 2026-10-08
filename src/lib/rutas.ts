import type { Idioma } from '../i18n/textos';

export type Pagina = 'inicio' | 'casos' | 'caso' | 'sobreMi';

const SEGMENTOS: Record<Idioma, Record<Pagina, string>> = {
  es: { inicio: '', casos: 'casos/', caso: 'casos/', sobreMi: 'sobre-mi/' },
  en: { inicio: 'en/', casos: 'en/cases/', caso: 'en/cases/', sobreMi: 'en/about/' },
};

/** Antepone la ruta base del sitio (necesaria en GitHub Pages). */
export function url(ruta = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + ruta.replace(/^\//, '');
}

/** Ruta de una página en un idioma; para un caso se pasa su carpeta. */
export function ruta(idioma: Idioma, pagina: Pagina, caso?: string): string {
  return url(SEGMENTOS[idioma][pagina] + (pagina === 'caso' && caso ? `${caso}/` : ''));
}
