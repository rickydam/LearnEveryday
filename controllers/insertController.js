var app = angular.module('myApp', []);

app.controller('insertController', function($scope, $http, resultsService) {
  $scope.insertdata = function() {
    var dateInput = document.getElementById("dateInput");
    var contentInput = document.getElementById("contentInput");
    if(dateInput.value == "") {
      alert("Date cannot be blank!");
      dateInput.focus();
    }
    else if(contentInput.value == "") {
      alert("Content cannot be blank!");
      contentInput.focus();
    }
    else {
      $http({
        method: 'POST',
        url: 'http://localhost/storestuff/insert.php',
        data: {'date':$scope.date, 'content':$scope.content, 'in':'json-format'},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
      .then(function(res) {
        console.log("Successful response", res);
        resultsService.addItem(res.data, $scope.date, $scope.content);
        $scope.date = "";
        $scope.content = "";
      })
      .catch(function(err) {
        console.error("Error with POST", err);
      });
    }
  }
});
