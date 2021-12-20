import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: ['~/assets/css/fonts.css', '~/assets/css/tailwind.css'],
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
    notionPostDbId: process.env.NOTION_PAGE_ID,
  },
})
