angular.module('todo').controller('typeCtrl', function($scope, todos, $stateParams){
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
  console.log('todos for ' + $stateParams.status + ':', $scope.todos)
})