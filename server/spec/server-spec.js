/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var request = require('request'); // You might need to npm install the request module!
// var Sequelize = require('sequelize');
var db = require('../db');
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function () {
  beforeEach(function() {
    db.Messages.destroy({ truncate: true });
  });


  /* afterEach(function() {
    db.close();
  }); */

  it('Should insert posted messages to the DB', function (done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { user_name: 'Test room' }
    }, function () {
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/messages',
        json: {
          "text": "Testing from the spec",
          "user_id": 3,
          "room_id": 3

        }
      }, function () {

        db.Messages.findAll({
          where: {
            "user_id": 3
          }
        }).then((messages) => {
          console.log('MESSAGES', messages[0].dataValues);
          expect(messages.length).to.equal(1);
          expect(messages[0].dataValues.text).to.equal('Testing from the spec');
        }).catch((e) => {
          throw new Error('Error! ', e)
        });
        done();
      });
    });
  });


  it('Should output all messages from the DB', function(done) {
    db.Messages.create({
      user_id: 1,
      text: 'Message to DB!',
      room_id: 2
    });

      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        if (error) {
          console.log('Error should output all db messages:', error);
        }
        console.log('Response ----', response);
        var messageLog = JSON.parse(body);
        console.log('messageLogs: ----->', messageLog);
        expect(messageLog[0].text).to.equal('Message to DB!');
        expect(messageLog[0].user_id).to.equal(1);
        expect(messageLog[0].room_id).to.equal(2);
        expect(response.statusCode).to.equal(200);
        done();
      });
  });

  xit('The initial counts of rows in the rooms should be 2', function (done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/rooms',
      json: { room_name: 'Arts' }
    }, function () {
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/rooms',
        json: {
          "room_name": "Museums"
          /* username: 'Valjean',
          text: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello' */
        }
      }, function () {
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT count(room_name) FROM rooms;';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function (err, results) {
          console.log('QUERY STRING ROOM!: ', queryString);
          console.log('QUERY ARGS ROOMS!: ', queryArgs);
          console.log('Results rooms: ', results);
          if (err) {
            throw new Error('ERROR!', err);
          }

          expect(results[0]['count(room_name)']).to.equal(2);

          done();
        });
      });
    });
  });

  xit('Should not insert duplicate room names', function (done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/rooms',
      json: { room_name: 'Arts' }
    }, function () {
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/rooms',
        json: {
          "room_name": "Arts"
          /* username: 'Valjean',
          text: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello' */
        }
      }, function () {
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM rooms;';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function (err, results) {
          console.log('QUERY STRING ROOM!: ', queryString);
          console.log('QUERY ARGS ROOMS!: ', queryArgs);
          console.log('Results rooms: ', results);
          if (err) {
            throw new Error('ERROR!', err);
          }

          expect(results.length).to.equal(2);

          done();
        });
      });
    });
  });


});
