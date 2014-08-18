module.exports = function(grunt) {
  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  less: {
			dist: {
				files: {
					"nanumGothic.css": ["less/*.less"]
				}
			}
		},
	    watch: {
			less:{
				files: ['less/*.less'],
				tasks: ['less']
			}
		}
  });
  
  /*
	 * 작업에 필요한 모듈 로드하기 grunt.loadNpmTasks('grunt-ANY-PLUGIN');
	 */ 
	for (var key in grunt.file.readJSON("package.json").devDependencies) {
		if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
	}
 
  grunt.registerTask('default', ['watch']);
  
};