<script setup>
const props = defineProps({
  limit: Number,
})

const { data: posts } = await useFetch('/api/posts/list', {
  headers: {
    'Cache-Control': 's-maxage=3600, stale-while-revalidate',
  },
})
</script>

<template>
  <div class="mb-10 font-medium flex items-center leading-7 opacity-30">
    <!-- <ul>
      <li
        class="
          bg-black bg-opacity-10
          dark:bg-white dark:bg-opacity-10
          px-3
          rounded-sm
          cursor-pointer
        "
      >
        All
      </li>
      <li class="hover:opacity-100 px-3 rounded-sm opacity-40 cursor-pointer">
        Development
      </li>
      <li class="hover:opacity-100 px-3 rounded-sm opacity-40 cursor-pointer">
        Design
      </li>
    </ul> -->
    Last thoughts
  </div>
  <ul class="space-y-12">
    <BlogArticle v-for="(post, i) in posts" :key="i" :post="post" />
  </ul>
</template>
