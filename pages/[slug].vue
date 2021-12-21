<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const { params } = useRoute()

const { data: post } = await useFetch(`/api/posts/get`, {
  params,
  headers: {
    'Cache-Control': 's-maxage=3600, stale-while-revalidate',
  },
})
</script>

<template>
  <NuxtLayout name="blog" v-if="post">
    <div class="max-w-3xl m-auto">
      <PostHeader
        :title="post.title"
        :description="post.description"
        :date="post.date"
      />
      <PostContent :content="post.blocks" />
    </div>
  </NuxtLayout>
</template>
