(function () {
  "use strict";

  var fruitSearchSrvc = function ($http) {

    return {

      getResults: function () {

        // use the node server
        var url = 'http://127.0.0.1:4000/products';

        // or use the json files in datastore/fruit.json
        // url = 'datastore/fruit.json';
        console.log("--- Search url: ", url);

        return $http.get(url)
          .then(function(response){
            return response.data;
          });

      },

      getDetail: function (details, id) {

        var details = JSON.parse(details);

        var len = details.length;
        var myArray = [];

        for (var i = 0; i < len; i += 1) {
          var result = details[i];
          if (result.id === id) {
            myArray.push(result);
            return myArray;
          }
        }

      }

    };

  };

  fruitSearchSrvc.$inject = ['$http'];

  angular.module('demoApp').factory('fruitSearchSrvc', fruitSearchSrvc);


}());
