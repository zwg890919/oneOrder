export default {
  path: '/operate',
  name: 'operate',
  redirect: 'operateList',
  meta: {
    title: '运营管理',
  },
  component: () => import('@/views/layout/index'),
  children: [{
    path: 'operateList',
    name: 'operate.operateList',
    component: () => import('@/views/operate/operateList.vue'),
    meta: {
      title: '渠道管理',
    },
  }, {
    path: 'producter',
    name: 'operate.producter',
    component: () => import('@/views/operate/producter.vue'),
    meta: {
      title: '产品方管理',
    },
  }, {
    path: 'bank',
    name: 'operate.bank',
    component: () => import('@/views/operate/bank.vue'),
    meta: {
      title: '银行信息管理',
    },
  }, {
    path: 'tag',
    name: 'operate.tag',
    component: () => import('@/views/operate/tag.vue'),
    meta: {
      title: '产品标签管理',
    },
  }]
}
