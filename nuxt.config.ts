import { defineNuxtConfig } from 'nuxt3'
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  meta: {
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/avatar-sm.png',
      },
    ],
    script: [],
  },
  css: [
    '~/assets/css/reset.pcss',
    '~/assets/css/tokens.pcss',
    '~/assets/css/global.pcss',
    '~/assets/css/prism-theme.pcss',
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-nested': {},
          autoprefixer: {},
        },
      },
    },
  },
  runtimeConfig: {
    apiUrl: '',
  },
  nitro: {
    preset: 'vercel',
  },
  vite: {
    plugins: [eslintPlugin()],
  },
})
