angular.module('todo').controller('homeCtrl', function($scope, todos, parseService){
  
  $scope.todosArr = todos;

  $scope.postTodo = function(){
    console.log($scope.newTodo)
    parseService.postTodo({todo: $scope.newTodo})
      .then(function(res){
        if(res.status === 201) {
         $scope.getTodos()
        }
      })
    $scope.newTodo = ''
  }

  $scope.getTodos = function(){
    parseService.getTodos().then(function(todos){
      $scope.todos = todos;
    })
  }

})