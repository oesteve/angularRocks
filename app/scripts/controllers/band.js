'use strict';

/**
 * @ngdoc function
 * @name angularRocksApp.controller:BandCtrl
 * @description
 * # BandCtrl
 * Controller of the angularRocksApp
 */
angular.module('angularRocksApp')
        .controller('BandCtrl', function ($scope, $rootScope, $routeParams, bands) {

            $scope.band = {};

            var band = bands.get($routeParams.bandName);

            if ($routeParams.bandName !== null) {
                $scope.band = band;

                // Metadata
                $rootScope.title = band.name;
                $rootScope.description = band.history;
                $rootScope.keywords = band.keywords;
            }
        });
