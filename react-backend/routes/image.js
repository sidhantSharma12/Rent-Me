var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer = require('multer');

mongoose.connect('mongodb://localhost:27017/rental');

var Item = new ItemSchema(
  { img: 
      { data: Buffer, contentType: String } //data type is a Buffer, which allows us to store our image as data in the form of arrays.
  }
);
var Item = mongoose.model('Clothes',ItemSchema);

module.exports = router;