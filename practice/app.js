(function(){
  angular.module('customFilterApp',[])
  .controller('customFilterController',customFilterController)
  .filter('truth',CustomFilterTruth);
customFilterController.$inject('$scope','truthFilter');

  function customFilterController($scope,truthFilter){
$scope.gameName = "DMC5";
$scope.realGame = "Dark Souls";
// $scope.getRealGame = truthFilter("Dark Souls 5");
  };
function CustomFilterTruth(){
  return function(input, partNo){
    if (partNo == 1) {
      input = input.replace('Dark Souls','BloodBorne');
    }
    if (partNo == 2) {
        input = input.replace('Dark Souls','FireWatch');
    }
    return input;
  };
};

})();
