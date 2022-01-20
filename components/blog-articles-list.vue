<script setup>
const props = defineProps({
  limit: Number,
})

const { data: posts } = await useFetch('/api/posts/list')
</script>

<template>
  <div v-if="posts">
    <MainArticle :post="posts.main" />
    <!-- TODO: add data provider compoent to filter data from filters -->
    <!-- <PostsFilter /> -->
    <PostsGrid>
      <BlogArticle v-for="(post, i) in posts.list" :key="i" :post="post" />
    </PostsGrid>
  </div>
</template>
