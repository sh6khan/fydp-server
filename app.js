'use strict'

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/error_handler');
const Constants = require('./constants');


let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
  res.send('Fydp Connection succeded');
});


app.use(errorHandler);
// The server gets started from bin/run_server.js
module.exports = app;
