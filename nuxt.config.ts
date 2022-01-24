import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/tailwind.css',
    '~/assets/css/nprogress.css',
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  privateRuntimeConfig: {
    notionToken: process.env.NOTION_TOKEN,
    notionDb: process.env.NOTION_DB,
    notionVersion: process.env.NOTION_VERSION,
  },
})
