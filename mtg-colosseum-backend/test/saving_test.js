const assert = require('assert');
const Card = require('../models/cards');

// Describe tests
describe('Saving record', function() {

    // Save Test
    it('Saves a record to the database', function(done) {

        var char = new Card({
            name: "Mario"
        });

        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });
    });

    // Next Test

});