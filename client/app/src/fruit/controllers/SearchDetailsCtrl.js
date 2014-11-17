(function () {
  "use strict";

  var searchDetailsCtrl = function ($scope, $routeParams, $location, localStorageService, fruitSearchSrvc) {

    $scope.$on('$routeChangeSuccess', function () {
      var path = $location.path();
      console.log("path changed to: " + path);
      var len = path.length;

      $scope.productId = path.slice(9, len);

      console.log("productId: " + $scope.productId);
      localStorageService.set('productId', $scope.productId);
      var tableData = localStorageService.get('tableData');


      //get details and store in localStorage
      $scope.details = fruitSearchSrvc.getDetail(tableData, $scope.productId);
      var details = $scope.details;
      console.log("found details: " + JSON.stringify(details));
      $scope.gridOptions = { data: 'details' };


    }); // end scope on

  };

  searchDetailsCtrl.$inject = ['$scope', '$routeParams', '$location','localStorageService', 'fruitSearchSrvc'];

  angular.module('demoApp').controller('searchDetailsCtrl', searchDetailsCtrl);

}());
