angular.module('todo').controller('homeCtrl', function($scope, todos, parseService){
  
  $scope.todos = todos;

  $scope.postTodo = function(){
    console.log($scope.newTodo)
    todoObj = {
      title: $scope.newTodo,
      status: 'new'
    }
    parseService.postTodo(todoObj)
      .then(function(res){
        if(res.status === 201) {
          $scope.getTodos()
          $scope.newTodo = ''
        }
      })
  }

  $scope.removeTodo = function(id){
    parseService.removeTodo(id).then(function(res){
      if(res.status === 200) {
         $scope.getTodos()
      }
    })
  }

  $scope.advanceTodo = function(todo) {
    parseService.advanceTodo(todo).then(function(res){
      if(res.status === 200){
        $scope.getTodos()
      }
    })
  }

  $scope.getTodos = function(){
    parseService.getTodos().then(function(todos){
      $scope.todos = todos;
    })
  }

})