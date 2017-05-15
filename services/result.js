app.service('resultsService', function() {
  var results = new Array();

  var addItem = function(date, content) {
    var obj = new Object();
    obj["date"] = date;
    obj["content"] = content;
    results.push(obj);
  }

  var getItems = function() {
    return results;
  }

  return {
    addItem: addItem,
    getItems: getItems
  };

});
