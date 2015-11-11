'use strict';

/**
 * @ngdoc function
 * @name angularRocksApp.controller:BandsCtrl
 * @description
 * # BandsCtrl
 * Controller of the angularRocksApp
 */
angular.module('angularRocksApp')
  .controller('BandsCtrl', function ($scope, bands) {

    $scope.bands = bands.query();
    
    
    
  });
