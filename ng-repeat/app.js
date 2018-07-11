angular.module("abc",[])
.controller("ctrl",ctrl)
function ctrl($scope){
  $scope.records = [
    "Alfreds Futterkiste",
    "Berglunds snabbköp",
    "Centro comercial Moctezuma",
    "Ernst Handel"
  ];
}