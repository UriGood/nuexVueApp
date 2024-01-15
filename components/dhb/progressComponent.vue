<script lang="ts" setup>
import type{ progressType } from '../../interfaces/evaluation.type'
const props = defineProps<{
    progress: progressType
}>();


</script>

<template>
  <div>
    <p>
        {{ $props.progress.category }}
    </p>
    <p style="position: relative;">
        <div class="rectangle" v-for="item in props.progress.progress" :key="item"></div>
        <!-- {{ $props.progress.progress }} -->
    </p>
  </div>
</template>

<style scoped>
.rectangle{
    background-color: greenyellow;
    display:inline-block;
    width: 15px;
    height:8px;
    /* position:absolute; */
    /* left: 10px; */
    /* top: 10px; */
    margin-right: 5px;
}
</style>
