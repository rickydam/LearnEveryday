var app = angular.module('myApp', []);

app.controller('formController', function($scope, $http, resultsService) {
  $scope.doThePOST = function() {
    $scope.isEditing = resultsService.isEditing();
    $scope.isValid = false;
    if($scope.isEditing) {
      checkIfValid();
      $scope.id = resultsService.get_idToEdit();
      if($scope.isValid) {
        $http({
          method: 'POST',
          url:'http://localhost/LearnEveryday/edit.php',
          data: {
            'id':$scope.id,
            'date':$scope.date,
            'content':$scope.content,
            'in':'json-format'
          },
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then(function(res) {
          console.log("Successful edit.", res);
          resultsService.editItem($scope.date, $scope.content);
          resultsService.editTrigger($scope.id);
          console.log("Edit mode has been disabled.");
          document.getElementById("theHeader").innerHTML = "What I learned today";
          document.getElementById("dateInput").value = "";
          document.getElementById("contentInput").value = "";
          document.getElementById("POSTbutton").value = "Submit";
          document.getElementById("POSTbutton").style.backgroundColor = "#329555";
          document.getElementById("theBody").style.backgroundColor = "white";
        });
      }
    }
    else {
      checkIfValid();
      if($scope.isValid) {
        $http({
          method: 'POST',
          url: 'http://localhost/LearnEveryday/insert.php',
          data: {'date':$scope.date,
            'content':$scope.content,
            'in':'json-format'
          },
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then(function(res) {
          console.log("Successful post.", res);
          resultsService.addItem(res.data, $scope.date, $scope.content);
          document.getElementById("dateInput").value = "";
          document.getElementById("contentInput").value = "";
        })
        .catch(function(err) {
          console.error("Error with POST", err);
        });
      }
    }
  }

  var checkIfValid = function() {
    if(dateInput.value == "") {
      alert("Date cannot be blank!");
      dateInput.focus();
    }
    else if(contentInput.value == "") {
      alert("Content cannot be blank!");
      contentInput.focus();
    }
    else {
      console.log(
        "Date input is not empty. Content input is not empty. The user may proceed."
      );
      $scope.isValid = true;
    }
  }

});
