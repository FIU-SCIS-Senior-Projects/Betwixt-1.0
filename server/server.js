// Set up

const express = require('express');
const app = express();
const cors = require('cors');
const yelp = require('yelp-fusion');
const Workfrom = require('workfrom');

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
 
// Routes

app.get('/api/places', (req, res) => {
  console.log('fetching places');

  const { query } = req;
  const searchRequest = {
    lat: query.latitude,
    long: query.longitude,
    radius: 2
  };

  wf.places.near(searchRequest)
    .then(results => res.json(results.response))
    .catch(error => console.log('WORKFROM ERROR', error));
});

app.get('/api/businesses/search', (req, res) => {
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

app.listen(app.get('port'), function() {
  console.log('Server App is running at localhost:' + app.get('port'))
});