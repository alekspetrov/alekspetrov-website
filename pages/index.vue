<script setup>
const { data: posts } = await useFetch('/api/posts/list')
</script>

<template>
  <NuxtLayout name="blog" v-if="!posts">
    <HeroBanner />
    <PostsFilter />
    <PostsGrid>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </PostsGrid>
  </NuxtLayout>
  <div v-else style="text-align: center; line-height: 72px">Loading...</div>
</template>
