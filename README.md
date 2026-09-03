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
  pages/        → una ruta por archivo (index.astro = Home, nosotros.astro = Quienes Somos, productos.astro = Productos)
  styles/       → global.css (Tailwind + estilos base)
public/         → assets estáticos (logo, favicon, imágenes)
```

**Home** (`index.astro`, frame "INICIO" en Figma): HeroHome, Categorias,
Servicios, ValoresDestacados, Noticias, NormasISOHome.

**Quienes Somos** (`nosotros.astro`, frame "NOSOTROS" en Figma): Hero
("Compromiso Prochem"), Valores, Logística, Soluciones, Propósito, Historia,
Normas ISO.

**Productos** (`productos.astro`, frame "PRODUCTOS" en Figma): ProductosHero
("Nuestros Servicios Y Productos"), ServiciosDetalle (3 tarjetas: Formulación
y Fraccionado / Contract Manufacturing / Investigación Y Desarrollo I+D, con
checklist y botón "Contactar"), ProductosFitosanitarios (reutiliza la
grilla de 4 categorías de Categorias.astro), ProductosIndustriales (2
tarjetas: Productos para la industria papelera / Auxiliares para industria
textil), NormasISOHome (la misma sección que en el Home — es un frame
distinto en Figma pero con contenido idéntico).

**Blog** (`blog.astro`, frame "BLOG" en Figma): BlogHero ("Blog" / "Noticias"
sobre foto — falta la foto real), BlogNoticiasComunidad (mismas 3 tarjetas
y fotos que la sección Noticias del Home, sin repetir el heading que ya
puso el Hero), BlogNoticiasEmpresa (3 tarjetas nuevas — Expansión del
centro Logístico / Crecimiento Sostenido / Incorporación — sobre fondo
verde oscuro, con una franja de foto debajo que también falta).

Header y Footer son compartidos por todas las páginas.

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
- [x] Noticias (3 novedades reales de la comunidad, con foto propia)
- [x] Normas ISO del Home (3 certificaciones TÜV NORD + logos de CIAFA,
      CampoLimpio y SENASA) — distinta de la sección "Normas ISO" de
      Quienes Somos, que vive en un frame de Figma separado
- [x] Quienes Somos: Hero "Compromiso Prochem", Valores corporativos (6 tarjetas)
- [x] Logística y Almacenamiento
- [x] Soluciones que impulsan la industria
- [x] Propósito
- [x] Historia (timeline con 3 hitos reales: 1998, 2000, 2026)
- [x] Normas ISO (certificaciones TÜV NORD + SENASA)
- [x] Footer (dirección, teléfonos, email y redes reales)
- [x] Productos: Hero, 3 tarjetas de Servicios con checklist, grilla de
      Productos Fitosanitarios (4 categorías), 2 tarjetas de Productos
      Industriales, Normas ISO — falta la foto real del hero (ver pendientes)

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

**Sección "Noticias":** el usuario pasó 3 fotos reales (equipo de fútbol con
pecheras de Prochem Bio, foto de un podio de maratón y una captura de una
historia de Instagram de "Casa Familia Rosario" agradeciendo una donación).
Las 2 capturas de teléfono se recortaron (se sacó el chrome de WhatsApp/
Instagram) para dejar solo la foto, tal como se ve en el diseño de Figma —
están en `public/noticias-*.png`. El texto de las 3 tarjetas (tag, fecha,
título, subtítulo y descripción) se verificó con la herramienta de búsqueda
de texto de Figma para no adivinar ninguna palabra, incluyendo frases largas
que quedaban cortadas visualmente por el tamaño de pantalla del navegador.

**Sección "Normas ISO" del Home:** distinta de la sección del mismo nombre
en Quienes Somos (son dos frames separados en Figma, con contenido
diferente). La del Home tiene dos grillas de 3 columnas: arriba, 3 imágenes
reales de certificaciones TÜV NORD (TÜV NORD BRASIL / ISO 14001, TÜV NORD
CERT GmbH / ISO 45001, TÜV NORD BRASIL / ISO 9001) que pasó el usuario —
`public/normas-tuvnord-*.jpg`; abajo, los 3 logos reales de CIAFA,
CampoLimpio y SENASA en `public/normas-*.png`.

**Footer:** reconstruido contra Figma después de encontrar varias
diferencias con la versión anterior (que tenía datos inventados): la
dirección real es "Av. Azucena Villaflor 645, Parque Comirsa. Ramallo
(2915), Buenos Aires, Argentina." (no "San Nicolás"), un solo teléfono
"+54 9 11 6462-8412" (no dos números con otro formato), y no hay párrafo
debajo del logo ni línea de copyright — no existen en el diseño real. El
logo "PROCHEM bio -Industria Argentina-" es el SVG exacto que pasó el
usuario (`public/logo-footer.svg`). Los enlaces de navegación (Home,
Productos, Sobre Nosotros, Blog) llevan un ícono de flecha externa
(`external-link` en `Icon.astro`), y el ícono de LinkedIn tiene fondo verde
sólido mientras que Instagram y YouTube son solo borde, sin relleno.

**Página "Productos":** el frame de Figma es mucho más grande de lo que
sugería el resto del sitio — además de repetir los 3 servicios del Home
(ahora con checklist y botón "Contactar" propio), tiene una sección
"Productos Fitosanitarios" (reutiliza la grilla de 4 categorías del Home)
y una sección "Productos Industriales" con 2 tarjetas nuevas ("Productos
para la industria papelera" y "Auxiliares para industria textil"), más la
misma sección "Normas ISO" del Home al final. El fondo del hero son dos
fotos reales apiladas sin espacio entre sí (persona con guantes de nitrilo
+ hilera de cultivos, ambas provistas por el usuario) para que se vean
como una sola imagen continua; las 3 tarjetas de Servicios flotan encima,
tapando la costura entre ambas — mismo recurso visual que
ValoresDestacados en el Home, verificado contra el preview real de Figma. El subtítulo "Producción
para Terceros" se repite igual en las 3 tarjetas de Servicios y en las 2
de Productos Industriales — así está en el Figma real, no es un error de
tipeo nuestro (sí se corrigió el typo "indutrial" → "industrial" en un
ítem de checklist, por ser un error obvio de tipeo). Las 2 fotos del hero (persona con guantes de nitrilo y foto de campo) ya
las pasó el usuario y están en `public/productos-hero.png` y
`public/productos-hero-campo.png`.

**Página "Blog":** dos secciones de tarjetas de novedades. La primera
("Comunidad") es idéntica en contenido a la sección Noticias del Home — se
reutilizan las mismas 3 fotos/textos, solo que acá el heading "Blog" /
"Noticias" vive en el Hero de la página (con foto de fondo) en vez de
repetirse arriba de la grilla. La segunda ("Empresa") son 3 tarjetas
nuevas sobre fondo verde oscuro, sin fotos individuales — el título de la
primera decía "Expanción" en Figma (typo real, sin la "s") y se corrigió a
"Expansión" acá, igual que se corrigió "indutrial" en Productos. **Faltan
2 fotos reales**: el fondo del Hero (3 personas con casco de seguridad) y
la franja debajo de las tarjetas "Empresa" (plantines/almácigo) — por
ahora son bloques de color sólido en vez de imágenes inventadas, marcados
con comentarios `TODO` en `BlogHero.astro` y `BlogNoticiasEmpresa.astro`.

## Pendiente antes de producción

- El párrafo de "Soluciones que impulsan la industria" quedó cortado en
  "...técnicamente…" porque el panel de contenido de Figma truncó el texto;
  confirmar la frase final exacta.
- Definir rutas reales de Blog y Contacto (hoy son placeholders).
- Conectar el formulario de contacto a un servicio de envío (Formspree, Web3Forms
  o una Cloudflare Function) — ver conversación con Claude para opciones.
