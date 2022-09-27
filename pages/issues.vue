<script setup>
const { data: posts } = await useFetch('/api/posts/list')
</script>

<template>
  <NuxtLayout v-if="posts" name="blog">
    <div class="issues-page inner-padding">
      <h1>Issues</h1>
      <h3 class="issues-page-title body-title">I don't get emails</h3>
      <div class="body-text">
        <p>Check your spam folder. Add to whitelist if the mail in there.</p>
        <p>
          If you use Gmail, also check the Updates/Promotions tab, the email
          might be there!
        </p>
      </div>
    </div>
  </NuxtLayout>
  <div v-else style="text-align: center; line-height: 72px">Loading...</div>
</template>

<style lang="postcss">
.issues-page {
  padding-block: var(--space-2xl);

  p + p {
    margin-top: var(--space-lg);
  }
}

.issues-page-title {
  display: block;
  margin-bottom: var(--space-lg);
}
</style>
