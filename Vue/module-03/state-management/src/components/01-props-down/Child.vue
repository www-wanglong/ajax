<template>
  <div>
    <h1>Props Down Child</h1>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>

</style>