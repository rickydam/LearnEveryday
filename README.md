<img src="https://github.com/rickydam/LearnEveryday/blob/master/assets/images/thescreenshot.png" width="100%">

# Installation

1. `git clone https://github.com/rickydam/LearnEveryday`
2. Move PHP files to WAMP www folder `C://wamp64/www/storestuff`
3. Run WAMP local server
4. Open phpMyAdmin
5. Create a database named `storestuff`
6. Create a table named `thestuff`
7. Create an id column using this SQL query `ALTER TABLE thestuff ADD COLUMN id INT AUTO_INCREMENT UNIQUE FIRST;`
8. Create a column named `date` with type `VARCHAR` and size `1000`
9. Create a column named `content` with type `VARCHAR` and size `1000`
10. `npm install` to get the dependencies needed to run the project
11. `node app.js`
12. Visit `localhost:3000`

**NOTE**: You can also visit `localhost:3000/load` to check the output of SQL query `SELECT * FROM storestuff`
