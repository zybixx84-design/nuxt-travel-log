<template>
  <div>
    <div class="navbar bg-base-300">
      <div class="navbar-start">
        <NuxtLink to="/" class="btn btn-ghost text-xl">
          Travel Log
        </NuxtLink>
      </div>

      <div class="navbar-end">
        <AppThemeToggle />
        <button class="btn btn-accent">
          Sign out
          <Icon name="tabler:brand-github" size="24" />
        </button>
      </div>
    </div>
  </div>
</template>
