'use strict'

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/error_handler');
const Constants = require('./constants');


let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var most_recent_clothing_items = { "images": [
  {
    "clothing_type": "shorts",
    "image_file_name": "superman_tshirt_transparent.png"
  }
]}

app.get('/get_clothing_images', function(req, res) {
  res.send(most_recent_clothing_items)
});

app.post('/set_clothing_images', function(req, res) {
  let params = req.body


  if (!params["images"]) {
    return;
  }

  most_recent_clothing_items = req.body
  res.sendStatus(200)
})


app.use(errorHandler);
// The server gets started from bin/run_server.js
module.exports = app;
