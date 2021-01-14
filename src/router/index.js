import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import notFound from '@/views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/films',
    name: 'films',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Films.vue')
  },
  {
    path: '/shows',
    name: 'shows',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Shows.vue')
  },
  {
    path: '/search',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/SearchResults.vue')
  },
  {
    path: '*',
    name: '404',
    component: notFound
  },
]

const router = new VueRouter({
  routes
})

export default router
