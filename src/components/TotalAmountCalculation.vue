<script setup>
import {useCommonStore} from '@/stores/common.js'
import { useRouter} from 'vue-router'
import {ref} from 'vue'
const router = useRouter()
const commonStore = useCommonStore()

</script>

<template>
  <main class="d-flex ">
      <div class="card text-center  m-2 cardWidth" v-for="card in commonStore.getAllDataArray" :key="card.index">
        <div class="card-header cardHeader">
           <h5>{{card.id}}</h5>
        </div>
        <div class="card-body">
          <div class="row">
                <div class="col">
                    <p>জমা হয়েছে</p>
                    <span>{{card.savings}}</span>
                    <div class="mt-4">
                      <button type="button" @click="router.push(`/${card.id}`)" class="btn btn-outline-success">বিস্তারিত দেখুন</button>
                    </div>
                </div>
                <div class="col">
                |
                </div>
                <div class="col">
                    <p>খরচ হয়েছে</p>
                    <span>{{card.costing}}</span>
                    <div class="mt-4">
                      <button type="button" @click="router.push(`/cost/${card.id}`)" class="btn btn-outline-success">বিস্তারিত দেখুন</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer cardFooter">
            মোট জমা আছে = {{card.total}} টাকা
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