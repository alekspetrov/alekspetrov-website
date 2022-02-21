import { defineNuxtConfig } from 'nuxt3'
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/tokens.css',
    '~/assets/css/fonts.css',
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
  privateRuntimeConfig: {
    api: process.env.API,
  },
  nitro: {
    preset: 'vercel',
  },
  vite: {
    plugins: [eslintPlugin()],
  },
})
