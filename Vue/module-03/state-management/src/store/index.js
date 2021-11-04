import Vue from 'vue'
import Vuex from '../myvuex'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
    msg: 'Hello',
    products: [
      { id: 1, title: 'iPhone 11', price: 800 },
      { id: 2, title: 'iPhone 18', price: 8000 },
    ]
  },
  getters: {
    reverseMsg (state) {
      return state.msg.split('').reverse().join('')
    }
  },
  mutations: {
    increate (state, payload) {
      state.count += payload
    }
  },
  actions: {
    increateAsync (context, payload) {
      setTimeout(() => {
        context.commit('increate', payload)
      }, 2000)
    }
  },
  modules: {
    products,
    cart,
  }
})

