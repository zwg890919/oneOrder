export default {
    path: 'product',
    component: {
        template: "<router-view></router-view>"
    },
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
