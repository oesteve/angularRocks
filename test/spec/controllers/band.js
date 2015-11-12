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
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.bands.length).toBe(3);
  });
});
