'use strict';

describe('Controller: BandsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularRocksApp'));

  var BandsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BandsCtrl = $controller('BandsCtrl', {
      $scope: scope
    });
  }));

  it('Número inesperado de bandas en el servicio', function () {
    expect(scope.bands.length).toBe(3);
  });
});
