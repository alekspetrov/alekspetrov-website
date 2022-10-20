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
  <NuxtLayout name="blog">
    <template v-if="post">
      <PageHeader class="wrapper-sm" :title="post.title" :text="post.date" />
      <div class="article-layout">
        <PageContent :content="post.blocks" />
        <RowForm />
      </div>
    </template>
    <template v-if="error">
      <div class="wrapper-sm">
        <h3>404</h3>
        <p>Sorry, there is no such page</p>
      </div>
    </template>
  </NuxtLayout>
</template>
