(function () {
  "use strict";

  var daApp = angular.module('demoApp',
    [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTable',
      'ui.grid',
      'ngTouch',
      'LocalStorageModule'
    ]);

  daApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/fruit/views/Fruit.html',
        controller: 'fruitCtrl'
      })
      .when('/details/:productId', {
        templateUrl: 'src/fruit/views/SearchDetails.html',
        controller: 'searchDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}());
