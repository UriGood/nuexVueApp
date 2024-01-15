<script lang="ts" setup>
  import { StatusCards } from '../interfaces/status.cards.type'
</script>
<template>
  <NavBarComponent />
  <div class="container mx-auto mt-20">
    <DhbHeaderComponent />
    <div class="grid grid-cols-4 gap-4">
          <DhbCardComponent 
          :typeEvaluation='StatusCards.ApprovedEvaluation' 
          :percent-one="{ percent:'8%', detail:'con cita'}" 
          :percent-two="{ percent:'13%', detail:'sin cita'}" 
          />

          <DhbCardComponent 
          :typeEvaluation='StatusCards.NotAcceptOffer' 
          :percent-one="{ percent:'19%'}" />

          <DhbCardComponent 
          :typeEvaluation='StatusCards.IncompleteEvaluation' 
          :percent-one="{ percent:'20%'}" />

          <DhbCardComponent 
          :typeEvaluation='StatusCards.NoFitTheProfile' 
          :percent-one="{ percent:'40%'}" />
    </div>
    <div class="grid grid-cols-1 gap-4">
        <DhbTableComponent />
    </div>
  </div>
</template>
