<script lang="ts" setup>
import type { percentOne, percentTwo } from '../../interfaces/percents.type'
import user from '../../assets/icons/user.vue'
import noAcept from '../../assets/icons/noAcept.vue'
import fails from '../../assets/icons/fails.vue'
import imcomplete from '../../assets/icons/incomplete.vue'
import { StatusCards } from '~/interfaces/status.cards.type'
  defineProps<{
    percentOne: percentOne,
    percentTwo?: percentTwo,
    typeEvaluation: StatusCards
  }>()
</script>

<template>
  <div class="p-5 bg-white w-full rounded-md drop-shadow">
    
    <span v-if="$props.typeEvaluation == StatusCards.ApprovedEvaluation"><user></user></span>
    <span v-if="$props.typeEvaluation == StatusCards.NotAcceptOffer"><noAcept></noAcept></span>
    <span v-if="$props.typeEvaluation == StatusCards.IncompleteEvaluation"><imcomplete></imcomplete></span>
    <span v-if="$props.typeEvaluation == StatusCards.NoFitTheProfile"><fails></fails></span>

    <p class="text-xs my-1">{{ $props.typeEvaluation }}</p>
    <p> 
      <span class="text-2xl font-bold">{{ $props.percentOne?.percent }}</span> <span class="text-xs"> {{ $props.percentOne?.detail }} </span>
      <span v-if="$props.percentTwo" class="text-2xl "> | </span>
      <span class="text-2xl font-bold"> {{ $props.percentTwo?.percent }}</span> <span class="text-xs"> {{ $props.percentTwo?.detail }} </span>
    </p>
  </div>
</template>

<style scope>

</style>