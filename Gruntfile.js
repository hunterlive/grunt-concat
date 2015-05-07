module.exports = function (grunt)
{
     grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
           options: {
               seperator: "\n\n"
       },
       dist: {
              src: ['js/fitimage.js', 'js/flexslider.js'],
              dest: 'bin/<%= pkg.name %>.js'
          }
    }
});

grunt.loadNpmTasks('grunt-contrib-concat');

//tasks
grunt.registerTask('default', ['concat']);
}