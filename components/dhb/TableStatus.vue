<script lang="ts" setup>
import { StatusCards } from "~/interfaces/status.cards.type";
import user from "../../assets/icons/base/user.vue";
import fails from "../../assets/icons/base/fails.vue";
import incomplete from "../../assets/icons/base/incomplete.vue";
import noAcept from "../../assets/icons/base/noAcept.vue";

const props = defineProps<{
  status: StatusCards;
}>();

let statusApprovedEvaluation = ref(props.status == StatusCards.ApprovedEvaluation ? true : false);
let statusNotAcceptOffer = ref(props.status == StatusCards.NotAcceptOffer ? true : false);
let statusIncompleteEvaluation = ref(props.status == StatusCards.IncompleteEvaluation ? true : false);
let statusNoFitTheProfile = ref(props.status == StatusCards.NoFitTheProfile ? true : false);

</script>

<template>
  <div 
  :class="{ 
    'bg-apro' : statusApprovedEvaluation,
    'bg-no-acept' : statusNotAcceptOffer,
    'bg-incomplete' : statusIncompleteEvaluation,
    'bg-not-profile' : statusNoFitTheProfile
  }"
  class="flex items-center " style="width: 200px;">
    <span v-if="statusApprovedEvaluation"><user></user></span>
    <span v-if="statusNotAcceptOffer"><fails></fails></span>
    <span v-if="statusIncompleteEvaluation"><incomplete></incomplete></span>
    <span v-if="statusNoFitTheProfile"><noAcept></noAcept></span> 
    &nbsp;
    &nbsp;

    <p>{{ $props.status }}</p>
  </div>
</template>

<style scoped>
.bg-apro {
    padding: 6px;
    border-radius: 8px;
    --tw-text-opacity: 0.10;
    background-color: rgb(34 197 94 / var(--tw-text-opacity));
}

.bg-no-acept {
    padding: 6px;
    border-radius: 8px;
    --tw-text-opacity: 0.10;
    background-color: rgb(239 68 68 / var(--tw-text-opacity));
}

.bg-incomplete {
    padding: 6px;
    border-radius: 8px;
    --tw-text-opacity: 0.10;
    background-color: rgb(234 179 8 / var(--tw-text-opacity));
}

.bg-not-profile {
    padding: 6px;
    border-radius: 8px;
    --tw-text-opacity: 0.10;
    background-color: rgb(59 130 246 / var(--tw-text-opacity));
}
</style>