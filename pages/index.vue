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
    <BlockPosts />
    <BlockProjects />
    <!-- <BlockExperience /> -->
  </NuxtLayout>
</template>

<style lang="postcss">
.block-title {
  margin-bottom: 16px;
}

.projects {
  li {
    margin-bottom: 8px;

    a:hover {
      color: white;
    }
  }
}
</style>
