<script setup>
const props = defineProps({
  slug: String,
})
const {
  data: post,
  error,
  pending,
} = await useFetch(`/api/notion/posts/?query=${props.slug}`)
</script>

<template>
  <Html>
    <Head>
      <Title>Post title</Title>
      <Meta name="description" :content="`My page's description`" />
    </Head>
  </Html>
  <div v-if="pending">Pending</div>
  <div v-if="error">{{ error }}</div>
  <pre v-for="block in post" :key="block.id">{{
    block.type || 'No content'
  }}</pre>
</template>
