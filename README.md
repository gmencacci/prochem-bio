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

## Pendiente antes de producción

- **Fotos reales pendientes** (no se pudieron descargar de Figma, rate limit
  del conector — hoy son placeholders grises marcados en el código, no fotos
  inventadas):
  - 4 fotos de fondo de las tarjetas de Categorías (Herbicidas, Coadyuvantes,
    Insecticidas, Fungicidas).
  - Collage de fotos de la sección Servicios (laboratorio, planta, campo).
  - Foto de hoja a todo el ancho debajo de la franja de Valores destacados.
  - El Hero de Home reutiliza `hero-campo.png` (la misma foto que ya estaba en
    el proyecto) porque no se pudo descargar la foto real del frame INICIO.
- El párrafo de "Soluciones que impulsan la industria" quedó cortado en
  "...técnicamente…" porque el panel de contenido de Figma truncó el texto;
  confirmar la frase final exacta.
- Definir rutas reales de Productos, Blog y Contacto (hoy son placeholders).
- Conectar el formulario de contacto a un servicio de envío (Formspree, Web3Forms
  o una Cloudflare Function) — ver conversación con Claude para opciones.
