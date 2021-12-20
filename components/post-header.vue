<script setup>
import { foramatDate } from '../utils/dateToReadable.js'

const props = defineProps({
  title: String,
  description: String,
  date: String,
})
</script>

<template>
  <div class="mb-12">
    <h1 class="font-semibold text-2xl leading-8 mb-3">
      {{ title }}
    </h1>
    <p class="text-lg leading-7 font-medium opacity-60 mb-8">
      {{ description }}
    </p>
    <time class="opacity-40">{{ foramatDate(date) }}</time>
  </div>
</template>
