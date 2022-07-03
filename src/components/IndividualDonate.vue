<script setup>
import {useCommonStore} from '@/stores/common.js'
import {useRoute}  from 'vue-router'
import {ref, onMounted} from 'vue'
const commonStore = useCommonStore()
const route = useRoute()
const arrData = ref([])

const filterMethod = ()=>{
    arrData.value = commonStore.allDataForIndividual.filter((item)=> String(item.Phone).trim()===String(route.params.id))
}
const documentsPrint = ()=>{
    window.print()
}

onMounted(()=>{
    filterMethod()
})
</script>

<template>
    <div class="mt-5 mb-3 text-center">
        <h2>নাম্বার: 0{{route.params.id}}</h2>
        <button @click="documentsPrint" type="button" class="btn btn-primary">Print</button>
    </div>
    <div class="px-5 table-responsive  table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl">
        <table class="table table-bordered  table-sm table table-md table table-lg table table-xl table table-xxl  ">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">তারিখ</th>
                    <th scope="col">নাম</th>
                    <th scope="col">নাম্বার</th>
                    <th scope="col">ঠিকানা</th>
                    <th scope="col">টাকা</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in arrData" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{String(item.Date).substr(0,15)}}</td>
                    <td>{{item.Name}}</td>
                    <td>{{item.Phone}}</td>
                    <td>{{item.Address}}</td>
                    <td>{{item.Amount}} টাকা</td>
                </tr>
            </tbody>
        </table>
    
    </div>
</template>