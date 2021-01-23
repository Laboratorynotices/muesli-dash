import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // Список "рабочих" страниц
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
  // Блок с обзорной панелью (Dashboard) в нормальном лайоуте.
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { layout: 'main' },
    component: () => import('@/views/Dashboard.vue')
  },

  // "Карточки"
  {
    path: '/components/cards',
    name: 'Cards',
    meta: { layout: 'main' },
    component: () => import('@/views/Cards.vue')
  },

  // "Карусель"
  {
    path: '/components/carousel',
    name: 'Carousel',
    meta: { layout: 'main' },
    component: () => import('@/views/Carousel.vue')
  },

  // Блок с основным (main) лайоутом.
  {
    path: '/pages/blank',
    name: 'Blank',
    meta: { layout: 'main' },
    component: () => import('@/views/Blank.vue')
  },

  // Калькулятор смесителя мюсли
  {
    path: '/muesli',
    name: 'MuesliMixer',
    meta: { layout: 'main' },
    component: () => import('@/views/MuesliMixer.vue')
  },

  // Блок с основным (main) лайоутом.
  {
    path: '*',
    name: '404',
    meta: { layout: 'main' },
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
