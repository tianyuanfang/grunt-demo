module.exports=function(grunt){
  grunt.initConfig({
    cssmin: {  
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1      
        },
    target: {
    files: {
          'rectangle.css': ['rectangle.css']
   }
             
  }
        }   
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
 
  grunt.registerTask('default', ['cssmin']);
}
