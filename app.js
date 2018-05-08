const express = require('express');
var ba = require('beeradvocate-api');
const app = express();

app.get('/beers', function(req, res) {
    ba.beerSearch(req.query.search, function(beers) {
        res.send(beers);
    });
});

app.listen(3000, () => console.log('Beer API listening on localhost:3000/beers'))
