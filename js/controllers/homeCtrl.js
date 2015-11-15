angular.module('todo').controller('homeCtrl', function($scope, todos, parseService){
  
  $scope.todosArr = todos;

  $scope.postTodo = function(){
    console.log($scope.newTodo)
    parseService.postTodo({title: $scope.newTodo})
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
      $scope.todosArr = todos;
    })
  }

})