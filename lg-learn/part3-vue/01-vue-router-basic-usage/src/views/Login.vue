<template>
  <div>
    <div>登录</div>
    <button @click="push">push</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    push () {
      this.$router.push('/')
    }
  }
}
</script>