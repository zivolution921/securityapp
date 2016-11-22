angular.module('myApp')
    .controller('WatchListController', ['$scope', '$http', function ($scope, $http) {
        $http.get('/properties').then(function(result) {
          // $scope.residentialProperties = result.data.filter(function(item){
          //   return item.category == 'Residential';
          // });
        console.log(result.data);
          $scope.personalProperties = result.data.filter(function(item){
            // console.log(item)

            // $http.get('/properties/' + item.id).then(function(item_result) {
            //   $scope.getUserId = item_result.data.id;
            // });
            return item.category == 'Personal';
          });

          $scope.businessProperties = result.data.filter(function(item){
            return item.category == 'Business';
          });
        });
        //$http.get('/properties/' + $scopeid)
    }]);
