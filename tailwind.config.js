/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "surface-dim": "#d7dccf",
        "on-secondary-fixed": "#001e30",
        "error-container": "#ffdad6",
        "background": "#f6fbee",
        "surface-container-highest": "#dfe4d8",
        "on-tertiary": "#ffffff",
        "on-primary-container": "#ceffba",
        "tertiary": "#206136",
        "surface-container": "#ebf0e3",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "surface-container-high": "#e5eadd",
        "surface": "#f6fbee",
        "on-surface-variant": "#40493b",
        "surface-container-low": "#f0f5e8",
        "on-primary-fixed": "#022100",
        "tertiary-fixed": "#aef2bb",
        "primary": "#0e6400",
        "tertiary-container": "#3a7a4d",
        "secondary": "#006495",
        "outline": "#707a6a",
        "surface-variant": "#dfe4d8",
        "on-primary-fixed-variant": "#0a5300",
        "inverse-on-surface": "#eef3e6",
        "primary-fixed": "#9ff884",
        "on-tertiary-container": "#c4ffcd",
        "surface-tint": "#166e05",
        "outline-variant": "#bfcab7",
        "surface-container-lowest": "#ffffff",
        "on-secondary-container": "#00486c",
        "tertiary-fixed-dim": "#93d6a0",
        "on-secondary-fixed-variant": "#004b71",
        "on-background": "#181d15",
        "inverse-primary": "#84db6b",
        "on-secondary": "#ffffff",
        "surface-bright": "#f6fbee",
        "primary-fixed-dim": "#84db6b",
        "on-surface": "#181d15",
        "on-tertiary-fixed-variant": "#0b5229",
        "on-primary": "#ffffff",
        "inverse-surface": "#2d3229",
        "primary-container": "#2a7e19",
        "on-tertiary-fixed": "#00210c",
        "secondary-container": "#50b9ff",
        "on-error-container": "#93000a",
        "secondary-fixed-dim": "#8fcdff",
        "secondary-fixed": "#cbe6ff"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      "fontFamily": {
        "headline": ["Be Vietnam Pro"],
        "body": ["Work Sans"],
        "label": ["Work Sans"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}