var express = require('express');
var mysql = require('mysql');
var morgan = require('morgan');
var app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.render("index");
});

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'storestuff'
});

connection.connect(function(error) {
  if(error) console.log("Problem connecting to MySQL: " + error);
  else console.log("Connected successfully to the database");
});

app.get('/load', function(req, res) {
  connection.query("SELECT * from thestuff", function(err, rows) {
    if(err) console.log("SELECT from thestuff... did not work: " + err);
    else {
      res.end(JSON.stringify(rows, null, 2));
    }
  });
});

app.listen(3000, function() {
  console.log("Server running on port 3000.");
});
