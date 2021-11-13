<template>
  <div>
    $root.title: {{ $root.title }}
    <br>

    <button @click="$root.handle">获取title</button>
    <button @click="$root.title = 'change title'">改变title</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>