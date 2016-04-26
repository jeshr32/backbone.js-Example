var mountFolder = function (connect, dir) {
 return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

 grunt.config('connect', {
   options: {
     port: grunt.option('port') || '<%= appConfig.serverPort %>',
     hostname: '<%= appConfig.hostname %>'
   },
   livereload: {
     options: {
       middleware: function (connect) {
         return [
           require('connect-livereload')({port: 35729}),
           mountFolder(connect, '.tmp'),
           mountFolder(connect, 'app')
         ];
       }
     }
   },
   dist: {
     options: {
       middleware: function (connect) {
         return [
           mountFolder(connect, 'dist')
         ];
       }
     }
   }
 });
};
