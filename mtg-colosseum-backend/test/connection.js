const mongoose = require('mongoose')

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to db beofre tests run 
before(function(done) {

    // Connect to mongodb
    mongoose.connect('mongodb+srv://Qurt:SonnyGray@carddb-fzw0e.mongodb.net/test?retryWrites=true')
    mongoose.connection.once('open', function() {
        console.log("Connection has been made.");
        done();
    }).on('error', function(error) {
        console.log("Error", error);
    });
});

// Drop the colection before each test
beforeEach(function(done) {
    // Drop collection
    mongoose.connection.collections.testcarddbs.drop(function() {
        done();
    });
});