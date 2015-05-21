'use strict';

/**
 * @ngdoc function
 * @name nodersApp.controller:PartnersCtrl
 * @description
 * # PartnersCtrl
 * Controller of the nodersApp
 */
angular.module('nodersApp')
  .controller('PartnersCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('http://api.noders.com/api/partners')
            .success(function(partners) {
                $scope.partners = partners;
            });
    }]);
