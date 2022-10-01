<template>
  <div class="page-block">
    <h3 class="page-block-title">Pet-projects</h3>
    <NuxtLink to="/projects/wordy" class="card card-row card-link">
      <div>
        <h3>Wordy</h3>
        <p>Learn 1000 words in 20 min per week</p>
      </div>
      <div class="project-status">
        <span>In process</span>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="postcss">
.project-status {
  display: none;
}

@media screen and (min-width: 480px) {
  .project-status {
    display: block;
  }
}
</style>
