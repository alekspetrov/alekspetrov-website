<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const slug = route.params.slug

const {
  data: post,
  error,
  pending,
} = await useFetch(`/api/notion/posts/?query=${slug}`)
</script>

useMeta({ title: post.page.properties.Description.rich_text[0].plain_text, })

<template>
  <NuxtLayout name="blog">
    <PostHeader :properties="post.page.properties" />
    <PostContent :content="post.content" />
  </NuxtLayout>
</template>
