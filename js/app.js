angular.module('todo', ['firebase', 'ui.router'])
  .constant('parse', {
    url: 'https://api.parse.com/1/classes/todos',
    appId: 'zT7uqJyr11Y9UIuVnReXC5N8talGRw3UvazcXIEC',
    restKey: 'XMAK7ngPaHKDoYCaAlVGCpzvJ41Oi8w36hnwZsDv'
  })
  .constant('firebase', {
    url: 'https://todowithdoritochips.firebaseio.com/'
  })
  .config(function($httpProvider, $stateProvider, $urlRouterProvider){
     $httpProvider.interceptors.push('httpRequestInterceptor');
     $urlRouterProvider.otherwise('/home');
     $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeCtrl',
        templateUrl: 'templates/home.html',
        resolve: {
          todos: function(parseService){
            return parseService.getTodos();
          }
        } 
      })
      .state('list',{
        url: '/list/:status',
        controller: 'typeCtrl',
        templateUrl: 'templates/type.html'
      })
      .state('/todo')
  })


