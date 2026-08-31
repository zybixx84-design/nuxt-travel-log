<template>
  <div>
    <div class="navbar bg-base-300">
      <div class="navbar-start">
        <NuxtLink to="/" class="btn btn-ghost text-xl">
          Travel Log
        </NuxtLink>
      </div>

      <div class="navbar-end">
        <ThemeToggle />
        <AuthButton />
      </div>
    </div>
  </div>
</template>
