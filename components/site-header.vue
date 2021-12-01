<template>
  <header
    class="
      bg-gray-100
      px-8
      py-12
      flex
      justify-between
      md:bg-white md:min-h-screen md:flex-col
    "
  >
    <div class="flex flex-1 justify-between md:block">
      <div class="font-semibold text-lg">
        <span class="text-gray-400 tracking-tight inline-block">
          Aleks Petrov /
        </span>
        <NuxtLink to="/">Blog</NuxtLink>
      </div>
      <div class="md:hidden space-x-2 md:mt-4">
        <button>
          <IconSearch :size="28" class="inline-block" />
        </button>
        <input
          type="text"
          class="hidden md:inline-block bg-transparent focus:outline-none"
          placeholder="Search..."
        />
      </div>
      <SiteNav>
        <NavItem title="Development" />
        <NavItem title="Management" />
        <NavItem title="Design" />
      </SiteNav>
    </div>
    <div class="hidden md:block text-sm text-gray-500">© Aleksei Petrov</div>
  </header>
</template>
