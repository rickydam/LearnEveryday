app.controller('editController', function($scope, $rootScope, $http, resultsService) {
  $scope.cardFade = "no-overlay";
  $rootScope.fillerSpace = "no-overlay";

  $scope.editThisItem = function(item) {
    if($scope.cardFade === "no-overlay") {
      $scope.cardFade = "infocus";
      $rootScope.fillerSpace = "overlay";
      resultsService.editTrigger(item.id);
      console.log("Edit mode has been enabled for item:" + item.id + ".");
      document.getElementById("theHeader").innerHTML = "Editing...";
      document.getElementById("dateInput").value = item.date;
      document.getElementById("contentInput").value = item.content;
      document.getElementById("POSTbutton").value = "Edit";
      document.getElementById("POSTbutton").style.backgroundColor = "#9932CD";
      document.getElementById("theBody").style.backgroundColor = "#404040";
    }
    else if($scope.cardFade === "infocus") {
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
    }
    else {
      alert("FATAL ERROR!");
    }
  };

});
