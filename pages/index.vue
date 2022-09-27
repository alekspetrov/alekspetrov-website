<script setup>
const nuxtAppHook = useNuxtApp().hook
const { query } = useRoute()

// TODO:
// [] Pass query to local storage to prevent from using the default website on reload
// [] Add OG schema

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
    <BlockBanner :role="query.role" />
    <BlockProjects />
    <BlockPosts />
    <BlockExperience v-if="query.experience" />
  </NuxtLayout>
</template>

<style lang="postcss">
.page-block {
  margin-bottom: var(--space-4xl);

  > p + * {
    margin-top: var(--space-xl);
  }
}

.page-block-title {
  margin-bottom: var(--space-xl);
}

@media screen and (max-width: 480px) {
  .page-block-title {
    margin-bottom: var(--space-3xl);
  }
}
</style>
