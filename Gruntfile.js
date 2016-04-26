
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var appConfig = {
      livereloadPort: 35729,
      serverPort: 9000,
      hostname: '0.0.0.0',
      appDir: 'app',
      distDir: 'dist'
    };

    grunt.initConfig({
      appConfig: appConfig,
      clean: {
        dist: ['.tmp', '<%= appConfig.distDir %>'],
        server: '.tmp'
      },
      open: {
        server: {
          path: 'http://localhost:<%= connect.options.port %>'
        }
      }
    });

      grunt.loadTasks('tasks');


      grunt.registerTask('createDefaultTemplate', function () {
      grunt.file.write('.tmp/scripts/templates.js', 'this.JST = this.JST || {};');
    });

      grunt.registerTask('server', function (target) {
          if (target === 'dist') {
            return grunt.task.run(['build', 'open:server', 'connect:dist:keepalive']);
          }



    grunt.task.run([
      'clean:server',
      'createDefaultTemplate',
      'jst',
      'copy:server',
      'connect:livereload',
      'open:server',
      'watch'
      ]);
    });

    grunt.registerTask('build', [
      'clean:dist',
      'createDefaultTemplate',
      'jst',
      'useminPrepare',
      'htmlmin',
      'concat',
      'cssmin',
      'uglify',
      'copy:dist',
      'rev',
      'usemin'
    ]);
    
   grunt.registerTask('default', [
      'build'
    ]);

  };
