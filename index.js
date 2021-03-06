// we need to require 'express' module
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

// A GET method route
app.get('/', function (req, res) {
  res.send('GET index page.');
});

// A POST method route
app.post('/', function (req, res) {
  res.send('POST index page.');
});

app.get('/tweets', function (req, res) {
  res.send('These are your tweets');
});

app.get('/user', function (req, res) {
  res.send('this is your user account');
});

app.get('/login', function (req, res) {
  res.send('Hello, '+req.query.user);
});

//boot up the server
app.listen(port);
console.log('The server is listening to ' + port);
