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
      title: 'productList',
      icon: 'addProduct'
    },
  }, {
    path: 'addProduct',
    name: 'product.addProduct',
    component: () => import('@/views/product/addProduct.vue'),
    meta: {
      title: 'addProduct',
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
        title: 'productInfo',
        icon: 'productInfo'
      },
    }]
  }]
}
