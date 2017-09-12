// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
app.enable('trust proxy');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/basic-routing.html

app.get('/', (req, res) => {
  res.redirect('/api/whoami');
});

//requirements: IP Address, Language, Software
app.get("/api/whoami", function (request, response) {
  response.send({
    'ipaddress': request.ip,
    'language': request.get('Accept-Language').split(',')[0],
    'software': request.get('User-Agent').split('(')[1].split(')')[0]
  });
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
