var models = require('../models');

module.exports = {
  messages: {
    get: (req, res) => {
      models.messages.get((error, messages) => {
        if (error) {
          console.log('Failed to get messages inside controllers: ', error);
        } else {
          console.log('Successfully able to get messages inside controllers: ', messages);
          // res.json(messages);
          // res.status(200).send();
          res.status(200).json(messages);
        }
      });
    }, // a function which handles a get request for all messages
    post: (req, res) => {
      console.log('Request body inside message post: ', req.body);
      models.messages.post(req.body, (error, messages) => {
        if (error) {
          res.status(400).send(error);
        } else {
          // 200 ? or 201 - creates the post req ...
          res.status(201).send(messages);
        }
        res.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((error, users) => {
        if (error) {
          console.log('Failed to get users inside controllers: ', error);
        } else {
          console.log('Successfully able to get users inside controllers: ', users);
          res.json(users);
          res.status(200).send();
        }
      });

    },
    post: function (req, res) {
      console.log('Request body inside user post: ', req.body);
      models.users.post(req.body, (error, users) => {
        if (error) {
          res.status(400).send(error);
        } else {
          res.status(201).send(users);
        }
        res.end();
      });
    }
  },

  rooms: {
    // Ditto as above
    get: function (req, res) {
      models.rooms.get((error, rooms) => {
        if (error) {
          console.log('Failed to get rooms inside controllers: ', error);
        } else {
          console.log('Successfully able to get rooms inside controllers: ', rooms);
          res.json(rooms);
          res.status(200).send();
        }
      });

    },
    post: function (req, res) {
      console.log('Request body inside room post: ', req.body);
      models.rooms.post(req.body, (error, rooms) => {
        if (error) {
          res.status(400).send(error);
        } else {
          res.status(201).send(rooms);
        }
        res.end();
      });
    }
  }
};


// request -> app.js -> routes.js -> controller/index.js -> model/index.js parses and returns to controller -> controller hands back to client
// ending response in controller