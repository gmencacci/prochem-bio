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
  pages/        → una ruta por archivo (index.astro = Home)
  styles/       → global.css (Tailwind + estilos base)
public/         → assets estáticos (logo, favicon, imágenes)
```

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
- [x] Hero — "Compromiso Prochem" (copy placeholder, ver pendientes)
- [x] Valores corporativos (contenido real, íconos propios estilo lucide)
- [x] Logística y Almacenamiento (contenido real, vía screenshot)
- [ ] Soluciones que impulsan la industria
- [ ] Propósito
- [ ] Historia
- [ ] Normas ISO + footer

## Pendiente antes de producción

- Confirmar el copy exacto del subtítulo del Hero contra el diseño real — el texto
  actual ("Más de 25 años desarrollando...") es un placeholder inventado, nunca se
  pudo re-verificar contra Figma por el rate limit del conector (ver conversación).
- Definir rutas reales de Productos, Blog y Contacto (hoy son placeholders).
- Conectar el formulario de contacto a un servicio de envío (Formspree, Web3Forms
  o una Cloudflare Function) — ver conversación con Claude para opciones.
