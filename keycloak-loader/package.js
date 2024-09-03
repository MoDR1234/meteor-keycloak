Package.describe({
    name: 'modr1234:keycloak-loader',
    version: '0.0.3',
    // Brief, one-line summary of the package.
    summary: 'Loads the keycloak.js from the Keycloak Server and creates an instance',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/modr1234/meteor-keycloak.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('2.2.4');
    api.use('ecmascript');
    api.use('service-configuration', ['client']);
    api.use('modr1234:keycloak-oauth@0.0.3', ['client'])
    api.use('modr1234:accounts-keycloak@0.0.3', ['client'])
    api.imply('modr1234:accounts-keycloak@0.0.3', ['client'])
    api.addFiles('keycloak-loader.js', ['client']);
});