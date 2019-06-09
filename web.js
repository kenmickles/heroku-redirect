var express = require('express');
var app = express();

var newDefaultURL = process.env.NEW_DEFAULT_URL || 'https://www.bridgebase.com/';
var newWeb4URL = process.env.NEW_WEB4_URL || 'https://www.bridgebase.com/web4.php?cb=web4obsdef';
var newWeb0URL = process.env.NEW_WEB0_URL || 'https://www.bridgebase.com/web0.php?cb=web0obsdef';

var redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);
var port = process.env.PORT || 5000;

app.get('*', function(request, response) {
  if ( request.url ) {
    if ( request.url.includes('/web4')  ) {
      response.redirect(redirectStatus, newWeb4URL);  
    } else if ( request.url.includes('/web0')  ) {
      response.redirect(redirectStatus, newWeb0URL);  
    } else {
      response.redirect(redirectStatus, newDefaultURL);  
    }
  } else {
    response.redirect(redirectStatus, newDefaultURL);
  }
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
