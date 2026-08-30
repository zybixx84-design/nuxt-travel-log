<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value: boolean) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap mx-4 swap-rotate">
    <input v-model="isDark" type="checkbox">

    <!-- sun icon -->
    <Icon
      class="swap-on"
      name="tabler:sun-filled"
      size="24"
    />

    <!-- moon icon -->
    <Icon
      class="swap-off"
      name="tabler:moon-filled"
      size="24"
    />
  </label>
</template>
