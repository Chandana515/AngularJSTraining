angular.module("abc",[])
.controller("ctrl",ctrl)


function ctrl($scope)
{
  
  $scope.myVar=false;
  $scope.toggle=function(x)
  {                                              
      if(x)
      {
          $scope.myVar=false;
      }
      else{
          $scope.myVar=true;
      }
  }
}
