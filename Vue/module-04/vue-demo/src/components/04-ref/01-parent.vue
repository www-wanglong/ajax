<template>
  <div>
    <my-input ref="mytxt"></my-input>
    <button @click="focus">input focus</button>
  </div>
</template>

<script>
import MyInput from './02-myInput.vue'
export default {
  components: {
    MyInput
  },
  methods: {
    focus () {
      this.$refs.mytxt.focus()
      this.$refs.mytxt.value = 'hello'
    }
  }
}
</script>

<style>

</style>