angular.module('app.controllers')

.controller('creditoCtrl', function($scope, $firebaseArray, $ionicPopup, $timeout,esAdminVal, $crypto) {
  $scope.AdminVal = false;
  $scope.generarCredito= function(){

    if(!esAdminVal.admin){
      $scope.creditoGenerado;
      var date = new Date().toString();
      console.info(date);
      var encrypted = $crypto.encrypt(date);
      console.info(encrypted);
    }

  }

})