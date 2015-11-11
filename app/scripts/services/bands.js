'use strict';

/**
 * @ngdoc service
 * @name angularRocksApp.bands
 * @description
 * # bands
 * Factory in the angularRocksApp.
 */
angular.module('angularRocksApp')
        .factory('bands', function () {

            var bands = [{
                    name: 'The Rolling Stones',
                    slug: 'the-rolling-stones',
                    history: 'La historia the-rolling-stones'
                }, {
                    name: 'The Beatles',
                    slug: 'the-beatles',
                    history: 'La historia de The Beatles'
                }, {
                    name: 'Queen',
                    slug: 'queen',
                    history: 'La historia de Queen'
                }];


            return {
                query: function () {
                    return bands;
                },
                get: function (bandName) {
                    for (var i = 0; i < bands.length; i++) {
                        if (bands[i].slug === bandName) {
                            return bands[i];
                        }
                    }

                    return null;

                }
            };
        });
