'use strict';

var express = require('express');
var app = express();
var port = 5000;

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/albums', function (req, res) {
    res.send('ALBUMS');
});

app.listen(port, function () {
    console.log('running server on port ' + port);
});