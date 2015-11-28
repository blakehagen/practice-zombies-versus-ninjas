var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    port = 4040;

var Ninja = require('./models/ninja');
var Zombie = require('./models/zombie');

// // // // // // //
// CREATE A NINJA //
// // // // // // //
var bmhNinja = new Ninja({
    name: 'blake',
    health: 100
});
bmhNinja.save(bmhNinja);

// // // // // // //
// CREATE ZOMBIE  //
// // // // // // //

var zombo = new Zombie({
    name: 'zombo',
    health: 33
});
zombo.save(zombo);
////////////////////////

var app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://bh:bh@ds059804.mongolab.com:59804/zombies-vs-ninjas');
var db = mongoose.connection;

// ZOMBIE ENDPOINTS //
app.get('/v1/zombies', function (req, res, next) {
    Zombie.find().populate('ninjasKilled').exec(function (err, zombies) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).send(zombies);
    });
});

app.get('/v1/zombies/:name', function (req, res, next) {
    Zombie.find({name: req.params.name}).populate('ninjasKilled').exec(function (err, zombies) {
        res.status(200).send(zombies);
    });
});

// NINJA ENDPOINTS //
app.get('/v1/ninjas', function (req, res, next) {
    Ninja.find().populate('zombiesKilled').exec(function (err, ninjas) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).send(ninjas);
    });
});

app.get('/v1/ninjas/:name', function (req, res, next) {
    Ninja.find({name: req.params.name}).populate('zombiesKilled').exec(function (err, ninjas) {
        res.status(200).send(ninjas);
    });
});




app.listen(port, function () {
    console.log('listening on port ' + port);
});