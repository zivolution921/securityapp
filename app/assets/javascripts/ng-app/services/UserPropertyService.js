function UserPropertyService($http) {
  var services = {};
  var endpoint = "/properties";

    services.get = function(property_id) {
      return $http.get(endpoint + "/" + property_id);
    }

    return services;
  }

angular.module("myApp")
  .factory('UserPropertyService', UserPropertyService) 