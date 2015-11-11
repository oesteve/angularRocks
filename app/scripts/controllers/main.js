'use strict';

/**
 * @ngdoc function
 * @name angularRocksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularRocksApp
 */
angular.module('angularRocksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
