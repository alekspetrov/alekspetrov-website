<script setup>
import Prism from 'prismjs'
import '../../assets/css/prism-theme.css'
import { toRefs } from 'vue'

Prism.languages.vue = Prism.languages.markup

const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})

const highlight = (code) => {
  return Prism.highlight(code, Prism.languages.javascript, 'javascript')
}
</script>

<template>
  <pre class="block-code" :class="`language-${block.language}`"><code
        v-for="(node, idx) in block.content"
        :key="idx"
        :class="`language-${block.language}`"
        v-html="highlight(node.text)" /></pre>
</template>

<style lang="postcss" scoped>
.block-code {
  background: var(--gray-900);
  padding-inline: var(--space-lg);
}
</style>
