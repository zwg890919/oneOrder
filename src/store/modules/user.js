import Cookies from 'js-cookie'
import { eachAllChild } from '@/utils/index'
const user = {
  state: {
    menuRoles: [],
    funRoles: [],
    currentApp: []
  },
  mutations: {
    SET_MENUROLES: (state, menuRoles) => {
      state.menuRoles = menuRoles
    },
    SET_FUNROLES: (state, funRoles) => {
      state.funRoles = funRoles
    },
    SET_CURRENTAPP: (state, currentApp) => {
      state.currentApp = currentApp
    },
  },
  actions: {
    async userLogin({ commit }, loginParams) {
      const data = await $http.login(loginParams)
      await Cookies.set('admin-token', data.datas.token)
    },
    async getUserRole({ commit }) {
      const userRole = await $http.userInfo()
      const roles = userRole.datas.roles || [];
      roles.forEach(listItem => {
        listItem.childrens && listItem.childrens.forEach(item => {
          if (item.childrens.length > 0 && item.menuType == 1) {
            item.isSingle = item.childrens.some(function (a) { return a.menuType == 1 }) ? 1 : 2;
            if (item.isSingle) {
              item.childrens.forEach(function (m, n) {
                m.isSingle = m.childrens.some(function (a) { return a.menuType == 3 });
              });
            }
          }
        })
      })
      commit('SET_MENUROLES', roles)
      commit('SET_CURRENTAPP', roles[0])
      var codeList = [];
      eachAllChild({
        childrens: roles
      }, (item, index) => {
        item.menuCode && codeList.push(item.menuCode)
      })
      commit('SET_FUNROLES', codeList)
    },
    CHANGE_CURRENTAPP({commit,state},appIndex){
      commit('SET_CURRENTAPP', state.menuRoles[appIndex])
    }
  }
}

export default user
