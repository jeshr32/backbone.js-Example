
module.exports = function (grunt) {

 grunt.config('cssmin', {
   dist: {
     files: {
       '<%= appConfig.distDir %>/styles/main.css': [
         '.tmp/styles/{,*/}*.css',
         '<%= appConfig.appDir %>/styles/{,*/}*.css'
       ]
     }
   }
 });
};
