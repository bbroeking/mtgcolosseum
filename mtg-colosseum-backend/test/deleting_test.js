const assert = require('assert');
const Card = require('../models/character');

// Describe tests
describe('Deleting record', function() {

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
    it('Deletes one record in the database', function(done) {
        Card.findOneAndRemove({ name: 'Mario' }).then(function() {
            Card.findOne({ name: 'Mario' }).then(function(result) {
                assert(result === null);
                done();
            });
        });
    });

});