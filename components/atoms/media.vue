<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  sizes: { type: String, default: '100vw' },
  name: { type: String, default: '' },
  quality: { type: Number, default: 70 },
  width: { type: Number, default: 'auto' },
  height: { type: Number, default: 'auto' },
})

const screens = ['320', '640', '768', '1024', '1280']
const claudinaryUrl = 'https://res.cloudinary.com/alekspetrov/image/upload'
const src = `${claudinaryUrl}/f_auto,q_70,w_640/v1642683138/website/${props.name}.jpg`
const srcset = computed(() =>
  screens.map(
    screen =>
      `${claudinaryUrl}/f_auto,q_${props.quality},w_${screen}/v1642683138/website/${props.name}.jpg ${screen}w`
  )
)
</script>

<template>
  <figure>
    <img
      :sizes="sizes"
      :srcset="srcset.join(', ')"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
    />
  </figure>
</template>
