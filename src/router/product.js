export default {
  path: '/product',
  name: 'product',
  component: () => import('@/views/layout/index'),
  children: [
    { 
        path: '',
        name: 'product',
        redirect: 'productList'
    }, { 
        path: 'productList',
        name: 'product.productList',
        component: () => import('@/views/product/productList.vue')
    }
  ]   
}