'use strict';

/**
 * @ngdoc overview
 * @name hokApp
 * @description
 * # hokApp
 *
 * Main module of the application.
 */
var hokApp = angular.module('hokApp', [
        'ngRoute'
    ]);

hokApp.config(function ($routeProvider) {
    $routeProvider
        .otherwise({
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        });
});
