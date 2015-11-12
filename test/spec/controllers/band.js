'use strict';

describe('Controller: BandCtrl', function () {

  // load the controller's module
  beforeEach(module('angularRocksApp'));

  var BandCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BandCtrl = $controller('BandCtrl', {
      $scope: scope,
      $routeParams: {bandName: 'queen'}
    });
  }));

  it('Se esperaba que el slug de la banda fuese queen', function () {
    expect(scope.band.slug).toBe('queen');
  });
});
