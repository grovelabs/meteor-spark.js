Package.describe({
  name: 'grove:spark.js',
  summary: 'Spark\'s Javascript library on the client',
  version: '0.2.4',
  git: 'https://github.com/grovelabs/meteor-spark.js'
});

Package.onUse(function(api) {
  api.addFiles('spark.min.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('grove:spark.js');
});
