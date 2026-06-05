# Deploy de Triplets Atelier

Guía breve para publicar la web estática de Triplets Atelier.

## Plataforma sugerida

Netlify, Vercel o GitHub Pages funcionan bien para este proyecto porque solo usa HTML, CSS y JavaScript vanilla.

## Checklist antes de publicar

- Validar el dominio final y actualizar `sitemap.xml`, `robots.txt`, `canonical` y `og:url` si cambia.
- Crear imagen OG optimizada 1200x630.
- Validar legalmente `terminos.html`, `privacidad.html` y `cookies.html` con la empresa antes de publicación final.
- Probar todos los enlaces internos y externos.
- Probar WhatsApp desde navbar, CTAs y formulario de contacto.
- Revisar responsive en mobile, tablet y desktop.
- Verificar que `404.html` se use como página de error en la plataforma elegida.

## Dominio usado en esta versión

`https://www.tripletsatelier.com/`

TODO: ajustar dominio final si cambia.

## Archivos clave

- `index.html`: Home.
- `sitemap.xml`: URLs públicas para buscadores.
- `robots.txt`: permisos de indexación y referencia al sitemap.
- `404.html`: página de error.
- `terminos.html`, `privacidad.html`, `cookies.html`: páginas legales base pendientes de validación final.
