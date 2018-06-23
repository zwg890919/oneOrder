export default {
  path: '/user',
  name: 'user',
  component: () =>
    import ('@/views/layout/index'),
  children: [{
    path: '',
    name: 'user',
    redirect: 'userList'
  }, {
    path: 'userList',
    name: 'user.userList',
    component: () =>
      import ('@/views/user/userList.vue')
  }, {
    path: 'addUser',
    name: 'user.addUser',
    component: () =>
      import ('@/views/user/addUser.vue')
  },{
    path: 'userInfo/:userId',
    component: () =>
      import ('@/views/user/userInfo.vue'),
    children: [{
      path: '',
      name: 'user.userInfo',
      redirect: 'index'
    }, {
      path: 'index',
      name: 'user.userInfo.index',
      component: () =>
      import ('@/views/user/userInfo/index.vue'),
    }, {
      path: 'prdRecord',
      name: 'user.userInfo.prdRecord',
      component: () =>
      import ('@/views/user/userInfo/prdRecord.vue'),
    }, {
      path: 'card',
      name: 'user.userInfo.card',
      component: () =>
      import ('@/views/user/userInfo/card.vue'),
    }]
  }]
}
