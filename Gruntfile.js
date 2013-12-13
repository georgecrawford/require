module.exports = function(grunt) {

	var requirejs = require("requirejs"),
	  exec = require("child_process").exec,
	  fatal = grunt.fail.fatal,
	  log = grunt.log,
	  verbose = grunt.verbose,

	  // Your r.js build configuration
	  buildConfigMain = grunt.file.readJSON("build.json");

	// Build static assets using r.js
	grunt.registerTask(
		"build",
		"Run the r.js build script",
		function() {
			var done = this.async();
			log.writeln("Running build...");
			requirejs.optimize(buildConfigMain, function( output ) {
				log.writeln( output );
				log.ok("Main build complete.");
				done();
			}, function( err ) {
				fatal( "Main build failure: " + err );
			});
		}
	);
};