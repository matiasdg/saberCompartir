'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('InicioCtrl', ['$scope','$q', '$scService', function ($scope, $q, $scService) {

    $scope.hide = false;
    $scope.paginado = "page=0&size=3";

    $scService.getEstadosDeClase().then(function(response){

      $scope.estadosDeClase = response.data;

      var promises = [
        $scService.getSolicitudes($scope.paginado),
        $scService.getclasesPorEstadoOrdenadas($scope.findObject($scope.estadosDeClase, 'PROGRAMADA').id, "date,desc", $scope.paginado),
        $scService.getclasesPorEstadoOrdenadas($scope.findObject($scope.estadosDeClase, 'EN_CURSO').id, "date,desc",  $scope.paginado),
        $scService.getUsuariosRankingOrdenados("Score", $scope.paginado)
      ];

      $q.all(promises).then(function(response) {
        $scope.solicitudes = response[0].data.content;
        $scope.clasesProgramadas = response[1].data.content;
        $scope.clasesEnCurso = response[2].data.content;
        $scope.usuariosRanking = response[3].data.content;

      });
    });

    $scope.findObject = function(list, name){
      return _.find(list, function(obj){
        return obj.name == name;
      });
    };

    $scope.sumarse = function(solicitud){
      solicitud.totalUsers = solicitud.totalUsers + 1;
      $scope.hide = true;
      new PNotify({
        title: "Genial!",
        text: "Te acabas de sumar a la solicitud de " + solicitud.subject,
        type: 'success'
      })
    }

  }]);
