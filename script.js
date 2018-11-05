var app = angular.module('myApp', [])
/* appel de la directive ng-controller à laquelle on lie les services
$scope et $window.*/
app.controller('testCtrl', ['$scope', '$window', function($scope, $window) {
  // déclenchement du service $scope qui permet l'injection de dépendance dans le html.
  $scope.clicked = function() {
    /* déclenchement du service $window qui permet l'affichage d'une fenêtre d'alerte au
    moment du clic.*/
    $window.alert("Vous avez réussi !");
  };
}]);
