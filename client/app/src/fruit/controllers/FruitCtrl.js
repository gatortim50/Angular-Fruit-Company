(function () {
  "use strict";

  var fruitCtrl = function ($scope, localStorageService, fruitSearchSrvc) {

    function clearAll() {
      console.log("no search results clear localstorage");
      return localStorageService.clearAll();
    }

    var onComplete = function(data){
      $scope.data = data;
      //console.log("fruits: " + JSON.stringify($scope.data));
      localStorageService.set('tableData', $scope.data);
    };

    var onError = function(reason){
      clearAll();
      $scope.error = reason;
    };

    fruitSearchSrvc.getResults()
      .then(onComplete, onError);

  };

  fruitCtrl.$inject = ['$scope', 'localStorageService', 'fruitSearchSrvc'];

  angular.module('demoApp').controller('fruitCtrl', fruitCtrl);

}());