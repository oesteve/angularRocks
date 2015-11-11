'use strict';

/**
 * @ngdoc function
 * @name angularRocksApp.controller:BandCtrl
 * @description
 * # BandCtrl
 * Controller of the angularRocksApp
 */
angular.module('angularRocksApp')
        .controller('BandCtrl', function ($scope, $routeParams, bands) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            var band = bands.get($routeParams.bandName);

            if ($routeParams.bandName !== null) {
                $scope.band = band;
            } else {
                $scope.band = {};
            }


        });
