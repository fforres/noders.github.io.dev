'use strict';

/**
 * @ngdoc function
 * @name nodersApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nodersApp
 */
angular.module('nodersApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
