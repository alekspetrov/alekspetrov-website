<script setup>
const { data: posts } = await useFetch('/api/posts/list')
</script>

<template>
  <NuxtLayout name="blog" v-if="posts">
    <HeroBanner />
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </NuxtLayout>
  <div v-else style="text-align: center; line-height: 72px">Loading...</div>
</template>
p
