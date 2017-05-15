var size = 0;
var count = 0;

app.controller('fetchController', function ($scope, $http, resultsService) {
  $http.get('http://localhost/storestuff/fetch.php')
    .then(function successCallback(response) {
      size = (response.data).length;
      while(count < size) {
        var date = response.data[count].date;
        var content = response.data[count].content;
        resultsService.addItem(date, content);
        count++;
      }
      size = 0;
      count = 0;
      $scope.results = resultsService.getItems();
  });
});
