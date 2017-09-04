var express = require('express');
var cors = require('cors');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(cors());
app.use(express.static('www'));

app.get('/helloworld', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Server app is running at localhost:" + app.get('port'))
});
