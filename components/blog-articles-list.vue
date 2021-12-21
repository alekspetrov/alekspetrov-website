<script setup>
const props = defineProps({
  limit: Number,
})

const { data: posts } = await useFetch('/api/posts/list')
</script>

<template>
  <ul class="space-y-12">
    <BlogArticle v-for="(post, i) in posts" :key="i" :post="post" />
  </ul>
</template>
