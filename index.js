var express = require('express');
var app = express();
var fs = require("fs");
const fetch = require('node-fetch');

const db = require('./db');

const API_BASE_URL = 'http://www.omdbapi.com/?apikey=4f31804c&';


db.testConnection();

app.use(express.static('ymdb/dist/'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/ymdb/dist/index.html', { root: __dirname + "/ymdb/dist" } );
});

app.get('/api/search', async function (req, res) {
    if (!req.query.s) {
        res.end('Error!');
        return;
    }

    const url = `${API_BASE_URL}type=movie&s=${req.query.s}`;
    const json = await (await fetch(url)).json();
    res.end(JSON.stringify(json));
});

app.get('/api/details', async function (req, res) {
    if (!req.query.id) {
        res.end('Error!');
        return;
    }

    const url = `${API_BASE_URL}i=${req.query.id}`;
    const text = await (await fetch(url)).text();
    res.end(text)
});
 
app.get('/api/ratings', async function(req, res) {
    if (!req.query.id) {
        res.end('Error');
        return;
    }

    const ratings = await db.getRatings(req.query.id);
    res.end(JSON.stringify(ratings));
});

app.get('/api/ratings/update', async function(req, res) {
    if (!req.query.id || !req.query.rating) {
        res.end('Error: The correct parameters were not supplied');
        return;
    }
    const result = await db.putRating(req.query.id, Number(req.query.rating));
    res.end(JSON.stringify(result));
})

app.get('/api/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});
