<template>
  <div class="child">
    child<br>
    $parent.title: {{ $parent.title }}
    <button @click="$parent.handle">获取$parent.title</button>
    <button @click="$parent.title='change child $parent.title'">改变$parent.title</button>

    <grandson />
  </div>
</template>

<script>
import grandson from './03-grandson'
export default {
  components: {
    grandson
  }
}
</script>

<style>

</style>