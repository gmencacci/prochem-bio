# Prochem Bio — Sitio institucional

Landing institucional construida con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com),
portada desde el diseño de Figma (`web-Prochem-bio`).

## Arrancar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Build de producción

```bash
npm run build   # genera /dist como HTML estático puro
npm run preview # sirve /dist localmente para verificar el build
```

Deploy: conectar el repo a Cloudflare Pages con:
- **Build command:** `npm run build`
- **Output directory:** `dist`

## Estructura

```
src/
  components/   → una sección/bloque de UI por archivo (Header, Hero, Valores, etc.)
  layouts/      → Layout.astro (shell HTML + meta tags + fuentes)
  pages/        → una ruta por archivo (index.astro = Home, nosotros.astro = Quienes Somos)
  styles/       → global.css (Tailwind + estilos base)
public/         → assets estáticos (logo, favicon, imágenes)
```

**Home** (`index.astro`, frame "INICIO" en Figma): HeroHome, Categorias,
Servicios, ValoresDestacados.

**Quienes Somos** (`nosotros.astro`, frame "NOSOTROS" en Figma): Hero
("Compromiso Prochem"), Valores, Logística, Soluciones, Propósito, Historia,
Normas ISO.

Header y Footer son compartidos por ambas páginas.

## Tokens de diseño (`tailwind.config.mjs`)

Colores extraídos del archivo de Figma:

| Token              | Hex       | Uso                                  |
|--------------------|-----------|---------------------------------------|
| `prochem-dark`     | `#13322c` | Verde institucional (headers, footer) |
| `prochem-darker`   | `#0a3213` | Verde alternativo (bloque soluciones) |
| `prochem-accent`   | `#84b527` | Verde lima (acentos, nav activo)      |
| `prochem-yellow`   | `#fad300` | CTA "Contacto"                        |
| `prochem-cream`    | `#f6f5f1` | Fondo de sección alterna              |
| `prochem-gray`     | `#e3e3e3` | Fondo bloque "Propósito"              |

## Estado

- [x] Setup del proyecto (Astro + Tailwind)
- [x] Header / navegación (logo real integrado)
- [x] Home real: Hero "Tecnología E Innovación", Categorías de producto,
      Servicios (Contract Manufacturing / Formulación y Fraccionado /
      I+D), franja de 3 valores destacados
- [x] Quienes Somos: Hero "Compromiso Prochem", Valores corporativos (6 tarjetas)
- [x] Logística y Almacenamiento
- [x] Soluciones que impulsan la industria
- [x] Propósito
- [x] Historia (timeline con 3 hitos reales: 1998, 2000, 2026)
- [x] Normas ISO (certificaciones TÜV NORD + SENASA)
- [x] Footer (dirección, teléfonos, email y redes reales)

Todo el contenido de arriba fue verificado navegando manualmente el archivo
real de Figma (`web-Prochem-bio`, página "Propuesta #002") — no es copy
inventado. El conector MCP de Figma no se pudo usar en ningún momento de este
proyecto por límite de cuota del seat "View"; la verificación se hizo a
mano en el navegador, sección por sección, comparando el `Content` exacto de
cada capa de texto contra lo escrito en el código.

**Importante — hallazgo de esta sesión:** todo lo que hoy está en "Quienes
Somos" (Hero, Valores, Logística, Soluciones, Propósito, Historia, Normas
ISO) había sido armado por error como si fuera el Home. Es contenido real
del frame "NOSOTROS" de Figma, pero estaba en la página equivocada. Se
corrigió moviéndolo a `nosotros.astro` y armando el Home real por separado.

**Segunda corrección (mismo día):** la primera versión de "Servicios" en
Home tenía layout, íconos y hasta un título inventados ("Control de
Manufactura" no existe, es "Contract Manufacturing"). El usuario pasó
capturas de pantalla reales de Figma (Categorías, Servicios, franja de
Valores destacados) que se usaron como referencia exacta para reconstruir
esas 3 secciones: layout de 2 columnas en Servicios (lista sin tarjetas +
collage de fotos), íconos correctos (globe/filter/droplet), y la franja de
3 valores con fondos alternados (verde oscuro/blanco/amarillo) que faltaba
por completo.

**Fotos de Categorías:** el usuario proveyó las 4 fotos reales de fondo
(Herbicidas, Coadyuvantes, Insecticidas, Fungicidas) — están en
`public/categoria-*.png` y ya integradas en `Categorias.astro`.

**Foto del Hero de Home:** el usuario proveyó la foto aérea real de la
planta industrial de Prochem Bio — está en `public/hero-inicio-planta.png`
y ya integrada en `HeroHome.astro`.

**Íconos insignia de Categorías:** el usuario proveyó los 4 SVG exactos de
Figma (círculo verde + gráfico amarillo) — reemplazan los íconos genéricos
inventados. Ver `badge-herbicidas` / `badge-coadyuvantes` /
`badge-insecticidas` / `badge-fungicidas` en `Icon.astro`.

**Ícono del botón "Ver Más":** el usuario proveyó el SVG exacto (flecha en
círculo) — es `arrow-right-circle` en `Icon.astro`. Todos los botones "Ver
Más" del sitio usan el mismo ícono, el mismo radio (8px) y el mismo estado
hover (pasan a `bg-prochem-yellow` / `text-prochem-dark`, igual que el botón
"Contacto" del header).

**Collage de fotos de Servicios:** el usuario proveyó las 5 fotos reales
(depósito, laboratorio, sala de control, pipeta, campo) por separado — están
en `public/servicios-foto-*.png`. Se ubicaron con las coordenadas exactas
(x/y/ancho/alto) que traía el SVG que Figma exportó para ese collage,
recalculadas en % sobre el bounding box real de las 5 fotos (ver
`fotosCollage` en `Servicios.astro`), no estimadas a ojo desde una captura.
También se corrigió el título real "Producción para Terceros" (antes decía
"Contract Manufacturing" por error), se sacó el círculo negro alrededor de
los íconos, se alineó el botón "Ver Más" con los párrafos (no con los
íconos), y se ajustó el ancho de columnas del layout (texto:imagen ≈ 1.4:1).

**Íconos de Servicios:** el usuario proveyó los 3 SVG exactos (globe,
filter, droplet) — reemplazan los íconos genéricos que se habían dibujado a
mano. Se actualizaron en `Icon.astro` (afecta también a Valores.astro y
ValoresDestacados.astro, que reutilizan esos mismos nombres de ícono).

**Franja de Valores destacados:** el usuario proveyó la foto real de fondo
(brote creciendo en la tierra) — está en `public/valores-destacados-fondo.jpg`.
Las 3 tarjetas se rediseñaron para sobresalir por arriba de la foto (mitad
superior sobre blanco, mitad inferior sobre la foto), con radio de 8px y
separación mínima entre ellas, siguiendo instrucciones puntuales del
usuario sobre el layout real de Figma.

## Pendiente antes de producción

- El párrafo de "Soluciones que impulsan la industria" quedó cortado en
  "...técnicamente…" porque el panel de contenido de Figma truncó el texto;
  confirmar la frase final exacta.
- Definir rutas reales de Productos, Blog y Contacto (hoy son placeholders).
- Conectar el formulario de contacto a un servicio de envío (Formspree, Web3Forms
  o una Cloudflare Function) — ver conversación con Claude para opciones.
