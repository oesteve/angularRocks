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
                    logo: 'images/rolling_stones_logo.jpg',
                    imgLarge: 'http://wfiles.brothersoft.com/t/the-rolling-stones-wallpaper_154083-1920x1080.jpg',
                    resume: 'Una de las mejores bandas de rock del sigo XX',
                    history: 'La historia the-rolling-stones',
                    keywords: ['key', 'words', 'bands']
                }, {
                    name: 'The Beatles',
                    slug: 'the-beatles',
                    logo: 'images/beatles_logo.gif',
                    imgLarge: 'http://www.kissfm.es/wp-content/uploads/2012/10/beatles1.jpg',
                    resume: 'Una de las mejores bandas de rock del sigo XX',
                    history: 'La historia de The Beatles',
                    keywords: ['key', 'words', 'bands']
                }, {
                    name: 'Queen',
                    slug: 'queen',
                    logo: 'images/queen_logo.png',
                    imgLarge: 'http://orig06.deviantart.net/61df/f/2008/238/0/e/queen_the_band_by_fallenzeraphine.jpg',
                    resume: 'Una de las mejores bandas de rock del sigo XX',
                    history: 'La historia de Queen',
                    keywords: ['key', 'words', 'bands']
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
