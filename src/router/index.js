import { createRouter, createWebHistory } from 'vue-router'
import dummy from '../views/dummy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/scenes',
      name: 'scenes',
      component: () => import('../views/ScenesView.vue')
    },
    {
      path: '/',
      name: 'intro',
      component: dummy
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('../views/SetupView.vue')
    }
  ]
})

export default router
