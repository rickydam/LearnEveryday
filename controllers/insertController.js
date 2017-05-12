var app = angular.module('myApp', []);
app.controller('insertController', function($scope, $http) {
  $scope.insertdata = function() {
    $http({
      method: 'POST',
      url: 'http://localhost/storestuff/insert.php',
      data: {'date':$scope.date, 'content':$scope.content, 'in':'json-format'},
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function(res) {
      console.log("Successful response", res)
      $scope.date = "";
      $scope.content = "";
    })
    .catch(function(err) {
      console.error("Error with POST", err);
    });
  }
});
