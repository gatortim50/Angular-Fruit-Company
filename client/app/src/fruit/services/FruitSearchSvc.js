(function () {
  "use strict";

  var fruitSearchSrvc = function ($http) {

    return {

      getResults: function () {

        var url = 'http://127.0.0.1:3000/products';
        console.log("--- Search url: " + url);

        return $http.get(url)
          .then(function(response){
            return response.data;
          });

      },

      getDetails: function () {

        var url = 'datastore/details.json';
        return $http.get(url);

      },

      getDetail: function (details, id) {

        var len = details.length;

        for (var i = 0; i < len; i += 1) {
          var result = details[i];
          if (result.id === id) {
            return result;
          }
        }

      }

    };

  };

  fruitSearchSrvc.$inject = ['$http'];

  angular.module('demoApp').factory('fruitSearchSrvc', fruitSearchSrvc);


}());
