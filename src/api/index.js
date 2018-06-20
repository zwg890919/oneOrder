import method from './method'
import config from './config'
import axios from 'axios'

const apiList = {
  ...config
}

var proxy = new Proxy({}, {
  get: function (target, key) {
    if (key == "all") {
      return async function (httpConfigArr = []) {
        const httpArr = httpConfigArr.map(item => {
          let key = "",
            data = {};
          if (isObject(item) && item.key) {
            key = item.key;
            data = item.data;
          } else if (isString(item)) {
            key = item;
          }
          const httpConfig = apiList[key] || {};
          return httpConfig.type ? method[httpConfig.type](httpConfig.url, data) : false;
        });
        return await axios.all(httpArr);
      };
    } else {
      return function (data = {}, suffix = {}) {
        let item = apiList[key] || {};
        return item.type ? method[item.type](item.url, data, suffix) : false
      };
    }
  }
});
export default proxy
