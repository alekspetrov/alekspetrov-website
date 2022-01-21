<script setup>
import { computed } from 'vue'

const props = defineProps({
  url: { type: String, default: '' },
  name: { type: String, default: '' },
  alt: { type: String, default: '' },
  sizes: { type: Array, default: () => [] },
  width: { type: Number, default: 0 },
  height: { type: Number, default: 0 },
})

const url = props.url
  ? props.url
  : `https://res.cloudinary.com/alekspetrov/image/upload/v1642683138/website/${props.name}.jpg`
</script>

<template>
  <figure>
    <img :src="url" :alt="alt" />
  </figure>
</template>
