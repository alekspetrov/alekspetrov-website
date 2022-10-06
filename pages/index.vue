<script setup>
const nuxtAppHook = useNuxtApp().hook
const { query } = useRoute()

nuxtAppHook('page:finish', () => {
  window.scrollTo(0, 0)
})

useHead({
  title: 'Aleks Petrov',
  meta: [
    {
      name: 'description',
      content: 'Creating and managing software since 2008.',
    },
  ],
})
</script>

<template>
  <NuxtLayout name="blog">
    <div class="wrapper-sm">
      <BlockBanner :role="query.role" class="index-page-banner" />
      <BlockProjects />
      <BlockPosts />
      <BlockExperience v-if="query.experience" />
    </div>
  </NuxtLayout>
</template>
