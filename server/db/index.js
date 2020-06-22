var Sequelize = require('sequelize');
var db = new Sequelize('chat_orm', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // type of the db that we use
  operatorsAliases: false, // operators are used to compare complex comparisons. We can make our own operator. These operators are aliases / substitutes to names that can be easily understood & maintained.

  // mostly for the connection part of the db. Metadata
  pool: {
    max: 5, // maximum no of connections
    min: 0,
    acquire: 30000, // the max time in ms to get connection before throwing error.
    idle: 10000 // can be idle for time in 10000 ms before being released.
  }
});

//  Create models/tables
var Messages = db.define('Messages', {
  user_id: Sequelize.INTEGER(11), // If didn't give values, then it will take the default length then might end up in db memory performance issues.
  text: Sequelize.STRING(300),
  room_id: Sequelize.INTEGER(11)
});

var Users = db.define('Users', {
  user_name: Sequelize.STRING(20), // If didn't give values, then it will take the default length then might end up in db memory performance issues.
});

var Rooms = db.define('Rooms', {
  room_name: Sequelize.STRING(25), // If didn't give values, then it will take the default length then might end up in db memory performance issues.
});

var Friends = db.define('Friends', {
  user_id: Sequelize.INTEGER(11),
  friend_id: Sequelize.INTEGER(11)
});

// Create one to many relation
Users.hasMany(Messages);
Messages.belongsTo(Users);// ForeignKey



Users.sync();
Messages.sync();
Rooms.sync();
Friends.sync();


module.exports = {
  Users: Users,
  Messages: Messages,
  Rooms: Rooms,
  Friends: Friends,
}

