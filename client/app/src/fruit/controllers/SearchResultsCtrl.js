(function () {
  "use strict";

  var searchResultsCtrl = function ($scope, $filter, $window, ngTableParams, dataSrvc) {

    // get the fruit data from html5 session storage
    // and convert to JSON obj for ngTable
    var data = null;
    if ($window.sessionStorage.tableData){
      data = JSON.parse($window.sessionStorage.tableData);
      console.log("searchResultsCtrl: " + $window.sessionStorage.tableData);
    }


    if (data == null || data == undefined) {
      console.log("data error: " + data);
      return;
    }

    $scope.tableParams = new ngTableParams({
      page: 1, // show first page
      count: data.length,
      sorting: {
        id: 'asc' // initial sorting
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

    // shared service
    // Color and Location
    $scope.Data = dataSrvc;

    // watch for table data change and store off search results
    // so its persisted when we return from details page
    $scope.$watch('data', function () {
      $window.sessionStorage.data = $scope.data;
    });

  };

  searchResultsCtrl.$inject = ['$scope', '$filter', '$window', 'ngTableParams', 'dataSrvc'];

  angular.module('demoApp').controller('searchResultsCtrl', searchResultsCtrl);

}());
