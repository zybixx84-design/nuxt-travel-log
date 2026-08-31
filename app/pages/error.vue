<script lang="ts" setup>
const error = useRoute().query.error || "An unknown error occurred.";
</script>

<template>
  <div class="container mx-auto mt-4 flex min-h-72 flex-col items-center justify-center gap-4 bg-base-300 text-center">
    <div role="alert" class="alert min-w-1/2 text-center alert-error">
      <span>Oh no! {{ error }}</span>
    </div>

    <NuxtLink to="/" class="btn btn-primary">
      Home
      <Icon name="tabler:arrow-left" size="32" />
    </NuxtLink>
  </div>
</template>
