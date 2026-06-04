# Inventario de imágenes — Triplets Atelier Redesign

Actualizado tras el rediseño v2. Todas las imágenes viven en `images/`.
Regla general aplicada: **fotos** → `object-fit: cover` con `object-position` cuidada y `aspect-ratio` en la caja; **renders/productos con fondo blanco** → `object-fit: contain` sobre panel claro (nunca estirados a cover).

## Marca / logotipo

| Archivo | Dimensiones | Uso | Dónde | Estado |
|---|---|---|---|---|
| `cropped-icon.png` | 512×512 | Marca aislada (3 capullos), legible en tamaño pequeño | Navbar, footer y favicon de **todas** las páginas | Usado |
| `IMG_4765.JPG.jpeg` | 1552×1600 | Logotipo completo con wordmark | Home → "momento de marca" (`.brand-strip`) | Usado |
| `icon.png` | 500×481 | Variante de la marca aislada | Respaldo de `cropped-icon` | Pendiente |
| `LOGO-D.png` | 400×400 | Logo completo cuadrado | Respaldo / favicon alterno (ya no se mete a presión en el círculo de la navbar) | Pendiente |

## Fotografía en uso

| Archivo | Dimensiones | Ratio | Uso | Dónde | Estado |
|---|---|---|---|---|---|
| `WhatsApp-Image-2026-02-18-at-10.07.24-AM.jpeg` | 1066×1600 | 0.67 vert | Hero principal (kraft + rosas + listón de marca) | Home hero; galería Blossom Bar | Usado |
| `IMG_3801.jpeg` | 1125×1396 | 0.81 vert | Bouquet premium en casa (anémonas, eucalipto) | Home card Círculo Blossom; hero Círculo Blossom; galería Blossom Bar (feature) | **Usado** (reasignada: estaba "dudoso") |
| `conos-20.jpg.jpeg` | 900×1350 | 0.67 vert | Cono kraft con sello de marca | Home hero (sub) y card Atelier; hero Atelier; galería Blossom Bar | Usado |
| `conos-15.jpg.jpeg` | 900×1350 | 0.67 vert | Mesa con conos y cubetas (armado) | Home card Blossom Bar; hero Blossom Bar; "arma tu ramo" Atelier | Usado |
| `WhatsApp-Image-2026-04-17-at-2.01.13-PM.jpeg` | 1280×1023 | 1.25 horiz | Las dos fundadoras con bouquets | Hero Quiénes somos (`object-position: 50% 30%`); banda Bosque Real en Home | Usado |
| `clau.png` | 289×275 | ~1.0 | Retrato Claudia | Quiénes somos → tarjeta fundadora **circular** (`cover`, center-top) | Usado |
| `cris.png` | 289×275 | ~1.0 | Retrato Cristina | Quiénes somos → tarjeta fundadora **circular** (`cover`, center-top) | Usado |
| `arreglo2.png` | 400×536 | 0.75 | Bouquet kraft de marca (fondo blanco) | Plan de 30 tallos + `producto.html` (30) → **`contain`** sobre panel stone | Usado |
| `bouquet.png` | 300×300 | 1.0 | Bouquet mixto (fondo blanco) | Plan de 15 tallos + `producto.html` (15) → **`contain`** sobre panel stone | Usado |
| `flower-bar.png` | 400×310 | 1.29 | Render del carrito/barra de marca | Blossom Bar → "Qué es" → **`contain`** sobre panel claro | **Corregida** (antes estirada en una caja `cover` alta) |
| `evento3.jpg.jpeg` | 2500×612 | 4.08 horiz | Mesa de evento, centro floral, luz cálida | Blossom Bar → **banner cinematográfico ancho** (`cover`, overlay verde) | **Corregida** (antes recortada a un sliver en caja alta) |
| `tulipanes.jpg.jpeg` | 946×606 | 1.56 horiz | Campo de tulipanes (flores de temporada) | Galería Blossom Bar | **Usado** (reasignada: estaba pendiente) |
| `f1.png` | 800×405 | 1.98 | Line-art floral casi blanco | Sostenibilidad → watermark decorativo sutil | **Usado** (reasignada) |
| `flor-movil.png` | 700×626 | 1.12 | Flor line-art clara | Blog → adorno en `post-cover` (vía CSS) | **Usado** (reasignada) |

## Sin uso / a revisar

| Archivo | Dimensiones | Motivo | Estado |
|---|---|---|---|
| `fond.png` | 2500×989 | Line-art floral sobre **fondo negro**; no encaja en la paleta crema. Posible banda oscura futura. | Pendiente |
| `ChatGPT-Image-Apr-14-2026-04_15_35-PM.jpg.jpeg` | 1086×1448 | Bouquet sobre mármol, estéticamente excelente, pero parece generada por IA: derechos/origen por confirmar antes de publicarla. | Dudoso |

## Notas de corrección (problemas detectados y solución)

1. **`evento3` (panorámica 2500×612)** se mostraba en cajas altas con `cover` → solo se veía una franja vertical. Ahora se usa en un **banner ancho** (`aspect-ratio` ~21/8 en desktop) donde su proporción natural luce completa, con overlay verde y texto encima.
2. **`flower-bar` (400×310, baja resolución)** se estiraba a una caja `cover` grande → se veía pixelada/cortada. Ahora va **`contain`** sobre un panel claro: se ve completa, nítida y como lo que es (un render de catálogo).
3. **Retratos `clau`/`cris`** ahora en contenedor **circular** con `object-fit: cover` y `object-position: center top`, más un *spotlight* radial detrás. Sin estiramiento.
4. **Productos con fondo blanco** (`bouquet`, `arreglo2`) van siempre en `contain` con sombra suave, no en `cover`.
5. El **logo** ya no se mete a presión dentro del círculo de 50px de la navbar (el wordmark quedaba ilegible). La navbar usa la **marca aislada** `cropped-icon.png`; el logotipo completo se reserva para el "momento de marca" de la Home.
