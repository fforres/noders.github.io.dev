'use strict';

/**
 * @ngdoc overview
 * @name nodersApp
 * @description
 * # nodersApp
 *
 * Main module of the application.
 */
angular
  .module('nodersApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'uiGmapgoogle-maps'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/slack', {
        templateUrl: 'views/slack.html',
        controller: 'SlackCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/noders', {
        templateUrl: 'views/noders.html',
        controller: 'NodersCtrl'
      })
      .when('/noders', {
        templateUrl: 'views/noders.html',
        controller: 'NodersCtrl'
      })
      .when('/partners', {
        templateUrl: 'views/partners.html',
        controller: 'PartnersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name nodersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodersApp
 */
angular.module('nodersApp')
    .controller('MainCtrl', ['$scope', '$http', 'uiGmapGoogleMapApi', function($scope, $http, uiGmapGoogleMapApi) {
        $scope.awesomeThings = [];
        $scope.map = {};
        $scope.map.center = {
            latitude: -16.0,
            longitude: -70.0
        };

        $scope.map.zoom = 3;
        $http.get('http://api.noders.com/api/partners')
            .success(function(partners) {
                $scope.partners = partners;
            });

        $http.get('http://api.noders.com/api/noders')
            .success(function(noders) {
                $scope.noders = noders;
            });
        $http.get('http://api.noders.com/api/eventos')
            .success(function(eventos) {
                $scope.eventos = eventos;
            });

        uiGmapGoogleMapApi.then(function(maps) {

            $http.get('http://api.noders.com/api/Hosts')
                .success(function(hosts) {

                    var comunidades = [];
                    _.each(hosts, function(noder, i) {
                        var ob = {};
                        ob.id = noder.id;
                        ob.latitude = noder.geo.lat;
                        ob.longitude = noder.geo.lng;
                        ob.title = noder.name;
                        comunidades.push(ob);
                    });
                    $scope.map.comunidades = comunidades;
                });

        });

        $scope.noderClicked = function(marker) {
            $scope.selectedMarker = null;
            $scope.selectedMarker = marker;
        };





        $scope.map.options = {};
        $scope.map.options.styless = [{
            'featureType': 'water',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#d3d3d3'
            }]
        }, {
            'featureType': 'transit',
            'stylers': [{
                'color': '#808080'
            }, {
                'visibility': 'off'
            }]
        }, {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#b3b3b3'
            }]
        }, {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#ffffff'
            }]
        }, {
            'featureType': 'road.local',
            'elementType': 'geometry.fill',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#ffffff'
            }, {
                'weight': 1.8
            }]
        }, {
            'featureType': 'road.local',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#d7d7d7'
            }]
        }, {
            'featureType': 'poi',
            'elementType': 'geometry.fill',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#ebebeb'
            }]
        }, {
            'featureType': 'administrative',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#a7a7a7'
            }]
        }, {
            'featureType': 'road.arterial',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#ffffff'
            }]
        }, {
            'featureType': 'road.arterial',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#ffffff'
            }]
        }, {
            'featureType': 'landscape',
            'elementType': 'geometry.fill',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#efefef'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#696969'
            }]
        }, {
            'featureType': 'administrative',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#737373'
            }]
        }, {
            'featureType': 'poi',
            'elementType': 'labels.icon',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'poi',
            'elementType': 'labels',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'road.arterial',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#d6d6d6'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels.icon',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {}, {
            'featureType': 'poi',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#dadada'
            }]
        }];


    }]);

'use strict';

/**
 * @ngdoc function
 * @name nodersApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nodersApp
 */
angular.module('nodersApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name nodersApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the nodersApp
 */
angular.module('nodersApp')
  .controller('HeaderCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name nodersApp.controller:SlackCtrl
 * @description
 * # SlackCtrl
 * Controller of the nodersApp
 */
angular.module('nodersApp')
  .controller('SlackCtrl', ["$scope", function ($scope) {
    $scope.suscribir = function(){
    	$scope.email='';
    };
  }]);
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
