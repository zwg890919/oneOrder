const dictionary = {
  state: {
    dictionary: {},
  },
  mutations: {
    SET_DIC: (state, data) => {
      // 活动标签
      sessionStorage.setItem('activiti',JSON.stringify(data.activiti));
      // 费用类型
      sessionStorage.setItem('cost_type',JSON.stringify(data.cost_type));
      // 还款方式
      sessionStorage.setItem('repay_mode',JSON.stringify(data.repay_mode));
      // 产品特色标签
      sessionStorage.setItem('special',JSON.stringify(data.activiti));
    },
  },
  actions: {
    async getDictionary({ commit }) {
      const data = await $http.basicDictionary();
      if(data.success){
        commit('SET_DIC',data.datas);
      }
    }
  }
}


export default dictionary
