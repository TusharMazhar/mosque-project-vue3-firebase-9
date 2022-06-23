<script setup>
import HomeSlider from '@/components/HomeSlider.vue'
import InputFiels from '@/components/InputFiels.vue'
import CostFiels from '@/components/CostFiels.vue'
import JummahBar from '@/components/JummahBarDanBox.vue'
import JummahBarBikroyProduct from '@/components/JummahBarBikroyProduct.vue'
import UnnoyonFund from '@/components/UnnoyonFund.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
<div class="root">
  <Navbar />
  <HomeSlider />
  <main class="d-flex justify-content-center "> 
     <div class="row">
        <div class="col">
            <JummahBar />
        </div>
        <div class="col">
           <JummahBarBikroyProduct />
        </div>
        <div class="col">
            <UnnoyonFund />
        </div>
      </div>
  </main>
  <div>
  <div class="row">
        <div class="col">
            <InputFiels />
        </div>
        <div class="col">
           <CostFiels />
        </div>
      </div>
  </div>
</div>
</template>

<style scoped>
.root{
  box-sizing: border-box;
}
</style>
