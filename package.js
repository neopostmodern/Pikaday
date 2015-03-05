Package.describe({
	summary: "Pikaday JavaScript Datepicker for Meteor — lightweight, no dependencies, modular CSS",
  	version: "1.0.0",
		name: "neopostmodern:pikaday",
  	git: "https://github.com/neopostmodern/Pikaday.git"
});

Package.on_use(function (api) {
 	api.versionsFrom("0.9.0");
	api.use('jquery', 'client');
	api.use('momentjs:moment', 'client');

	api.add_files('client/pikaday.css', 'client');
	api.add_files([
		'client/pikaday.js',
		'client/export-pikaday.js'
		], 'client');

  	api.export('Pikaday', 'client');
});
