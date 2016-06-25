(function() {
  'use strict';

  angular.module('app')
    .directive('worldmap', worldMapDirective);

  function worldMapDirective () {
    return {
      templateUrl: '/app/worldmap/worldmap.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  controller.$inject = ['$http', '$scope'];

  function controller($http, $scope) {
      var vm = this;
    }
}());
