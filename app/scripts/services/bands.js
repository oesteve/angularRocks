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
                    summary: 'Una de las mejores bandas de rock del sigo XX',
                    history: 'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 1962 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en 1969, falleciendo al poco tiempo, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.',
                    wikipedia: 'https://es.wikipedia.org/wiki/The_Rolling_Stones',
                    keywords: ['reino unido', 'rock', 'banda',  'Brian Jones', 'Mick Jagger', 'Keith Richards', 'Bill Wyman', 'Ian Stewart', 'Charlie Watts']
                }, {
                    name: 'The Beatles',
                    slug: 'the-beatles',
                    logo: 'images/beatles_logo.gif',
                    imgLarge: 'http://www.kissfm.es/wp-content/uploads/2012/10/beatles1.jpg',
                    summary: 'Una de las mejores bandas de rock del sigo XX',
                    history: 'The Beatles fue una banda de rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular.1 2 3 4 5 6 Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años cincuenta, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960.',
                    wikipedia: 'https://es.wikipedia.org/wiki/The_Beatles',
                    keywords: ['Beatles', 'rock', 'ingles', '60s', 'Liverpool']
                }, {
                    name: 'Queen',
                    slug: 'queen',
                    logo: 'images/queen_logo.png',
                    imgLarge: 'http://orig06.deviantart.net/61df/f/2008/238/0/e/queen_the_band_by_fallenzeraphine.jpg',
                    summary: 'Una de las mejores bandas de rock del sigo XX',
                    history: 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Freddie Mercury, que murió en 1991 y John Deacon, que se retiró en 1997), los integrantes restantes, Brian May y Roger Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa.',
                    keywords: ['Queen', 'británica', 'banda', 'Freddie Mercury' ]
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
