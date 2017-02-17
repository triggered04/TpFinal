angular.module('app.controllers', [])


.factory("Batallas", function($firebaseArray) {
  var infosRef = new Firebase("https://finalionic-6052c.firebaseio.com/Batallas");
  return $firebaseArray(infosRef);
})
  
.controller('homeCtrl', ['$scope', '$stateParams','Batallas','getBatalla', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Batallas,getBatalla) {
    console.log(Batallas);
    $scope.info =Batallas;
    $scope.nueva = {
                        "P1":firebase.auth().currentUser.displayName,
                        "P2":"",
                        "jugador1":[0,0,0,0],
                        "jugador2":[0,0,0,0],
                        "acertoJ1":false,
                        "acertoJ2":false,
                        "monto": ""
                      };
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
    $scope.botonPrueba = function(){
        Batallas.$add($scope.Batalla);  
         location.href="#/side-menu21/page1";    
    }
    $scope.selectCasilla = function(valores){
     
      $scope.Batalla.jugador1 = valores;
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
 