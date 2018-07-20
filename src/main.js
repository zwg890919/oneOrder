// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import proxy from './api';
import * as filterList from './assets/js/filter'
import Vue2Filters from 'vue2-filters'
import util from '@/assets/js/utils'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

import store from '@/store'
import './permission'
// import './mock'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'medium', zIndex: 3000 });
Vue.use(Vue2Filters)
Vue.use(util);
Object.keys(filterList).forEach(key => {
  Vue.filter(key, filterList[key])
});

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(
  response => {
    if (!response.data.success){
      OneApp.$notify.error({
        title: '错误',
        message: response.data.i18nMessage
      });
    }
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.push('/judgeLogin');
          break;
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
);

router.beforeEach((to, from, next) => {
  next();
})

window.$http = proxy;
/* eslint-disable no-new */
const OneApp =  new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
