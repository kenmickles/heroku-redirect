Redirect all requests to a NEW_BASE_URL, default to https://www.tinypulse.com

## Set up

- Go to the Heroku app's Settings => Domains and certificates section and "Add domain"
- Set up the domain to point to Heroku's DNS Target provided above
- Unlikely you need to modify the code, but if you need to, see below.

## Development

Installation

```
npm install
```

Run

```
NEW_BASE_URL=https://is.gd node web.js
```

## Heroku Configuration

```
heroku config:add NEW_BASE_URL=https://www.tinypulse.com
```