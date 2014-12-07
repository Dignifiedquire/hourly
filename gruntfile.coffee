module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  grunt.initConfig
    '6to5':
      options:
        sourceMap: yes
      dist:
        files:
          'dist/app.js': 'lib/app.js'

    'download-atom-shell':
      version: '0.19.5'
      outputDir: './atom-shell'
      rebuild: yes

    browserify:
      dist:
        options:
          transform: ['6to5-browserify']
        files:
          'dist/app.js': ['lib/app.js']

    less:
      all:
        options:
          paths: [
            'node_modules/bootstrap/less'
            'node_modules/font-awesome/less'
          ]
        files:
          'dist/app.css': 'styles/app.less'


    flow:
      options:
        style: 'color'
      files: {}

    watch:
      js:
        options:
          livereload: yes
        files: 'lib/**/*.js'
        tasks: ['flow', 'browserify']
      css:
        options:
          livereload: yes
        files: 'styles/**/*.less'
        tasks: ['less']


  grunt.registerTask 'build', ['flow', 'browserify', 'less']

  grunt.registerTask 'default', ['build', 'watch']
