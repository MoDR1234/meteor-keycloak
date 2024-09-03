Npm.depends({
  "keycloak-connect": "25.0.4",
  'express-session': '1.17.1'
});

Package.describe({
  name: 'modr1234:keycloak-oauth',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'https://github.com/modr1234/meteor-keycloak.git',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('2.2.4');
  api.use('ecmascript');
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('keycloak-server.js', ['server']);
  api.addFiles('keycloak-client.js', ['client']);

  api.export('MeteorKeycloak');

});
