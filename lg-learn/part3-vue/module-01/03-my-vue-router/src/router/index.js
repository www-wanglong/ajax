import Vue from 'vue'
import VueRouter from '../vue-router'
import Index from '@/views/Index.vue'

// 1. 注册路由插件
Vue.use(VueRouter)

//路由规则
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "blog" */ '../views/About.vue')
  },
]

// 2. 创建router对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router