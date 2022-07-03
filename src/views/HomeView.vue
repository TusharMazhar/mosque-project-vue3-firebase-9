<script setup>
import TotalAmountCalculation from '@/components/TotalAmountCalculation.vue'
import Contribution from '@/components/Contribution.vue'
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
 
    <div class="row"> 
        <Contribution />
    </div>
</div>

</template>

<style scoped>

.root{
  box-sizing: border-box;
}
</style>
