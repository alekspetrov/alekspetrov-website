<script setup>
import Prism from 'prismjs'
import '../../assets/css/prism-theme.css'

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
  <div>
    <div class="body-code body-text">
      <pre :class="`language-${block.language}`"><code
        v-for="(node, idx) in block.content"
        :key="idx"
        :class="`language-${block.language}`"
        v-html="highlight(node.text)" /></pre>
    </div>
    <div class="body-code-caption">
      <template v-for="(node, idx) in block.caption" :key="idx">
        <a v-if="node.href" :href="node.href" class="body-link">
          {{ node.text.content }}
        </a>
        <template v-else>
          {{ node.text.content }}
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.body-code {
  background: var(--gray-900);
  padding-inline: var(--space-lg);
}

.body-code-caption {
  color: var(--gray-600);
}
</style>
