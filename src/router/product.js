export default {
  path: '/product',
  name: 'product',
  component: () => import('@/views/layout/index'),
  children: [{
    path: '',
    name: 'product',
    redirect: 'productList'
  }, {
    path: 'productList',
    name: 'product.productList',
    component: () => import('@/views/product/productList.vue')
  }, {
    path: 'addProduct',
    name: 'product.addProduct',
    component: () => import('@/views/product/addProduct.vue')
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
    }]
  }]
}
