export default {
  path: '/application',
  name: 'application',
  redirect: 'applicationList',
  component: () => import('@/views/layout/index'),
  meta: {
    title: '融资申请管理',
  },
  children: [{
    path: 'applicationList',
    name: 'application.applicationList',
    component: () => import('@/views/application/applicationList.vue'),
    meta: {
      title: '融资申请列表',
    },
  }, {
    path: 'applicationDetail',
    name: 'application.applicationDetail',
    component: () => import('@/views/application/applicationDetail.vue'),
    hidden:true,
    meta: {
      title: '融资申请详情',
    },
  }]
}
