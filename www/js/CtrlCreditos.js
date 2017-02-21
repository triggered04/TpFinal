angular.module('app.controllers')

.controller('creditoCtrl', function($scope, $firebaseArray, $ionicPopup, $timeout,esAdminVal, $crypto,Creditos) {

  $scope.generarCredito= function(monto){

    if(esAdminVal.admin){      
      var code = Math.random().toString(36).substr(2, 9);
      var monto = monto;
      var admin = firebase.auth().currentUser.displayName;

      var credito = {
        code: code,
        monto: monto,
        admin: admin,
        usado: false
      }

      Creditos.$add(credito)
        .then(function(hola){

          var myPopup = $ionicPopup.alert({
           template: '<center>' + code + "</center>",
           title: 'CODIGO GENERADO'
          });

        });
    }
  }

})