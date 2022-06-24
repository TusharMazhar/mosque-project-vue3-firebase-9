<script setup>
import InputFiels from '@/components/InputFiels.vue'
import CostFiels from '@/components/CostFiels.vue'
import TotalAmountCalculation from '@/components/TotalAmountCalculation.vue'
</script>

<template>
<div class="root">
    <div class="row">
       <div> 
          <TotalAmountCalculation />
       </div>
    </div>

    <div class="row">
        <div class="col">
            <InputFiels />
        </div>
        <div class="col">
            <CostFiels />
        </div>
    </div>
</div>

</template>

<style scoped>

.root{
  box-sizing: border-box;
}
</style>
