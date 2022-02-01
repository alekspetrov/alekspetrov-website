<script setup>
const { data: posts } = await useFetch('/api/posts/list')
</script>

<template>
  <NuxtLayout name="blog">
    <div v-if="posts">
      <HeroBanner />
      <PostsFilter />
      <PostsGrid>
        <PostCard v-for="(post, i) in posts.list" :key="i" :post="post" />
      </PostsGrid>
    </div>
    <div v-else class="w-full text-center font-medium">
      <div>Oh no, service unavaible... Working on hot fix!</div>
      <a href="https://twitter.com/alekspetrov_"
        >Check my twitter for a progress -></a
      >
    </div>
  </NuxtLayout>
</template>
