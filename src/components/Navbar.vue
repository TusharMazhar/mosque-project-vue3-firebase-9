<script setup>
import {useCommonStore} from '@/stores/common.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const commonStore = useCommonStore()

const modalOpenHandler = ()=>{
  router.push('/')
}
</script>

<template>
<nav class="navbar navbar-light bg-light pst">
  <div class="container-fluid">
    <a class="navbar-brand title">হযরত শাহজালাল (র) জামে মসজিদ</a>
    <div class="">
      <button @click="modalOpenHandler" class="btn btn-outline-success" type="submit">লগিন <span :style="{color:(commonStore.getDanBoxTotalAmountRemain+commonStore.getBuySellTotalAmountRemain+commonStore.getMasjidTotalImprovementAmountRemain)<0?'red':'black'}">( ৳{{commonStore.getDanBoxTotalAmountRemain+commonStore.getBuySellTotalAmountRemain+commonStore.getMasjidTotalImprovementAmountRemain}} )</span></button>
    </div>
  </div>
</nav>
</template>
<style scoped>
.title{
    color:green;
    font-weight: bold;
    font-size: 30px;
}
.pst{
    z-index: 1000;
}
</style>