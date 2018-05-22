var express = require('express');
var subdomain = require('express-subdomain');
var app = express();

var newBaseURL = process.env.NEW_BASE_URL || 'http://www.example.com';
var redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);
var port = process.env.PORT || 5000;

app.get('*', function(request, response) {
  var baseURL = newBaseURL.replace('*', request.subdomains[0]);
  response.redirect(redirectStatus, baseURL + request.url);
});

app.listen(port, function() {
  console.log('Listening on ' + port);
});
