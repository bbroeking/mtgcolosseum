const assert = require('assert');
const Card = require('../models/character');

// Describe tests
describe('Updating record', function() {

    var char;

    beforeEach(function(done) {
        char = new Card({
            name: "Mario",
            weight: 50
        });

        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });
    });

    // Save Test
    it('Updates one record in the database', function(done) {
        Card.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(function() {
            Card.findOne({ _id: char._id }).then(function(result) {
                assert(result.name === 'Luigi');
                done();
            });
        });
    });

    it('Updates the weight by one for each entry', function(done) {
        Card.update({}, { $inc: { weight: 1 } }).then(function() {
            Card.findOne({ name: 'Mario' }).then(function(record) {
                assert(record.weight === 51);
                done();
            });
        });
    });
});