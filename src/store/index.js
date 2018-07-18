import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import app from './modules/app'
import user from './modules/user'
import dictionary from './modules/dictionary'
import tagsView from './modules/tagsView'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    dictionary,
    tagsView
  },
  getters
})

export default store
