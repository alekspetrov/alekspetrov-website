<script setup>
const props = defineProps({
  post: { type: Object, default: () => ({}) },
})
</script>

<template>
  <li class="space-y-4 leading-6">
    <NuxtLink :to="`/posts/${post.id}`" class="hover:text-accent">
      <h3 class="font-medium text-lg">
        {{ post.title }}
      </h3>
    </NuxtLink>
    <p class="opacity-50">
      {{ post.desctiption }}
    </p>
    <div class="opacity-80">12 Dec, 2021</div>
  </li>
</template>
