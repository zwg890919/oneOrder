export default {
  path: '/charge',
  name: 'charge',
  meta: {
    title: '用户管理',
  },
  component: () =>
    import('@/views/layout/index'),
  children: [{
    path: 'chargeList',
    name: 'charge.chargeList',
    component: () =>
      import('@/views/charge/chargeList.vue')
  }, {
    path: 'prdChargeList',
    name: 'charge.prdChargeList',
    component: () =>
      import('@/views/charge/prdChargeList.vue')
  }]
}
