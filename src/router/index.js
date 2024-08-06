import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/Homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homepage
    },
    {
      path: '/scenes',
      name: 'scenes',
      component: () => import('../views/ScenesView.vue')
    },
    {
      path: '/singleplayer',
      name: 'singleplayer',
      component: () => import('../views/Singleplayer.vue')
    },
    {
      path: '/twocamsgrid',
      name: 'twocamsgrid',
      component: () => import('../views/TwoCamsGrid.vue')
    },
    {
      path: '/fourcamsgrid',
      name: 'fourcamsgrid',
      component: () => import('../views/FourCamsGrid.vue')
    },
    {
      path: '/autoswitcher',
      name: 'autoswitcher',
      component: () => import('../views/AutoSwitcher.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('../views/SetupView.vue')
    }
  ]
})

export default router
