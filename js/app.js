angular.module('toDo', ['firebase', 'ui.router'])
  .config(function($httpProvider, $stateProvider, $urlRouterProvider){
     $httpProvider.interceptors.push('httpRequestInterceptor');
     $urlRouterProvider.otherwise('/home');
     $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeCtrl',
        templateUrl: 'templates/home.html' 
      })
      .state('list',{
        url: '/list/:listType',
        controller: 'typeCtrl',
        templateUrl: 'templates/type.html'
      })
  })


