import axios from 'axios'
import qs from 'qs'
import config from './config'

function checkStatus(response) {
  if (response.status == 200) {
    return response.data
  } else {
    return false;
  }
}

function error(msg) {
  return false;

}

export default {
  /**
 * [config some public options about ajax]
 * @type {[object]}
 */
  config,
  /**
 * [get]
 * @param  {[string]} url
 * @param  {[object]} params [get params]
 * @return {[promise object]} axios [a promise object]
 */
  get(url, data) {
    // console.log(config.api + url)
    return axios({
      method: 'get',
      url: config.api + url,
      params: data,
      timeout: config.timeout,
      headers: config.headers
    }).then(checkStatus).catch(error);
  },
  /**
 * [post]
 * @param  {[string]} url
 * @param  {[object]} params [post body]
 * @return {[promise object]} axios [a promise object]
 */
  post(url, data, userdefined_head) {
    let headers = Object.assign({}, config.headers, userdefined_head);
    // data = qs.stringify(data)
    console.log(data);
    for(let x in data){
      if(Array.isArray(data[x]) && data[x].length === 0){
        data[x] = '';
      }
    }
    console.log(data);
    return axios({
      method: 'post',
      url: config.api + url,
      data,
      timeout: config.timeout,
      headers
    }).then(checkStatus).catch(error);
  },
  /**
 * [put]
 * @param  {[string]} url
 * @param  {[object]} params [post body]
 * @return {[promise object]} axios [a promise object]
 */
  put(url, data, userdefined_head) {
    let headers = Object.assign({}, config.headers, userdefined_head);
    data = qs.stringify(data)

    return axios({
      method: 'post',
      url: config.api + url,
      data,
      timeout: config.timeout,
      headers
    }).then(checkStatus).catch(error);
  },
  /**
 * [delete]
 * @param  {[string]} url
 * @param  {[object]} params [post body]
 * @return {[promise object]} axios [a promise object]
 */
  delete(url, data, userdefined_head) {
    let headers = Object.assign({}, config.headers, userdefined_head);

    data = qs.stringify(data)
    return axios({
      method: 'delete',
      url: config.api + url,
      data,
      timeout: config.timeout,
      headers
    }).then(checkStatus).catch(error);
  }
}
