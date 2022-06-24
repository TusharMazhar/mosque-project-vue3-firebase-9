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
    id3:"মসজিদের উন্নয়ন অথবা অনুষ্টানের জন্য জমা"
  }),
  getters: {
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
  },
  actions: {

    storeAllInfo(value) {
      this.allInfo = value

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
