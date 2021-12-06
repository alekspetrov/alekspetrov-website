<script setup>
const props = defineProps({
  limit: Number,
})

const { data: posts } = await useFetch('/api/notion/posts')
</script>

<template>
  <div class="mb-10">
    <ul class="font-medium flex items-center leading-7">
      <li class="bg-white bg-opacity-10 px-3 rounded-sm cursor-pointer">All</li>
      <li class="hover:opacity-100 px-3 rounded-sm opacity-40 cursor-pointer">
        Development
      </li>
      <li class="hover:opacity-100 px-3 rounded-sm opacity-40 cursor-pointer">
        Design
      </li>
    </ul>
  </div>
  <ul class="space-y-12">
    <BlogArticle v-for="(post, i) in posts" :key="i" :post="post" />
  </ul>
</template>
