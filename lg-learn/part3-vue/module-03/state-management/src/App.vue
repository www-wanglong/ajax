<template>
  <div id="app">
    <h1>父传子</h1>
    <parent01></parent01>
  </div>
</template>

<script>

import Parent01 from './components/01-props-down/Parent'
export default {
  name: 'App',
  components: {
    Parent01,
  },
  data () {
    return {
      num: 1
    }
  }
}
</script>

<style>
</style>
