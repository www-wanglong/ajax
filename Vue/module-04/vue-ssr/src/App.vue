<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <input v-model="message" />
    <button @click="onClick">test</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return  {
      message: 'hello world'
    }
  },
  methods: {
    onClick () {
      console.log(11)
    }
  }
}
</script>

<style>

</style>