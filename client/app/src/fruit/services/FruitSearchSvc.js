(function () {
  "use strict";

  var fruitSearchSrvc = function ($http) {

    return {

      getResults: function () {
        
        var url = 'http://127.0.0.1:3000/product';
        console.log("--- Search url: " + url);

        return $http.get(url)
          .then(function(response){
            return response.data;
          });

      },

      getDetails: function () {

        var url = 'datastore/details.json';
        return $http.get(url);

      }

    };

  };

  fruitSearchSrvc.$inject = ['$http'];

  angular.module('demoApp').factory('fruitSearchSrvc', fruitSearchSrvc);


}());