# Brand system - Triplets Atelier Redesign

## Intencion visual

La nueva home busca sentirse editorial, limpia y premium sin copiar la estructura del sitio actual. La referencia principal de marca se mantiene en tres ideas: flores con curaduria, experiencia fisica en Bosque Real y servicios faciles de entender.

El enfoque visual evita depender todavia de fotografias o logos finales. Por eso se usan placeholders abstractos en CSS: petalos, tallos, bloques tipo collage y tarjetas flotantes. La intencion es dejar una base lista para sustituir esos espacios por imagenes reales cuando existan assets aprobados.

## Paleta aproximada

La paleta se aproxima a la identidad actual de Triplets Atelier observada en su web: fondos claros y calidos, acentos florales suaves, verdes naturales y texto cafe profundo. No es una extraccion exacta de marca; es una aproximacion para este draft conceptual.

- `--color-cream: #fbf6ee`  
  Fondo principal calido. Mantiene una sensacion suave y luminosa.

- `--color-warm-white: #fffdf8`  
  Superficies limpias para tarjetas, formularios y elementos flotantes.

- `--color-petal: #efd4cc`  
  Rosa petalo apagado para fondos florales y volumen visual.

- `--color-blush: #d9a59c`  
  Rosa mas presente para piezas de collage y acentos secundarios.

- `--color-clay: #ae6f5b`  
  Terracota floral para interacciones y detalles de conversion.

- `--color-clay-dark: #7d493e`  
  CTA principal, estados hover y acentos con mas contraste.

- `--color-olive: #6b765d`  
  Verde botanico suave para reforzar frescura y naturaleza.

- `--color-moss: #434d3b`  
  Verde profundo para contraste editorial.

- `--color-plum: #3a2a26`  
  Texto principal. Sustituye el negro puro por un tono mas calido.

- `--color-cocoa: #5f4a42`  
  Texto secundario y metadata.

- `--color-sand: #e9d8c3`  
  Base neutral para bloques visuales y secciones.

## Variables estructurales

- `--font-title` usa Georgia como serif elegante disponible por defecto.
- `--font-body` usa Arial/Helvetica para mantener legibilidad y cero dependencias externas.
- `--radius-card: 8px` mantiene tarjetas sobrias y profesionales.
- `--radius-soft: 28px` queda reservado para formas decorativas, no para tarjetas principales.
- `--shadow-small` y `--shadow-large` separan tarjetas y collage sin saturar la interfaz.
- `--container: 1180px` controla el ancho maximo de la home.
- `--section-padding` permite ajustar ritmo vertical por breakpoint.

## Decisiones de diseno

1. Header mas profesional: marca a la izquierda, navegacion centrada en desktop y CTA fijo a la derecha.
2. Hero con funcion de resumen: comunica floristeria premium, Bosque Real, suscripciones, Blossom Bar, atelier fisico y contacto inmediato.
3. Composicion editorial: el collage visual usa formas CSS para anticipar una direccion fotografica sin bloquear el avance por falta de assets.
4. Servicios menos genericos: cada tarjeta tiene una atmosfera visual propia y una accion clara.
5. Mobile-first: la navegacion arranca como panel movil y se convierte en barra centrada a partir de desktop.
6. Vanilla stack: no se agregan frameworks, librerias ni fuentes externas.

## Uso futuro

Cuando lleguen imagenes reales, se recomienda sustituir gradualmente los placeholders de `.hero-visual` y `.service-visual` por fotografia clara de flores, atelier y eventos. La paleta puede ajustarse contra assets oficiales manteniendo los roles actuales de variables.
