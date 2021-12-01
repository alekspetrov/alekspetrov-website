<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <NuxtLayout name="blog">
    <PostContent :slug="route.params.slug" />
  </NuxtLayout>
</template>
