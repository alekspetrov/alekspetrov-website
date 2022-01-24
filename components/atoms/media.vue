<script setup>
// Very basic implemenation of media component
import { computed } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  sizes: { type: Array, default: () => ['320', '640', '768', '1024', '1280'] },
  name: { type: String, default: '' },
  quality: { type: Number, default: 70 },
})

const url = 'https://res.cloudinary.com/alekspetrov/image/upload'
const src = `${url}/f_auto,q_70,w_640/v1642683138/website/${props.name}.jpg`

const srcset = computed(() =>
  props.sizes.map(
    screen =>
      `${url}/f_auto,q_${props.quality},w_${screen}/v1642683138/website/${props.name}.jpg ${screen}w`
  )
)
</script>

<template>
  <figure>
    <img :sizes="sizes" :srcset="srcset.join(', ')" :src="src" :alt="alt" />
  </figure>
</template>
