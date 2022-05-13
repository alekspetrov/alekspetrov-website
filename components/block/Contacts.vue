<template>
  <div class="contacts">
    <h3>Contacts</h3>

    <ul class="split-list">
      <li>
        <div>Email</div>
        <div>
          <a class="link" href="email:hello@alekspetrov.com"
            >hello@alekspetrov.com</a
          >
        </div>
      </li>
      <li>
        <div>Twitter</div>
        <div>
          <a class="link" href="https://twitter.com/alekspetrov_"
            >@alekspetrov_</a
          >
        </div>
      </li>
      <li>
        <div>LinkedIn</div>
        <div>
          <a class="link" href="https://www.linkedin.com/in/alekspetrov/"
            >@alekspetrov</a
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss">
.contacts {
  margin-bottom: calc(var(--space-md) * 6);

  > h3 {
    margin-bottom: calc(var(--space-md) * 2);
  }
}
</style>
