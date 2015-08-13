# Deprecated!
This package has been deprecated in favor of using [cosmos:browserify](https://github.com/elidoran/cosmos-browserify) with the [official npm package](https://www.npmjs.com/package/spark). Here's how you would do that with a local package in your application:

```javascript
// packages/npm-deps/package.js
Package.onUse(function(api) {
  api.use([
    'cosmos:browserify@0.5.0',
  ]);

  Npm.depends({
    spark: '1.0.0',
  });
  
  api.addFiles([
    'the.browserify.js',
  ], 'client');

  api.export([
    'Spark',
  ], 'client');
});

```

```js
// package/npm-deps/the.browserify.js
Spark = require('spark');
```

```javascript
// client/main.js
Meteor.startup(function(){
  Spark.login({
    username: process.env.SPARK_USERNAME,
    password: process.env.SPARK_PASSWORD
  })
  .then( function(token) {
    console.log('Logged into Spark:', token);
  })
  .catch( function(err) {
    console.error('Login to Spark failed:', err);
  });
});

```

Note that if you want to use this on the client, you'll need to provide the client with login information. Do so at your own risk, or figure out how to use access tokens.
