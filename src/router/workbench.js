export default {
  path: '/workbench',
  name: 'workbench',
  redirect: 'creditList',
  meta: {
    title: '工作台',
  },
  component: () => import('@/views/layout/index'),
  children: [{
    path: 'creditList',
    name: 'operate.creditList',
    component: () => import('@/views/workbench/creditList.vue'),
    meta: {
      title: '放款处理',
    },
  }]
}
