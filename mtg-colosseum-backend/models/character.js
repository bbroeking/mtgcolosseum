const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TestCharacterSchema = new Schema({
    name: String,
    weight: Number
});

const Character = mongoose.model('testCardDB', TestCharacterSchema);

module.exports = Character;