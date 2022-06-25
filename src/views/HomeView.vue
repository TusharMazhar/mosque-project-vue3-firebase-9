<script setup>
import InputFiels from '@/components/InputFiels.vue'
import CostFiels from '@/components/CostFiels.vue'
import TotalAmountCalculation from '@/components/TotalAmountCalculation.vue'
import {dataGetAddAmount} from '@/use/dataGetAddAmount.js'
import {dataGetAddCost} from '@/use/dataGetAddCost.js'
dataGetAddAmount()
dataGetAddCost()
</script>

<template>
<div class="root">
    <div class="row">
       <div> 
          <TotalAmountCalculation />
       </div>
    </div>
    <!-- <CostFiels /> -->
</div>

</template>

<style scoped>

.root{
  box-sizing: border-box;
}
</style>
