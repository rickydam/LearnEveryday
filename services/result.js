app.service('resultsService', function() {
  var results = new Array();

  var addItem = function(id, date, content) {
    var obj = new Object();
    obj['id'] = id;
    obj['date'] = date;
    obj['content'] = content;
    results.unshift(obj);
    results.sort(function(a, b) {
      return parseFloat(b.id) - parseFloat(a.id);
    });
  }

  var getItems = function() {
    return results;
  }

  var deleteItem = function(id) {
    for(var i=0; i<results.length; i++) {
      if(results[i].id === id) {
        results.splice(i, 1);
      }
    }
  }

  return {
    addItem: addItem,
    getItems: getItems,
    deleteItem: deleteItem
  };

});
