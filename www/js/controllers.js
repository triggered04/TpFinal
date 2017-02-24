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
    $scope.nueva = getBatalla.nuevaBatalla();
    $scope.userid = firebase.auth().currentUser.uid;
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
   
   
.controller('batallaCtrl', ['$scope', '$stateParams','$ionicPopup','$timeout','Batallas','getBatalla', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicPopup,$timeout,Batallas,getBatalla) {
    $scope.Batalla = getBatalla.getProperty();
    var misCreditos,keyCred,misCreditos2,keyCred2;
    var refUser = new Firebase("https://finalionic-6052c.firebaseio.com/Usuarios/");
    var queryUser = refUser.orderByChild("uid").equalTo(firebase.auth().currentUser.uid);
    queryUser.on('value', function(snap){
      var objUser = snap.val();
      keyCred = Object.keys(objUser);
      misCreditos = parseInt(objUser[keyCred].creditos);
    });  
    $scope.userid = firebase.auth().currentUser.uid;
    console.log($scope.Batalla.$id);
    $scope.eligeJugador= [0,0,0,0];
    $scope.crearBatalla = function(){
        if(misCreditos>=$scope.Batalla.monto){
          $scope.Batalla.turno="J2";
          $scope.Batalla.P1 = firebase.auth().currentUser.displayName+"-"+firebase.auth().currentUser.uid; 
          Batallas.$add($scope.Batalla);  
          var ref = new Firebase("https://finalionic-6052c.firebaseio.com/Usuarios/" + keyCred);
          ref.update({
            creditos: misCreditos-$scope.Batalla.monto        
          });
          location.href="#/side-menu21/page1";  
        }
        else{
           var myPopup = $ionicPopup.show({
                  template: 'Creditos Insuficientes',
                  title: 'Nop'
            });
            $timeout(function(){
           myPopup.close();
          }, 2000);
        }
       
      
    }
    $scope.comenzarBatalla = function(){
      if(misCreditos>=$scope.Batalla.monto){
        var ref = new Firebase('https://finalionic-6052c.firebaseio.com/Batallas/'+$scope.Batalla.$id);
        ref.update({
            "turno":"J1",
            "P2":firebase.auth().currentUser.displayName+"-"+firebase.auth().currentUser.uid,
            "jugador2":$scope.Batalla.jugador2
        });
        var ref = new Firebase("https://finalionic-6052c.firebaseio.com/Usuarios/" + keyCred);
          ref.update({
            creditos: misCreditos-$scope.Batalla.monto        
          });
        location.href="#/side-menu21/page1";  
      } else{
           var myPopup = $ionicPopup.show({
                  template: 'Creditos Insuficientes',
                  title: 'Nop'
            });
            $timeout(function(){
           myPopup.close();
          }, 2000);
        } 
    }
    $scope.selectCasilla = function(valores,jugador){
     switch(jugador){
        case 1: $scope.Batalla.jugador1 = valores; break;
        case 2: $scope.Batalla.jugador2 = valores; break;
        case 3: $scope.eligeJugador = valores; break;
        case 4: $scope.eligeJugador = valores; break;
     }
      
    }
    $scope.elegirJugada = function(jugador2){
      var queryUser = refUser.orderByChild("uid").equalTo(Batalla.P1.split('-')[1]);
      queryUser.on('value', function(snap){
        var objUser = snap.val();
        keyCred2 = Object.keys(objUser);
        misCreditos2 = parseInt(objUser[keyCred].creditos);
      });    
      var acerto;
      console.log($scope.Batalla.jugador2);
      console.log($scope.eligeJugador);
      console.log(angular.equals($scope.Batalla.jugador2,$scope.eligeJugador));
      
      if(jugador2){
          $scope.Batalla.acertoJ2 = angular.equals($scope.Batalla.jugador1,$scope.eligeJugador);
          if($scope.Batalla.acertoJ2 && $scope.Batalla.acertoJ1)
          {  
              var ref = new Firebase("https://finalionic-6052c.firebaseio.com/Usuarios/" + keyCred);
              ref.update({
                creditos: misCreditos+$scope.Batalla.monto        
              });
              var ref = new Firebase("https://finalionic-6052c.firebaseio.com/Usuarios/" + keyCred2);
              ref.update({
                creditos: misCreditos2+$scope.Batalla.monto        
              });
              var myPopup = $ionicPopup.alert({
                template: 'Empate',
                title: 'Resultado'
              });
             
              $scope.Batalla.turno = "Nadie"
          }else if(!$scope.Batalla.acertoJ2 && !$scope.Batalla.acertoJ1){
                var myPopup = $ionicPopup.alert({
                  template: 'Segui jugando',
                  title: 'Resultado'
                });
                $scope.Batalla.turno = "J1"
          }else if($scope.Batalla.acertoJ2 && !$scope.Batalla.acertoJ1){
                var ref = new Firebase("https://finalionic-6052c.firebaseio.com/Usuarios/" + keyCred);
                ref.update({
                  creditos: misCreditos+($scope.Batalla.monto*2)
                });
                var myPopup = $ionicPopup.alert({
                  template: 'Ganaste',
                  title: 'Resultado'
                });
                 $scope.Batalla.turno = "Nadie"
          }else if(!$scope.Batalla.acertoJ2 && $scope.Batalla.acertoJ1){
                var ref = new Firebase("https://finalionic-6052c.firebaseio.com/Usuarios/" + keyCred2);
                ref.update({
                  creditos: misCreditos2+($scope.Batalla.monto*2)
                });
                var myPopup = $ionicPopup.alert({
                  template: 'Perdiste',
                  title: 'Resultado'
                });
                $scope.Batalla.turno = "Nadie"
          }
          
      }else{
          $scope.Batalla.acertoJ1 = angular.equals($scope.Batalla.jugador2,$scope.eligeJugador);
          $scope.Batalla.turno = "J2"
      }
      var ref = new Firebase('https://finalionic-6052c.firebaseio.com/Batallas/'+$scope.Batalla.$id);
      ref.update({
          "turno":$scope.Batalla.turno,
          "acertoJ1": $scope.Batalla.acertoJ1,
          "acertoJ2": $scope.Batalla.acertoJ2
      });
     location.href="#/side-menu21/page8";    
    }
    

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
 