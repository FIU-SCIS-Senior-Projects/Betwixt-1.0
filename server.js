// Set up

const express = require('express');
const app = express();
const cors = require('cors');
const yelp = require('yelp-fusion');
const Workfrom = require('workfrom');
var http = require('http').Server(app);
var server = require("http").Server(app);
var io = require('socket.io').listen(server);
var group_socket = require('./sockets/groupSocket')(io);
module.exports = group_socket
const group = require('./routes/group');

const YELP_CLIENT_ID = process.env.YELP_CLIENT_ID;
const YELP_CLIENT_SECRET = process.env.YELP_CLIENT_SECRET;
const WORKFROM_APP_ID = process.env.WORKFROM_APP_ID;

// Configuration

let wf = Workfrom({
  id: WORKFROM_APP_ID
});

app.set('port', (process.env.PORT || 8080));
app.use(cors());
app.use(express.static('www'));

app.use((req, res, next) => {
   res.header('Content-Type', 'application/json');
   next();
});

// Use group router.

app.use('/group', group);

// Routes

app.get('/places', (req, res) => {
  console.log('fetching places');

  const { query } = req;
  const searchRequest = {
    lat: query.latitude,
    long: query.longitude
  };

  wf.places.near(searchRequest)
    .then(results => res.json(results.response))
    .catch(error => console.log('WORKFROM ERROR', error));
});

app.get('/businesses/search', (req, res) => {
  console.log('fetching businesses');

  const { query } = req;
  const searchRequest = {
    latitude: query.latitude,
    longitude: query.longitude
  };

  yelp.accessToken(YELP_CLIENT_ID, YELP_CLIENT_SECRET)
    .then(response => {
      const client = yelp.client(response.jsonBody.access_token);

      client.search(searchRequest)
        .then(response => {
          const firstResult = response.jsonBody.businesses[0];
          res.json(firstResult);
        });
  })
  .catch(error => console.log('YELP ERROR', error));

});

app.get('/helloworld', function(request, response) {
  response.send('Hello World!');

});

server.listen(app.get('port'), function () {
  console.log("Listening on port %s...", server.address().port);
});


