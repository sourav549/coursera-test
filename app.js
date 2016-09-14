(function(){

angular.module("myFirstApp",[])

.controller("myFirstController", function($scope){
$scope.name="Sourav";
$scope.sayHello= function(){
  return "Hello Coursera!"
};
});

})();
