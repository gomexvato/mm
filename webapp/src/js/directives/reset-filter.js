angular.module('inboxDirectives').directive('mmResetFilter', function() {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'templates/directives/filters/reset.html',
    controller: function($ngRedux, $scope) {
      'ngInject';

      var ctrl = this;
      var mapStateToTarget = function(state) {
        return {
          selectMode: state.selectMode
        };
      };
      var unsubscribe = $ngRedux.connect(mapStateToTarget)(ctrl);

      $scope.$on('$destroy', unsubscribe);
    },
    controllerAs: '$ctrl'
  };
});
