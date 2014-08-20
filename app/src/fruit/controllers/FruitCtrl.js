'use strict';

daApp.controller('FruitCtrl', function ($scope, localStorageService, FruitSearchSrvc) {

  // get the fruit data and store in localStorage
  $scope.data = FruitSearchSrvc.getSearch().success(function (data) {
    //console.log("fruits: " + JSON.stringify(data.fruits));

    localStorageService.set('tableData', data.fruits);

  });

});