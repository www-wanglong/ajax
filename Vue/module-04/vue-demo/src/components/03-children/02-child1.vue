<template>
  <div>
    chlid-1
  </div>
</template>

<script>
export default {
  name: 'Child1',
  data() {
    return {
      title: 'child1 title'
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