<script setup>
useHead({
  title: 'Projects',
  meta: [
    {
      name: 'description',
      content: 'Projects built in the last 5 years.',
    },
  ],
})
</script>

<template>
  <NuxtLayout name="blog">
    <div class="wrapper-sm">
      <div class="page-block">
        <h3 class="page-block-title">Pets</h3>
        <NuxtLink to="/projects/wordy" class="card card-row card-link">
          <div>
            <h3>Wordy</h3>
            <p>Learn 1000 words in 20 min per week.</p>
          </div>
        </NuxtLink>
      </div>

      <div class="page-block">
        <h3 class="page-block-title">Selected</h3>
        <NuxtLink to="/projects/web-monitoring" class="card card-row card-link">
          <div>
            <h3>Web Monitoring</h3>
            <p>Idea, design, frontend development.</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
.card-status {
  /* display: none; */
}
</style>
