<template>
  <div class="bg-primary text-white antialiased text-md">
    <div
      class="
        min-h-screen
        max-w-[760px]
        mx-auto
        px-8
        flex flex-col
        justify-between
      "
    >
      <div>
        <site-header />
        <slot />
      </div>
      <site-footer />
    </div>
  </div>
</template>
