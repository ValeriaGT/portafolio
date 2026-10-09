// Archivos de contenido/sobre-mi que no son texto: la foto y las hojas de vida en PDF.
// Vite los copia al sitio publicado con un nombre único para que el navegador no use versiones viejas.

const fotos = import.meta.glob<{ default: ImageMetadata }>('/contenido/sobre-mi/foto.{jpg,jpeg,png,webp}', {
  eager: true,
});
export const foto: ImageMetadata | undefined = Object.values(fotos)[0]?.default;

const banners = import.meta.glob<{ default: ImageMetadata }>('/contenido/sobre-mi/banner-herramientas.png', {
  eager: true,
});
export const banner: ImageMetadata | undefined = Object.values(banners)[0]?.default;

const pdfs = import.meta.glob<string>('/contenido/sobre-mi/hoja-de-vida.{es,en}.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
});
export const hojaDeVida = (idioma: 'es' | 'en'): string | undefined =>
  pdfs[`/contenido/sobre-mi/hoja-de-vida.${idioma}.pdf`];
