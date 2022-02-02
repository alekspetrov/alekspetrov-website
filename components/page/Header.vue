<script setup>
import { foramatDate } from '../../utils/dateToFormat'

const props = defineProps({
  title: String,
  description: String,
  date: String,
})
</script>

<template>
  <div>
    <h1>
      {{ title }}
    </h1>
    <p>
      {{ description }}
    </p>
    <time>{{ foramatDate(date) }}</time>
  </div>
</template>
