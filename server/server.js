// Set up

const express = require('express');
const app = express();
const cors = require('cors');
const yelp = require('yelp-fusion');

const clientId = process.env.YELP_CLIENT_ID;
const clientSecret = process.env.YELP_CLIENT_SECRET;

// Configuration

app.set('port', (process.env.PORT || 8080));
app.use(cors());
app.use(express.static('www'));
 
app.use((req, res, next) => {
   res.header('Content-Type', 'application/json');
   next();
});
 
// Routes

app.get('/api/businesses/search', (req, res) => {

  console.log('fetching businesses');

  const { query } = req;
  const searchRequest = {
    latitude: query.latitude,
    longitude: query.longitude
  };

  yelp.accessToken(clientId, clientSecret)
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
  console.log("Server App is running at localhost:" + app.get('port'))
});