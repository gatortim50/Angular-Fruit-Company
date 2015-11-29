(function () {
  "use strict";

  var searchDetailsCtrl = function ($scope, $routeParams, $location, $window, fruitSearchSrvc) {

    $scope.$on('$routeChangeSuccess', function () {
      console.log("path changed to: " + $location.path());

      //get details and store in $window session
      $scope.details = fruitSearchSrvc.getDetail($window.sessionStorage.tableData, $routeParams.productId);

    }); // end scope on

  };

  searchDetailsCtrl.$inject = ['$scope', '$routeParams', '$location','$window', 'fruitSearchSrvc'];

  angular.module('demoApp').controller('searchDetailsCtrl', searchDetailsCtrl);

}());
