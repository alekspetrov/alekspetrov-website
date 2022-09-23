<script setup>
import slugify from 'slugify'

const { data: posts } = await useFetch('/api/posts/list')

const makeSlug = (text) => {
  return `/${slugify(text, {
    remove: /[:+~*.()'"!@]/g,
    lower: true,
  })}`
}
</script>

<template>
  <NuxtLayout name="blog">
    <BlockPosts />
  </NuxtLayout>
</template>
