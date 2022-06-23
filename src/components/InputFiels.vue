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
    Name:'',
    Phone: '',
    Address:'',
    Product:'',
    Amount:'',
    Date: String(new Date())
})

    
const informationStoreHandler = async ()=>{
        loading.value = true
        await addDoc(collection(db,'totaldevelopmentamount'),{
            Option: information.value.Option,
            Name: information.value.Name,
            Phone: information.value.Phone,
            Address: information.value.Address,
            Product: information.value.Product,
            Amount: information.value.Amount,
            Date: information.value.Date
        }).then(()=>{

            information.value.Option = ''
            information.value.Name = ''
            information.value.Phone = ''
            information.value.Address = ''
            information.value.Product = ''
            information.value.Amount = ''
            information.value.Date = String(new Date())

            loading.value = false

        })

}

const getAllMasjidInformation = async()=>{
    onSnapshot(collection(db,'totaldevelopmentamount'),(querySnapShot)=>{
    getAllMasjidInformations.value = []
        querySnapShot.forEach(doc=>{
            let data = {
                id: doc.id,
                Option: doc.data().Option,
                Name: doc.data().Name,
                Phone: doc.data().Phone,
                Address: doc.data().Address,
                Product: doc.data().Product,
                Amount: doc.data().Amount,
                Date: doc.data().Date,
            }
            getAllMasjidInformations.value.push(data)
        })
        commonStore.storeAllInfo(getAllMasjidInformations.value)
    })
}

onMounted(async ()=>{
  await  getAllMasjidInformation()
})

</script>


<template>
    <div class="mainDiv">
        <form class="form" @submit.prevent="informationStoreHandler">
        <legend>মসজিদের সকল তথ্য/হিসাব জমা করুন</legend>
        <div class="mb-3">
            <label for="disabledSelect" class="form-label"></label>
            <select default id="disabledSelect" class="form-select" v-model="information.Option">
                <option  selected disabled value="">অপশন সিলেক্ট করুন</option>
                <option value="জুম্মার দিনে দান বক্সে জমা">জুম্মার দিনে দান বক্সে জমা</option>
                <option value="জুম্মার দিনে জিনিস-পত্র বিক্রয়">জুম্মার দিনে জিনিস-পত্র বিক্রয়</option>
                <option value="মসজিদের উন্নয়ন/অনুষ্টানের জন্য জমা">মসজিদের উন্নয়ন/অনুষ্টানের জন্য জমা</option>
            </select>
        </div>
        <div class="mb-3" v-if="information.Option!=''  && (information.Option==='জুম্মার দিনে জিনিস-পত্র বিক্রয়' || information.Option==='মসজিদের উন্নয়ন/অনুষ্টানের জন্য জমা')">
            <label for="TextInput1" class="form-label">নাম লিখুন</label>
            <input v-model="information.Name" required type="text" id="TextInput1" class="form-control" placeholder="নাম লিখুন">
        </div>
        <div class="mb-3" v-if="information.Option!='' && (information.Option==='জুম্মার দিনে জিনিস-পত্র বিক্রয়' || information.Option==='মসজিদের উন্নয়ন/অনুষ্টানের জন্য জমা')">
            <label for="TextInput2" class="form-label">মোবাইল নাম্বার লিখুন</label>
            <input v-model.number="information.Phone" required type="number" id="TextInput2" class="form-control" placeholder="মোবাইল নাম্বার লিখুন">
        </div>
        <div class="mb-3" v-if="information.Option!='' && (information.Option==='জুম্মার দিনে জিনিস-পত্র বিক্রয়' || information.Option==='মসজিদের উন্নয়ন/অনুষ্টানের জন্য জমা')">
            <label for="TextInput3" class="form-label">ঠিকানা লিখুন</label>
            <input v-model="information.Address" required type="text" id="TextInput3" class="form-control" placeholder="ঠিকানা লিখুন">
        </div>
        <div class="mb-3" v-if="information.Option!='' &&  information.Option==='জুম্মার দিনে জিনিস-পত্র বিক্রয়' || information.Option==='মসজিদের উন্নয়ন/অনুষ্টানের জন্য জমা'">
            <label for="TextInput4" class="form-label">বিবরণ লিখুন</label>
            <textarea v-model="information.Product" required type="text" id="TextInput4" class="form-control" placeholder="মসজিদে কি ক্যাশ টাকা জমা দিয়েছেন নাকি কোন জিনিস দান করেছেন লিখুন"></textarea>
        </div>
        <div class="mb-3" v-if="information.Option!='' && (information.Option==='জুম্মার দিনে দান বক্সে জমা' || information.Option==='জুম্মার দিনে জিনিস-পত্র বিক্রয়' || information.Option==='মসজিদের উন্নয়ন/অনুষ্টানের জন্য জমা')">
            <label for="TextInput5" class="form-label">টাকার পরিমাণ লিখুন</label>
            <input v-model.number="information.Amount" required type="number" id="TextInput5" class="form-control" placeholder="টাকার পরিমাণ লিখুন">
        </div>
        <div v-if="information.Option!=''">
            <Datepicker v-model="information.Date" required></Datepicker>
        </div>
        <div v-if="information.Option!=''">
            <button :disabled="loading" type="submit" class="btn btn-primary btnWidth mt-4">Submit</button>
        </div>
    </form>
    </div>
    <!-- <div>
        <ul v-for="data in commonStore.getAllInfo" :key="data.id">
        <li>
            {{data}}
            </li>
        </ul>
    </div> -->

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