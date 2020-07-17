<template>
  <div class="login-container">
    <div class="login-center">
      <CellGroup>
        <Field v-model="loginForm.username" label="邮箱" placeholder="请输入用户名" />
        <Field v-model="loginForm.password" label="密码" placeholder="请输入密码" />
      </CellGroup>
      <p class="forgrt-psd">忘记密码</p>
      <Button
        :loading="loading"
        type="primary"
        icon="arrow"
        color="linear-gradient(to bottom, #FAE89C, #FC757C)"
        round
        @click="handleLogin"
      />
    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import { CellGroup, Field, Button } from 'vant'

export default {
  name: 'Login',
  components: {
    CellGroup,
    Field,
    Button
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.loading = true
      this.$store.dispatch('user/login', this.loginForm).then(() => {
        this.$router.push({ path: '/home' })
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
  .login-container {
    width: 100%;
    height: 100%;
    background: url('../../assets/login/bg.png');
    background-size: cover;
    overflow: hidden;
   .login-center {
     background: #fff;
     border-radius: 10px;
     width: 325px;
     height: 369px;
     margin: 150px auto 0;
     padding: 20px;
     text-align: center;
     .van-cell {
       border: 1px solid gainsboro;
       border-radius: 5px;
       margin-bottom: 30px;
     }
    .forgrt-psd {
      text-align: right;
      margin: 0;
      color: hotpink;
    }
    .van-button {
      width: 60px;
      height: 60px;
      margin: 30px 0;
    }
   }
  }
</style>
