<script setup>
import Prism from 'prismjs'

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
    <div class="card">
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
