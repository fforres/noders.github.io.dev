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
  .config(function ($routeProvider) {
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
  });
