<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
console.log(props.block.type.replace(/_/g, '-'))
</script>

<template>
  <component
    :is="`blocks-${block.type.replace(/_/g, '-')}`"
    :block="block"
  ></component>
</template>
