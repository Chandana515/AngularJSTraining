angular.module("xyz", [])
  .controller("ctrl",ctrl)
  .filter('file',file)
  function file(){
      return function(x){
          var i,c,txt="";
          for (i=0; i<x.length; i++){
          c = x[i];
          if (i%2 == 0){
              c = c.toUpperCase();

          }
        txt += c;
      }
      return txt;
    }
  }

function ctrl($scope)
{
    $scope.names = [
        'Jani Carl','Margareth Hege','Joe gutsav','Birgit mary'
    ];
}