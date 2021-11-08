/**
 * 通用的入口
 */
import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import { createRouter } from './router'
import { createStore } from './store'

Vue.use(VueMeta)

// 设置meta
Vue.mixin({
  metaInfo: {
    titleTemplate: '%s - test'
  }
})

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {

  // 创建理由实例
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router, // 包路由挂载到vue 跟实例中
    store,
    // 根实例简单的渲染应用程序组件。
    render: h => h(App)
  })
  return { app, router, store }
}