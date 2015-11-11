'use strict';

/**
 * @ngdoc function
 * @name angularRocksApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the angularRocksApp
 */
angular.module('angularRocksApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
