import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    title: '跟数据'
  },
  methods: {
    handle () {
      console.log(this.title)
    }
  }
}).$mount('#app')
