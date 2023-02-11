import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Chatroom from '@/views/Chatroom.vue'

import { auth } from '@/firebase/config'

// auth guard 
const requireAuth = (to, from, next) => {
  const user = auth.currentUser
  console.log('Current user in auth guard: ', user);
  if (!user) {
    next({ name: 'welcome' })
  } else {
    next()
  }

}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
