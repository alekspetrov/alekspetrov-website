<script setup>
const props = defineProps({
  post: { type: Object, default: () => ({}) },
})
</script>

<template>
  <li class="py-12 border-b">
    <NuxtLink to="/">
      <h3 class="font-bold text-3xl text-gray-700 hover:text-gray-900 mb-3">
        {{ post.title }}
      </h3>
    </NuxtLink>
    <p class="font-serif text-gray-500 mb-6">
      {{ post.desctiption }}
    </p>
    <time class="flex space-x-2 uppercase text-xs text-gray-400">
      {{ post.crated_at }}
    </time>
  </li>
</template>
