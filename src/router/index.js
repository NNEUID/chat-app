import { createRouter, createWebHistory } from 'vue-router'
import WelcomeVue from '@/views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
