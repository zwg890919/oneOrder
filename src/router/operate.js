export default {
  path: '/operate',
  name: 'operate',
  component: () => import('@/views/layout/index'),
  children: [{
    path: '',
    name: 'operate',
    redirect: 'operateList'
  }, {
    path: 'operateList',
    name: 'operate.operateList',
    component: () => import('@/views/operate/operateList.vue')
  }, {
    path: 'producter',
    name: 'operate.producter',
    component: () => import('@/views/operate/producter.vue')
  }]
}
