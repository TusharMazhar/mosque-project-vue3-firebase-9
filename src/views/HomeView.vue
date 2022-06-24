<script setup>
import InputFiels from '@/components/InputFiels.vue'
import CostFiels from '@/components/CostFiels.vue'
import TotalAmountCalculation from '@/components/TotalAmountCalculation.vue'
</script>

<template>
<div class="root">
    <div class="overAllCalculation row">
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
.overAllCalculation{
  border: 1px solid red;
  width: 100%;
  height: 400px
}
.root{
  box-sizing: border-box;
}
</style>
