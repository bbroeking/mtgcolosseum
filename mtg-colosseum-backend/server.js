const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')

const Card = require('./models/card');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Qurt:SonnyGray@carddb-fzw0e.mongodb.net', { dbName: 'Cards' });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/cards').get((req, res) => {
    Card.find({}, (err, cards) => {
        if (err)
            console.log(err);
        else
            res.json(cards);
    });
});

router.route('/cards/name/:name').get((req, res) => {
    Card.find({ name: { '$regex': req.params.name } }, (err, cards) => {
        if (err)
            console.log(err);
        else
            res.json(cards);
    });
});

router.route('/cards/cmc/:cmc').get((req, res) => {
    Card.find({ cmc: req.params.cmc }, (err, cards) => {
        if (err)
            console.log(err);
        else
            res.json(cards);
    });
});

app.use('/', router);
app.listen(4000, () => console.log('blog server running on port 4000!'));