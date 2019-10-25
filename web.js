var express = require('express');
var app = express();
var cors = require('cors');

var newBaseURL = process.env.NEW_BASE_URL || 'http://example.com';
var redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);
var port = process.env.PORT || 5000;

var corsOptions = {
	origin: true, // reflect the request origin, as defined by req.header('Origin')
}

app.use(cors(corsOptions));

app.get('*', function(request, response) {
  response.redirect(redirectStatus, newBaseURL + request.url);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
