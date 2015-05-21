'use strict';

describe('Controller: NodersCtrl', function () {

  // load the controller's module
  beforeEach(module('nodersApp'));

  var NodersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NodersCtrl = $controller('NodersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
