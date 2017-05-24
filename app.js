var express = require('express');
var cors = require('cors');
// Mongoose import
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});


// Mongoose Model definition

// Bootstrap express
var app = express();
app.use(cors());
app.get('/', function (req, res) {
    res.send("<a href='/data'>Show data</a>");
});
// URLS management

app.get('/data', function (req, res) {
    Cat.find({}, function (err, docs) {
        res.json(docs);
    });
});
app.get('/data1', function (req, res) {
    var kit = new Cat({ name: 'called' });
    kit.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('meowwww');
        }
    });


    Cat.find({}, function (err, docs) {
        res.json(docs);
    });
});
// Start the server
app.listen(3000);
