const assert = require('assert');
const Card = require('../models/cards');

// Describe tests
describe('Finding record', function() {

    var char;

    beforeEach(function(done) {
        char = new Card({
            name: "Mario"
        });

        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });
    });

    // Save Test
    it('Finds one record in the database', function(done) {
        Card.findOne({ name: "Mario" }).then(function(result) {
            assert(result.name === 'Mario');
            done();
        });
    });

    // Next Test
    it('Finds one record by ID in the database', function(done) {
        Card.findOne({ _id: char._id }).then(function(result) {
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });

});