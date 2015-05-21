'use strict';

/**
 * @ngdoc function
 * @name nodersApp.controller:SlackCtrl
 * @description
 * # SlackCtrl
 * Controller of the nodersApp
 */
angular.module('nodersApp')
  .controller('SlackCtrl', function ($scope) {
    $scope.suscribir = function(){
    	$scope.email='';
    };
  });