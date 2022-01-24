<script setup>
import slugify from 'slugify'

const props = defineProps({
  post: { type: Object, default: () => ({}) },
})
</script>

<template>
  <div class="lg:flex mb-8 md:mb-16 pb-8 md:pb-16 border-b">
    <NuxtLink
      :to="`/${slugify(post.title).toLowerCase()}`"
      class="mb-4 block lg:w-1/2 lg:mb-0 overflow-hidden rounded-sm"
    >
      <AtomsMedia name="jordan-whitfield-1_nvzvgf" />
    </NuxtLink>

    <div class="lg:w-1/2 lg:px-12 md:pt-12">
      <NuxtLink :to="`/${slugify(post.title).toLowerCase()}`">
        <h1
          class="mb-2 md:mb-4 font-bold text-xl md:text-2xl lg:text-3xl leading-[46px]"
        >
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
