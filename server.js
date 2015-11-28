var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    port = 4040;
    
var Ninja = require('./models/ninja');
var Zombie = require('./models/zombie');

    
var app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://bh:bh@ds059804.mongolab.com:59804/zombies-vs-ninjas');
var db = mongoose.connection;









app.listen(port, function(){
    console.log('listening on port ' + port);
});