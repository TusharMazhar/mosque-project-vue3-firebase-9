import {ref, onMounted} from 'vue'
import {collection,onSnapshot,addDoc} from 'firebase/firestore'
import {db} from '@/firebase'
import {useCommonStore} from '@/stores/common.js'

export function dataGetAdd(){

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

    const getAllMasjidInformation = async(value)=>{
        onSnapshot(collection(db,value),(querySnapShot)=>{
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

    return {
        informationStoreHandler,
        information,
        getAllMasjidInformation
    }
}