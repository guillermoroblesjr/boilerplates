module.exports = function(grunt) {

  // Initialize config.
  grunt.initConfig({
    pkg: require('./package.json')
  });

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  // Register alias tasks.
  grunt.registerTask('dev',
    'Start a live-reloading dev webserver on localhost.',
    [ 
      'jshint', 
      'clean', 
      'copy', 
      'coverage',
      'connect:dev',
      'watch'
    ]);

  grunt.registerTask('default', ['dev']);

};
