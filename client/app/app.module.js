(function() {
  'use strict';

  var dependencies = [
    'ui.router',
    'app.twitter'
  ];

  angular.module('app', dependencies)
    .config(setupRoutes);

  setupRoutes.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$httpProvider',
    '$locationProvider'
  ];

  function setupRoutes($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider){

    $stateProvider
      .state('app', {
        url: "/",
        template: "<main></main>"
      });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  }
}());
