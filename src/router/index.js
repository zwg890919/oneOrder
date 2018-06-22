import Vue from 'vue'
import Router from 'vue-router'
import productRouter from "./product";
Vue.use(Router)
export default new Router({
  routes: [
    { path: '*', redirect: "/404" },
    { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
    { path: "/login", name: "login", component: () => import(`@/views/login`) },
    {
      path: '',
      redirect: "/home",
      component: () => import('@/views/layout/index'),
      children: [{
        path: 'home',
        name: 'home',
        component: () => import ('@/views/product/productList.vue')
      }]
    },
    productRouter
  ],
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
      }
      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0;
        position.y = 0;
      }
      return position;
    }
  }
})
