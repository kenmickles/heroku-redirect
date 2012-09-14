Simple node app to redirect all requests from a Heroku app to a new URL. I've needed this more times than I should have.

## Configuration
```
heroku config:add NEW_BASE_URL=http://example.com
```