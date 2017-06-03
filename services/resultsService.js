app.service('resultsService', function() {
  var results = new Array();
  var editing = 0;
  var idToEdit = -1;

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

  var isEditing = function() {
    return editing;
  }

  var editTrigger = function(id) {
    if(editing) {
      editing = false;
      idToEdit = -1;
    }
    else {
      editing = true;
      idToEdit = id;
    }
  }

  var get_idToEdit = function() {
    return idToEdit;
  }

  var editItem = function(date, content) {
    for(var i=0; i<results.length; i++) {
      if(results[i].id === idToEdit) {
        var obj = new Object();
        obj['id'] = idToEdit;
        obj['date'] = date;
        obj['content'] = content;
        results[i] = obj;
      }
    }
  }

  return {
    addItem: addItem,
    getItems: getItems,
    deleteItem: deleteItem,
    isEditing: isEditing,
    editTrigger: editTrigger,
    get_idToEdit: get_idToEdit,
    editItem: editItem
  };

});
