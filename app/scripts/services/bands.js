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
    // Service logic
    // ...

    var meaningOfLife = 42;
    
    var bands = [];
    
    bands.push({
        name: 'The Rolling Stones',
        slug: 'the-rolling-stones',
        history: 'La historia the-rolling-stones'
    });

    bands.push({
        name: 'The Beatles',
        slug: 'the-beatles',
        history: 'La historia de The Beatles'
    });
    bands.push({
        name: 'Queen',
        slug: 'queen',
        history: 'La historia de Queen'
    });

    // Public API here
    return {
      query: function () {
        return bands;
      }
    };
  });
