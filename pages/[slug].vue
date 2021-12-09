<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const slug = route.params.slug

const {
  data: post,
  error,
  pending,
} = await useFetch(`/api/notion/posts/?query=${slug}`, { lazy: true })

// useMeta({ title: post.page.properties.Description.rich_text[0].plain_text})
</script>

<template>
  <NuxtLayout name="blog">
    <template v-if="pending">Loading...</template>
    <template v-else-if="error">Oops! Sometging goes wrong =/</template>
    <template v-else>
      <PostHeader :properties="post.page.properties" />
      <!-- <PostContent :content="post.content" /> -->
      <pre>
        {{ post.blocks }}
      </pre>
    </template>
  </NuxtLayout>
</template>
