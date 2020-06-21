var db = require('../db');

module.exports = {
  messages: {
    get: (callback) => {
      var queryString = `SELECT * FROM messages`;
      db.query(queryString, (error, results) => {
        if (error) {
          console.log('Error inside models GET message: ', error);
          callback(error, null)
        } else {
          console.log('Successfully able to GET message from db inside models: 👍📨', results);
          callback(null, results);
        }
      });

    }, // a function which produces all the messages
    post: (params, callback) => {
      console.log('POST messages model params: ', params);
      var paramsArray = [params.text, params.user_id, params.room_id];
      var queryString = `insert into messages (text, user_id, room_id) values (?, ?, ?);`;
      db.query(queryString, paramsArray, (error, results) => {
        if (error) {
          console.log('Error inside models POST message: ', error);
          callback(error, null);
        } else {
          console.log('Successfully able to POST message to DB inside models: 🆙📨', results);
          callback(null, results);
        }
      });
    }, // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = `SELECT * FROM users`;
      db.query(queryString, (error, results) => {
        if (error) {
          console.log('Error inside models GET users: ', error);
          callback(error, null)
        } else {
          console.log('Successfully able to GET users from db inside models: 👍👑', results);
          callback(null, results);
        }
      });
    },
    post: function (params, callback) {
      console.log('POST users model params: ', params);
      var paramsArray = [params.user_name];
      // id is auto increment; ? escaping basically ....
      var queryString = `INSERT INTO users (user_name) values(?);`;
      db.query(queryString, paramsArray, (error, results) => {
        if (error) {
          console.log('Error inside models POST users: ', error);
          callback(error, null);
        } else {
          console.log('Successfully able to POST users to DB inside models: 🆙👑', results);
          callback(null, results);
        }
      });

    }
  },

  rooms: {
    // Ditto as above.
    get: function (callback) {
      var queryString = `SELECT * FROM rooms;`;
      db.query(queryString, (error, results) => {
        if (error) {
          console.log('Error inside models GET rooms: ', error);
          callback(error, null)
        } else {
          console.log('Successfully able to GET rooms from db inside models: 👍👑', results);
          callback(null, results);
        }
      });
    },
    post: function (params, callback) {
      console.log('POST users model params: ', params);
      var paramsArray = [params.room_name];
      // id is auto increment; ? escaping basically ....
      var queryString = `INSERT INTO rooms (room_name) values(?);`;
      db.query(queryString, paramsArray, (error, results) => {
        if (error) {
          console.log('Error inside models POST rooms: ', error);
          callback(error, null);
        } else {
          console.log('Successfully able to POST rooms to DB inside models: 🆙👑', results);
          callback(null, results);
        }
      });

    }
  }

};


// model will use the data passed from controller to form DB queries