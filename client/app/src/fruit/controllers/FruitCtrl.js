(function () {
  "use strict";

  var fruitCtrl = function ($scope, $window, fruitSearchSrvc) {

    var onComplete = function(data){
      $scope.data = data;
      $window.sessionStorage.tableData = JSON.stringify(data);
      //console.log("product: " + $window.sessionStorage.tableData);
    };

    var onError = function(reason){
      $scope.error = reason;
    };

    fruitSearchSrvc.getResults()
      .then(onComplete, onError);

  };

  fruitCtrl.$inject = ['$scope', '$window', 'fruitSearchSrvc'];

  angular.module('demoApp').controller('fruitCtrl', fruitCtrl);

}());