# nodejs-http-client

## About

Implements the HttpClient class described in the [article](https://www.discussdesk.com/top-5-design-patterns-used-in-php-applications.htm)

## Install (not implemeted)

``` sh
npm i nodejs-http-clientt --save
```

## Basic Usage

``` javascript
const HttpClient = require('nodejs-http-client');

const httpClient = new HttpClient({ baseURL: 'http://httpbin.org' });

// GET
httpClient.get('/get?test=test', json)
    .then((response => console.log(response)))
    .catch(err => console.log(err));

// POST
httpClient.post('/post', { test: "test" })
    .then((response => console.log(response)))
    .catch(err => console.log(err));

```