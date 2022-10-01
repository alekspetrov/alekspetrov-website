<script setup>
const { params } = useRoute()

const {
  data: post,
  error,
  pending,
} = await useFetch(`/api/posts/get`, {
  params,
})

if (post.value) {
  useHead({
    title: post.value.title,
    meta: [
      {
        name: 'description',
        content: post.value.description,
      },
    ],
  })
}
</script>

<template>
  <NuxtLayout name="blog" class="body-text">
    <template v-if="post">
      <PageHeader :title="post.title" :text="post.date" />
      <PageContent :content="post.blocks" />
      <BlockForm />
    </template>
    <template v-if="error">
      <h3>404</h3>
      <p>Sorry, there is no such page</p>
    </template>
  </NuxtLayout>
</template>
