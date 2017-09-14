//var imageRouter = require('./image.js');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thelist', function(req, res){
	var url= "mongodb://localhost:27017/rental";
	MongoClient.connect(url, function(err, db) { //db is the database name
  
  	if(!err) {
    	console.log("We are connected");

    	var collection= db.collection("bike");
    	collection.find({}).toArray(function(err, result){//{} means find everything. toArray builds an array of the returned results
    		if(err){
    			console.log("Unable to find bike collection");
    		}
    		else if(result.length){
    			return res.json(result);
    		}
    		else{
    			console.log("No documents found");
    		}
    		db.close();
    	});
  	}
  	else{
    	console.log("error");
  	}
	});

});

router.post('/images', function(req, res){
  var url= "mongodb://localhost:27017/person";
  MongoClient.connect(url, function(err, db) { //db is the database name



  }

});

module.exports = router;
