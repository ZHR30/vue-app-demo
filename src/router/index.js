import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/home',
    name: 'Home',
    component: Layout,
    redirect: '/home/home1',
    children: [{
      path: 'home1',
      name: 'Home1',
      component: () => import('@/views/home')
    }]
  },

  {
    path: '/menus',
    component: Layout,
    name: 'Menus',
    redirect: '/menus/menus1',
    children: [{
      path: 'menus1',
      name: 'Menus1',
      component: () => import('@/views/menus')
    }]
  },
  {
    path: '/search',
    component: Layout,
    name: 'Search',
    redirect: '/search/search1',
    children: [{
      path: 'search1',
      name: 'Search1',
      component: () => import('@/views/search')
    }]
  },
  {
    path: '/cart',
    component: Layout,
    name: 'Cart',
    redirect: '/cart/cart1',
    children: [{
      path: 'cart1',
      name: 'Cart1',
      component: () => import('@/views/cart')
    }]
  },

  {
    path: '/mine',
    component: Layout,
    name: 'Mine',
    redirect: '/mine/mine1',
    children: [{
      path: 'mine1',
      name: 'Mine1',
      component: () => import('@/views/mine')
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
