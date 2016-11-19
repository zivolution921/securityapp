angular.module('myApp')
    .controller('NewPropertyController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
        $scope.property = {
          
        };
        $scope.submit = function() {
          $http.post('/properties', { property: $scope.property }).then(function(data) {
            $state.go('watchlist');
          })
        }
    }]);