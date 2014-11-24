'use strict';

/**
 * @ngdoc function
 * @name cnodejs.controllers:UserCtrl
 * @description
 * # UserCtrl
 * Main Controller of the cnodejs app
 */

angular.module('cnodejs.controllers')
.controller('UserCtrl', function($scope, $rootScope, $log, $stateParams, $state, User) {
  $log.log('user ctrl');
  var loginName = $stateParams.loginname;
  User.getUserInfo(loginName).$promise.then(function(response) {
    $scope.user = response.data;
  });

  // logout action
  $scope.logout = function() {
    $log.debug('logout button action');
    User.logout();
    $rootScope.$broadcast('logout');
  };
});
