import Vue from 'vue'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import Login from './src/Login.vue';

Vue.use(ElementUi)

new Vue({
  el: '#app',
  render: h => h(Login)

})