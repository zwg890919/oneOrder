export default {
  path: '/charge',
  name: 'charge',
  redirect: 'chargeList',
  meta: {
    title: '用户管理2',
  },
  component: () =>
    import('@/views/layout/index'),
  children: [{
    path: 'chargeList',
    name: 'charge.chargeList',
    meta: {
      title: '业务员列表',
    },
    component: () =>
      import('@/views/charge/chargeList.vue')
  }, {
    path: 'prdChargeList',
    name: 'charge.prdChargeList',
    meta: {
      title: '业务员列表',
    },
    component: () =>
      import('@/views/charge/prdChargeList.vue')
  }]
}
