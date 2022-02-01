module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/*.vue',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*{.js,.ts}',
    './nuxt.config.{js,ts}',
  ],
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
      fontSize: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.75rem',
        '2xl': '2.125rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
      },
      lineHeight: {
        12: '3.75rem',
      },
    }, 
  },
  plugins: [],
}
