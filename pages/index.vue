<script setup>
import Projects from '~~/components/block/Projects.vue'
const nuxtAppHook = useNuxtApp().hook

nuxtAppHook('page:finish', () => {
  window.scrollTo(0, 0)
})

useHead({
  title: 'Aleks Petrov',
  meta: [
    {
      name: 'description',
      content:
        'Aleks Petrov he is experienced product maker sharing his experience.',
    },
  ],
})
</script>

<template>
  <NuxtLayout name="blog">
    <BlockBanner />
    <!-- <BlockProjects /> -->
    <BlockPosts />
    <BlockExperience />
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
</style>
