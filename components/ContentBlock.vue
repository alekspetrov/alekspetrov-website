<script setup>
import {
  ContentParagraph,
  ContentCode,
  ContentImage,
  ContentCallout,
  ContentQuote,
  ContentDivider,
  ContentList,
  ContentHeading,
} from '~~/.nuxt/components'

const props = defineProps({
  block: { type: Object, default: () => ({}) },
})

// TODO: Nuxt 3 has an issue render components defined globaly.
// This object alias names with componets:
const currentBlock = {
  code: ContentCode,
  callout: ContentCallout,
  quote: ContentQuote,
  image: ContentImage,
  divider: ContentDivider,
  list: ContentList,
  heading: ContentHeading,
  paragraph: ContentParagraph,
}
</script>

<template>
  <component :is="currentBlock[block.type]" v-if="block" :block="block" />
</template>
