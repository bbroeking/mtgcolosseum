const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TestPersonSchema = new Schema({
    name: String
}, { collection: "TestCollection" });

const Person = mongoose.model('TestCollection', TestPersonSchema);

module.exports = Person;