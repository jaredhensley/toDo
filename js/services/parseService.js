angular.module('todo').service('parseService', function($http, $q, parse){

  this.getTodos = function(){
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: parse.url
    }).then(function(res){
      var holder = res.data.results
      console.log('holderArr:', holder);
      dfd.resolve(holder);
    })
    return dfd.promise
  }

  this.postTodo = function(todo){
    return $http({
      method: 'POST',
      url: parse.url ,
      data: todo
    })
  }
  
})