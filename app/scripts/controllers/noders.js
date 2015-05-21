'use strict';

/**
 * @ngdoc function
 * @name nodersApp.controller:NodersCtrl
 * @description
 * # NodersCtrl
 * Controller of the nodersApp
 */
angular.module('nodersApp')
    .controller('NodersCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('http://api.noders.com/api/noders')
            .success(function(noders) {
                $scope.noders = noders;
            });
    }]);
