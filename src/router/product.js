export default {
  path: '/product',
  name: 'product',
  component: () => import('@/views/layout/index'),
  children: [{
    path: '',
    name: 'product',
    redirect: 'productList',
  }, {
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
    meta: {
      title: '添加产品',
      icon: 'addProduct'
    },
  }, {
    path: 'productInfo/:userId',
    component: () => import('@/views/product/productInfo.vue'),
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
