'use strict';

/**
 * @ngdoc overview
 * @name yomanApp
 * @description
 * # yomanApp
 *
 * Main module of the application.
 */
angular
  .module('yomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      

      .otherwise({
        redirectTo: '/'
      });
  });
