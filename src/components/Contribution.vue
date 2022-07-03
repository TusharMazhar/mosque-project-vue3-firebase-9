<script setup>
import {useCommonStore} from '@/stores/common.js'
import {useRouter}  from 'vue-router'
const router = useRouter()
const commonStore = useCommonStore()


</script>

<template>
    <div class="text-center" v-if="commonStore.getContributorFinal.length!==0">
       <div class="row"> 
           <h5 class="p-2 title ">মসজিদের উন্নয়নে সহায়তাকারি</h5>
       </div>
       <div class="d-flex row m-2"> 
          <template v-for="item in commonStore.getContributorFinal" :key="item.index">
            <div class="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2" v-if="item.Option==='মসজিদের উন্নয়ন অথবা অনুষ্টানের জন্য জমা'">
                <div class="cardColor m-1">
                    <div class="divTitle p-1">
                        <!-- <img width="60px" src="data:image/jpeg;base64,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" alt="pic" /> -->
                        <p>{{item.Name.toUpperCase()}}</p>
                    </div>
                    <div class="p-3 taka"> 
                       <span>{{item.Amount}} টাকা</span>
                    </div>
                    <div class=""> 
                        <button class="p-1 px-3 btnColor" @click="router.push(`/individual/donation/${item.Phone}`)">বিস্তারিত দেখুন</button>
                    </div>
                </div>
            </div>
          </template>
       </div>
    </div>
</template>

<style scoped>

.title{
    background-color: green;
    color:white;
}

.cardColor{
    box-sizing: border-box;
    border: 3px solid green;
    height: 180px;
}
.divTitle{
    background-color: green;
    color: white;
    font-weight: bold;
    border:2 px solid red;
    margin: 1px;
    height:70px
}
.btnColor{
    background-color: green;
    color: white;
    border: none
}
.taka{
    color:red;
    font-weight: bold;
}




</style>