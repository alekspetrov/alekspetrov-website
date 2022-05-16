<script setup>
useHead({
  title: 'Aleks Petrov',
  meta: [
    {
      description: 'Product designer & developer blog.',
    },
  ],
})
</script>

<template>
  <NuxtLayout name="blog">
    <BlockBanner />
    <BlockContacts />
    <BlockPosts />
    <BlockExperience />
  </NuxtLayout>
</template>
