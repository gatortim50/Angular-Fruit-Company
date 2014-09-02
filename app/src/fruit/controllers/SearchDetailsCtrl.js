(function () {

  var searchDetailsCtrl = function ($scope, $filter, $routeParams, $location, localStorageService, ngTableParams, fruitSearchSrvc) {

    $scope.$on('$routeChangeSuccess', function () {
      var path = $location.path();
      console.log("path changed to: " + path);
      var len = path.length;

      $scope.productId = path.slice(9, len);

      console.log("productId: " + $scope.productId);
      localStorageService.set('productId', $scope.productId);


      // get details and store in localStorage
      $scope.data = fruitSearchSrvc.getDetails().success(function (data) {
        //console.log("details: " + JSON.stringify(data.details));

        localStorageService.set('details', data.details);

        data = data.details;


        $scope.tableParams = new ngTableParams({
          page: 1, // show first page
          count: data.length,
          sorting: {
            grower: 'asc' // initial sorting
          }
        }, {
          total: data.length, // length of data
          getData: function ($defer, params) {
            // use build-in angular filter
            var filteredData = params.filter() ?
              $filter('filter')(data, params.filter()) :
              data;
            var orderedData = params.sorting() ?
              $filter('orderBy')(filteredData, params.orderBy()) :
              data;
            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
          }
        });

      });

    }); // end scope on


  };


  angular.module('demoApp').controller('searchDetailsCtrl', searchDetailsCtrl);

}());