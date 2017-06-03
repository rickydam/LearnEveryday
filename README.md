<img src="https://github.com/rickydam/LearnEveryday/blob/master/assets/images/screenshot1.png" width="100%">
<img src="https://github.com/rickydam/LearnEveryday/blob/master/assets/images/screenshot2.png" width="100%">

# Windows Installation

1. `git clone https://github.com/rickydam/LearnEveryday`
2. Move PHP files to WAMP www folder `C://wamp64/www/LearnEveryday`
3. Run WAMP local server
4. Open phpMyAdmin
5. Create a database named `the_database`
6. Run query
```
CREATE TABLE test_table (
id INT(3) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
theDate VARCHAR(1000) NOT NULL,
theContent VARCHAR(1000) NOT NULL
)
```
7. Navigate to the project directory `cd LearnEveryday`
8. `npm install` to get the dependencies needed to run the project
9. `node app.js` to run the project
10. Visit `localhost:3000`

**NOTE**: You can also visit `localhost:3000/load` to check the output of SQL query `SELECT * FROM the_table`
