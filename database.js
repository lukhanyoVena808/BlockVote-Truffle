var mysql = require('mysql');
// Database 1-> Candidate ID AND Vote counts
var conn = mysql.createConnection({
    host: 'localhost', // assign your host name
    user: 'root',      //  assign your database username
    password: '@158410Xx',      // assign your database password
    database: 'logindb' // assign database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;


