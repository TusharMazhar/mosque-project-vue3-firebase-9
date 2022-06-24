<script setup>
import {useCommonStore} from '@/stores/common.js'
import { useRouter} from 'vue-router'
const router = useRouter()
const commonStore = useCommonStore()


</script>

<template>
  <main>
      <div class="card text-center m-2 cardWidth">
        <div class="card-header cardHeader">
           <h5>জুম্মা দিনের দানবক্সের হিসাব</h5>
        </div>
        <div class="card-body">
          <div class="row">
                <div class="col">
                    <p>জমা হয়েছে</p>
                    <span>{{commonStore.getDanBoxTotalAmount}}</span>
                </div>
                <div class="col">
                |
                </div>
                <div class="col">
                    <p>খরচ হয়েছে</p>
                    <span>{{commonStore.getDanBoxTotalCost}}</span>
                </div>
            </div>
          <div class="mt-4">
            <button type="button" @click="router.push(`/${commonStore.id1}`)" class="btn btn-outline-success">বিস্তারিত দেখুন</button>
          </div>
        </div>
        <div class="card-footer cardFooter">
            মোট জমা আছে = {{commonStore.getDanBoxTotalAmountRemain}} টাকা
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