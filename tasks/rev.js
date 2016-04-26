module.exports = function (grunt) {

grunt.config('rev', {
dist: {
files: {
  src: [
    '<%= appConfig.distDir %>/scripts/{,*/}*.js',
    '<%= appConfig.distDir %>/styles/{,*/}*.css',
    '<%= appConfig.distDir %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
    '/styles/fonts/{,*/}*.*',
    'bower_components/loot-css/img/{,*/}*.*',
    'bower_components/loot-css/dist/fonts/{,*/}*.*'
  ]
}
}
});

};
