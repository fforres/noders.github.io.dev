'use strict';

/**
 * @ngdoc function
 * @name nodersApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the nodersApp
 */
angular.module('nodersApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
