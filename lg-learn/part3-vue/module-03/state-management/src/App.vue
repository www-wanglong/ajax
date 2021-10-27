<template>
  <div id="app">
    <h1>Vuex -demo</h1>
    count: {{ num }} <br>
    msg: {{ message }} <br>
    <h2>Getter</h2>
    reverseMsg: {{ rMsg }}
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

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
    })
  }
}
</script>

<style>
</style>
