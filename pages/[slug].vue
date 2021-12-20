<script setup>
import { useRoute } from 'vue-router'

const { params } = useRoute()

const { data: post } = await useFetch(`/api/posts/get`, {
  params,
})

useMeta({
  title: post._value.page.properties.Name.title[0].plain_text,
})
</script>

<template>
  <NuxtLayout name="blog" v-if="post">
    <div class="max-w-3xl m-auto">
      <PostHeader :properties="post.page.properties" />
      <PostContent :content="post.blocks" />
    </div>
  </NuxtLayout>
</template>
