angular.module('app.controllers', [])


.factory("Batallas", function($firebaseArray) {
  var infosRef = new Firebase("https://finalionic-6052c.firebaseio.com/Batallas");
  return $firebaseArray(infosRef);
})

.factory("Usuarios", function($firebaseArray) {
  var infosRef = new Firebase("https://finalionic-6052c.firebaseio.com/Usuarios");
  return $firebaseArray(infosRef);
})

.factory("Creditos", function($firebaseArray) {
  var infosRef = new Firebase("https://finalionic-6052c.firebaseio.com/Creditos");
  return $firebaseArray(infosRef);
})
  
  
.controller('homeCtrl', ['$scope', '$stateParams','Batallas','getBatalla', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Batallas,getBatalla) {
    console.log(Batallas);
    $scope.infos =Batallas;
    $scope.nueva = getBatalla.nuevaBatalla();
    $scope.goToBatalla=function(batalla){
            getBatalla.setProperty(batalla);
    }


}])
   
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
   
.controller('batallaCtrl', ['$scope', '$stateParams','Batallas','getBatalla', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Batallas,getBatalla) {
    $scope.Batalla = getBatalla.getProperty();
    $scope.crearBatalla = function(){
      $scope.Batalla.turno="J2";
      $scope.Batalla.P1 = firebase.auth().currentUser.displayName; 
      Batallas.$add($scope.Batalla);  
      location.href="#/side-menu21/page1";    
    }
    $scope.comenzarBatalla = function(){
      $scope.Batalla.turno="J1";
      $scope.Batalla.P1 = firebase.auth().currentUser.displayName; 
      Batallas.$add($scope.Batalla);  
      location.href="#/side-menu21/page1";    
    }
    $scope.selectCasilla = function(valores,jugador){
     switch(jugador){
        case 1: $scope.Batalla.jugador1 = valores; break;
        case 2: $scope.Batalla.jugador2 = valores; break;
     }
      
    }
    

}])
   
.controller('creditosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('perfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 