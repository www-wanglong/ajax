<template>
  <div>
    <h1>Props Down Parent</h1>
    <child title="my child"></child>
  </div>
</template>

<script>
import Child from './Child'
export default {
  components: { Child },
  componets: {
    Child
  }
}
</script>

<style>

</style>