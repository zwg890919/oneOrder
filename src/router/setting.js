export default {
  path: '/setting',
  name: 'setting',
  component: () => import('@/views/layout/index'),
  children: [{
    path: '',
    name: 'setting',
    redirect: 'staffList'
  }, {
    path: 'staffList',
    name: 'setting.staffList',
    component: () => import('@/views/setting/staff.vue')
  }, {
    path: 'department',
    name: ' setting.department',
    component: () => import('@/views/setting/department.vue')
  }, {
    path: 'roleList',
    name: ' setting.roleList',
    component: () => import('@/views/setting/roleList.vue')
  }]
}
