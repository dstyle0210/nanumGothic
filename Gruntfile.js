module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

		less: {
			dist: {
				files: {
					'wwwroot/css/*.css' : ['wwwroot/less/*.less'] 
				}
			}
		},
		
		watch: {
			less:{
				files: ['wwwroot/less/*.less'],
				tasks: ['less']
			}
		}
	});


	for (var key in grunt.file.readJSON("package.json").devDependencies) {
		if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
	}

	// Default task(s).
	grunt.registerTask('default', ['less', 'watch']);
};




