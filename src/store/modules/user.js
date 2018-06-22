import Cookies from 'js-cookie'
import { eachAllChild } from '@/utils/index'
const user = {
  state: {
    menuRoles: [],
    FunRoles: [],
    menuRouters: []
  },
  mutations: {
    SET_MENUROLES: (state, menuRoles) => {
      state.menuRoles = menuRoles
    },
    SET_FUNROLES: (state, funRoles) => {
      state.funRoles = funRoles
    }
  },
  actions: {
    async userLogin({ commit }, loginParams) {
      const data = await $http.login(loginParams)
      await Cookies.set('admin-token', data.datas.token)
    },
    async getUserRole({ commit }) {
      const userRole = await $http.userInfo()
      commit('SET_MENUROLES', userRole.datas.roles || [])
      return userRole.datas.roles
    },
    generateRouters({ commit, state }, data) {
      const { roles } = data;
      roles.forEach(listitem => { //应用级别
        listitem.childrens && listitem.childrens.forEach(item => {  //菜单级别
          if (item.childrens.length > 0) { //判断是否为页面
            item.single = item.childrens.some(function (a) { return a.authLevel == 4 }) ? 1 : 2;
          }
        })
      });
      const currentApp = roles[0];
      var codeList = [], menuRouters = [];
      eachAllChild({
        name: '应用',
        childrens: roles
      }, (item) => {

        // item.menuCode && codeList.push(item.menuCode)
      })
      commit('SET_FUNROLES', codeList)
    }
  }
}

export default user
