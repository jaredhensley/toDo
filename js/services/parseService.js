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

  this.getTodo = function(id){
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: parse.url + '/' + id
    }).then(function(res){
      console.log(res);
      dfd.resolve(res)
    })
    return dfd.promise
  }

  this.postTodo = function(todo){
    todo.status = 'new';
    return $http({
      method: 'POST',
      url: parse.url, 
      data: todo
    })
  }

  this.removeTodo = function(id){
    return $http({
      method: 'DELETE',
      url: parse.url + '/' + id
    })
  }

  this.advanceTodo = function(todo) {
    switch(todo.status){
      case 'new':
        todo.status = 'inProg'
        break
      case 'inProg':
        todo.status = 'done'
        break
      case 'done':
        todo.status = 'archived'
        break
    }
    return $http({
      method: 'PUT',
      url: parse.url + '/' + todo.objectId,
      data: todo
    })
  }
  
})