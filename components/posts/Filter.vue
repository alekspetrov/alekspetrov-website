<template>
  <div class="filter ui-text">
    <div class="filter_item">
      <div>Show All</div>
      <IconArrowDown class="icon" />
    </div>
    <div class="filter_item">
      <IconSearch class="icon" />
      <div>Search</div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--gray-300);
  margin-bottom: var(--space-lg);

  &_item {
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }
}
.icon {
  width: 16px;
  height: 16px;
}

@media screen and (min-width: 768px) {
  .filter {
    padding-bottom: var(--space-md);
  }
}
</style>
