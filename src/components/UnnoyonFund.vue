<script setup>
import {useCommonStore} from '@/stores/common.js'
const commonStore = useCommonStore()
</script>

<template>
  <main>
      <div class="card text-center m-2 cardWidth">
        <div class="card-header cardHeader">
           <h5>মসজিদের উন্নয়ন ফান্ড</h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <p>জমা হয়েছে</p>
                    <span>{{commonStore.getMasjidTotalImprovementAmount}}</span>
                </div>
                <div class="col">
                |
                </div>
                <div class="col">
                    <p>খরচ হয়েছে</p>
                    <span>{{commonStore.getMasjidTotalImprovementCost}}</span>
                </div>
            </div>
            <div class="mt-4"> 
               <button type="button" class="btn btn-outline-success">বিস্তারিত দেখুন</button>
            </div>
        </div>
        <div class="card-footer cardFooter">
            মোট জমা আছে = {{commonStore.getMasjidTotalImprovementAmountRemain}} টাকা
        </div>
      </div>
  </main>
</template>

<style scoped>
.cardHeader{
  background-color: red;
  color:white
}
.cardWidth{
  width: 350px;
}
.cardFooter{
  color: green;
  font-weight: bold;
}
</style>