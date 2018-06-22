import Mock from 'mockjs'

Mock.mock('/api/user/dologin', (req, res) => {
  return {
    success: true,
    datas: {
      token: '0c003250e5b64bc3b730cc7405d2bd5c'
    }
  }
})

Mock.mock('/api/user/userInfo', 'get', (config) => {
  return {
    success: true,
    datas: {
      roles: [
        {
          name: '管理后台',
          menuId: 1,
          component:'',
          path: '',
          menuCode: '',
          authLevel: 1,
          parentId: '',
          childrens: [{
            name: '产品管理',
            menuId: 2,
            component:'',
            path: '/product',
            menuCode: '',
            authLevel: 2,
            childrens: [{
              name: '产品列表',
              menuId: 3,
              path: 'productList',
              menuCode: '',
              authLevel: 3,
              childrens: [{
                name: '新增产品',
                menuId: 4,
                component:'',
                path: '',
                menuCode: 'addProduct',
                authLevel: 4
              }]
            },{
              name: '业务员',
              menuId: 3,
              path: 'productList',
              menuCode: '',
              authLevel: 3,
              childrens: [{
                name: '新增业务员',
                menuId: 4,
                component:'',
                path: '',
                menuCode: 'addProduct',
                authLevel: 4
              }]
            }]
          }]
        },
        {
          name: '平台设置',
          menuId: 5,
          component:'',
          path: '',
          menuCode: '',
          authLevel: 1,
          parentId: '',
          childrens: [{
            name: '权限管理',
            menuId: 6,
            component:'',
            path: '',
            menuCode: '',
            authLevel: 2,
            childrens: [{
              name: '角色管理',
              menuId: 7,
              component:'',
              path: '/product/productList',
              menuCode: '',
              authLevel: 3,
            },{
              name: '员工管理',
              menuId: 8,
              component:'',
              path: '/product/productList',
              menuCode: '',
              authLevel: 3,
            },{
              name: '部门管理',
              menuId: 9,
              component:'',
              path: '/product/productList',
              menuCode: '',
              authLevel: 3,
            },]
          }]
        },
      ]
    }
  }
})
