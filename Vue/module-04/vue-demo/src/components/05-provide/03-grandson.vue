<template>
  <div>
    grandson<br>
    $parent.$parent.title: {{ $parent.$parent.title }}
    <button @click="$parent.$parent.handle">获取$parent.$parent.title</button>
    <button @click="$parent.$parent.title='change grandson $parent.title'">改变$$parant.parent.title</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>