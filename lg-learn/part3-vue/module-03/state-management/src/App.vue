<template>
  <div id="app">
    <h1>Vuex - Dem1o</h1>
    count：{{ $store.state.count }} <br>
    msg: {{ $store.state.msg }}

    <h2>Getter</h2>
    reverseMsg: {{ $store.getters.reverseMsg }}

    <h2>Mutation</h2>
    <button @click="$store.commit('increate', 2)">Mutation</button>

    <h2>Action</h2>
    <button @click="$store.dispatch('increateAsync', 5)">Action</button>
  </div>
</template>


<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    // ...mapState(['count', 'msg'])
    ...mapState({
      num: 'count',
      message: 'msg',
    }),
    ...mapGetters({
      rMsg: 'reverseMsg'
    }),
    ...mapState('products', ['products']),
  },
  methods: {
    ...mapMutations(['increate']),
    ...mapActions(['increateAsync']),
    ...mapMutations('products', ['setProducts'])
  }
}
</script>

<style>
</style>
