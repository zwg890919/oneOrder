/**
 * 路由权限页（登录判断）
 */
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
import { eachAllChild } from '@/utils/index'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

//链接白名单
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (Cookies.get('admin-token')) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
    //   if (store.getters.menuRoles.length === 0) {
    //     store.dispatch('getUserRole')
    //   }
    //   let menuList = [];
    //   eachAllChild({
    //     childrens: store.getters.menuRoles
    //   }, (item, index) => {
    //     item.menuHref && menuList.push(item.menuHref)
    //   })
    //   if (menuList.indexOf(to.name)) {
        next()
    //   } else {
    //     next({ path: "/error/401", replace: true })
    //   }
    }
  } else {
    // 目标链接是否在白名单内
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
