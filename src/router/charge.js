export default {
  path: '/charge',
  name: 'charge',
  component: () =>
    import ('@/views/layout/index'),
  children: [{
    path: '',
    name: 'charge',
    redirect: 'chargeList'
  },{
    path: 'chargeList',
    name: 'charge.chargeList',
    component: () =>
      import ('@/views/charge/chargeList.vue')
  }, {
    path: 'prdChargeList',
    name: 'charge.prdChargeList',
    component: () =>
      import ('@/views/charge/prdChargeList.vue')
  }]
}
