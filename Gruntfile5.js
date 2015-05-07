module.exports = function (grunt)
{
     grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
           options: {
               seperator: "\n\n"
       },
       dist: {
              src: ['css/css_1.css','css/css_43.css','css/css_2.css','css/css_3.css','css/css_4.css', 'css/css_4.css','css/css_66.css'],
              dest: 'bin/<%= pkg.name %>.css'
          }
    }
});

grunt.loadNpmTasks('grunt-contrib-concat');

//tasks
grunt.registerTask('default', ['concat']);
}