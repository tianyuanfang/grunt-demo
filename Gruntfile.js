/*
module.exports = function (grunt) {
  grunt.initConfig({
    mocha: {
      test: {
        src: ['test/index.html'],
      },
      options: {
        run: true,
        reporter: 'Dot'
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('default', ['mocha']);
};
*/

module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false          
        },
     files: {
            src: './index.html',
          dest: 'dist/index.html'
          
   }
 }
});

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['htmlmin']);
};

