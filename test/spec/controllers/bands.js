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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.bands.length).toBe(3);
  });
});
