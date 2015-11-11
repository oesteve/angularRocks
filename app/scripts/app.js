'use strict';

/**
 * @ngdoc overview
 * @name angularRocksApp
 * @description
 * # angularRocksApp
 *
 * Main module of the application.
 */
angular
  .module('angularRocksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
