angular.module("myApp")
  .factory('UserPropertyService', ['$http', function UserPropertyService($http) {
    var services = {};
    var endpoint = "/properties";

      services.get = function(property_id) {
        return $http.get(endpoint + "/" + property_id);
      }
      return services;
    }
]); 

