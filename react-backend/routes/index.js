//var imageRouter = require('./image.js');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

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
  var url= "mongodb://localhost:27017/rental";
  MongoClient.connect(url, function(err, db) { //db is the database name

    if(!err) {
      var collection= db.collection("user");
      collection.update({username : req.body.username}, {$set:{'image':req.body.url}});
      //collection.insert({url : req.body.url});
      db.close();
    }
  });
  res.sendStatus(200);

});

router.post('/signup', function(req,res){
  var url= "mongodb://localhost:27017/rental";
  MongoClient.connect(url, function(err, db) { //db is the database name

    if(!err) {
      var collection= db.collection("user");
      collection.insert({username : req.body.username, password: req.body.password});
      db.close();
      res.sendStatus(200);
    }
  });
});


router.post('/login', function(req,res){
  var url= "mongodb://localhost:27017/rental";
  MongoClient.connect(url, function(err, db) { //db is the database name

    if(!err) {
      var collection= db.collection("login");
      collection.find({username : req.body.username, password: req.body.password }).toArray(function(err, result) {
        var found = (result.length ===1 ? true : false); //checks if there is a username and password like that in the database
        db.close();
        res.json({result : found});
      });
    }
  });
});

module.exports = router;
