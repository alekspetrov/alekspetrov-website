import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/tokens.css',
    '~/assets/css/fonts.css',
    '~/assets/css/nprogress.css',
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
    notionToken: process.env.API,
  },
})
