# Deploy de Triplets Atelier

Guía breve para publicar la web estática de Triplets Atelier.

## Plataforma sugerida

Netlify, Vercel o GitHub Pages funcionan bien para este proyecto porque solo usa HTML, CSS y JavaScript vanilla.

## Checklist antes de publicar

- Validar el dominio final y actualizar `sitemap.xml`, `robots.txt`, `canonical` y `og:url` si cambia.
- [x] Imagen OG 1200×630 creada: `images/og-triplets.jpg` (~91 KB), aplicada como `og:image` en todas las páginas indexables, con `og:image:width/height/alt`, `og:site_name` y `og:locale`.
- [x] `theme-color` y `apple-touch-icon` añadidos en todas las páginas (incluidas `404.html` y `producto.html`).
- Validar legalmente `terminos.html`, `privacidad.html` y `cookies.html` con la empresa antes de publicación final.
- Probar todos los enlaces internos y externos.
- Probar WhatsApp desde navbar, CTAs y formulario de contacto.
- Revisar responsive en mobile, tablet y desktop.
- Verificar que `404.html` se use como página de error en la plataforma elegida.
- Confirmar que `producto.html` mantiene `noindex, follow` y queda fuera de `sitemap.xml`.

## Imagen Open Graph

- **Archivo final:** `images/og-triplets.jpg` (1200×630, ~91 KB). Ya referenciado en `og:image` de todas las páginas indexables. Se usa JPEG en lugar de PNG porque pesa mucho menos y mejora las previsualizaciones de WhatsApp/redes.
- **Imagen base:** `images/WhatsApp-Image-2026-02-18-at-10.07.24-AM.jpeg` (rosas en papel kraft con listón de marca), recortada a la derecha sobre un panel crema/menta con titular y servicios.
- **Para regenerarla/ajustarla** (cualquiera de las dos opciones):
  1. Re-ejecutar el generador: `powershell -NoProfile -ExecutionPolicy Bypass -File .claude/make-og.ps1` (recrea el JPEG con System.Drawing, calidad 90).
  2. Abrir `og-preview.html` en el navegador y tomar una captura del recuadro a tamaño exacto **1200×630**, guardándola como `images/og-triplets.jpg`.
- Si en el futuro se quiere una versión de fotógrafo, basta con reemplazar `images/og-triplets.jpg` manteniendo el tamaño 1200×630. Si se cambia la extensión, actualizar también el `og:image` de cada página.

## Dominio usado en esta versión

`https://www.tripletsatelier.com/`

TODO: ajustar dominio final si cambia.

## Archivos clave

- `index.html`: Home.
- `sitemap.xml`: URLs públicas para buscadores.
- `robots.txt`: permisos de indexación y referencia al sitemap.
- `404.html`: página de error.
- `terminos.html`, `privacidad.html`, `cookies.html`: páginas legales base pendientes de validación final.
- `images/og-triplets.jpg`: imagen para compartir en redes/WhatsApp (Open Graph, 1200×630, ~91 KB).
- `og-preview.html`: plantilla editable para regenerar la imagen OG por captura (no es página pública).
