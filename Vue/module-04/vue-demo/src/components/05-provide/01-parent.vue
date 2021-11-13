<template>
  <div>
    parent
    <child />
  </div>
</template>

<script>
import Child from './02-child.vue'
export default {
  data () {
    return {
      title: 'provide parent title'
    }
  },
  components: {
    Child
  },
  provide() {
    return {
      title: this.title,
      handle: this.handle
    }
  },
  methods: {
    handle () {
      console.log(this.title)

    }
  }
}
</script>

<style>

</style>