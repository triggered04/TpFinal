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
    $scope.infos =Batallas;
    $scope.userid = firebase.auth().currentUser.uid;
    $scope.goToBatalla=function(batalla){
            if(batalla == null){
              getBatalla.nuevaBatalla()
            }else{
            getBatalla.setProperty(batalla);
            }
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
   
.controller('menuCtrl', ['$scope', '$stateParams','$ionicPopup','$timeout','esAdminVal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicPopup,$timeout,esAdminVal) {

    $scope.logout = function() {
    $(".menu-item-admin").hide();
    esAdminVal.admin=false;
    var myPopup = $ionicPopup.show({
           template: '<center> Sesión Cerrada! </center>',
           title: 'Logout'
        });
    $timeout(function(){
      myPopup.close();
    }, 1000);
    //Cerrar sesion DE GITHUB
    firebase.auth().signOut();
    location.href="#/login";
  };


}])
   
.controller('creditosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('perfilCtrl', ['$scope', '$stateParams','Batallas','getBatalla', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Batallas,getBatalla) {
   $scope.infos =Batallas;
   $scope.userid = firebase.auth().currentUser.uid;
    $scope.goToBatalla=function(batalla){
            getBatalla.setProperty(batalla);
    }

}])
 