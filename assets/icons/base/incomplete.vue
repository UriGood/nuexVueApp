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
    style="color:rgb(234 179 8)"
    :class="[ht,wh]"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2"
    />
    <rect x="9" y="3" width="6" height="4" rx="2" />
    <line x1="9" y1="12" x2="9.01" y2="12" />
    <line x1="13" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="9.01" y2="16" />
    <line x1="13" y1="16" x2="15" y2="16" />
  </svg>
</template>

<style scoped>

</style>
