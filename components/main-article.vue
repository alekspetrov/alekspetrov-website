<script setup>
import slugify from 'slugify'

const props = defineProps({
  post: { type: Object, default: () => ({}) },
})
</script>

<template>
  <div class="flex mb-16 border-b pb-16">
    <NuxtLink
      :to="`/${slugify(post.title).toLowerCase()}`"
      class="w-1/2 overflow-hidden rounded-sm"
    >
      <AtomsMedia name="jordan-whitfield-1_nvzvgf" />
    </NuxtLink>
    <div class="w-1/2 px-12 pt-12">
      <NuxtLink :to="`/${slugify(post.title).toLowerCase()}`">
        <h1 class="mb-4 font-bold text-2xl lg:text-3xl leading-[46px]">
          {{ post.title }}
        </h1>
      </NuxtLink>
      <p class="text-lg text-gray-700 leading-[30px] mb-14">
        {{ post.desctiption }}
      </p>
      <span class="text-gray-600">{{ post.date }}</span>
    </div>
  </div>
</template>
