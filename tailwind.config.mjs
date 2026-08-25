/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Tokens extraídos directamente del archivo de Figma (web-Prochem-bio)
        prochem: {
          dark: '#13322c',   // verde institucional oscuro (headers, footer, textos)
          darker: '#0a3213', // verde oscuro alternativo (bloque "Soluciones")
          accent: '#84b527', // verde lima (acentos, nav activo, hover)
          yellow: '#fad300', // amarillo (CTA "Contacto")
          cream: '#f6f5f1',  // fondo de sección alterna
          gray: '#e3e3e3',   // fondo bloque "Propósito"
        },
      },
      fontFamily: {
        // Inter para textos generales, Plus Jakarta Sans para navegación/CTA
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
};
