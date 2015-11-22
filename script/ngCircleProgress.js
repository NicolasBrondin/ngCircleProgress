angular.module('app', [])
.controller('Controller', ['$scope', function($scope) {
    $scope.value = 50;
    $scope.val = function()
    {
        $scope.value++;
    };
}])
.directive('ngCircleProgress', function() {
    return {
        restrict: 'E',
        templateUrl: 'template/template.html',
        transclude: true,
        
        link: function(scope, element, attributes){
            attributes.$observe('value-min', function(value){
                scope.valueMin = parseInt(value);
            });
            
            attributes.$observe('value-max', function(value){
                scope.valueMax = parseInt(value);
            });
            
            attributes.$observe('value', function(value){
                //value = parseInt(value);
                //scope.value = ((value - scope.valueMin)/(scope.valueMax-scope.valueMin))*100;  
                console.log(scope.value);
            });
            
            

        }
    };
});
