<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <ul class="body-list body-text">
    <li v-for="(node, idx) in block.content" :key="idx">
      <template v-for="(content, i) in node" :key="i">
        <a v-if="content.href" :href="content.href">
          {{ content.text }}
        </a>
        <p v-else>{{ content.text }}</p>
      </template>
    </li>
  </ul>
</template>

<style lang="postcss">
.body-list {
  margin-left: var(--space-md);
  padding: 0;

  & > li {
    margin-bottom: var(--space-sm);
  }

  & a,
  p {
    display: inline;
    padding-block: 4px; /* hack */
  }

  & a {
    text-decoration: underline;
  }
}

@media screen and (min-width: 896px) {
  .body-list {
    margin-left: 0;
  }
}
</style>
