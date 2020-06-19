var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (user_id, text) {
      db.connection.query(`INSERT INTO messages values('${user_id}', ${text})`)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

// model will use the data pased from controller to form DB queries