#!/bin/sh
# Construye el sitio y lo sube a la rama gh-pages, que es la que publica GitHub Pages.
# Uso: npm run publicar
set -e
cd "$(dirname "$0")/.."
REMOTO=$(git remote get-url origin)

SITE=https://valeriagt.github.io BASE=/portafolio npm run build
touch dist/.nojekyll   # sin esto GitHub ignora la carpeta _astro

cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="Valeria Garzón Triana" -c user.email="valeria.garzont@gmail.com" commit -q -m "Publicación $(date '+%Y-%m-%d %H:%M')"
git push -q -f "$REMOTO" gh-pages
rm -rf .git
echo "Listo: en uno o dos minutos se ve en https://valeriagt.github.io/portafolio/"
