Package.describe({
  name: 'grove:spark.js',
  summary: 'Spark\'s Javascript library on the client',
  version: '1.0.0',
  git: 'https://github.com/grovelabs/meteor-spark.js'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('grove:spark.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('grove:spark.js');
});
