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
  <!-- :class="{ `${ ht }` : $props.height }" -->
  <svg
    class="text-red-500"
    :class="[wh,ht]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="18" y1="8" x2="23" y2="13" />
    <line x1="23" y1="8" x2="18" y2="13" />
  </svg>
</template>

<style scoped></style>
