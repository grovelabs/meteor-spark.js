# Spark
This Meteor package includes the Spark Javascript library for the browser. The library provides abstractions for interacting with the Spark REST API. If you're interested in using Spark on the server, you want to use [grove:spark](https://github.com/grovelabs/meteor-spark-npm)

Spark is a platform for building web-connected hardware. Read more about it at https://www.spark.io/

## Version
The core code for this package was downloaded from the recommended [Spark CDN](http://cdn.jsdelivr.net/sparkjs/0.2.3/spark.min.js) and then de-minified. It uses Spark.js version 2.3

## Installation
````
$ meteor add grove:spark.js
````
This will expose the `spark` variable to global scope in the browser

## Usage
Before using the library, you need to login with your Spark Cloud credentials. This is as described [in their docs](http://docs.spark.io/javascript/#getting-started-logging-in), just put into a `Meteor.startup` call. By doing it on startup you don't have to use a promise, i.e. `spark.on('login', function(...`

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