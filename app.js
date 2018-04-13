var express = require('express');
var app = express();
var res1 = require('./res1');
var serverPort = 9001;

// Routes
app.get('/api/path', function(req, res) {
    if (req.query.flag === 'res1') {
        console.log('res1');
        res.json(res1);
    } else if (req.query.status === 'res2') {
        console.log('res2');
        res.json(res2);
    } else {
        throw "not mapped";
    }
});

// Listen
var port = process.env.PORT || serverPort;
app.listen(port);
console.log('Listening on localhost:'+ port);
