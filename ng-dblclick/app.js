angular.module("abc",[])
.controller("ctrl",ctrl)
.controller("ctrl1",ctrl1)
.controller("ctrl2",ctrl2)

function ctrl($scope)
{
 
$scope.obj=["Saab", "Volvo", "BMW"];
        
}
function ctrl1($scope)
{
    $scope.arr1 = [{type:"Fiat", model:"500"},{type:"Hire", model:"800"},["suhas" ,"vani", "swethu"]];
}

function ctrl2($scope)
{
    $scope.arr2 = [{name:"chandu", qualification:"BE in TCE"},{name:"vani", qualification:"BE in ISE"}];

}
