
module.exports = function (grunt) {

 grunt.config('copy', {
   dist: {
     files: [
       {
         expand: true,
         dot: true,
         cwd: '<%= appConfig.appDir %>',
         dest: '<%= appConfig.distDir %>',
         src: [
           '*.{ico,txt}',
           'images/{,*/}*.{webp,gif}',
           'styles/fonts/{,*/}*.*'
         ]
       }, {
         expand: true,
         dot: true,
         flatten: true,
         cwd: '<%= appConfig.appDir %>',
         dest: '<%= appConfig.distDir %>/fonts',
         src: [
           'bower_components/loot-css/dist/assets/fonts/{,*/}*.*'
         ]
       }, {
         expand: true,
         dot: true,
         flatten: true,
         cwd: '<%= appConfig.appDir %>',
         dest: '<%= appConfig.distDir %>/img',
         src: [
           'bower_components/loot-css/dist/assets/img/{,*/}*.*'
         ]
       }
     ]
   },
   server: {
     files: [
       {
         expand: true,
         dot: true,
         flatten: true,
         cwd: '<%= appConfig.appDir %>',
         dest: '.tmp/fonts',
         src: [
           'bower_components/loot-css/dist/assets/fonts/{,*/}*.*'
         ]
       },
       {
         expand: true,
         dot: true,
         flatten: true,
         cwd: '<%= appConfig.appDir %>',
         dest: '.tmp/img',
         src: [
           'bower_components/loot-css/dist/assets/img/{,*/}*.*'
         ]
       }
     ]
   }
 });


};
