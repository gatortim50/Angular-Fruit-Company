(function () {
'use strict';

angular.module('demoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'src/fruit/views/Fruit.html',
        controller: 'fruitCtrl'
      })
      .state('/details/:productId', {
        url: '/details/:productId',
        templateUrl: 'src/fruit/views/SearchDetails.html',
        controller: 'searchDetailsCtrl'
      });
  });

}());

