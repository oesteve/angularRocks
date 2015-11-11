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
        .run(function ($rootScope, $route) {
            $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
                $rootScope.route = $route.current;
                $rootScope.title = $route.current.data.title;
                $rootScope.keywords = $route.current.data.keywords;
            });
        })
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/home.html',
                        controller: 'HomeCtrl',
                        data: {
                            tab: 'home',
                            title: 'Angular Rocks',
                            description: 'Esto es la descripción por defecto',
                            keywords: ['angular', 'rocks', 'default']
                        }
                    })
                    .when('/foo', {
                        templateUrl: 'views/underConstruction.html',
                        data: {
                            tab: 'foo',
                            title: 'Angular Rocks',
                            description: 'Esto es la descripción por defecto',
                            keywords: ['angular', 'rocks', 'default']
                        }
                    })
                    .when('/bar', {
                        templateUrl: 'views/underConstruction.html',
                        data: {
                            tab: 'bar',
                            title: 'Angular Rocks',
                            description: 'Esto es la descripción por defecto',
                            keywords: ['angular', 'rocks', 'default']
                        }
                    })
                    .when('/bands', {
                        templateUrl: 'views/bands.html',
                        controller: 'BandsCtrl',
                        data: {
                            tab: 'bands',
                            title: 'Angular Rocks',
                            description: 'Esto es la descripción por defecto',
                            keywords: ['angular', 'rocks', 'default']

                        }
                    })
                    .when('/:bandName', {
                        templateUrl: 'views/band.html',
                        controller: 'BandCtrl',
                        data: {
                            tab: 'bands',
                            title: 'Angular Rocks',
                            description: 'Esto es la descripción por defecto',
                            keywords: ['angular', 'rocks', 'default']
                        }
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        });
