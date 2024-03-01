var mysql = require('mysql');

var con = mysql.createConnection({
//  host: "localhost",
  host: "127.0.0.1",
  user: "bfxyunbfhf",
  password: "j7TsWpdSzG",
  database:"bfxyunbfhf"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
