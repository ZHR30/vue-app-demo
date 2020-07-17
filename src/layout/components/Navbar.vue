<template>
  <div class="navbar">
    <NavBar
      left-text="Logo"
      right-text="按钮"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #title>
        标题1
      </template>
    </NavBar>
  </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'MyNavbar',
  components: {
    NavBar
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {}
  }
}
</script>

<style lang="scss" scoped>
</style>
