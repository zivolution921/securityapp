angular.module('myApp')
.controller('ContactController', ['$scope', '$http', function ($scope, $http) {
         
  $scope.contact = {};

  $scope.send = function(){
    $http.post('/pages/contact', {
      contact: $scope.contact
    }).then(function(result){
      alert(result.data.status);
    });
  };

}]);