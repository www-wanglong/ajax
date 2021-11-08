<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/posts">Posts</router-link>
      </li>
    </ul>

    <router-view/>
  </div>
</template>

<script></script>
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