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
  /********** 基本信息维护 **********/
  basicDictionary: { type: 'post', url: 'basic/dictionary' },  // 数据字典
  /********** 产品管理 **********/
  productList: { type: 'get', url: 'product/list' },  // 产品列表
  productChangeStatus: { type: 'post', url: 'product/changeStatus' },  // 产品状态修改
  productDetail: { type: 'get', url: 'product/detail' },  // 产品详情
  productUpdate: { type: 'post', url: 'product/update' },  // 更新产品
  /********** 用户管理 **********/
  salesmanList: { type: 'get', url: 'salesman/list' },  // 业务员列表
  salesmanInitPassowrd: { type: 'post', url: 'salesman/initpassword' },  // 初始化密码
  salesmanConfirmadd: { type: 'post', url: 'salesman/confirmadd' },  // 新增用户
  salesmanBaseinfo: { type: 'get', url: 'salesman/baseinfo' },  // 业务员基本信息
};
