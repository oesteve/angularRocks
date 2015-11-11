'use strict';

/**
 * @ngdoc function
 * @name angularRocksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularRocksApp
 */
angular.module('angularRocksApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
