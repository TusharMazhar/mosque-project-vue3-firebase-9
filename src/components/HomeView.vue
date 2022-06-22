<script setup>
    import {ref, onMounted} from 'vue'
    import {collection,onSnapshot,addDoc} from 'firebase/firestore'
    import {db} from '@/firebase'
    
    const totaldevelopmentamountdata = ref([])
    const dataInfo1 = ref('')
    const dataInfo2 = ref('')
    const dataInfo3 = ref('')


    const addDocInfo = async ()=>{
         await addDoc(collection(db,'totaldevelopmentamount'),{
            done1: dataInfo1.value,
            done2: dataInfo2.value,
            done3: dataInfo3.value,
         })
    }

    const getTotalDevelopmentAmountData = ()=>{
        onSnapshot(collection(db,'totaldevelopmentamount'),(querySnapShot)=>{
        totaldevelopmentamountdata.value = []
        querySnapShot.forEach(doc=>{
            let data = {
                id: doc.id,
                done1: doc.data().done1,
                done2: doc.data().done2,
                done3: doc.data().done3,
            }
            totaldevelopmentamountdata.value.push(data)
        })
        })
        // console.log(totaldevelopmentamountdata.value)
    }

    onMounted(()=>{
        getTotalDevelopmentAmountData()
    })
</script>

<template>
    <div>
       <input v-model="dataInfo1" type="text"/>
       <input v-model="dataInfo2" type="text"/>
       <input v-model="dataInfo3" type="text"/>
       <button @click="addDocInfo">Add</button>
    </div>
    <div>
         <ul v-for="data in totaldevelopmentamountdata" :key="data.id">
            <li>
                {{data}}
             </li>
         </ul>
    </div>
</template>

