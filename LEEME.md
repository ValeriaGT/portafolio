# Portafolio · Valeria Garzón Triana

Sitio estático hecho con [Astro](https://astro.build), en español (`/`) e inglés (`/en/`).
Todo el contenido vive en `contenido/`. Para agregar o cambiar casos no hace falta tocar `src/`.

## Verlo en tu computador

Necesitas Node.js 22 o superior. La primera vez:

```bash
cd ~/Documents/Portafolio
npm install
```

Después, cada vez que quieras verlo:

```bash
npm run dev
```

Abre http://localhost:4321. Los cambios que guardes en `contenido/` se ven al instante.
Para detenerlo, presiona `Ctrl + C` en la terminal.

## Agregar un caso nuevo

1. Copia la carpeta `contenido/casos/_plantilla` y ponle un nombre corto, sin espacios ni tildes
   (por ejemplo `asesoria-digital`). Ese nombre será la dirección: `/casos/asesoria-digital/`.
2. Pon las imágenes en esa carpeta (PNG o JPG). El sitio las optimiza solo.
3. Llena `texto.es.md` y `texto.en.md`:
   - Arriba, entre las líneas `---`, van los datos: título, rol, resumen, portada…
   - Abajo van las 7 secciones con `## Título`. Si falta una, el sitio muestra **[PENDIENTE]**.
   - Imágenes dentro del texto: `![descripción de la imagen](./02-wireframes.png)`.
     La descripción es el texto alternativo y es obligatoria.
4. Pon `destacado: true` para que aparezca en Inicio (lo ideal son 2 o 3 casos) y usa `orden` para el orden.

Cualquier texto que empiece con `[PENDIENTE` (o `[PENDING` en inglés) se resalta en naranja
para que no se te escape. Al correr `npm run build`, la terminal lista todo lo que falta con líneas
que empiezan por `[portafolio]`.

## Cambiar Sobre mí

- Texto, trayectoria, herramientas y contacto: `contenido/sobre-mi/texto.es.md` y `texto.en.md`.
- Foto: `contenido/sobre-mi/foto.jpg`.
- Hojas de vida: `contenido/sobre-mi/hoja-de-vida.es.pdf` y `hoja-de-vida.en.pdf`.

## Publicar en GitHub Pages

El sitio vive en el repositorio `ValeriaGT/portafolio` y se publica en
**https://valeriagt.github.io/portafolio/**.

Cada vez que cambies algo:

```bash
cd ~/Documents/Portafolio
git add .
git commit -m "Describe el cambio"
git push            # guarda el código en GitHub
npm run publicar    # construye el sitio y lo publica
```

`npm run publicar` construye el sitio en tu computador y lo sube a la rama `gh-pages`,
que es la que muestra GitHub Pages. En uno o dos minutos se ven los cambios.

La dirección del repositorio incluye el usuario `ValeriaGT`, así que git usa tu cuenta personal
aunque la cuenta activa de `gh` sea la de trabajo.

**Publicación automática (opcional).** Si algún día quieres que se publique solo con `git push`,
dale a tu cuenta el permiso `workflow` (`gh auth refresh -h github.com -u ValeriaGT -s workflow`)
y pide que se agregue el archivo `.github/workflows/deploy.yml`.

## Estructura

```
contenido/             ← lo único que necesitas editar
  casos/<caso>/        texto.es.md, texto.en.md e imágenes
  sobre-mi/            texto.es.md, texto.en.md, foto.jpg, hoja-de-vida.{es,en}.pdf
src/
  content.config.ts    qué datos se leen de cada texto.md
  lib/secciones.mjs    las 7 secciones del caso, su orden y los [PENDIENTE]
  i18n/textos.ts       textos fijos de la interfaz (menú, botones) en los dos idiomas
  styles/global.css    colores, tipografía y espaciado (múltiplos de 8)
  vistas/              Inicio, Casos, Caso y Sobre mí (compartidas por los dos idiomas)
  pages/               rutas en español y en inglés (/en/)
```
