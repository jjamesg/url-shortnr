var express = require('express');
var app = express();

var routes = require('./app/routes/index.js');

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));

var MongoClient = require('mongodb').MongoClient;
var monUrl = 'mongodb://james:pass@ds059205.mongolab.com:59205/shrtner';

MongoClient.connect(monUrl, function(err, db) {
    if(err) console.error(err);
    console.log("Connected correctly to server.");
    
    db.collection('number').count(function(err, count) {
      if(err) throw err;
      if(!count) {
          db.collection('number').insertOne({'number' : 0});
      }
    }); 
        
    routes(app, db);
  
    app.listen(process.env.PORT || 8080);
});

