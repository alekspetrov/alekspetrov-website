<template>
  <div class="page-block">
    <h3>Building</h3>
    <div class="project-item">
      <div>Wordy</div>
      <div></div>
      <div>In progress</div>
    </div>
  </div>
</template>

<style lang="postcss">
.project-item {
  display: flex;
  justify-content: space-between;

  & div:nth-child(2) {
    flex: 1;
    border-bottom: 1px dashed var(--gray-900);
    margin-inline: var(--space-lg);
  }
}
</style>
