# Deprecated!
This package has been deprecated in favor of using the NPM dependency. Note that currently you can't use a NPM directly in an app; that dependency has to be expressed in a Meteor package that in turn your application uses. You can then expose the `Spark` object via `package.js`, and use it as desired. Examples:

```javascript
// in package.js of your package:
Npm.depends({
  spark: '0.5.9',
});

api.export([
  'Spark',
], 'server');

// in your application, ex. server.js:
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

# Spark
This Meteor package includes the Spark Javascript library for the browser. The library provides abstractions for interacting with the Spark REST API. If you're interested in using Spark on the server, you want to use [grove:spark](https://github.com/grovelabs/meteor-spark-npm)

Spark is a platform for building web-connected hardware. Read more about it at https://www.spark.io/


## Installation
````
$ meteor add grove:spark.js
````
This will expose the `spark` variable to global scope in the browser

## Usage
Before using the library, you need to login with your Spark Cloud credentials. This is as described [in their docs](http://docs.spark.io/javascript/#getting-started-logging-in), just put into a `Meteor.startup` function. By doing it on startup you don't have to use a promise. You can also setup a handler with `spark.on('login', function(err, body) {...} ) `

### Logging in with an access token

````
Meteor.startup( function() {
  // Get your accessToken from your account, this is fake
  spark.login({accessToken: 'ljewtlksdfljk23423klsdlksd'}); 
});
````

### Logging in with your email and password

````
Meteor.startup( function() {
  // Get your accessToken from your account, this is fake
  spark.login({username: 'username@gmail.com', password: '12345'}); 
});
````

Then go to it! Read more about what you can do in the [docs](http://docs.spark.io/javascript)