const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: String
        // mana_cost: String,
        // cmc: Number,
        // colors: Array,
        // color_identity: Array,
        // legalities: [{
        //     standard: String,
        //     future: String,
        //     frontier: String,
        //     modern: String,
        //     legacy: String,
        //     pauper: String,
        //     vintage: String,
        //     penny: String,
        //     commander: String,
        //     v1: String,
        //     duel: String,
        //     brawl: String
        // }],
        // set: String,
        // set_name: String,
}, { collection: "Sets" });

const Card = mongoose.model('Set', schema);

module.exports = Card;