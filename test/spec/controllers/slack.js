'use strict';

describe('Controller: SlackCtrl', function () {

  // load the controller's module
  beforeEach(module('nodersApp'));

  var SlackCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlackCtrl = $controller('SlackCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
