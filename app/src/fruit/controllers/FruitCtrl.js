(function(){

  var fruitCtrl = function ($scope, localStorageService, fruitSearchSrvc) {

    // get the fruit data and store in localStorage
    $scope.data = fruitSearchSrvc.getSearch().success(function (data) {
      //console.log("fruits: " + JSON.stringify(data.fruits));
      localStorageService.set('tableData', data.fruits);
    });

  };

  fruitCtrl.$inject = ['$scope', 'localStorageService', 'fruitSearchSrvc'];

  angular.module('demoApp').controller('fruitCtrl', fruitCtrl);

}());