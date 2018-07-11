angular.module("todo'", [])
.controller("todoctrl",todoctrl)
function todoctrl($scope)
{
    $scope.todoarr= [];
    $scope.Submit = function()
    {
        $scope.todoarr.push($scope.todovalue);
        $scope.todovalue = '';
    }
}

