<script lang="ts" setup>
  import { StatusCards } from '../interfaces/status.cards.type'
</script>
<template>
  <NavBarComponent />
  <div class="container mx-auto mt-20">
    <div class="mx-4 lg:mx-0">
      <DhbHeaderComponent />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-4  gap-4 mx-4 lg:mx-0">
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
    <div class="grid grid-cols-1 gap-4  mx-4 lg:mx-0">
        <div class="">
          <DhbTableComponent />
        </div>
    </div>
  </div>
</template>
