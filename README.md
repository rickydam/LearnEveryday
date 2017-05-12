<img src="https://raw.githubusercontent.com/rickydam/LearnEveryday/master/images/screenshot.png" width="30%">

# Installation

1. Run ```git clone https:github.com/rickydam/LearnEveryday```
2. Move PHP files to WAMP www folder ```c://wamp64/www/storestuff```
3. Run WAMP local server
4. Open phpMyAdmin
5. Create a database named ```storestuff```
6. Create a table named ```thestuff```
7. Create a column named ```date``` with type ```VARCHAR``` and size ```1000```
9. Create a column named ```content``` with type ```VARCHAR``` and size ```1000```
9. Run ```node app.js```
10. Visit ```localhost:3000```

**NOTE**: You can also visit ```localhost:3000/load``` to check the output of SQL query ```SELECT * FROM storestuff```
