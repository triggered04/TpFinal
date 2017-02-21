angular.module('app.controllers')

.controller('creditoCtrl', function($scope, $firebaseArray, $ionicPopup, $timeout,esAdminVal, $crypto) {
  $scope.AdminVal = false;
  $scope.generarCredito= function(){

    if(!esAdminVal.admin){
      $scope.creditoGenerado;
      var date = new Date();
      console.info(date);
      var encrypted = $crypto.encrypt();
      console.info(encrypted);
    }

  }

})