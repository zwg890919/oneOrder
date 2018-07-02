export default {
  api: '/api/',
  timeout: 300000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  home: { type: 'get', url: 'home' },
  login: { type: 'post', url: '/zouyidan_auth/biz/login' },
  userInfo: { type: 'get', url: 'user/userInfo' },
};
