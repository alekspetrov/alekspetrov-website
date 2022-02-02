<script setup>
const { params } = useRoute()

const { data: post } = await useFetch(`/api/posts/get`, {
  params,
})
</script>

<template>
  <NuxtLayout name="blog" v-if="post">
    <PageHeader
      :title="post.title"
      :description="post.description"
      :date="post.date"
    />
    <PageContent :content="post.blocks" />e
  </NuxtLayout>
</template>
