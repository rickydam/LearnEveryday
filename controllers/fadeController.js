app.controller("fadeController", function($scope, $http, resultsService) {
  $scope.cardFade = "noCSS";
  $scope.editThisItem = function(item) {
    if($scope.cardFade === "noCSS") {
      $scope.cardFade = "someCSS";
    }
    else if($scope.cardFade === "someCSS") {
      $scope.cardFade = "noCSS";
    }
    else {
      alert("FATAL ERROR!");
    }
  };
});
