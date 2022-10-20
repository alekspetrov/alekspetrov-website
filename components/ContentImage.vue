<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})

const imageSizes = ['320', '640', '736', '1024', '1280']
const imageUrl = 'https://res.cloudinary.com/alekspetrov/image/upload/'
const imageId = props.block.src.substring(props.block.src.lastIndexOf('/') + 1)
const imageSrc = `${imageUrl}/f_auto,q_auto,w_736/website/${imageId}`

const srcset = imageSizes
  .map(
    (screen) =>
      `${imageUrl}/f_auto,q_auto,w_${screen}/website/${imageId} ${screen}w`
  )
  .join(', ')
</script>

<template>
  <figure>
    <img
      :sizes="imageSizes"
      :srcset="srcset"
      :src="imageSrc"
      :alt="block.caption || imageId"
    />
    <figcaption v-if="block.caption">
      {{ block.caption }}
    </figcaption>
  </figure>
</template>
