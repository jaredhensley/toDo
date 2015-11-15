angular.module('todo').factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {
        'X-Parse-Application-Id': '8ptdhJqmvSE6JLH0DPK5CKy9unouE7ztFYzUGWZ4',
        'X-Parse-REST-API-Key': 'r9OiyQDGZMzknR7XMnkMSVu5QvMppQMPGN3orVhk'
      }
      return config;
    }
  };
});