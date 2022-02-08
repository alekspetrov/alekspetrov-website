<script setup>
const props = defineProps({
  block: Object,
})
</script>

<template>
  <component
    :is="`content-${block.type}`"
    v-if="block"
    :block="block"
    class="content-block"
  ></component>
</template>

<style lang="postcss">
.content-block {
  max-width: var(--content-max-width);
  margin-bottom: var(--block-margin-bottom);
}
</style>
