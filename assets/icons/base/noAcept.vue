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
    style="color: rgb(59 130 246 )"
    :class="[wh,ht]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
</template>

<style scoped></style>
