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
    'ngTouch',
    'credit-cards'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/categories/', {
        templateUrl: 'views/categories.html',
        controller: 'CategoryController',
        controllerAs: 'categories'
      })
      .when('/categories/:type', {
        templateUrl: 'views/categories.html',
        controller: 'CategoryController',
        controllerAs: 'categories'
      })
      .when('/categories/:type/:id', {
        templateUrl: 'views/categories.html',
        controller: 'CategoryController',
        controllerAs: 'categories'
      })
      .when('/shopping', {
        templateUrl: 'views/shopping.html',
        controller: 'PaymentController',
        controllerAs: 'categories'
      })
      .when('/book',{
        templateUrl: 'views/book.html',
        controller: 'BookController',
        controllerAs: 'bookcontroller'
      })
      .when('/payment',{
        templateUrl: 'views/payment.html',
        controller: 'PaymentController',
        controllerAs: 'paymentcontroller'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  var globalCart=[];
  var sizeOfCart = 0;
