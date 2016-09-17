(function(){
  'use strict'

angular.module('LunchCheckerApp',[])

.controller('LunchCheckerController',LunchCheckerController);
LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope){

$scope.CountCheck = function(){
  var len = splitString($scope.foods);
if (len>3) {
  $scope.Message='Too much!';
  $scope.color = 'green';
}
else if (len>0 ) {
    $scope.Message='Enjoy!';
    $scope.color = 'green';
  }
  else {
    $scope.Message='Please enter data first';
    $scope.color = 'red';
  }
};

  function splitString(str){
    var count=0;
    if (str==' ' || str=='' || str==null) {
      return count;
    }
    var array = str.split(',');
    for (var i = 0; i < array.length; i++) {
      if (array[i]=='' || array[i]==' ') {
        //nothing
      }
      else {
        count++;
      }
    }
    return count;
  };
};

})();
