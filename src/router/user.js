export default {
  path: '/user',
  name: 'user',
  redirect: 'userList',
  meta: {
    title: '用户管理',
    icon:'el-icon-news'
  },
  component: () =>
    import('@/views/layout/index'),
  children: [{
    path: 'userList',
    name: 'user.userList',
    meta: {
      title: '业务员列表',
    },
    component: () =>
      import('@/views/user/userList.vue')
  }, {
    path: 'addUser',
    name: 'user.addUser',
    hidden: true,
    component: () =>
      import('@/views/user/addUser.vue')
  }, {
    path: 'userInfo/:userId',
    hidden: true,
    meta: {
      title: '用户详情',
    },
    component: () =>
      import('@/views/user/userInfo.vue'),
    children: [{
      path: 'index',
      name: 'user.userInfo.index',
      meta: {
        title: '用户详情',
      },
      component: () =>
        import('@/views/user/userInfo/index.vue'),
    }, {
      path: 'prdRecord',
      name: 'user.userInfo.prdRecord',
      meta: {
        title: '用户详情',
      },
      component: () =>
        import('@/views/user/userInfo/prdRecord.vue'),
    }, {
      path: 'card',
      name: 'user.userInfo.card',
      meta: {
        title: '用户详情',
      },
      component: () =>
        import('@/views/user/userInfo/card.vue'),
    }]
  }]
}
