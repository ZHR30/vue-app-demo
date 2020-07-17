<template>
  <div>
    <Tabbar v-model="active">
      <TabbarItem v-for="(item, index) in TabbarList" :key="index" :icon="item.icon" @click="jump(item.url)">{{ item.title }}</TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'Layout',
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      active: 0,
      TabbarList: [
        {
          title: '首页',
          icon: 'wap-home-o',
          url: '/home'
        },
        {
          title: '分类',
          icon: 'apps-o',
          url: '/menus'
        },
        {
          title: '发现',
          icon: 'search',
          url: '/menus'
        },
        {
          title: '购物车',
          icon: 'shopping-cart-o',
          url: '/menus'
        },
        {
          title: '个人中心',
          icon: 'friends-o',
          url: '/mine'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    jump(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
