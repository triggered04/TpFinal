angular.module('app.directives', [])
.directive('noFloat', function () {
return  {
    restrict: 'A',
    link: function (scope, elm, attrs, ctrl) {
        elm.on('keydown', function (event) {
          if ([110, 190].indexOf(event.which) > -1) {
                // dot and numpad dot
                event.preventDefault();
                return false;
            }
            else{
              return true;
            }
        });
    }
}
})
.directive('qrcode', function($interpolate) {  
  return {
    restrict: 'E',
    link: function($scope, $element, $attrs) {

      var options = {
        text: '',
        width: 128,
        height: 128,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: 'H'
      };

      Object.keys(options).forEach(function(key) {
        options[key] = $interpolate($attrs[key] || '')($scope) || options[key];
      });

      options.correctLevel = QRCode.CorrectLevel[options.correctLevel];

      new QRCode($element[0], options);

    }
  };
})

.directive('blankDirective', [function(){

}]);