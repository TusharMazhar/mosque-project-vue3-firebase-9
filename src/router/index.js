import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue')
    },
    {
      path: '/amount/:id',
      name: 'Details',
      component: () => import('../views/DetailsInfo.vue')
    }, 
    {
      path: '/cost/:id',
      name: 'CostDetails',
      component: () => import('../views/CostDeatislInfo.vue')
    },
    {
      path: '/individual/donation/:id',
      name: 'IndividualDonation',
      component: () => import('../views/IndividualDonation.vue')
    },
    {
      path: '/donate',
      name: 'Donate',
      component: () => import('../views/Donate.vue')
    },{
      path: '/store-information',
      name: 'StoreInformation',
      component: () => import('../views/StoreInformation.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('../views/ErrorPage.vue')
    },
    
  ]
})
// let a = '1234555'
// router.beforeEach(async (to,from,next)=>{
//   if(a!='1234555'){
//     next({name: 'home'})
//   }else{
//     next()
//   }
// })
export default router
