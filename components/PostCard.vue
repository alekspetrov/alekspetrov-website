<script setup>
import slugify from 'slugify'

const props = defineProps({
  post: { type: Object, default: () => ({}) },
  variant: {
    type: String,
    default: 'md',
    validator: val => ['md', 'lg', 'sm'].includes(val),
  },
})
</script>

<template>
  <template v-if="variant === 'lg'">
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
          {{ post.description }}
        </p>
        <span class="text-gray-600">{{ post.date }}</span>
      </div>
    </div>
  </template>
  <template v-if="variant === 'md'">
    <li class="leading-6">
      <NuxtLink
        :to="`/${slugify(post.title).toLowerCase()}`"
        prefetch
        class="mb-4 block"
      >
        <AtomsMedia name="jordan-whitfield-1_nvzvgf" />
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
        {{ post.description }}
      </p>
      <div class="text-gray-600 mr-6 text-sm">{{ post.date }}</div>
    </li>
  </template>
</template>
