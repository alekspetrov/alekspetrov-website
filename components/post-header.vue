<script setup>
import { foramatDate } from '../utils/dateToReadable.js'

const props = defineProps({
  properties: {
    type: Object,
    default: () => ({}),
  },
})

const date = foramatDate(props.properties['Crated at'].created_time)
</script>

<template>
  <div class="mb-12">
    <h1 class="font-semibold text-2xl leading-8 mb-3">
      {{ properties.Name.title[0].plain_text }}
    </h1>
    <p class="text-lg leading-7 font-medium opacity-60 mb-8">
      {{ properties.Description.rich_text[0].plain_text }}
    </p>
    <time class="opacity-40">{{ date }}</time>
  </div>
</template>
