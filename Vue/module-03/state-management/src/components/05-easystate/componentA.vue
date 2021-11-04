<template>
  <div>
    <h1>componentA</h1>
    user name: {{ shareState.user.name }}
    <button @click="change">Change Info</button>
  </div>
</template>

<script>
import store from './store'
export default {
  methods: {
    change () {
      store.setUserNameAction('componentA')
    }
  },
  data () {
    return {
      privateState: {},
      shareState: store.state
    }
  }
}
</script>

<style>

</style>