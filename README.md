Simple node app to redirect all requests for an old Heroku app to a new URL. This has come in handy more times than it should have.

## Configuration
To redirect all requests to example.com:

```
heroku config:add NEW_BASE_URL=http://example.com
```