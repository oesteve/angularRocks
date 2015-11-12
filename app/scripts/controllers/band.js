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

            var jumboHeight = $('.jumbotron').outerHeight();
            function parallax() {
                var scrolled = $(window).scrollTop();
                $('.bg').css('height', (jumboHeight - scrolled) + 'px');
            }

            $(window).scroll(function (e) {
                parallax();
            });

            var band = bands.get($routeParams.bandName);

            if ($routeParams.bandName !== null) {
                $scope.band = band;

                // Video
                $scope.theBestVideo = band.youtube;

                // Metadata
                $rootScope.title = band.name;
                $rootScope.description = band.history;
                $rootScope.keywords = band.keywords;
            }
        });
