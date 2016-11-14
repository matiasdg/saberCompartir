'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', ['$scope', 'UsuarioResource', function ($scope, UsuarioResource) {

    $scope.usuario = {};
    $scope.login = function(){
        UsuarioResource.login($scope.usuario, function(response){
          console.log(response)
        }, function(error){
          console.log(error)
        });
    }

  }]);
