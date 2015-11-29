(function () {
  "use strict";

  angular.module('demoApp',
    [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTable',
      'ui.grid',
      'ngTouch'
    ])

    .config(function ($routeProvider) {
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
