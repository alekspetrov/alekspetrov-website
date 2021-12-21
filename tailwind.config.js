module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/*.vue',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*{.js,.ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'hsl(260, 24%, 15%)',
        accent: '#FBC16A',
      },
      rounded: {
        md: '4px',
      },
      width: {
        18: '72px',
      },
      height: {
        18: '72px',
      },
      tracking: {
        tight: '-0.5%',
      },
    },
    fontSize: {
      sm: '0.875rem',
      md: '0.9375rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '2rem',
    },
    fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
