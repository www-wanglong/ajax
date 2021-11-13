<template>
  <div>
    <input v-model="value" type="text" ref="txt" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'default'
    }
  },
  methods: {
    focus () {
      // 获得焦点
      this.$refs.txt.focus()
    }
  }
}
</script>

<style>

</style>