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
  };

  $scope.cargarCredito= function(codigo){

    var ref = new Firebase("https://finalionic-6052c.firebaseio.com/Creditos/");

    var query = ref.orderByChild("code").equalTo(codigo);

    query.on('value', function(snap){ 

      var obj = snap.val();
      var name = Object.keys(obj);

      console.info(obj[name].usado);

      if(!obj[name].usado){
        var ref = new Firebase("https://finalionic-6052c.firebaseio.com/Creditos/" + name);
        ref.update({
          user: firebase.auth().currentUser.displayName,
          usado:true        
        });
        console.info("SALDO AGREGADO");
      }
      else{
        console.info("CODIGO USADO");
      }

    });


  };

})