<template>
  <NuxtLayout name="blog">
    <div class="page-block">
      <h3 class="page-block-title">Pets</h3>
      <NuxtLink to="/wordy" class="project-item card card-link">
        <h3>Wordy</h3>
        <div>Learn 1000 words in 20 min per week.</div>
      </NuxtLink>
    </div>

    <div class="page-block">
      <h3 class="page-block-title">Selected projects</h3>
      <NuxtLink to="/" class="project-item card card-link">
        <h3>Crypto</h3>
        <div>Product Design</div>
      </NuxtLink>
      <div class="project-item card card-link">
        <h3>Dashboards</h3>
        <div>Product Design and Development</div>
      </div>
      <div class="project-item card card-link">
        <h3>Design Systems</h3>
        <div>Product Design and Development</div>
      </div>
    </div>
  </NuxtLayout>
</template>
