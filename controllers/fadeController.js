app.controller('fadeController', function($scope, $rootScope) {
  $scope.cardFade = "no-overlay";
  $rootScope.fillerSpace = "no-overlay";

  $scope.editThisItem = function(item) {
    if($scope.cardFade === "no-overlay") {
      $scope.cardFade = "infocus";
      $rootScope.fillerSpace = "overlay";
    }
    else if($scope.cardFade === "infocus") {
      $scope.cardFade = "no-overlay";
      $rootScope.fillerSpace = "no-overlay";
    }
    else {
      alert("FATAL ERROR!");
    }
  };
});
