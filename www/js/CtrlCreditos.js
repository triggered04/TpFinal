angular.module('app.controllers')

.controller('creditoCtrl', function($scope, $firebaseArray, $ionicPopup, $timeout,esAdminVal, $crypto,Creditos,Usuarios) {

  $scope.uid = firebase.auth().currentUser.uid;
  $scope.Creditos= Usuarios;
  $scope.codigosCreditos =Creditos;


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
  };

  $scope.cargarCredito= function(codigo){

    var credito = {
      cargar:false,
      codCred: null,
      codUser:null,
      montoInicial:null,
      montoCarga:null,
      montoFinal:null
      };

    var ref = new Firebase("https://finalionic-6052c.firebaseio.com/Creditos/");
    var query = ref.orderByChild("code").equalTo(codigo);
    

    query.on('value', function(snap){
      objCred = snap.val();
      var refCred = Object.keys(objCred);

      if(!objCred[refCred].usado)
      {
        credito.cargar=true;
        credito.codCred = refCred;
        credito.montoCarga = parseInt(objCred[refCred].monto);
      }
    });

    var refUser = new Firebase("https://finalionic-6052c.firebaseio.com/Usuarios/");
    var queryUser = refUser.orderByChild("uid").equalTo(firebase.auth().currentUser.uid);

    queryUser.on('value', function(snap){
      objUser = snap.val();
      var refUser = Object.keys(objUser);
      credito.codUser = refUser;
      credito.montoInicial = parseInt(objUser[refUser].creditos);
    });    

    $timeout(function(){      
      var creditoTotal = (credito.montoInicial + credito.montoCarga);
      credito.montoFinal =  creditoTotal;
      //console.info(credito);

      if(credito.cargar){
        var ref = new Firebase("https://finalionic-6052c.firebaseio.com/Creditos/" + credito.codCred);
          ref.update({
            user: firebase.auth().currentUser.displayName,
            usado:true        
          });

        var ref = new Firebase("https://finalionic-6052c.firebaseio.com/Usuarios/" + credito.codUser);
        ref.update({
          creditos: credito.montoFinal        
        });

        var myPopup = $ionicPopup.alert({
           template: '<center>' + credito.montoCarga  + "</center>",
           title: "CREDITO CARGADO"
          });

      }
      else{

        var myPopup = $ionicPopup.alert({
           template: '<center>' + codigo + "</center>",
           title: "CODIGO YA USADO"
          });
      }

    }, 3000);

  };

})