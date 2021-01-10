import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Films',
    component: Films
  },
  {
    path: '/shows',
    name: 'shows',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Shows.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
