(function () {
  "use strict";

  var searchDetailsCtrl = function ($scope, $stateParams, $location, $window, fruitSearchSrvc) {

    $scope.$on('$stateChangeSuccess', function () {
      console.log("path changed to: " + $location.path());

      //get details and store in $window session
      $scope.details = fruitSearchSrvc.getDetail($window.sessionStorage.tableData, $stateParams.productId);

    }); // end scope on

  };

  searchDetailsCtrl.$inject = ['$scope', '$stateParams', '$location','$window', 'fruitSearchSrvc'];

  angular.module('demoApp').controller('searchDetailsCtrl', searchDetailsCtrl);

}());
