'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('RegistroCtrl', ['$scope', 'UsuarioResource', function ($scope, UsuarioResource) {

    $scope.init = function(){
      $scope.usuario = {
        nombre: null,
        apellido: null,
        edad: null
      }
    };

    $scope.init();


    $scope.guardar = function(){
      UsuarioResource.create($scope.usuario);
    }



  }]);
