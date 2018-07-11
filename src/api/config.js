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
  /********** 产品管理 **********/
  productList: { type: 'get', url: 'product/list' },  // 产品列表
  productChangeStatus: { type: 'post', url: 'product/changeStatus' },  // 产品状态修改
  productDetail: { type: 'get', url: 'product/detail' },  // 产品详情
  productAdd: { type: 'post', url: 'product/add' },  // 新增产品
};
