import {ref, onMounted} from 'vue'
import {collection,onSnapshot,addDoc} from 'firebase/firestore'
import {db} from '@/firebase'
import {useCommonStore} from '@/stores/common.js'

export function dataGetAddCost(){

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

    return {
        informationStoreHandler,
        information,
        getAllMasjidInformation
    }
}