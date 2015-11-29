(function () {
  "use strict";

  angular.module('demoApp',
    [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ui.router',
      'ngSanitize',
      'ngTable',
      'ui.grid',
      'ngTouch'
    ])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider
        .otherwise('/');

      $locationProvider.html5Mode(true);
    });

}());
