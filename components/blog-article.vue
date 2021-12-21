<script setup>
import slugify from 'slugify'

const props = defineProps({
  post: { type: Object, default: () => ({}) },
})
</script>

<template>
  <li class="leading-6">
    <NuxtLink
      prefetch
      :to="`/${slugify(post.title).toLowerCase()}`"
      class="
        transform
        transition-colors
        duration-200
        ease-in-out
        hover:text-accent
        inline-block
        mb-1
      "
    >
      <h3 class="font-medium text-lg">
        {{ post.title }}
      </h3>
    </NuxtLink>
    <p class="opacity-50 mb-3">
      {{ post.desctiption }}
    </p>
    <div class="opacity-30 mr-6 text-sm">{{ post.date }}</div>
  </li>
</template>
