angular.module('todo').service('parseService', function($http, $q, parse){

  this.getTodos = function(){
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: parse.url
    }).then(function(res){
      var holder = res.data.results
      var resolveObj = {
        newTodos: [],
        inProgTodos: [],
        doneTodos: [],
      }
      for (var i = 0; i < holder.length; i++) {
        var todo = holder[i]
        switch(todo.status){
          case 'new':
            resolveObj.newTodos.push(todo);
            break;
          case 'inProg':
            resolveObj.inProgTodos.push(todo);
            break;
          case 'done':
            resolveObj.doneTodos.push(todo);
            break;
        }
      };
      console.log(resolveObj)
      dfd.resolve(resolveObj);
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