<template>
  <div class="app-wrapper">
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
    <div>
      <Tabbar v-model="active">
        <TabbarItem v-for="(item, index) in TabbarList" :key="index" :icon="item.icon" @click="jump(item.url)">{{ item.title }}</TabbarItem>
      </Tabbar>
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain } from './components'
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
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
          url: '/home/home1'
        },
        {
          title: '分类',
          icon: 'apps-o',
          url: '/menus/menus1'
        },
        {
          title: '发现',
          icon: 'search',
          url: '/search/search1'
        },
        {
          title: '购物车',
          icon: 'shopping-cart-o',
          url: '/cart/cart1'
        },
        {
          title: '个人中心',
          icon: 'friends-o',
          url: '/mine/mine1'
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
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
