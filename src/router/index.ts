import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import AuthorQuotes from '@/views/AuthorQuotes.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/random',
    name: 'Home',
    component: Home
  },
  {
    path: '/authors/:author',
    name: 'AuthorQuotes',
    component: AuthorQuotes,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
