import { createRouter,createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: ()=> import("../views/Register.vue")
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]
const hash = createWebHashHistory()
const router = createRouter({
    history: hash,
    routes
})

export default router
