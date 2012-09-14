This has come in handy more times than it should have. 

## Configuration
To redirect all requests to example.com:

```
heroku config:add NEW_BASE_URL=http://example.com
```

**NOTE:** You may need to delete and re-create your Heroku app before pushing an entirely new Git repository into it.