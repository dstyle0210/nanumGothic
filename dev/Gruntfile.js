module.exports = function(grunt) {
  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  less: {
		  	nanumGothic: {
				files: {
					"nanumGothic.css": ["less/nanumGothic.less"]
				}
			},
			nanumGothicwebfont: {
				files: {
					"nanumGothic-webfont.css": ["less/nanumGothic-webfont.less"]
				}
			}
		},
	    watch: {
			less:{
				files: ['less/*.less'],
				tasks: ['less']
			},
			copy:{
				files: ['*.html','*.css','*.js'],
				tasks: ['copy']
			}
		},
		copy:{
			main:{
				files:[
				{expand:true,src:["*.html"],dest:"../demo/"},
				{expand:true,src:["*.css"],dest:"../demo/"}, 
				{expand:true,src:["nanumGothic.js"],dest:"../demo/"},
				{expand:true,src:["fonts/*"],dest:"../demo/"}
				]
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