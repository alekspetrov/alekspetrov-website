<script setup>
const { params } = useRoute()

const { data: post, error } = await useFetch(`/api/posts/get`, {
  params,
})

if (post.value) {
  useMeta(() => ({
    title: post.value.title,
    description: post.value.description,
  }))
}
</script>

<template>
  <div>
    <NuxtLayout name="blog" v-if="post && !error">
      <PageHeader
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :tags="post.tags"
      />
      <PageContent :content="post.blocks" />
    </NuxtLayout>
    <NuxtLayout name="error" v-else />
  </div>
</template>
