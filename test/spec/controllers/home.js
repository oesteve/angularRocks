'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularRocksApp'));

  var HomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('Número inesperado de bandas en el servicio', function () {
    expect(scope.bands.length).toBe(3);
  });
});
