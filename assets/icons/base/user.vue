<script setup lang="ts">
  const props = withDefaults(defineProps<{
    width?:string,
    height?: string,
  }>(), {
    width:'w-5',
    height: 'h-5'
  });
  
  let wh = ref(`${props.width}`);
  let ht = ref(`${props.height}`)
</script>
<template>
  <svg
    class="text-green-500"
    :class="[wh, ht]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </svg>
</template>

<style scoped></style>
