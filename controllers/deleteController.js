app.controller("deleteController", function($scope, $rootScope, $http, resultsService) {
  $scope.deleteThisItem = function(item) {
    $http({
      method: 'POST',
      url: 'http://localhost/LearnEveryday/delete.php',
      data: {'id': item.id},
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function(res) {
      console.log("Deleted the item successfully!");
      resultsService.deleteItem(item.id);
      $scope.cardFade = "no-overlay";
      $rootScope.fillerSpace = "no-overlay";
      resultsService.editTrigger(item.id);
      console.log("Edit mode has been disabled.");
      document.getElementById("theHeader").innerHTML = "What I learned today";
      document.getElementById("dateInput").value = "";
      document.getElementById("contentInput").value = "";
      document.getElementById("POSTbutton").value = "Submit";
      document.getElementById("POSTbutton").style.backgroundColor = "#329555";
      document.getElementById("theBody").style.backgroundColor = "white";
    });
  }
});
