<template>
  <lg-form class="form" ref="form" :model="user" :rules="rules">
    <lg-form-item label="用户名" prop="username">
      <!-- <lg-input v-model="user.username" /> -->
      <lg-input
        :value="user.username"
        @input="user.username=$event"
        placeholder="请输入用户名"
      />
    </lg-form-item>
    <lg-form-item label="密码" prop="password">
      <lg-input type="password" v-model="user.password" />
    </lg-form-item>
    <lg-form-item>
      <lg-button type="primary" @click="login()">提交</lg-button>
    </lg-form-item>
  </lg-form>
</template>

<script>

import LgForm from './Form.vue'
import LgFormItem from './FormItem.vue'
import LgInput from './Input.vue'
import LgButton from './Button.vue'
export default {
  name: 'FormTest',
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
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          }
        ]
      }
    }
  },
  components: {
    LgForm,
    LgFormItem,
    LgInput,
    LgButton,
  },
  methods: {
    login () {
      this.$refs.form.validate( valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
        }
      })
    }
  }

}
</script>

<style>

</style>