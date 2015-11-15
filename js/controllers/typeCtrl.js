angular.module('todo').controller('typeCtrl', function ($scope, todos, $stateParams, parseService) {
  switch ($stateParams.status) {
  case 'new':
    $scope.todos = todos.newTodos
    $scope.status = 'New'
    break;
  case 'inProg':
    $scope.todos = todos.inProgTodos
    $scope.status = 'In Progress'
    break;
  case 'done':
    $scope.todos = todos.doneTodos
    $scope.status = 'Done'
    break;
  }

  $scope.postTodo = function (todo) {
    todoObj = {
      title: $scope.newTodo,
      status: 'new'
    }
    parseService.postTodo(todo)
      .then(function (res) {
        if (res.status === 201) {
          $scope.getTodos()
          $scope.newTodo = ''
        }
      })
  }


  console.log('todos for ' + $stateParams.status + ':', $scope.todos)
})