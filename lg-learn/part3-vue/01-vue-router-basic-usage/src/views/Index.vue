<template>
  <div class="home">首页

    <div id="nav">
      <router-link to="/">Index</router-link>
    </div>

    <button @click="replace">Replace</button>

    <button @click="goDetail">Detail</button>
    <!-- <router-link to="login">登录</router-link> |

    <router-link to="detail/5">详情</router-link> -->

  </div>

</template>

<script>
export default {
  name: 'Index',
  methods: {
    replace () {
      this.$router.replace('/login')
    },
    goDetail () {
      this.$router.push({ name: 'detail', params: { id: 1 } })
    }
  }
}
</script>