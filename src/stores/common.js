import { defineStore } from 'pinia'

export const useCommonStore = defineStore('main',{
  id: 'common',
  state: () => ({
    loginIdData:'',
    matchIdData:'010101',
    allInfo: [],
    allInfoCost: [],

    danBoxTotalAmount:0,
    buySellTotalAmount:0,
    masjidTotalImprovementAmount:0,

    danBoxTotalCost:0,
    buySellTotalCost:0,
    masjidTotalImprovementCost:0,

    danBoxTotalAmountRemain:0,
    buySellTotalAmountRemain:0,
    masjidTotalImprovementAmountRemain:0,

    id1:'জুম্মার দিনে দান বক্সে জমা',
    id2:'জুম্মার দিনে জিনিস-পত্র বিক্রয়',
    id3:"মসজিদের উন্নয়ন অথবা অনুষ্টানের জন্য জমা",

    contributor:[],
    contributorFinal:[]
  }),
  getters: {
    getContributorFinal: (state) => state.contributorFinal,
    getLoginIdData: (state) => state.loginIdData,
    getMatchIdData: (state) => state.matchIdData,
    getAllInfo: (state) => state.allInfo,
    getDanBoxTotalAmount: (state) => state.danBoxTotalAmount,
    getBuySellTotalAmount: (state) => state.buySellTotalAmount,
    getMasjidTotalImprovementAmount: (state) => state.masjidTotalImprovementAmount,
    getDanBoxTotalCost: (state) => state.danBoxTotalCost,
    getBuySellTotalCost: (state) => state.buySellTotalCost,
    getMasjidTotalImprovementCost: (state) => state.masjidTotalImprovementCost,
    getDanBoxTotalAmountRemain: (state) => state.danBoxTotalAmountRemain,
    getBuySellTotalAmountRemain: (state) => state.buySellTotalAmountRemain,
    getMasjidTotalImprovementAmountRemain: (state) => state.masjidTotalImprovementAmountRemain,


    getAllDataArray: (state)=>{
      const cardData = [
         {
           savings: state.danBoxTotalAmount,
           id: state.id1,
           costing: state.danBoxTotalCost,
           total: state.danBoxTotalAmountRemain
         },
         {
           savings: state.buySellTotalAmount,
           id: state.id2,
           costing: state.buySellTotalCost,
           total: state.buySellTotalAmountRemain
         },
         {
           savings: state.masjidTotalImprovementAmount,
           id: state.id3,
           costing: state.masjidTotalImprovementCost,
           total: state.masjidTotalImprovementAmountRemain
         }
      ]
      return cardData
    }
  },
  actions: {

    contributionCalculation(){
        this.contributor = []
        this.contributorFinal = []
        let arr = []
        let newArr = []
        
        this.allInfo.forEach((number)=>{
          arr.push(number.Phone)
        })

        newArr = [...new Set(arr)]

        newArr.forEach(item=>{
          let arr2 = []
          arr2 = this.allInfo.filter(phone=> phone.Phone===item)
          this.contributor.push(arr2)
        })
        this.contributor.forEach(item=>{
          let person = {
            Name: '',
            Phone: '',
            Amount : 0
          }
          item.forEach(item2=>{
            person.Name = item2.Name
            person.Phone = item2.Phone
            person.Amount += item2.Amount
          })
          this.contributorFinal.push(person)
        })
    },

    async storeAllInfo(value) {
      this.allInfo = value
      this.contributor = []
      this.contributorFinal = []
      this.contributionCalculation()
      this.danBoxTotalAmount = 0
      this.buySellTotalAmount = 0
      this.masjidTotalImprovementAmount = 0
      this.allInfo.forEach(item=>{
         if(item.Option==='জুম্মার দিনে দান বক্সে জমা'){
            this.danBoxTotalAmount += item.Amount
            this.danBoxTotalAmountRemain = this.danBoxTotalAmount - this.danBoxTotalCost
         }else if(item.Option==='জুম্মার দিনে জিনিস-পত্র বিক্রয়'){
            this.buySellTotalAmount += item.Amount
            this.buySellTotalAmountRemain = this.buySellTotalAmount - this.buySellTotalCost
         }else if(item.Option==='মসজিদের উন্নয়ন অথবা অনুষ্টানের জন্য জমা'){
            this.masjidTotalImprovementAmount += item.Amount
            this.masjidTotalImprovementAmountRemain = this.masjidTotalImprovementAmount - this.masjidTotalImprovementCost
         }
      })
    },
    storeAllInfoCost(value) {
      this.allInfoCost = value

      this.danBoxTotalCost = 0
      this.buySellTotalCost = 0
      this.masjidTotalImprovementCost = 0
      this.allInfoCost.forEach(item=>{
         if(item.Option==='জুম্মার দিনে দান বক্সে জমা'){
            this.danBoxTotalCost += item.Amount
            this.danBoxTotalAmountRemain = this.danBoxTotalAmount - this.danBoxTotalCost
         }else if(item.Option==='জুম্মার দিনে জিনিস-পত্র বিক্রয়'){
            this.buySellTotalCost += item.Amount
            this.buySellTotalAmountRemain = this.buySellTotalAmount - this.buySellTotalCost
         }else if(item.Option==='মসজিদের উন্নয়ন অথবা অনুষ্টানের জন্য জমা'){
            this.masjidTotalImprovementCost += item.Amount
            this.masjidTotalImprovementAmountRemain = this.masjidTotalImprovementAmount - this.masjidTotalImprovementCost
         }
      })
    }
  },
})
