var convert = require(process.cwd() + '/algorithms/convert-base.js');

function UrlHandler(db){
    
    this.shorten = function(req, res) {
        console.log('shorten - ' + req.query.url)
        db.collection('number')
          .findOneAndUpdate(
              {},
              {$inc : {'number' : 1} },
              null,
              function(e, doc) {
                  insertPath(doc.value.number);
              }
        );
        
        function insertPath(num) { 
            num = convert.toSixtyTwo(num);
            console.log('convert --' + num)
            db.collection('paths').insertOne(
                { 'url' : req.query.url, 'path': num}
            );
            res.send(num + '');
        }
    };
    
    this.lookup = function(req, res) {
        console.log('2 ' + req.params.url);
        
        var cursor = db.collection('paths').find({'path': req.params.url})
            .toArray(function(e, doc) {
                
                console.log('3 ' + doc);
                res.redirect(doc[0].url);
            })
       
        
        
    };
}

module.exports = UrlHandler;