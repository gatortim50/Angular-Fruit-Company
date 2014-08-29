'use strict';

var daApp = angular.module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTable',
    'ngTouch',
    'LocalStorageModule'
  ]);

daApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/fruit/views/Fruit.html',
      controller: 'FruitCtrl'
    })
    .when('/details/:id', {
      templateUrl: 'src/fruit/views/SearchDetails.html',
      controller: 'SearchDetailsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});