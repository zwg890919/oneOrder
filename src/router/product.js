export default {
  path: '/product',
  name: 'product',
  redirect: 'productList',
  component: () => import('@/views/layout/index'),
  meta: {
    title: '产品管理',
    icon: 'el-icon-tickets'
  },
  children: [ {
    path: 'productList',
    name: 'product.productList',
    component: () => import('@/views/product/productList.vue'),
    meta: {
      title: '产品列表',
      icon: 'addProduct'
    },
  }, {
    path: 'addProduct',
    name: 'product.addProduct',
    component: () => import('@/views/product/addProduct.vue'),
    hidden:true,
    meta: {
      title: '新建产品',
      icon: 'addProduct'
    },
  }, {
    path: 'modifyProduct/:productId/:type',
    name: 'product.modifyProduct',
    component: () => import('@/views/product/addProduct.vue'),
    hidden:true,
    meta: {
      title: '修改产品',
      icon: 'addProduct'
    },
  },{
    path: 'productInfo/:productId',
    component: () => import('@/views/product/productInfo.vue'),
    hidden:true,
    children: [{
      path: '',
      name: 'product.productInfo',
      redirect: 'index'
    }, {
      path: 'index',
      name: 'product.productInfo.index',
      component: () => import('@/views/product/productInfo/index.vue'),
      meta: {
        title: '产品详情',
        icon: 'productInfo'
      },
    }, {
      path: 'apply',
      name: 'product.productInfo.apply',
      component: () => import('@/views/product/productInfo/apply.vue'),
      meta: {
        title: '借款申请',
        icon: 'productInfo'
      },
    }]
  }]
}
