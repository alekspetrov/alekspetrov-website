<script setup>
const nuxtAppHook = useNuxtApp().hook
const { query } = useRoute()

// [] Pass query to local storage to prevent from using the default website on reload
// [] They can send url to others

nuxtAppHook('page:finish', () => {
  window.scrollTo(0, 0)
})

useHead({
  title: 'Aleks Petrov',
  meta: [
    {
      name: 'description',
      content: 'Creating & managing software since 2008. ',
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

  > h3 {
    margin-bottom: var(--space-xl);
  }

  > p + * {
    margin-top: var(--space-xl);
  }
}

@media screen and (max-width: 480px) {
  .page-block {
    margin-bottom: var(--space-3xl);
  }
}
</style>
