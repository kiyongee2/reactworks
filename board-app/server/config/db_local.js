const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "jsuser",
  password: "pwjs",
  database: "mypost",
});

module.exports = db;