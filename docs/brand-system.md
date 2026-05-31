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

## TODOs pendientes

- Confirmar dirección exacta del kiosco en Bosque Real.
- Confirmar horarios de atención.
- Sustituir placeholders CSS por imágenes reales aprobadas.
- Revisar enlaces legales cuando existan páginas finales.
