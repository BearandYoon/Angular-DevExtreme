'use strict';

describe('Controller: SelcountryCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var SelcountryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelcountryCtrl = $controller('SelcountryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SelcountryCtrl.awesomeThings.length).toBe(3);
  });
});
