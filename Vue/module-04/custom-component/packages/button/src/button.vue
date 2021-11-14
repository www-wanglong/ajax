<template>
  <div>
    <button @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LgButton',
  methods: {
    handleClick (event) {
      this.$emit('click', event)
      event.preventDefault()
    }
  }
}
</script>

<style>

</style>