<script setup>
import {ref, onMounted} from 'vue'
import {collection,onSnapshot,addDoc} from 'firebase/firestore'
import {db} from '@/firebase'
import {useCommonStore} from '@/stores/common.js'
const commonStore = useCommonStore()

const getAllMasjidInformations = ref([])
const loading = ref(false)

const information = ref({
    Option:'',
    Amount:'',
    Reason:'',
    Date: String(new Date())
})

    
const informationStoreHandler = async ()=>{
        loading.value = true
        await addDoc(collection(db,'totaldevelopmentcost'),{
            Option: information.value.Option,
            Amount: information.value.Amount,
            Reason: information.value.Reason,
            Date: information.value.Date
        }).then(()=>{

            information.value.Option = ''
            information.value.Amount = ''
            information.value.Reason = ''
            information.value.Date = String(new Date())

            loading.value = false

        })

}

const getAllMasjidInformation = async()=>{
    onSnapshot(collection(db,'totaldevelopmentcost'),(querySnapShot)=>{
    getAllMasjidInformations.value = []
        querySnapShot.forEach(doc=>{
            let data = {
                id: doc.id,
                Option: doc.data().Option,
                Amount: doc.data().Amount,
                Reason: doc.data().Reason,
                Date: doc.data().Date,
            }
            getAllMasjidInformations.value.push(data)
        })
        commonStore.storeAllInfoCost(getAllMasjidInformations.value)
    })
}

onMounted(async ()=>{
  await  getAllMasjidInformation()
})

</script>


<template>
    <div class="mainDiv">
        <form class="form" @submit.prevent="informationStoreHandler">
        <legend>মসজিদের সঞ্চিত টাকা ব্যবহার করুন</legend>
        <div class="mb-3">
            <label for="disabledSelect" class="form-label"></label>
            <select default id="disabledSelect" class="form-select" v-model="information.Option">
                <option  selected disabled value="">অপশন সিলেক্ট করুন</option>
                <option value="জুম্মার দিনে দান বক্সে জমা">জুম্মার দিনে দান বক্সে জমা</option>
                <option value="জুম্মার দিনে জিনিস-পত্র বিক্রয়">জুম্মার দিনে জিনিস-পত্র বিক্রয়</option>
                <option value="মসজিদের উন্নয়ন/অনুষ্টানের জন্য জমা">মসজিদের উন্নয়ন/অনুষ্টানের জন্য জমা</option>
            </select>
        </div>
        <div class="mb-3" v-if="information.Option!='' ">
            <label for="TextInput5" class="form-label">টাকার পরিমাণ লিখুন</label>
            <input v-model.number="information.Amount" required type="number" id="TextInput5" class="form-control" placeholder="টাকার পরিমাণ লিখুন">
        </div>
        <div class="mb-3" v-if="information.Option!='' ">
            <label for="TextInput4" class="form-label">কারণ লিখুন</label>
            <textarea v-model="information.Reason" required type="text" id="TextInput4" class="form-control" placeholder="কি কারণে টাকা খরচ করেছেন লিখুন"></textarea>
        </div>
        <div v-if="information.Option!=''">
            <Datepicker v-model="information.Date" required></Datepicker>
        </div>
        <div v-if="information.Option!=''">
            <button :disabled="loading" type="submit" class="btn btn-primary btnWidth mt-4">Submit</button>
        </div>
    </form>
    </div>
</template>

<style scoped>
.form{
    width:600px;
    margin: 0 auto;
    box-sizing: border-box;
}
.mainDiv{
   background-color: rgb(215, 215, 215);
   padding: 40px;
   box-sizing: border-box;
}
.btnWidth{
    width:100%;
}
</style>