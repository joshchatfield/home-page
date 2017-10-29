/*

A server requires a database, a driver to connect to that database, a method to serve static files and methods for handling requests.

when making profiles I could allow users to
	enter a link to a video of yourself here:
		youtube link, if I want the youtube to be embedded I will have to parse the url to get the video id
	entere a link to a picture of yourself here:
		facebook is good for this
		instagram doesn't work

*/

// get dependencies
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// set static folder
app.use(express.static('./'));

// set port
app.listen(80);

// set variables
var url = 'mongodb://localhost:27017/mydb';

// server response methods
MongoClient.connect(url, function(err, db) {
assert.equal(null, err);
console.log("Connected successfully to server");
//db.collection("documents").insert({"test":"message"});


db.close();
});
