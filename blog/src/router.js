import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Tag from './views/Tag.vue'
import Archive from './views/Archive.vue'
import Link from './views/Link.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/tag',
      name: 'tag',
      component: Tag
    },
    {
      path: '/archive',
      name: 'archive',
      component: Archive
    },
    {
      path: '/link',
      name: 'link',
      component: Link
    }
  ]
})
