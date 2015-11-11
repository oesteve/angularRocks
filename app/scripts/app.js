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
            });
        })
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/home.html',
                        controller: 'HomeCtrl',
                        data: {
                            tab: 'home'
                        }
                    })
                    .when('/foo', {
                        templateUrl: 'views/underConstruction.html',
                        data: {
                            tab: 'foo'
                        }
                    })
                    .when('/bar', {
                        templateUrl: 'views/underConstruction.html',
                        data: {
                            tab: 'bar'
                        }
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        });
