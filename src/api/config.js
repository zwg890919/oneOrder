export default {
  api: '/api/',
  timeout: 300000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  home: { type: 'get', url: 'home' },
};
