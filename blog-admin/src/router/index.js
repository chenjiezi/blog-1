import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 解決报错(原因：在使用Element UI 时点击同一个路由，控制台报错，但不影响使用)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    icon: 'el-icon-menu',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    icon: 'el-icon-document',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    icon: 'el-icon-setting',
    component: () => import('../views/Demo.vue')
  },
  {
    path: '/article',
    name: 'article',
    icon: 'el-icon-cold-drink',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/write',
    name: 'write',
    icon: 'el-icon-cold-drink',
    component: () => import('../views/Write.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
