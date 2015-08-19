'use strict';

app.controller('TasksCtrl', function ($scope, Task) {
	$scope.tasks = Task.get();
  $scope.task = {task: ''};

  $scope.addTask = function() {
  	if ($scope.task) {
  		console.log('add task fired');
	  	Task.save($scope.task, function (ref) {
	  		$scope.tasks[ref.name] = $scope.task;
	  		$scope.task = {task: ''};
	  	});
	  	
	  }  	
  },
  $scope.deleteTask = function (taskId) {
	  Task.delete({id: taskId}, function() {
	  	delete $scope.tasks[taskId];
	  });
	}
});