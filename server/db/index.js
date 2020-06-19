var mysql = require('mysql');
const url ='127.0.0.1';

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: url,
  user: 'root',
  password: '',
  database: 'chat'
});
connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('**Connected to MySql Database!**')
});
module.exports = connection;

//module.exports.connection = connection;