<script lang="ts" setup>
import type{ progressType } from '../../interfaces/evaluation.type'
const props = defineProps<{
    pgrs: progressType
}>();


</script>

<template>
  <div>
    <p>
        {{ $props.pgrs.category }}
    </p>
    <p>
        <span class="rectangle" v-for="item in props.pgrs.progress"></span>
    </p>
  </div>
</template>

<style scoped>
.rectangle{
    background-color: rgb(34 197 94);
    display:inline-block;
    width: 15px;
    height:8px;
    margin-right: 5px;
}
</style>
