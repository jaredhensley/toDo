angular.module('todo').factory('httpRequestInterceptor', function (parse) {
  return {
    request: function (config) {
      config.headers = {
        'X-Parse-Application-Id': parse.appId,
        'X-Parse-REST-API-Key': parse.restKey
      }
      return config;
    }
  };
});