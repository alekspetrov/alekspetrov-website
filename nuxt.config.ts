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
    script: [
      {
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        'data-cf-beacon': '{"token": "9d53d29ccc2c4bb9a5530ca79c07efb8"}',
        defer: true,
      },
    ],
  },
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/tokens.css',
    '~/assets/css/global.css',
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
