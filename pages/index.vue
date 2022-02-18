<script setup>
const { data: posts } = await useFetch('/api/posts/list')

useMeta(() => ({
  title: 'Aleks Petrov',
  description: 'This is my maker journal to share my learnings.',
}))
</script>

<template>
  <NuxtLayout name="blog" v-if="posts">
    <HeroBanner />
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </NuxtLayout>
  <div v-else style="text-align: center; line-height: 72px">Loading...</div>
</template>
p
