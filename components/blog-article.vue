<script setup>
import slugify from 'slugify'

const props = defineProps({
  post: { type: Object, default: () => ({}) },
})
</script>

<template>
  <li class="leading-6">
    <NuxtLink
      :to="`/${slugify(post.title).toLowerCase()}`"
      prefetch
      class="mb-4 block"
    >
      <img :src="post.cover" :alt="post.cover" />
    </NuxtLink>
    <NuxtLink
      :to="`/${slugify(post.title).toLowerCase()}`"
      prefetch
      class="transform transition-colors duration-200 ease-in-out hover:text-accent inline-block mb-1"
    >
      <h3 class="font-semibold text-[22px] leading-[34px]">
        {{ post.title }}
      </h3>
    </NuxtLink>
    <p class="text-gray-700 mb-3 text-">
      {{ post.desctiption }}
    </p>
    <div class="text-gray-600 mr-6 text-sm">{{ post.date }}</div>
  </li>
</template>
