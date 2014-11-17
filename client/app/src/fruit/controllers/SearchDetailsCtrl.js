(function () {
  "use strict";

  var searchDetailsCtrl = function ($scope, $routeParams, $location, localStorageService, fruitSearchSrvc) {

    $scope.$on('$routeChangeSuccess', function () {
      console.log("path changed to: " + $location.path());

      console.log("productId: " + $routeParams.productId);
      $scope.productId = $routeParams.productId;

      var tableData = localStorageService.get('tableData');

      //get details and store in localStorage
      $scope.details = fruitSearchSrvc.getDetail(tableData, $routeParams.productId);
      console.log("found details: " + JSON.stringify($scope.details));

    }); // end scope on

  };

  searchDetailsCtrl.$inject = ['$scope', '$routeParams', '$location','localStorageService', 'fruitSearchSrvc'];

  angular.module('demoApp').controller('searchDetailsCtrl', searchDetailsCtrl);

}());
