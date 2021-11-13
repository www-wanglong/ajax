<template>
  <div class="child">
    child<br>
    title: {{ title }}
    <button @click="handle">获取title</button>
    <button @click="title='change child title'">改变title</button>
    <grandson />
  </div>
</template>

<script>
import grandson from './03-grandson'
export default {
  components: {
    grandson
  },
  inject: ['title', 'handle']
}
</script>

<style>

</style>