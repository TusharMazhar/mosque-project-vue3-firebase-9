import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'Details',
      component: () => import('../views/DetailsInfo.vue')
    }, 
    {
      path: '/cost/:id',
      name: 'CostDetails',
      component: () => import('../views/CostDeatislInfo.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('../views/ErrorPage.vue')
    }
  ]
})

export default router
