<script setup>
const nuxtAppHook = useNuxtApp().hook

nuxtAppHook('page:finish', () => {
  window.scrollTo(0, 0)
})

useHead({
  title: 'Aleks Petrov',
  meta: [
    {
      name: 'description',
      content: 'Product designer & developer blog.',
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
