# TODO — Triplets Atelier Redesign

## Hecho (rediseño v2)

- [x] Paleta oficial aplicada con intención en todas las páginas (`:root`).
- [x] Navbar limpia: Home · Servicios ▾ · Quiénes somos · Sostenibilidad · Blog · Contacto · CTA.
- [x] Navbar sticky, dropdown (hover desktop / clic móvil), estado activo por página y "Servicios" activo dentro de servicios.
- [x] Breadcrumb en páginas internas.
- [x] Home con hero de foto real, 3 caminos, banda Bosque Real, momento de marca, testimonios y CTA.
- [x] Animaciones de entrada suaves (reveal por scroll) + hover en cards + zoom sutil en imágenes.
- [x] Círculo Blossom: planes de 15 y 30 tallos con frecuencia semanal/quincenal.
- [x] `producto.html`: detalle de plan dinámico (`?plan=`), con precio, frecuencia, zona, cantidad y contratar.
- [x] Blossom Bar más visual; corregidas `evento3` (banner ancho) y `flower-bar` (contain).
- [x] Atelier/Kiosco con mapa embebido grande (2 columnas desktop, apilado en móvil).
- [x] Quiénes somos editorial con retratos circulares + spotlight.
- [x] Sostenibilidad y Blog (páginas ligeras, sin romper rutas).
- [x] Footer más completo (marca, contacto, enlaces, legales, redes).
- [x] Imágenes con `object-fit`/`aspect-ratio` correctos; inventario actualizado.
- [x] Accesibilidad: HTML semántico, alt descriptivos, skip-link, focus-visible, reduced-motion.
- [x] Verificación: 27/27 rutas y assets 200, sin imágenes rotas, sin errores de consola.
- [x] SEO/social por página: `title` único, `meta description`, `canonical`, Open Graph completo (`og:image` 1200×630 + `width/height/alt`, `og:site_name`, `og:locale`), `twitter:card`, `theme-color` y `apple-touch-icon`.
- [x] Imagen OG en JPEG ligero (`images/og-triplets.jpg`, ~91 KB) generada por `.claude/make-og.ps1`; se eliminó el PNG pesado.
- [x] Performance LCP: imágenes hero con `fetchpriority="high"`, `decoding="async"` y `width/height` para evitar layout shift; resto de imágenes con `loading="lazy"` y `aspect-ratio` en CSS.
- [x] Páginas legales base creadas (Términos, Privacidad, Cookies) enlazadas en el footer — pendientes de validación legal final.

## Pendiente / siguiente iteración

- [ ] Fotos definitivas para los planes (hoy productos con fondo blanco en `contain`).
- [ ] Confirmar derechos de `ChatGPT-Image-*` (IA) antes de usarla.
- [ ] Validación legal final de Términos, Privacidad y Cookies con la empresa.
- [ ] Flujo de contratación/pago real si se requiere (hoy WhatsApp + `producto.html`).
- [ ] Contenido real para Blog y Sostenibilidad.
- [ ] Confirmar dirección exacta y horarios del kiosco.
