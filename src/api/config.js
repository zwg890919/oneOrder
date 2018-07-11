import workbench from './httpList/workbench'

export default {
  api: '/api/',
  timeout: 300000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  home: { type: 'get', url: 'home' },
  login: { type: 'post', url: 'user/dologin' },
  userInfo: { type: 'get', url: 'user/userInfo' },
  productList: { type: 'post', url: 'product/list' },  // 产品列表
  ...workbench
};
