angular.module('myApp')
    .controller('UserPropertyController', ['$scope', '$http', '$state', '$stateParams', 'UserPropertyService', function ($scope, $http, $state, $stateParams, UserPropertyService) {
        console.log("call me please baby");
        UserPropertyService.get($stateParams.property_id).then(function(result) {
          console.log(result.data);
          $scope.userProperties = result.data;
        });
    }]);