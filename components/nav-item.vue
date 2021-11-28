<script setup>
const props = defineProps({
  title: String,
  link: String,
})
</script>

<template>
  <a :href="link" class="relative group block leading-8">
    <span
      class="
        absolute
        right-[100%]
        mr-2
        hidden
        group-hover:inline-block
        text-gray-400
      "
      >#</span
    >
    {{ title }}</a
  >
</template>
