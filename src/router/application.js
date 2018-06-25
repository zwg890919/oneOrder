export default {
  path: '/application',
  name: 'application',
  component: () => import('@/views/layout/index'),
  children: [{
    path: '',
    name: 'application',
    redirect: 'applicationList'
  }, {
    path: 'applicationList',
    name: 'application.applicationList',
    component: () => import('@/views/application/applicationList.vue')
  }]
}
