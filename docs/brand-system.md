# Brand system - Triplets Atelier Redesign

## Intención visual

La home busca sentirse limpia, smooth y premium sin copiar la estructura del sitio oficial. El diseño prioriza que el usuario entienda rápido tres ideas: flores premium en Bosque Real, servicios principales claros y contacto inmediato por WhatsApp.

El sistema visual usa una composición editorial con tarjetas grandes, espacios para imágenes futuras y placeholders creados con CSS. Estos placeholders anticipan dirección visual sin depender todavía de fotografías reales, logos definitivos ni librerías externas.

## Paleta oficial aplicada

La paleta del proyecto se centraliza en `:root` para mantener consistencia y facilitar ajustes posteriores.

- `--color-deep-teal: #4b7878`  
  Color principal de marca para CTAs, links destacados, hover y acentos importantes.

- `--color-cream: #fffef6`  
  Fondo principal de la página. Mantiene la home luminosa y cálida.

- `--color-mint: #61b6b0`  
  Acento fresco para microdetalles, pétalos CSS y estados secundarios.

- `--color-forest: #263f29`  
  Texto principal, títulos y footer. Sustituye el negro puro por un verde profundo más cercano a la identidad floral.

- `--color-stone: #e2dfd3`  
  Fondo secundario suave para secciones y superficies neutrales.

- `--color-pale-green: #bde0c7`  
  Fondo vegetal claro para cards, highlights y formas visuales.

- `--color-sand: #dfd5bd`  
  Fondo cálido complementario para equilibrar los verdes y evitar saturación.

## Reglas de uso

1. La base debe ser `--color-cream`.
2. Los textos y títulos deben usar `--color-forest`.
3. Los botones principales y enlaces destacados deben usar `--color-deep-teal`.
4. `--color-mint` funciona mejor como acento, no como color dominante.
5. `--color-stone`, `--color-pale-green` y `--color-sand` se usan en fondos secundarios de manera sutil.
6. No usar todos los colores al mismo nivel de intensidad dentro de una misma sección.

## Variables estructurales

- `--font-title`: Georgia, serif elegante disponible por defecto.
- `--font-body`: Arial/Helvetica para legibilidad y cero dependencias.
- `--radius-card: 8px`: tarjetas sobrias y profesionales.
- `--radius-soft: 26px`: reservado para formas suaves y decorativas.
- `--shadow-small` y `--shadow-large`: separación visual sin saturar.
- `--container: 1180px`: ancho máximo de layout.
- `--section-padding`: ritmo vertical adaptable por breakpoint.

## Decisiones de diseño

1. Header sticky con marca, ubicación visible, navegación preparada para páginas futuras y CTA.
2. Hero con frase fija: “Flores que hacen especial lo cotidiano.”
3. Primer pantallazo con resumen de Círculo Blossom, Blossom Bar y Atelier/Kiosco.
4. Servicios como vitrina premium: tres cards grandes con espacio preparado para imagen.
5. “Experiencias” simplifica sostenibilidad, blog e inspiración floral en una futura sección/página más amigable.
6. Footer global pensado para repetirse en páginas futuras.
7. Mobile-first: navegación hamburguesa en móvil, cards apiladas y botones táctiles amplios.
8. Stack vanilla: HTML, CSS y JavaScript sin frameworks ni dependencias externas.

## Actualización v2 (rediseño premium)

La capa v2 (`/* V2 — PREMIUM REFINEMENT LAYER */` en `styles.css`) eleva la experiencia sin cambiar la paleta:

- **Navegación reestructurada**: `Home · Servicios ▾ (Círculo Blossom / Blossom Bar / Atelier-Kiosco) · Quiénes somos · Sostenibilidad · Blog · Contacto` + CTA WhatsApp. Sticky, dropdown por hover en desktop (≥1180px) y por clic en móvil/tablet (hamburguesa). El menú "Servicios" se marca activo (`.has-dropdown.is-active`) dentro de cualquier servicio, y cada página interna lleva **breadcrumb** (`.breadcrumb`).
- **Hero con foto real** (`.home-hero`): composición editorial (imagen principal + imagen secundaria superpuesta + chip flotante + stats). Sustituye el hero de formas CSS.
- **Reveal por scroll** (`.reveal`, `.reveal-stagger`): animación de entrada suave manejada en `main.js` **sin** depender de IntersectionObserver y respetando `prefers-reduced-motion`. El CSS solo oculta cuando hay JS (`.js .reveal`), así sin JS todo se ve.
- **Imágenes con intención**: tokens `--radius-media`, `aspect-ratio` por caja y reglas `cover`/`contain` según el tipo de imagen (ver `image-inventory.md`).
- **Componentes nuevos**: `.path-card` (3 servicios), `.plan-card` + `.plan-freq` (planes 15/30), `.product-detail` (detalle dinámico), `.cinematic-banner`, `.barwhat-media`, `.gallery-mosaic`, `.founder-portrait` (retratos circulares con spotlight), `.value-card`/`.post-card`, footer enriquecido.

### Tokens añadidos en `:root`
`--radius-media: 18px`, `--radius-pill`, `--ease-out`, `--shadow-float`, `--shadow-glow`, `--color-overlay-forest`, `--maxw-prose`.

### Páginas
`index.html`, `circulo-blossom.html`, `producto.html` (detalle dinámico por `?plan=`), `blossom-bar.html`, `atelier-kiosco.html` (con mapa embebido grande), `quienes-somos.html`, `sostenibilidad.html`, `blog.html`. `atelier.html` queda como redirección a `atelier-kiosco.html`.

## TODOs pendientes

- Confirmar/recortar fotos reales para los planes de Círculo Blossom (hoy `bouquet.png` y `arreglo2.png`, fondo blanco, en `contain`).
- Confirmar derechos de `ChatGPT-Image-*` (origen IA) antes de usarla.
- Conectar los botones de plan a un flujo de pago/contratación real si se desea (hoy llevan a `producto.html` y a WhatsApp).
- Redactar páginas legales reales (Términos, Privacidad, Cookies) — hoy son placeholders `#`.
- Ampliar Blog/Sostenibilidad con contenido real cuando exista.
- Sustituir `fond.png` si se decide usar una banda decorativa oscura.
