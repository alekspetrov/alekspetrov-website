<script setup>
useHead({
  title: 'Experience',
  meta: [
    {
      name: 'description',
      content: 'Work experience from 2008 till now.',
    },
  ],
})
</script>

<template>
  <NuxtLayout name="blog">
    <PageHeader class="wrapper-sm" title="Experience" />
    <div class="wrapper-sm">
      <BlockExperience />
    </div>
  </NuxtLayout>
</template>
