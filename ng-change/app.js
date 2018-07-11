angular.module('xyz', [])
.controller("ctrl",ctrl)
function ctrl($scope)
{
$scope.count = 0;
  $scope.myFunc= function() {

    $scope.count++;
  };
}