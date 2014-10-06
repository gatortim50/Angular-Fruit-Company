(function () {
  "use strict";

  var searchPanelCtrl = function ($scope, dataSrvc) {

    // shared service
    // communicate between sibling controllers
    $scope.Data = dataSrvc;

  };

  searchPanelCtrl.$inject = ['$scope', 'dataSrvc'];

  angular.module('demoApp').controller('searchPanelCtrl', searchPanelCtrl);

}());
