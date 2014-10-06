(function () {
  "use strict";

  var fruitCtrl = function ($scope, localStorageService, fruitSearchSrvc) {

    var onComplete = function(data){
      $scope.data = data;
      //console.log("fruits: " + JSON.stringify($scope.data));
      localStorageService.set('tableData', $scope.data);
    };

    var onError = function(reason){
      $scope.error = reason;
    };

    fruitSearchSrvc.getResults()
      .then(onComplete, onError);

  };

  fruitCtrl.$inject = ['$scope', 'localStorageService', 'fruitSearchSrvc'];

  angular.module('demoApp').controller('fruitCtrl', fruitCtrl);

}());