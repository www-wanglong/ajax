<template>
  <el-form class="form" ref="form" :model="user" :rules="rules">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="user.username" />
    </el-form-item>
    <el-form-item label="密码" prop="username">
      <el-input v-model="user.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login()">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ]
      }
    }
  },
  methods: {
    login () {

    }
  }

}
</script>

<style>

</style>