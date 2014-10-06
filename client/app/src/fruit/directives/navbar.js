(function (){
  "use strict";

  var navbar = function() {
    return {
      restrict: 'E',
      templateUrl: 'src/fruit/views/navbarHeader.html',
      controller: 'fruitCtrl'
    };

  };

  angular.module('demoApp').directive('navbar', navbar);

}());