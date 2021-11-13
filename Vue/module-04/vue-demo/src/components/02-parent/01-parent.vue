<template>
  <div class="parent">
    parent
    <child />
  </div>
</template>

<script>

import child from './02-child'

export default {
  components: {
    child
  },
  data () {
    return {
      title: 'parent title'
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