(function () {

  var fruitSearchSrvc = function ($http) {

    return {

      getSearch: function () {

        var url = 'datastore/fruit.json';
        console.log("--- Search url: " + url);
        return $http.get(url);

      },

      getDetails: function () {

        var url = 'datastore/details.json';
        return $http.get(url);

      }

    };

  };

  angular.module('demoApp').factory('fruitSearchSrvc', fruitSearchSrvc);


}());