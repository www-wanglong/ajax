<template>
  <div>
    <!-- 方法1 通过当前路由规则 获取数据 -->
    id: {{ $route.params.id }}
    <br>

    <!-- 方法2 路由规则中开启props传参数 -->
    id: {{ id }}
    <button @click="go">go(-2)</button>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id'],
  methods: {
    go () {
      this.$router.go(-2)
    }
  }
}
</script>
