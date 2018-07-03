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
  }, {
    path: 'preliminary',
    name: 'operate.preliminary',
    component: () => import('@/views/workbench/preliminary.vue'),
    meta: {
      title: '准入初评',
    },
  }, {
    path: 'preliminaryApply',
    name: 'operate.preliminaryApply',
    component: () => import('@/views/workbench/preliminaryApply.vue'),
    meta: {
      title: '准入初评',
    },
  }]
}
