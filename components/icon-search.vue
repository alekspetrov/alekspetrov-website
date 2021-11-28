<script setup>
const props = defineProps({
  size: {
    type: Number,
    default: 32,
  },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M31.0471 33.4529C28.3007 35.6714 24.8055 37 21 37C12.1633 37 5 29.8365 5 21C5 12.1635 12.1633 5 21 5C29.8367 5 37 12.1635 37 21C37 24.8082 35.6696 28.3056 33.4482 31.0529L35.7085 32.1731L43.8151 40.2797L40.2796 43.8152L32.1375 35.6731L31.0471 33.4529ZM34 21C34 28.1797 28.1797 34 21 34C13.8203 34 8 28.1797 8 21C8 13.8203 13.8203 8 21 8C28.1797 8 34 13.8203 34 21Z"
      fill="#424242"
    />
  </svg>
</template>
