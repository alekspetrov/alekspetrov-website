<script setup>
const props = defineProps({
  post: { type: Object, default: () => ({}) },
})
</script>

<template>
  <li class="py-12 border-b">
    <NuxtLink :to="`/posts/${post.id}`">
      <h3 class="font-bold text-3xl text-gray-700 hover:text-gray-900 mb-3">
        {{ post.title }}
      </h3>
    </NuxtLink>
    <p class="font-serif text-gray-500 mb-6">
      {{ post.desctiption }}
    </p>
    <div class="flex space-x-2 uppercase text-xs text-gray-500 font-mono">
      <div>{{ post.crated_at }}</div>
      <div>•</div>
      <div
        v-for="tag in post.tags"
        :key="tag"
        class="uppercase text-xs tracking-wider text-gray-500"
      >
        {{ tag.name }}
      </div>
    </div>
  </li>
</template>
