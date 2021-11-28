<script setup>
const props = defineProps({
  limit: Number,
})

const { data: posts } = await useFetch('/api/notion/posts')
</script>

<template>
  <div class="px-8 md:px-24">
    <pre>{{ data }}</pre>
    <ul>
      <BlogArticle v-for="(post, i) in posts" :key="i" :post="post" />
    </ul>
  </div>
</template>
