Package.describe({
  name: 'csillag:find-from-publication',
  version: '0.1.1',
  summary: 'Enable finding all documents that have been published by a given publication',
  git: 'https://github.com/go-e/find-from-publication.git'
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@1.0');
  api.use('underscore');
  api.addFiles('find-from-publication.js', ['client', 'server']);
  api.export('FindFromPublication', 'server');
});

Package.onTest(function (api) {
  api.use(['tinytest', 'csillag:find-from-publication', 'underscore']);
  api.addFiles('find-from-publication_tests.js', 'server');
});
