<template>
  <div>
    chlid-2
  </div>
</template>

<script>
export default {
  name: 'Child2',
  data() {
    return {
      title: 'child2 title'
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