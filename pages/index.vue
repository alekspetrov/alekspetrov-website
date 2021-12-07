<template>
  <NuxtLayout name="blog">
    <div class="relative mb-20">
      <div
        class="
          flex-shrink-0
          mb-4
          -ml-2
          w-18
          h-18
          bg-white
          opacity-10
          rounded-full
          lg:mr-4 lg:absolute lg:top-0 lg:right-[100%] lg:mb-0
        "
      ></div>
      <h1 class="font-semibold text-xl leading-8 mb-3">Aleksei Petrov</h1>
      <p class="font-medium text-lg opacity-60">
        About digital products, development and design.
      </p>
    </div>
    <BlogArticlesList />
  </NuxtLayout>
</template>
