<script setup>
const { params } = useRoute()

const { data: post } = await useFetch(`/api/posts/get`, {
  params,
})
</script>

<template>
  <NuxtLayout name="blog" v-if="post">
    <div class="max-w-3xl mx-auto">
      <PostHeader
        :title="post.title"
        :description="post.description"
        :date="post.date"
      />
      <!-- <PostContent :content="post.blocks" /> -->
    </div>
  </NuxtLayout>
</template>
