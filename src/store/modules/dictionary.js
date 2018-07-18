import axios from 'axios'
const dictionary = {
  state: {
    dictionary: {},
  },
  mutations: {
    SET_DIC: (state, data) => {
      // 活动标签
      localStorage.setItem('activiti',JSON.stringify(data.activiti));
      // 费用类型
      localStorage.setItem('cost_type',JSON.stringify(data.cost_type));
      // 还款方式
      localStorage.setItem('repay_mode',JSON.stringify(data.repay_mode));
      // 产品特色标签
      localStorage.setItem('special',JSON.stringify(data.activiti));
    },
    SET_PRO: (state, data) => {
      // 省市信息
      localStorage.setItem('provinceList',JSON.stringify(data));
    },
  },
  actions: {
    async getDictionary({ commit }) {
      const data = await $http.basicDictionary();
      if(data.success){
        commit('SET_DIC',data.datas);
      }
    },
    getProvinceList({ commit }) {
      axios.get('/static/cities.json').then((res) => {
				if(res.data.success){
          commit('SET_PRO',res.data.datas);
				}
			})
    }
  }
}


export default dictionary
