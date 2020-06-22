var db = require('../db');

module.exports = {
  messages: {
    get: (req, res) => {
      db.Messages.findAll()
        .then((messages) => {
          console.log('Successfully able to get messages inside controllers: ', messages);
            res.status(200).json(messages);
        }).catch((e) => {
          res.status(400).send(e);
          console.log('Failed to get messages inside controllers: ', e);
        });

    }, // a function which handles a get request for all messages
    post: (req, res) =>{
      console.log('REQUEST BODY FROM POST!🤠', req);
      db.Messages.create({
        user_id: req.body.user_id,
        text: req.body.text,
        room_id: req.body.room_id
      }).then((message) => {
        res.status(200).json(message);
        console.log('Successfully able to POST message inside controllers: ', message);
      }).catch((e) => {
        res.status(400).send(e);
        console.log('Failed to post message inside controllers: ', e);
      });

    },

  },

  users: {
    get: (req, res) => {
      db.Users.findOne({
        where: {
          user_name: 'Chris!'
        }
      })
        .then((users) => {
          console.log('Successfully able to get users inside controllers: ', users);
          res.status(200).json(users);
        }).catch((e) => {
          res.status(400).send(e);
          console.log('Failed to get users inside controllers: ', e);
        });

      },
    post: function (req, res) {
      db.Users.create({
        user_name: req.body.user_name
      }).then((user) => {
        res.status(200).json(user);
        console.log('Successfully able to POST user inside controllers: ', user);
      }).catch((e) => {
        res.status(400).send(e);
        console.log('Failed to post user inside controllers: ', e);
      });
    }
  },

  // rooms: {
  //   // Ditto as above
  //   get: function (req, res) {
  //     // models.rooms.get((error, rooms) => {
  //     //   if (error) {
  //     //     console.log('Failed to get rooms inside controllers: ', error);
  //     //   } else {
  //     //     console.log('Successfully able to get rooms inside controllers: ', rooms);
  //     //     res.json(rooms);
  //     //     res.status(200).send();
  //     //   }
  //     // });

  //   },
  //   post: function (req, res) {
  //     console.log('Request body inside room post: ', req.body);
  //     models.rooms.post(req.body, (error, rooms) => {
  //       if (error) {
  //         res.status(400).send(error);
  //       } else {
  //         res.status(201).send(rooms);
  //       }
  //       res.end();
  //     });
  //   }
  // }
};


// request -> app.js -> routes.js -> controller/index.js -> model/index.js parses and returns to controller -> controller hands back to client
// ending response in controller