angular.module('myApp')
    .controller('WatchListController', function ($scope, $http) {
        $http.get('/properties').then(function(result) {
          $scope.residentialProperties = result.data.filter(function(item){
            return item.category == 'Residential';
          });

          $scope.personalProperties = result.data.filter(function(item){
            return item.category == 'Personal';
          });

          $scope.businessProperties = result.data.filter(function(item){
            return item.category == 'Business';
          });
        });
    });
