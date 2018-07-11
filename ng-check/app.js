angular.module('xyz', [])
.controller("ctrl",ctrl)
function ctrl($scope)
{
$scope.count = 0;
  $scope.ctrl = function() {
    $scope.count++;
  }
}