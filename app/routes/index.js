var UrlHandler = require(process.cwd() + '/app/controllers/shorten.server.js');

module.exports = function(app, db) {
    
    var urlHandler = new UrlHandler(db); 
    
    app.get('/s/:url', urlHandler.lookup);
    
    app.get('/new', urlHandler.shorten);
    
    app.get('/', function(req, res){
        console.log(req.params);
        
        res.sendFile(process.cwd() + '/public/index.html');
    }); 
    
   app.get('/new', urlHandler.shorten);
};