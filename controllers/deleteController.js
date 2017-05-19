app.controller("deleteController", function($scope, $http, resultsService) {
  $scope.deleteThisItem = function(item) {
    $http({
      method: 'POST',
      url: 'http://localhost/storestuff/delete.php',
      data: {'id': item.id},
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function(res) {
      console.log("Deleted the item successfully!");
      resultsService.deleteItem(item.id);
    });
  }
});
