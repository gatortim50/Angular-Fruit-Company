(function(){

  var searchPanelCtrl =  function ( $scope, dataSrvc ) {

  // shared service
  // communicate between sibling controllers
  $scope.Data = dataSrvc;

};

  angular.module('demoApp').controller('searchPanelCtrl', searchPanelCtrl);

}());
