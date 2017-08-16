var mongodb = require('mongodb');

// connection string
var uri = 'mongodb://localhost:27017/example';

// mongo client helper
// error and db are both potentially null
mongodb.MongoClient.connect(uri, function(error, db) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    
    // else if no error, insert a document, and also create the db 'example' if it did not exist 
    db.collection('sample').insert({ x: 1 }, function(error, result) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        // find() returns a cursor, not a set of documents
        // chain the .toArray() function to return documents
        db.collection('sample').find().toArray(function(error, docs) {
            if (error) {
                console.log(error);
                process.exit(1);
            }
            
            console.log('Found docs: ');
            docs.forEach(function(doc) {
                console.log(JSON.stringify(doc));
            });
            process.exit(0);
        });
    });
});