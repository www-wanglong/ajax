<template>
  <div>Home
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Posts',
  metaInfo: {
    title: 'Posts'
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['posts'])
  },
  // Vue SSR特殊为服务端渲染提供的生命周期函数
  serverPrefetch () {
    return this.getPosts()
  },
  methods: {
    ...mapActions(['getPosts'])
  },
  async created () {
    // console.log('Posts Createtd Start')
    // const { data } = await axios({
    //   method: 'GET',
    //   url: 'https://cnodejs.org/api/v1/topics',
    // })
    // this.posts = data.data
    // console.log('Posts Craeted End')
  }
}
</script>

<style>

</style>