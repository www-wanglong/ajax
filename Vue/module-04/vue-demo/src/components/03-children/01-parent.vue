<template>
  <div>
    <child1 />
    <child2 />

    <button @click="getChildren">获取子组件</button>

  </div>
</template>

<script>

import Child1 from './02-child1.vue'
import Child2 from './03-child2.vue'

export default {
  name: 'Parent',
  components: {
    Child1,
    Child2
  },
  methods: {
    getChildren () {
      console.log(this.$children)
      console.log(this.$children[0].title)
      console.log(this.$children[1].title)
      this.$children[0].handle()
      this.$children[1].handle()
    }
  }
}
</script>

<style>

</style>