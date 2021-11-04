import Vue from 'vue'
import VueRouter from 'vue-router'


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
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/photo',
    name: 'Photo',
    component: () => import(/* webpackChunkName: "photo" */ '../views/Photo.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    props: true,
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  },
]

// 嵌套路由
// const routes = [
//   {
//     name: 'login',
//     path: '/login',
//     component: Login
//   },
//   {
//     path: '/',
//     component: Layout,
//     children: [
//       {
//         name: 'index',
//         path: '',
//         component: Index
//       },
//       {
//         name: 'detail',
//         path: 'detail/:id',
//         props: true,
//         component: () => import('@/views/Detail.vue')
//       }

//     ]
//   }
// ]
// 2. 创建router对象
const router = new VueRouter({
  routes
})

export default router