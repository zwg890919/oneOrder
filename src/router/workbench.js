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
    hidden: true,
    component: () => import('@/views/workbench/preliminaryApply.vue'),
    meta: {
      title: '准入初评',
    },
  }, {
    path: 'preliminaryDetail',
    name: 'operate.preliminaryDetail',
    hidden: true,
    component: () => import('@/views/workbench/preliminaryDetail.vue'),
    meta: {
      title: '准入初评列表',
    },
  }, {
    path: 'firstTrial',
    name: 'operate.firstTrial',
    component: () => import('@/views/workbench/firstTrial.vue'),
    meta: {
      title: '初审任务',
    },
  }, {
    path: 'firstTrialApply',
    name: 'operate.firstTrialApply',
    hidden: true,
    component: () => import('@/views/workbench/firstTrialApply.vue'),
    meta: {
      title: '操作初审',
    },
  }, {
    path: 'firstTrialDetail',
    name: 'operate.firstTrialDetail',
    hidden: true,
    component: () => import('@/views/workbench/firstTrialDetail.vue'),
    meta: {
      title: '初审详情',
    },
  }]
}
