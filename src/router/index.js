import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'blank' },
    component: Home
  },
  // Блок с пустым (empty) лайоутом.
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('@/views/Login.vue')
  },
  // Блок с основным (main) лайоутом.
  {
    path: '/pages/blank',
    name: 'Blank',
    meta: { layout: 'main' },
    component: () => import('@/views/Blank.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
