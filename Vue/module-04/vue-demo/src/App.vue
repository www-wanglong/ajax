<template>
  <div id="app">
    <root />
    <br>
    <parent />
    <br>
    <parent03 />
    <br>
    <ref-parent />
    <br>
    <provide-parent />
  </div>
</template>

<script>
import Root from './components/01-root/01-root.vue'
import Parent from './components/02-parent/01-parent.vue'
import Parent03 from './components/03-children/01-parent.vue'
import RefParent from './components/04-ref/01-parent.vue'
import ProvideParent from './components/05-provide/01-parent.vue'

export default {
  name: 'App',
  components: {
    Root,
    Parent,
    Parent03,
    RefParent,
    ProvideParent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
